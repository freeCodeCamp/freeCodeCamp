'use strict';

var bunyan = require('bunyan')
  , bformat = require('../')  
  , formatOut = bformat({ outputMode: 'long' })
  ;

var log = bunyan.createLogger({ name: 'app', stream: formatOut, level: 'debug' } );

log.info('starting up');
log.debug('things are heating up', { temperature: 80, status: { started: 'yes', overheated: 'no' } });
log.warn('getting a bit hot', { temperature: 120 });
log.error('OOOOHHH it burns!', new Error('temperature: 200'));
log.fatal('I died! Do you know what that means???');
