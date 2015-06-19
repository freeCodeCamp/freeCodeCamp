var secrets = require('../config/secrets');

module.exports = {
  db: {
    connector: 'mongodb',
    timeout: 10000,
    url: process.env.MONGOHQ_URL
  },
  mail: {
    connector: 'mail',
    transports: [{
      type: 'smtp',
      service: 'Mandrill',
      auth: {
        user: secrets.mandrill.user,
        pass: secrets.mandrill.password
      }
    }]
  }
};
