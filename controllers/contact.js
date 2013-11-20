exports.getContact = function(req, res) {
  res.render('contact', {
    title: 'Contact',
    user: req.user
  });
};

exports.postContact = function(req, res) {

};