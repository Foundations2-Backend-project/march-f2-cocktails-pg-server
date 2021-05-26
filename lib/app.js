/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import client from './client.js';
import ensureAuth from './auth/ensure-auth.js';
import createAuthRoutes from './auth/create-auth-routes.js';
import { formatCocktails, formatCocktailDetail } from './munge-utils.js';
import request from 'superagent';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

const authRoutes = createAuthRoutes();

// setup authentication routes to give user an auth token
// creates a /api/auth/signin and a /api/auth/signup POST route. 
// each requires a POST body with a .email and a .password and .name
app.use('/api/auth', authRoutes);

// heartbeat route
app.get('/', (req, res) => {
  res.send('Your new favorite cocktail app');
});

// everything that starts with "/api" below here requires an auth token!
// In theory, you could move "public" routes above this line
app.use('/api', ensureAuth);

// API routes:


app.get('/api/me/favorites', async (req, res) => {

  try {
    const data = await client.query(`
    SELECT id, name, category, alcohol_present as "alcoholPresent", glass, instructions, image, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15
    FROM favorites
    WHERE user_id = $1;
    `, [req.userId]);

    res.json(data.rows);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/cocktails/:id/favorites', async (req, res) => {

  try {
    const data = await client.query(`
    SELECT id, name, category, alcohol_present as "alcoholPresent", glass, instructions, image, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, user_id as "userId", u.name as "userName"
    FROM favorites f
    JOIN users u
    ON f.user_id = u.id
    WHERE id = $1;
    `, [req.params.id]);
  

    res.json(data.rows[0] || null);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/favorites', async (req, res) => {

  try {
    const favorite = req.body;

    console.log(req.userId);
    const data = await client.query(`
    INSERT INTO favorites (category, alcohol_present, glass, instructions, image, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
    RETURNING id, category, alcohol_present as "alcoholPresent", glass, instructions, image, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, user_id as "userId";
    `, [favorite.category, favorite.alcoholPresent, favorite.glass, favorite.instructions, favorite.image, favorite.ingredient1, favorite.ingredient2, favorite.ingredient3, favorite.ingredient4, favorite.ingredient5, favorite.ingredient6, favorite.ingredient7, favorite.ingredient8, favorite.ingredient9, favorite.ingredient10, favorite.ingredient11, favorite.ingredient12, favorite.ingredient13, favorite.ingredient14, favorite.ingredient15, req.userId]);

    res.json(data.rows[0]);
  }

  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/favorites/:id', async (req, res) => {
  try {
    const data = await client.query(`
    DELETE FROM favorites
    WHERE id = $1
    AND user_id = $2
    RETURNING id, category, alcohol_present as "alcoholPresent", glass, instructions, image, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, user_id as "userId";
    `, [req.params.id, req.userId]);

    res.json(data.rows[0]);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/cocktails/:search', async (req, res) => {
  // use SQL query to get data...
  try {
    const response = await request.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.COCKTAIL_API_KEY}/search.php?s=${req.query.search}`);
    // .query({ api_key: process.env.COCKTAIL_API_KEY })
    // .query({ query: req.query.search });
    
    const cocktails = formatCocktails(response.body);

    res.json(cocktails);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });  
  }
});

app.get('api/cocktails/:id', async (req, res) => {
  try{

    const response = await request.get(`https://www.thecocktaildb.com/api/json/v2/${req.params.id}`)
      .query({ api_key: process.env.COCKTAIL_API_KEY });

    const cocktails = formatCocktailDetail(response.body);

    res.json(cocktails);

  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default app;