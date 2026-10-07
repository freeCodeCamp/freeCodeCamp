# Split2(matcher, mapper, options)

![ci](https://github.com/mcollina/split2/workflows/ci/badge.svg)

Break up a stream and reassemble it so that each line is a chunk.
`split2` is inspired by [@dominictarr](https://github.com/dominictarr) [`split`](https://github.com/dominictarr/split) module,
and it is totally API compatible with it.
However, it is based on Node.js core [`Transform`](https://nodejs.org/api/stream.html#stream_new_stream_transform_options).

`matcher` may be a `String`, or a `RegExp`. Example, read every line in a file ...

``` js
  fs.createReadStream(file)
    .pipe(split2())
    .on('data', function (line) {
      //each chunk now is a separate line!
    })

```

`split` takes the same arguments as `string.split` except it defaults to '/\r?\n/', and the optional `limit` paremeter is ignored.
[String#split](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split)

`split` takes an optional options object on it's third argument, which
is directly passed as a
[Transform](https://nodejs.org/api/stream.html#stream_new_stream_transform_options)
option.

Additionally, the `.maxLength` and `.skipOverflow` options are implemented, which set limits on the internal
buffer size and the stream's behavior when the limit is exceeded. There is no limit unless `maxLength` is set. When
the internal buffer size exceeds `maxLength`, the stream emits an error by default. You may also set `skipOverflow` to
true to suppress the error and instead skip past any lines that cause the internal buffer to exceed `maxLength`.

Calling `.destroy` will make the stream emit `close`. Use this to perform cleanup logic

``` js
var splitFile = function(filename) {
  var file = fs.createReadStream(filename)

  return file
    .pipe(split2())
    .on('close', function() {
      // destroy the file stream in case the split stream was destroyed
      file.destroy()
    })
}

var stream = splitFile('my-file.txt')

stream.destroy() // will destroy the input file stream
```

# NDJ - Newline Delimited Json

`split2` accepts a function which transforms each line.

``` js
fs.createReadStream(file)
  .pipe(split2(JSON.parse))
  .on('data', function (obj) {
    //each chunk now is a js object
  })
  .on("error", function(error) {
    //handling parsing errors
  })
```

However, in [@dominictarr](https://github.com/dominictarr) [`split`](https://github.com/dominictarr/split) the mapper
is wrapped in a try-catch, while here it is not: if your parsing logic can throw, wrap it yourself. Otherwise, you can also use the stream error handling when mapper function throw.

# License

Copyright (c) 2014-2021, Matteo Collina <hello@matteocollina.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
