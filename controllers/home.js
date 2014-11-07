/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  if (req.user) {
      if (req.user.challengesCompleted.length > 0) {
        nextChallenge = Math.max.apply(Math, req.user.challengesCompleted) + 1;
        res.redirect("challenges/" + nextChallenge);
      } else {
        res.redirect("challenges/0");
      }
  } else {
      res.render('home', {
        title: 'Home'
      });
  }
};