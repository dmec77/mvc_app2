// this is telling the app we will need to use express to do any thing on this page

const express = require('express');

// this is telling the app that when you see the word "router" below, to know that I am using express to do my routing
const router = express.Router();


// this is telling the app that when a route is made on a URL that has /{whatever word is here}, then we need to grab info from the file in our tree that is inside the controllers folder within the user folder

router.get('/', (req, res) => {
  res.send( './home.ejs');
})

// router.use('/users', require('./controllers/users'));

// router.use('/', require('/home'));

router.use('/recipes', require('./controllers/recipes'));

// router.use('/', require('./controllers/dashboard'));


// this is telling the app that we need to export these comands so they can be used throught the app
module.exports = router;
