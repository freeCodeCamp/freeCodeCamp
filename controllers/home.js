var message =
  'Learn to Code JavaScript and get a Coding Job by Helping Nonprofits';

exports.index = function(req, res, next) {
  if (req.user && !req.user.profile.picture) {
    req.user.profile.picture =
      'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png';

    req.user.save(function(err) {
      if (err) { return next(err); }
      res.render('home', { title: message });
    });
  } else {
    res.render('home', { title: message });
  }
};
