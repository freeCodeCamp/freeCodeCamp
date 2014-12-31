var nodemailer = require('nodemailer'),
    debug = require('debug')('freecc:cntr:contact'),
    secrets = require('../config/secrets');

var transporter = nodemailer.createTransport({
  service: 'Mandrill',
  auth: {
    user: secrets.mandrill.user,
    pass: secrets.mandrill.password
  }
});

/**
 * GET /contact
 * Contact form page.
 */

exports.getContact = function(req, res) {
  res.render('contact', {
    title: 'Free Code Work for Nonprofits Project Submission Page'
  });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */

exports.postContact = function(req, res) {
  req.assert('name', 'Name cannot be blank').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('message', 'Message cannot be blank').notEmpty();

  if (req.validationErrors()) {
    req.flash('errors', errors);
    return res.redirect('/nonprofits');
  }

  var mailOptions = {
    to: 'team@freecodecamp.com',
    name: req.body.name,
    from: req.body.email,
    subject: 'CodeNonprofit Project Idea from ' + req.body.name,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(err) {
    if (err) {
      req.flash('errors', { msg: err.message });
      return res.redirect('/nonprofits');
    }
    req.flash('success', { msg: 'Email has been sent successfully!' });
    res.redirect('/nonprofits');
  });
};
