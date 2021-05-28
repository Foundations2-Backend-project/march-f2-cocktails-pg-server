/* eslint-disable no-console */
import client from '../lib/client.js';
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
      cocktails.drinks.map(cocktail => {
        return client.query(`
        INSERT INTO favorites (drink_id, name, category, alcohol_present, glass, instructions, image, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)
        `,
        [cocktail.idDrink, cocktail.strDrink, cocktail.strCategory, cocktail.strAlcoholic, cocktail.strInstructions, cocktail.strGlass, cocktail.strDrinkThumb, cocktail.strIngredient1, cocktail.strIngredient2, cocktail.strIngredient3, cocktail.strIngredient4, cocktail.strIngredient5, cocktail.strIngredient6, cocktail.strIngredient7, cocktail.strIngredient8, cocktail.strIngredient9, cocktail.strIngredient10, cocktail.strIngredient11, cocktail.strIngredient12, cocktail.strIngredient13, cocktail.strIngredient14, cocktail.strIngredient15, user.id]
      
        );
      }
      )
    );
  }
    
  
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}

