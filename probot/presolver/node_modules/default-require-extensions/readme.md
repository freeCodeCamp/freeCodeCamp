# default-require-extensions [![Build Status](https://travis-ci.org/jamestalmage/default-require-extensions.svg?branch=master)](https://travis-ci.org/jamestalmage/default-require-extensions)

> Node's default require extensions as a separate module

Handy for require extension authors that want reliable access to the default extension implementations.

By the time your extension is loaded, the default extension may have already been replaced. This provides extensions functionally identical to the default ones, which you know you can access reliably, no matter what extensions have been installed previously.

## Install

```
$ npm install --save default-require-extensions
```


## Usage

```js
const js = require('default-require-extensions/js');
const json = require('default-require-extensions/json');

require.extensions['.js'] = js;
require.extensions['.js'] = json;

```

*Note: * You would never actually do the above. Use these in your custom require extensions instead.  


## License

MIT © Node.js contributors, [James Talmage](http://github.com/jamestalmage)
