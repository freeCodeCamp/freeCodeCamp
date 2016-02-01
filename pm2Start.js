require('dotenv').load();
var pm2 = require('pm2');
var nodemailer = require('nodemailer');
var moment = require('moment-timezone');
var _ = require('lodash');

var instances = process.env.INSTANCES || 1;
var serverName = process.env.SERVER_NAME || 'server';
var maxMemory = process.env.MAX_MEMORY || '390M';
var transportOptions = {
  type: 'smtp',
  service: 'Mandrill',
  auth: {
    user: process.env.MANDRILL_USER || false,
    pass: process.env.MANDRILL_PASSWORD
  }
};

var mailReceiver = process.env.MAIL_RECEIVER || false;

pm2.connect(function() {
  pm2.start({
    name: serverName,
    script: 'server/production-start.js',
    'exec_mode': 'cluster',
    instances: instances,
    'max_memory_restart': maxMemory,
    'NODE_ENV': 'production'
  }, function() {
    console.log(
      'pm2 started %s with %s instances at %s max memory',
      serverName,
      instances,
      maxMemory
    );
    pm2.disconnect();
  });
});


if (transportOptions.auth.user && mailReceiver) {
  console.log('setting up mailer');
  var transporter = nodemailer.createTransport(transportOptions);
  var compiled = _.template(
    'An error has occurred on server ' +
    '<% name %>\n' +
    'Stack Trace:\n\n\n<%= stack %>\n\n\n' +
    'Context:\n\n<%= text %>'
  );

  pm2.launchBus(function(err, bus) {
    if (err) {
      return console.error(err);
    }
    console.log('event bus connected');

    bus.on('process:exception', function(data) {
      var text;
      var stack;
      var name;
      try {
        data.date = moment(data.at || new Date())
          .tz('America/Los_Angeles')
          .format('MMMM Do YYYY, h:mm:ss a z');

        text = JSON.stringify(data, null, 2);
        stack = data.data.stack;
        name = data.process.name;
      } catch (e) {
        return e;
      }

      transporter.sendMail({
        to: mailReceiver,
        from: 'team@freecodecamp.com',
        subject: 'Server exception',
        text: compiled({ name: name, text: text, stack: stack })
      });
    });
  });
}
