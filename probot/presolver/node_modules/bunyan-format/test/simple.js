'use strict';

var bunyan = require('bunyan')
  , bformat = require('../')  
  , test = require('tap').test
  ;

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

test('\nsimple mode', function (t) {
  var formatOut = bformat({ outputMode: 'simple'}, { write: onwrite })
  var log = bunyan.createLogger({ name: 'app', stream: formatOut, level: 'debug' } );

  var writes = [];
  function onwrite (c) { 
    process.stdout.write(c)
    writes.push(c) 
  }
  
  log.info('starting up');
  log.debug('things are heating up', { temperature: 80, status: { started: 'yes', overheated: 'no' } });
  log.warn('getting a bit hot', { temperature: 120 });
  log.error('OOOOHHH it burns!', new Error('temperature: 200'));
  log.fatal('I died! Do you know what that means???');

  t.deepEqual(
      writes
    , [ 'INFO - starting up\n',
        'DEBUG - things are heating up { temperature: 80,\n  status: { started: \'yes\', overheated: \'no\' } }\n',
        'WARN - getting a bit hot { temperature: 120 }\n',
        'ERROR - OOOOHHH it burns! [Error: temperature: 200]\n',
        'FATAL - I died! Do you know what that means???\n' ]
    , 'writes colorized messages in "simple" format'
  )
  t.end();
})
