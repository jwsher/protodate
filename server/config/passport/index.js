var config = require('../environment');
var passport = require('passport') , FacebookStrategy = require('passport-facebook').Strategy;

module.exports=function() {

  var module = {}

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  passport.use(new FacebookStrategy({
    clientID: config.facebook.appid,
    clientSecret: config.facebook.secret,
    callbackURL: "http://" + config.facebook.hostname + "/auth/facebook/callback",
    enableProof: false,
    profileFields: ['email', 'id', 'displayName'],
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    var auth = {
    id: profile.id,
    fbid: profile.id,
    email: profile.emails[0].value,
    displayName: profile.displayName
      };
    return done(undefined, auth);
    }));

  return passport;

}
