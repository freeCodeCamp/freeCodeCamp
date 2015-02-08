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

module.exports = {
  /**
   * GET /contact
   * Contact form page.
   */

  getNonprofitsForm: function(req, res) {
    res.render('contact/nonprofits', {
      title: 'Free Code Work for Nonprofits Project Submission Page'
    });
  },

  /**
   * POST /contact
   * Send a contact form via Nodemailer.
   */

  postNonprofitsForm: function(req, res) {
    var mailOptions = {
      to: 'team@freecodecamp.com',
      name: req.body.name,
      from: req.body.email,
      subject: 'CodeNonprofit Project Idea from ' + req.body.name,
      text: req.body.message
    };

    transporter.sendMail(mailOptions, function (err) {
      if (err) {
        req.flash('errors', {msg: err.message});
        return res.redirect('/nonprofits');
      }
      req.flash('success', {msg: 'Email has been sent successfully!'});
      res.redirect('/nonprofits');
    });
  },

  getDoneWithFirst100Hours: function(req, res) {
    if (req.user.points >= 53) {
      res.render('contact/done-with-first-100-hours', {
        title: 'Congratulations on finishing the first 100 hours of Free Code Camp!'
      });
    } else {
      req.flash('errors', {msg: 'Hm... have you finished all the challenges?'});
      res.redirect('/');
    }
  },

  postDoneWithFirst100Hours: function(req, res) {
    var mailOptions = {
      to: 'team@freecodecamp.com',
      name: 'Completionist',
      from: req.body.email,
      subject: 'Camper at ' + req.body.email + ' has completed the first 100 hours',
      text: ''
    };

    transporter.sendMail(mailOptions, function (err) {
      if (err) {
        req.flash('errors', {msg: err.message});
        return res.redirect('/done-with-first-100-hours');
      }
      req.flash('success', {msg: 'Email has been sent successfully!'});
      res.redirect('/nonprofit-project-instructions');
    });
  }
};