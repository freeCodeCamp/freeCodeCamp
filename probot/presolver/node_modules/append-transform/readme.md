# append-transform [![Build Status](https://travis-ci.org/jamestalmage/append-transform.svg?branch=master)](https://travis-ci.org/jamestalmage/append-transform) [![Coverage Status](https://coveralls.io/repos/jamestalmage/append-transform/badge.svg?branch=master&service=github)](https://coveralls.io/github/jamestalmage/append-transform?branch=master)

> Install a transform to `require.extensions` that always runs last, even if additional extensions are added later.

The [typical require extension](https://gist.github.com/jamestalmage/df922691475cff66c7e6) looks something like this:

```js
  var myTransform = require('my-transform');
  
  var oldExtension = require.extensions['.js'];
  require.extensions['.js'] = function (module, filename) {
    var oldCompile = module._compile;
    module._compile = function (code, filename) {
      code = myTransform(code);
      module._compile = oldCompile;
      module._compile(code, filename);
    };  
    oldExtension(module, filename);
  };
```

In **almost** all cases, that is sufficient and is the method that should be used (check out [`pirates`](https://www.npmjs.com/package/pirates) for an easy way to do it correctly). In **rare** cases you must ensure your transform remains the last one, even if other transforms are added later. For example, `nyc` uses this module to ensure its transform is applied last so it can capture the final source-map information, and ensure any language extensions it can't understand are already transpiled (ES2015 via `babel` for instance).

*WARNING:* You should be sure you  *actually* need this, as it takes control away from the user. Your transform remains the last one applied, even as users continue to add more transforms. This is potentially confusing. Coverage libraries like `nyc` (and `istanbul` on which it relies) have valid reasons for doing this, but you should prefer conventional transform installation via [`pirates`](https://www.npmjs.com/package/pirates).

References: 
 - [Detailed Breakdown of How Require Extensions Work](https://gist.github.com/jamestalmage/df922691475cff66c7e6)
 - The [test suite](https://github.com/jamestalmage/append-transform/blob/master/test/execution-order.js) provides a good overview of how this library manipulates the order in which transforms are applied.

## Install

```
$ npm install --save append-transform
```


## Usage

```js
var appendTransform = require('append-transform');
var myTransform = require('my-transform');

appendTransform(function (code, filename) {
  if (myTransform.shouldTransform(filename)) {
    code = myTransform.transform(code);
  }
  return code;
});
```

## API

### appendTransform(transformFn, [extension])

#### transformFn

Type: `function(code: string, filename: string)`  
*Required*

A callback that modifies the incoming `code` argument in some way, and returns the transformed result. `filename` is provided to filter which files the transform applies to. If a transform should not manipulate a particular file, just return `code` without modifying it. It is fairly common to avoid transforming files in `node_modules`. In that case you may want to use [`node-modules-regexp`](https://www.npmjs.com/package/node-modules-regexp) to help reliably detect `node_modules` paths and avoid transforming them.


#### extension

Type: `string`  
Default: `".js"`

The extension for the types of files this transform is capable of handling.

## License

MIT © [James Talmage](http://github.com/jamestalmage)
