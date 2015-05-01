/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Learn to Code JavaScript and get a Coding Job by Helping Nonprofits'
  });
};
