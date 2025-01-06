module.exports = function (app) {
  var router = app.loopback.Router();
  router.get('/wiki/*', showForum);

  app.use(router);

  function showForum(req, res) {
    res.redirect('http://forum.freecodecamp.org/');
  }
};
