const passport = require("passport");
const localStrategy = require("./localStrategy");
const { User } = require("../models");

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// user object attaches to the request as req.user
passport.deserializeUser((userID, done) => {
  User.findById(userID, (err, user) => {
    done(err, user);
  });
});
//  Use Strategies
passport.use(localStrategy);
module.exports = passport;
