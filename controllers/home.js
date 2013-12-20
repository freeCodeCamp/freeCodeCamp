/**
 * GET /
 * Home page
 */
exports.index = function(req, res) {
  res.render('index', {
    user: req.user,
    title: 'Home'
  });
};
