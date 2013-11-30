var config = require('../config/config.json');
var sendgrid  = require('sendgrid')(config.sendgrid.user, config.sendgrid.password);

exports.getContact = function(req, res) {
  res.render('contact', {
    title: 'Contact',
    user: req.user,
    success: req.flash('success'),
    error: req.flash('error')
  });
};

exports.postContact = function(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var body = req.body.contactBody;

  var sendTo = 'sakhat@gmail.com';
  var subject = 'API Example | Contact Form';

  sendgrid.send({
    to:       sendTo,
    from:     email,
    subject:  subject,
    text:     body
  }, function(err, json) {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/contact');
    }
    req.flash('success', 'Email has been sent successfully!');
    res.redirect('/contact');
  });
};