//You might be able to move this to server/boot/passport
//and wrap it all in a module.exports = function (app) {
//and use var User = app.models.User

var User = app.models.User;

module.exports = function(app) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
