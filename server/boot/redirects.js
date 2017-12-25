module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/nonprofit-project-instructions', function(req, res) {
    res.redirect(
      301,
      'http://forum.freecodecamp.org/t/'
      + 'how-free-code-camps-nonprofits-projects-work/19547'
    );
  });

  router.get('/agile', function(req, res) {
    res.redirect(301, '/pmi-acp-agile-project-managers');
  });

  router.get('/privacy', function(req, res) {
    res.redirect(
      301,
      'http://forum.freecodecamp.org/t/free-code-camp-privacy-policy/19545'
    );
  });

  router.get('/learn-to-code', function(req, res) {
    res.redirect(301, '/map');
  });

  router.get('/field-guide/*', function(req, res) {
    res.redirect(302, 'http://forum.freecodecamp.org');
  });

  app.use(router);
};
