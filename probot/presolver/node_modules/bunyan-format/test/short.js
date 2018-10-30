'use strict';

var bunyan = require('bunyan')
  , bformat = require('../')  
  , test = require('tap').test
  ;

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

function removeTime(s) {
  return s.substring(29);
}

test('\nshort mode', function (t) {
  var formatOut = bformat({ outputMode: 'short'}, { write: onwrite })
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
      writes.map(removeTime)
    , [ ' INFO\u001b[39m app: \u001b[36mstarting up\u001b[39m\n',
        'DEBUG\u001b[39m app:\n\u001b[90m  \u001b[36mthings are heating up { temperature: 80,\n    status: { started: \'yes\', overheated: \'no\' } }\u001b[39m\n\u001b[39m',
        ' WARN\u001b[39m app: \u001b[36mgetting a bit hot { temperature: 120 }\u001b[39m\n',
        'ERROR\u001b[39m app: \u001b[36mOOOOHHH it burns! [Error: temperature: 200]\u001b[39m\n',
        'FATAL\u001b[39m app: \u001b[36mI died! Do you know what that means???\u001b[39m\n' ]
    , 'writes colorized messages in "short" format'
  )
  t.end();
})
