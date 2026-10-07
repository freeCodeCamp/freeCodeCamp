# duplexer

[![build status][1]][2] [![dependency status][3]][4]

[![browser support][5]][6]

Creates a duplex stream

Taken from [event-stream][7]

## duplex (writeStream, readStream)

Takes a writable stream and a readable stream and makes them appear as a readable writable stream.

It is assumed that the two streams are connected to each other in some way.

## Example

```js
var cp = require('child_process')
  , duplex = require('duplexer')
  , grep = cp.exec('grep Stream')

duplex(grep.stdin, grep.stdout)
```

## Installation

`npm install duplexer`

## Tests

`npm test`

## Contributors

 - Dominictarr
 - Raynos
 - samccone

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/duplexer.png
  [2]: https://travis-ci.org/Raynos/duplexer
  [3]: https://david-dm.org/Raynos/duplexer.png
  [4]: https://david-dm.org/Raynos/duplexer
  [5]: https://ci.testling.com/Raynos/duplexer.png
  [6]: https://ci.testling.com/Raynos/duplexer
  [7]: https://github.com/dominictarr/event-stream#duplex-writestream-readstream
