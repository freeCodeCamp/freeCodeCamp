/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  if (req.user) {
    res.redirect('/learn-to-code')
  } else {
    res.render('home', {
      title: 'Learn to Code and Become a Software Engineer'
    });
  }
};
