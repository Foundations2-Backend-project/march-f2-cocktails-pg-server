/* eslint-disable no-console */
import client from '../lib/client.js';
// import our seed data:
import users from './users.js';
import { cocktails } from '../data/cocktail-model.js';

run();

async function run() {

  try {

    const data = await Promise.all(
      users.map(user => {
        return client.query(`
          INSERT INTO users (name, email, hash)
          VALUES ($1, $2, $3)
          RETURNING *;
        `,
        [user.name, user.email, user.password]);
      })
    );
    
    const user = data[0].rows[0];

    await Promise.all(
      cocktails.map(cocktail => {
        return client.query(`
        INSERT INTO favorites (name, category, alcohol_present, glass, instructions, image, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
        `,
        [cocktail.name, cocktail.category, cocktail.alcoholPresent, cocktail.glass, cocktail.instructions, cocktail.image, cocktail.ingredient1, cocktail.ingredient2, cocktail.ingredient3, cocktail.ingredient4, cocktail.ingredient5, cocktail.ingredient6, cocktail.ingredient7, cocktail.ingredient8, cocktail.ingredient9, cocktail.ingredient10, cocktail.ingredient11, cocktail.ingredient12, cocktail.ingredient13, cocktail.ingredient14, cocktail.ingredient15, user.id]);
      })
    );
    

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}