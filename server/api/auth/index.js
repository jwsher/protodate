
var express = require('express');

module.exports = function(passport,env,router) {
  var router = express.Router();
  router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}));
  router.get('/facebook/callback',
    passport.authenticate('facebook', {successRedirect: '/date', failureRedirect: '/'}),
    function (req, res) {
      // Successful authentication, redirect home.
      console.log("Auth Success", err)
      res.redirect('/');
    },
    function (err) {
      console.log("Error", err)
    })
  return router;
}
