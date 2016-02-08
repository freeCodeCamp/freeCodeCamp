module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/nonprofit-project-instructions', function(req, res) {
    res.redirect(
      301,
      '//github.com/FreeCodeCamp/freecodecamp/wiki/' +
        "How-Free-Code-Camp's-Nonprofit-Projects-work"
    );
  });

  router.get('/agile', function(req, res) {
    res.redirect(301, '/pmi-acp-agile-project-managers');
  });

  router.get('/wiki', function(req, res) {
    res.redirect(301, '//github.com/freecodecamp/freecodecamp/wiki');
  });

  router.get('/privacy', function(req, res) {
    res.redirect(
      301,
      '//github.com/FreeCodeCamp/freecodecamp/wiki/' +
        "Free-Code-Camp's-Privacy-Policy"
    );
  });

  router.get('/learn-to-code', function(req, res) {
    res.redirect(301, '/map');
  });

  router.get('/field-guide/*', function(req, res) {
    res.redirect(302, '//github.com/freecodecamp/freecodecamp/wiki');
  });

  router.get('/about', function(req, res) {
    res.redirect(301, '/map');
  });

  app.use(router);
};
