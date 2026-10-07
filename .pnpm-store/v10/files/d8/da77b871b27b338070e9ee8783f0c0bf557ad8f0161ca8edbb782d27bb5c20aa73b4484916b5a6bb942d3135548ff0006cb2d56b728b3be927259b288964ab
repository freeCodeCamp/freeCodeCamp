# Path-to-RegExp

Turn an Express-style path string such as `/user/:name` into a regular expression.

**Note:** This is a legacy branch. You should upgrade to `1.x`.

## Usage

```javascript
var pathToRegexp = require('path-to-regexp');
```

### pathToRegexp(path, keys, options)

 - **path** A string in the express format, an array of such strings, or a regular expression
 - **keys** An array to be populated with the keys present in the url.  Once the function completes, this will be an array of strings.
 - **options**
   - **options.sensitive** Defaults to false, set this to true to make routes case sensitive
   - **options.strict** Defaults to false, set this to true to make the trailing slash matter.
   - **options.end** Defaults to true, set this to false to only match the prefix of the URL.

```javascript
var keys = [];
var exp = pathToRegexp('/foo/:bar', keys);
//keys = ['bar']
//exp = /^\/foo\/(?:([^\/]+?))\/?$/i
```

## Live Demo

You can see a live demo of this library in use at [express-route-tester](http://forbeslindesay.github.com/express-route-tester/).

## License

  MIT
