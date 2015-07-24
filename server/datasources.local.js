var secrets = require('../config/secrets');

module.exports = {
  db: {
    connector: 'mongodb',
    connectionTimeout: 5000,
    url: secrets.db
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
