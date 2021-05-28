/* eslint-disable no-console */
import client from '../lib/client.js';

run();

async function run() {

  try {

    await client.query(` 
      CREATE TABLE users (
        id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(512) NOT NULL,
        email VARCHAR(512) NOT NULL,
        hash VARCHAR(512) NOT NULL
      );
    
      CREATE TABLE favorites (
        id SERIAL PRIMARY KEY NOT NULL,
        drink_id TEXT NOT NULL,
        name VARCHAR(512) NOT NULL,
        category VARCHAR(128) NOT NULL,
        alcohol_present VARCHAR(512) NOT NULL,
        glass VARCHAR(512) NOT NULL,
        instructions VARCHAR(512) NOT NULL,
        image VARCHAR(512) NOT NULL,
        ingredient1 VARCHAR(512) NOT NULL,
        ingredient2 VARCHAR(512),
        ingredient3 VARCHAR(512),
        ingredient4 VARCHAR(512),
        ingredient5 VARCHAR(512),
        ingredient6 VARCHAR(512),
        ingredient7 VARCHAR(512),
        ingredient8 VARCHAR(512),
        ingredient9 VARCHAR(512),
        ingredient10 VARCHAR(512),
        ingredient11 VARCHAR(512),
        ingredient12 VARCHAR(512),
        ingredient13 VARCHAR(512),
        ingredient14 VARCHAR(512),
        ingredient15 VARCHAR(512),
        user_id INTEGER NOT NULL REFERENCES users(id)
      );
    `);

    console.log('create tables complete');
  }
  catch (err) {
    // problem? let's see the error...
    console.log(err);
  }
  finally {
    // success or failure, need to close the db connection
    client.end();
  }

}