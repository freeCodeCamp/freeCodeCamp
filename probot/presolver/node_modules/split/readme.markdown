# Split (matcher)

[![build status](https://secure.travis-ci.org/dominictarr/split.png)](http://travis-ci.org/dominictarr/split)

Break up a stream and reassemble it so that each line is a chunk. matcher may be a `String`, or a `RegExp`

Example, read every line in a file ...

``` js
  fs.createReadStream(file)
    .pipe(split())
    .on('data', function (line) {
      //each chunk now is a separate line!
    })

```

`split` takes the same arguments as `string.split` except it defaults to '/\r?\n/' instead of ',', and the optional `limit` parameter is ignored.
[String#split](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split)

`split` takes an optional options object on its third argument.

``` js
  split(matcher, mapper, options)
```

Valid options:

* maxLength - The maximum buffer length without seeing a newline or `matcher`,
  if a single line exceeds this, the split stream will emit an error.

``` js
  split(JSON.parse, null, { maxLength: 2})
```

* trailing - By default the last buffer not delimited by a newline or `matcher` will be emitted. To prevent this set `options.trailing` to `false`.

``` js
  split(JSON.parse, null, { trailing: false })
```

## keep matched splitter

As with `String#split`, if you split by a regular expression with a matching group,
the matches will be retained in the collection.

```
stdin
.pipe(split(/(\r?\n)/))
... //lines + separators.
```


# NDJ - Newline Delimited Json

`split` accepts a function which transforms each line.

``` js
fs.createReadStream(file)
  .pipe(split(JSON.parse))
  .on('data', function (obj) {
    //each chunk now is a a js object
  })
  .on('error', function (err) {
    //syntax errors will land here
    //note, this ends the stream.
  })
```

# License

MIT
