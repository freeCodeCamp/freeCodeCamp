const debug = require('debug')('fcc:server:datasources');
const dsLocal = require('./datasources.production.js');

const ds = {
  ...dsLocal
};
// use [MailHog](https://github.com/mailhog/MailHog) if no SES keys are found
if (!process.env.SES_ID) {
  ds.mail = {
    connector: 'mail',
    transport: {
      type: 'smtp',
      host: process.env.MAILHOG_HOST || 'localhost',
      secure: false,
      port: 1025,
      tls: {
        rejectUnauthorized: false
      }
    },
    auth: {
      user: 'test',
      pass: 'test'
    }
  };
  debug(`using MailHog server on port ${ds.mail.transport.port}`);
} else {
  debug('using AWS SES to deliver emails');
}

module.exports = ds;
