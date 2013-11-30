var config = require('../config/config.json');
var sendgrid  = require('sendgrid')(config.sendgrid.user, config.sendgrid.password);

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

  sendgrid.send({
    to:       'example@example.com',
    from:     'other@example.com',
    subject:  'Hello World',
    text:     'My first email through SendGrid.'
  }, function(err, json) {
    if (err) { return console.error(err); }
    console.log(json);
  });
};