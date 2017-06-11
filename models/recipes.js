const db = require('../config/database');

const Recipe = {};

//grabbing from data from the db by using the method(in this case) Select All from the recipes Table
//-***** NOW go look at the controller file

// Recipe
//   .findAll = () => db.any(`SELECT * FROM recipes;`);

Recipe
  .findByCat = () => db.any(`SELECT * FROM recipes WHERE category = $1
      `, category);


module.exports = Recipe;
