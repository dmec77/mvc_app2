// const bcrypt = require('bcrypt');

// const User = require('../../models/users');
//
// const controller = {};
//
// controller.new = (req, res) => {
//    res.render('users/new');
//  };
//
// controller.login = (req, res) => {
//   res.render('users/login');
// };
//
// controller.create = (req, res) => {
//   User.create(req.body.user)
//   .then(() => {
//     res.redirect('/users/login');
//   })
//   .catch((err) => {
//     res.send(err);
//   });
// };
//
// controller.process_login = (req, res) => {
//   User.findByEmail(req.body.user.email)
//   .then((user) => {
//     if (user) {
//       if (bcrypt.compareSync(req.body.user.password, user.password)) {
//         req.session.user = user;
//         req.session.isAuthenticated = true;
//         res.redirect('/');
//       } else {
//         res.redirect('/users/login');
//       }
//     } else {
//       res.redirect('/users/login');
//     }
//   })
//   .catch((err) => {
//     res.send(err);
//   });
// };
//
// module.exports = controller;
