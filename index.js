const express = require('express'),
const  app = express(),
const  bodyParser = require('body-parser'),
const  session = require('express-session'),
const  methodOverride = require('method-override'),
const  MongoStore = require('connect-mongo')(session),
const  port = process.env.PORT || 3000;

require('dotenv').config();

app.ser('view engine', ejs);

app.use(express.static('./public'));

appp.use(bodyParser.urlencoded({
  extended: true }));
app.use(bodyParser.json());

// app.use(metghodeOverride('_methode'));
//
// app.use(session({
//   secret: process.env.SECRET_KEY,
//   resave: false,
//   isAuthorized: false,
//   saveUninitialized: true,
//   store: new MongoStore({
//     url: process.env.MONGODB_URI || 'mongodb://localhost:27017/sessions',
//   }),
// }));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
