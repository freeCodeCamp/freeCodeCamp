# load-script

Dynamic script loading.

## Installation

via component

```
$ component install eldargab/load-script
```

via npm

```
$ npm install load-script
```

## API
`load-script` appends a `script` node to the `<head>` element in the dom.

`require('load-script')` returns a function of the following interface:  `function(url[, opts][, cb]) {}`

### url
Any url that you would like to load.  May be absolute or relative.

### [, opts]
A map of options.  Here are the currently supported options:

* `async` - A boolean value used for `script.async`.  By default this is `true`.
* `attrs` - A map of attributes to set on the `script` node before appending it to the DOM.  By default this is empty.
* `charset` - A string value used for `script.charset`.  By default this is `utf8`.
* `text` - A string of text to append to the `script` node before it is appended to the DOM.  By default this is empty.
* `type` - A string used for `script.type`.  By default this is `text/javascript`.

### [, cb]
A callback function of the following interface: `function(err, script) {}` where `err` is an error if any occurred and `script` is the `script` node that was appended to the DOM.

## Example Usage

```javascript
var load = require('load-script')

load('foo.js', function (err, script) {
  if (err) {
    // print useful message
  }
  else {
    console.log(script.src);// Prints 'foo'.js'
    // use script
    // note that in IE8 and below loading error wouldn't be reported
  }
})
```

## License

MIT
