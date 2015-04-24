/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  if (req.user) {
    res.redirect('/map')
  } else {
    res.render('home', {
      title: 'Learn to Code JavaScript and get a Coding Job by Helping Nonprofits'
    });
  }
};
