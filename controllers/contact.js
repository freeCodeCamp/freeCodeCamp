exports.getContact = function(req, res) {
  res.render('contact', {
    title: 'Contact',
    user: req.user,
    messages: req.flash('messages')
  });
};

exports.postContact = function(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var body = req.body.contactBody;
};