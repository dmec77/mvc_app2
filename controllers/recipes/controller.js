const Recipe = require('../../models/recipes');
const controller = {};

// // this is telling the app that the constiable controller(taco).index(taco)[this is the name of the Fx](controller.index is the name of the Fx-doesnt apply to anything, but will be referenced in other files)
controller.index = (req, res) => {
  Recipe.findAll()
    .then((recipe_data) => {
      res.render('recipes/index', {
        //????*****????? this is saying that based on the data we are pulling above, we will use "recipe_data" to represent that data.

        //the name before the colon should match what will be replaced on th ejs file, and the "category" is what data was gathered to be displayed(so use "recipe."" in the place you want the info to change, and based on the FX above it will change to what ever "cat_data" Fx comes up with)
        recipe: recipe_data
      });
    })
    .catch(err => res.send(err));
};

controller.index = (req, res) => {
  Recipe.findAll()
    .then((category) => {
      res.render('./recipes/index', {
        category: cat_recipe
      });
    })
    .catch(err => res.send(err));
};

module.exports = controller;
