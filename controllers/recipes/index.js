//this is telling the app we will need to use express to do any thing on this page, which in this case will be something for the "recipes" table in our database

const express = require('express'),

// this is telling the app that when you see the word "router" below, to know that I am using express to do my routing, and in this instance is for anything in the "recipes" table
const router = express.Router(),

// this is telling the app that when I use the word controller in my code below, I am asking you to access the "Controller" folder in my file tree

const controller = require('./controllers');

// this is telling the app that when a request is made on ANY page ("/")then access this named Fx we created in the recipes/controller.js (inside the TOP Controllers Folder)

router.get('/', controller.index);

router.get('/category', controller.category);

module.exports = router;
