// // we create this variable so we can acces the bcrypt
//
// const bcrypt = require('bcrypt'),
//
// // we need to access the config/db file, and we will use db to refer to any data we get from there
//
//   db = require('../config/database'),
//
// //Models Folder convention is to have first letter Cap, and singular. This empty variable will
//
// const User = {};
//
// // The USER.FindByEmail is like a variable name, and we are going to put it through a function which we called "email", once it goes through this "email Fx" we need it to return from the DATABASE one or nothing.  The function it needs to do is to SELECT all from the users TABLE where the email is equal to what has been entered (referenced with $1).  The "email" after the $1 is just so we know what the result will return.  if we wanted the screen to say the persons first name
//
User
  .findByEmail = (email) => {
  return db.one(`
      SELECT * FROM users
      WHERE email = $1
  `, email);
};
// //implicit return********%%%%%%%%%%&&&&&&&########
// why a res.redirect vs res.render
//
User.create = (user) => {
  debugger;
  user.password = bcrypt.hashSync(user.password, 10);

  //return from the databse one "user" in this case

  return db.one(`
    INSERT INTO users
    (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `, [user.first_name, user.last_name, user.email, user.password]);
};
//
// User.findById = (user_id) => {
//   return db.manyOrNone(`
//       SELECT favorite_recipes.id, recipes.name FROM favorite_recipes
//       JOIN recipes
//       ON favorite_recipes.recipe_id = recipes.id
//       WHERE user_id = $1;
//   `, user_id);
// };
//
// User.saverecipe = (user, recipe) => {
//   return db.one(`
//     INSERT INTO favorite_recipes
//     (user_id, recipe_id)
//     VALUES
//     ($1, $2)
//     RETURNING *;`, [user, recipe]);
// };
//
// User.deleterecipe = (user, recipe) => {
//   return db.none(`
//     DELETE FROM favorite_recipes
//     WHERE user_id = $1
//     AND id = $2;`, [user, recipe]);
// };
//
// module.exports = User;
