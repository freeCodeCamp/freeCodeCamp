module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/nonprofit-project-instructions', function(req, res) {
    res.redirect(
      301,
      '/field-guide/how-do-free-code-camps-nonprofit-projects-work'
    );
  });

  router.get('/coding-bootcamp-cost-calculator', function(req, res) {
    res.redirect(
      301,
      '/field-guide/can-i-calculate-the-true-cost-of-a-bootcamp-with-a-coding-bootcamp-cost-calculator'
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

  router.get('/learn-to-code', function(req, res) {
    res.redirect(301, '/map');
  });

  router.get('/about', function(req, res) {
    res.redirect(301, '/map');
  });

  app.use(router);
};
