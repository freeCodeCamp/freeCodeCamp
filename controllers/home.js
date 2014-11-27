/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  if (req.user) {
      if (req.user.challengesCompleted.length > 0) {
          Object.values(req.user.challengesHash);
        nextChallenge = Math.max.apply(Math, req.user.challengesHash) + 1;
        res.redirect("challenges/" + nextChallenge);
      } else {
        res.redirect("challenges/0");
      }
  } else {
      res.render('home', {
        title: 'Learn to Code and Become a Software Engineer'
      });
  }
};