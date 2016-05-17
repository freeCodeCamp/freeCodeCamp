module.exports = function(app) {
  const router = app.loopback.Router();

  const redirectToReddit = (req, res) =>
    res.redirect('https://www.reddit.com/r/FreeCodeCamp/');

  router.get('/news', redirectToReddit);
  router.get('/news/:storyName', redirectToReddit);
  router.get('/stories/:storyName', redirectToReddit);

  app.use(router);
};
