# bunyan-format [![build status](https://secure.travis-ci.org/thlorenz/bunyan-format.png)](http://travis-ci.org/thlorenz/bunyan-format)

Writable stream that formats bunyan records that are piped into it

```js
var bunyan = require('bunyan')
  , bformat = require('bunyan-format')  
  , formatOut = bformat({ outputMode: 'short' })
  ;

var log = bunyan.createLogger({ name: 'app', stream: formatOut, level: 'debug' } );

log.info('starting up');
log.debug('things are heating up', { temperature: 80, status: { started: 'yes', overheated: 'no' } });
log.warn('getting a bit hot', { temperature: 120 });
log.error('OOOOHHH it burns!', new Error('temperature: 200'));
log.fatal('I died! Do you know what that means???');
```

* Printing the level in String representation for Json objects

```js
var bunyan = require('bunyan')
  , bformat = require('../')
  , formatOut = bformat({ outputMode: 'bunyan', levelInString: true })
  ;
```

The output would use the string levels:

```
$ node example/json-string-level.js 
{"name":"app","hostname":"ubuntu","pid":28081,"level":"INFO","msg":"starting up","time":"2014-12-01T19:41:29.136Z","v":0}
{"name":"app","hostname":"ubuntu","pid":28081,"level":"DEBUG","msg":"things are heating up { temperature: 80,\n  status: { started: 'yes', overheated: 'no' } }","time":"2014-12-01T19:41:29.142Z","v":0}
{"name":"app","hostname":"ubuntu","pid":28081,"level":"WARN","msg":"getting a bit hot { temperature: 120 }","time":"2014-12-01T19:41:29.143Z","v":0}
{"name":"app","hostname":"ubuntu","pid":28081,"level":"ERROR","msg":"OOOOHHH it burns! [Error: temperature: 200]","time":"2014-12-01T19:41:29.144Z","v":0}
{"name":"app","hostname":"ubuntu","pid":28081,"level":"FATAL","msg":"I died! Do you know what that means???","time":"2014-12-01T19:41:29.144Z","v":0}
```

![demo](https://github.com/thlorenz/bunyan-format/raw/master/assets/bunyan-format-demo.gif)

## Installation

    npm install bunyan-format

## API

```
/**
 * Creates a writable stream that formats bunyan records written to it.
 * 
 * @name BunyanFormatWritable
 * @function
 * @param opts {Options} passed to bunyan format function
 *  - outputMode: short|long|simple|json|bunyan
 *  - color (true): toggles colors in output
 *  - colorFromLevel: allows overriding log level colors
 * @param out {Stream} (process.stdout) writable stream to write 
 * @return {WritableStream} that you can pipe bunyan output into
 */
```

## License

MIT
