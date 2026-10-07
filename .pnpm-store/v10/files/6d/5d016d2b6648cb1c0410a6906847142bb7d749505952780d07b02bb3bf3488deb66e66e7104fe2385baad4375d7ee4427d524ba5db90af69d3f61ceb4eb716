# json-buffer

JSON functions that can convert buffers!

[![build status](https://secure.travis-ci.org/dominictarr/json-buffer.png)](http://travis-ci.org/dominictarr/json-buffer)

[![testling badge](https://ci.testling.com/dominictarr/json-buffer.png)](https://ci.testling.com/dominictarr/json-buffer)

JSON mangles buffers by converting to an array...
which isn't helpful. json-buffers converts to base64 instead,
and deconverts base64 to a buffer.

``` js
var JSONB = require('json-buffer')
var Buffer = require('buffer').Buffer

var str = JSONB.stringify(Buffer.from('hello there!'))

console.log(JSONB.parse(str)) //GET a BUFFER back
```

## License

MIT
