# btoa-lite
![](http://img.shields.io/badge/stability-stable-orange.svg?style=flat)
![](http://img.shields.io/npm/v/btoa-lite.svg?style=flat)
![](http://img.shields.io/npm/dm/btoa-lite.svg?style=flat)
![](http://img.shields.io/npm/l/btoa-lite.svg?style=flat)

Smallest/simplest possible means of using btoa with both Node and browserify.

In the browser, encoding base64 strings is done using:

``` javascript
var encoded = btoa(decoded)
```

However in Node, it's done like so:

``` javascript
var encoded = new Buffer(decoded).toString('base64')
```

You can easily check if `Buffer` exists and switch between the approaches
accordingly, but using `Buffer` anywhere in your browser source will pull
in browserify's `Buffer` shim which is pretty hefty. This package uses
the `main` and `browser` fields in its `package.json` to perform this
check at build time and avoid pulling `Buffer` in unnecessarily.

## Usage

[![NPM](https://nodei.co/npm/btoa-lite.png)](https://nodei.co/npm/btoa-lite/)

### `encoded = btoa(decoded)`

Returns the base64-encoded value of a string.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/btoa-lite/blob/master/LICENSE.md) for details.
