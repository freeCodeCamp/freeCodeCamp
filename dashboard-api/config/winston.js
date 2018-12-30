const winston = require('winston');

const log = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    })
  ]
});

module.exports = log;