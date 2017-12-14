const debug = require('debug')('fcc:server:datasources');
const dsLocal = require('./datasources.local');

// use [MailHog](https://github.com/mailhog/MailHog)
let mail = {
  connector: 'mail',
  Transport: {
    type: 'smtp',
    host: 'localhost',
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
// use AWS SES if defined
if (process.env.SES_ID) {
  debug('using AWS SES to deliver emails');
  mail = dsLocal.mail;
}
module.exports = { mail };
