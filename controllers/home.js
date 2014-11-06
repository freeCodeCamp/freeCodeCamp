/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  if (req.user) {
      res.redirect('challenges/a-one-minute-introduction-to-free-code-camp');
  } else {
      res.render('home', {
        title: 'Home'
      });
  }
};