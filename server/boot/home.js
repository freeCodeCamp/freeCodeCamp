module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/', index);

  function index(req, res) {
    if (req.user) {
      res.redirect('/learn-to-code');
    } else {
      res.render('home', {
        title: 'Learn to Code and Become a Software Engineer'
      });
    }
  }
  app.use(router);
};
