var secrets = require('../config/secrets');
var sendgrid  = require('sendgrid')(secrets.sendgrid.user, secrets.sendgrid.password);

/**
 * GET /contact
 * Contact form page
 */
exports.getContact = function(req, res) {
  res.render('contact', {
    title: 'Contact',
    user: req.user,
    success: req.flash('success'),
    error: req.flash('error')
  });
};

/**
 * POST /contact
 * Send a contact form message via SendGrid
 */
exports.postContact = function(req, res) {
  var from = req.body.email;
  var name = req.body.name;
  var body = req.body.contactBody;
  var sendTo = 'sakhat@gmail.com';
  var subject = 'API Example | Contact Form';

  var email = new sendgrid.Email({
    to: sendTo,
    from: from,
    subject: subject,
    text: body + '\n\n' + name
  });

  sendgrid.send(email, function(err) {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/contact');
    }
    req.flash('success', 'Email has been sent successfully!');
    res.redirect('/contact');
  });
};
