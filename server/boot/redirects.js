module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/nonprofit-project-instructions', function(req, res) {
    res.redirect(
      301,
      '/field-guide/how-do-free-code-camps-nonprofit-projects-work'
    );
  });

  router.get('/agile', function(req, res) {
    res.redirect(301, '/pmi-acp-agile-project-managers');
  });

  router.get('/privacy', function(req, res) {
    res.redirect(
      301, '/field-guide/what-is-the-free-code-camp-privacy-policy?'
    );
  });

  app.use(router);
};
