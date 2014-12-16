/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  if (req.user) {
      ch = req.user.challengesHash;
      if (req.user.challengesHash[0] > 0) {
          var max = Object.keys(ch).reduce(function(max,key){
              return (max === undefined || ch[key] > ch[max]) ? +key : max;
          });
          nextChallenge = max + 1;
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