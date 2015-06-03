module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/nonprofit-project-instructions', function(req, res) {
    res.redirect(
      301,
      '/field-guide/how-do-free-code-camp\'s-nonprofit-projects-work'
    );
  });

  router.get('/agile', function(req, res) {
    res.redirect(301, '/pmi-acp-agile-project-managers');
  });

  router.get('/live-pair-programming', function(req, res) {
    res.redirect(301, '/field-guide/live-stream-pair-programming-on-twitch.tv');
  });

  router.get('/install-screenhero', function(req, res) {
    res.redirect(301, '/field-guide/install-screenhero');
  });

  router.get('/guide-to-our-nonprofit-projects', function(req, res) {
    res.redirect(301, '/field-guide/a-guide-to-our-nonprofit-projects');
  });

  router.get('/chromebook', function(req, res) {
    res.redirect(301, '/field-guide/chromebook');
  });

  router.get('/deploy-a-website', function(req, res) {
    res.redirect(301, '/field-guide/deploy-a-website');
  });

  router.get('/gmail-shortcuts', function(req, res) {
    res.redirect(301, '/field-guide/gmail-shortcuts');
  });

  router.get('/nodeschool-challenges', function(req, res) {
    res.redirect(301, '/field-guide/nodeschool-challenges');
  });

  router.get('/privacy', function(req, res) {
    res.redirect(
      301, '/field-guide/what-is-the-free-code-camp-privacy-policy?'
    );
  });

  app.use(router);
};
