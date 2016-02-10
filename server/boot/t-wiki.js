module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/wiki', showWiki);

  app.use(router);

  function showWiki(req, res) {
    res.render('wiki/show', { title: 'Wiki | Free Code Camp' });
  }
};
