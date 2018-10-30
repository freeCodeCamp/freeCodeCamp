# debug-log [![Build Status](https://travis-ci.org/sindresorhus/debug-log.svg?branch=master)](https://travis-ci.org/sindresorhus/debug-log)

> Node.js 0.12 [`util.debuglog()`](http://nodejs.org/api/util.html#util_util_debuglog_section) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install --save debug-log
```


## Usage

```js
// example.js
var debugLog = require('debug-log')('foo');

debugLog('unicorns & rainbows');
```

```
$ node example.js

```

```
$ NODE_DEBUG=foo node example.js
FOO 3245: unicorns & rainbows
```


## API

See the [`util.debuglog()` docs](http://nodejs.org/api/util.html#util_util_debuglog_section).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
