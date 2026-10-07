# tar-stream

tar-stream is a streaming tar parser and generator and nothing else. It operates purely using streams which means you can easily extract/parse tarballs without ever hitting the file system.

Note that you still need to gunzip your data if you have a `.tar.gz`. We recommend using [gunzip-maybe](https://github.com/mafintosh/gunzip-maybe) in conjunction with this.

```
npm install tar-stream
```

[![build status](https://secure.travis-ci.org/mafintosh/tar-stream.png)](http://travis-ci.org/mafintosh/tar-stream)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

## Usage

tar-stream exposes two streams, [pack](https://github.com/mafintosh/tar-stream#packing) which creates tarballs and [extract](https://github.com/mafintosh/tar-stream#extracting) which extracts tarballs. To [modify an existing tarball](https://github.com/mafintosh/tar-stream#modifying-existing-tarballs) use both.


It implementes USTAR with additional support for pax extended headers. It should be compatible with all popular tar distributions out there (gnutar, bsdtar etc)

## Related

If you want to pack/unpack directories on the file system check out [tar-fs](https://github.com/mafintosh/tar-fs) which provides file system bindings to this module.

## Packing

To create a pack stream use `tar.pack()` and call `pack.entry(header, [callback])` to add tar entries.

``` js
const tar = require('tar-stream')
const pack = tar.pack() // pack is a stream

// add a file called my-test.txt with the content "Hello World!"
pack.entry({ name: 'my-test.txt' }, 'Hello World!')

// add a file called my-stream-test.txt from a stream
const entry = pack.entry({ name: 'my-stream-test.txt', size: 11 }, function(err) {
  // the stream was added
  // no more entries
  pack.finalize()
})

entry.write('hello')
entry.write(' ')
entry.write('world')
entry.end()

// pipe the pack stream somewhere
pack.pipe(process.stdout)
```

## Extracting

To extract a stream use `tar.extract()` and listen for `extract.on('entry', (header, stream, next) )`

``` js
const extract = tar.extract()

extract.on('entry', function (header, stream, next) {
  // header is the tar header
  // stream is the content body (might be an empty stream)
  // call next when you are done with this entry

  stream.on('end', function () {
    next() // ready for next entry
  })

  stream.resume() // just auto drain the stream
})

extract.on('finish', function () {
  // all entries read
})

pack.pipe(extract)
```

The tar archive is streamed sequentially, meaning you **must** drain each entry's stream as you get them or else the main extract stream will receive backpressure and stop reading.

## Extracting as an async iterator

The extraction stream in addition to being a writable stream is also an async iterator

``` js
const extract = tar.extract()

someStream.pipe(extract)

for await (const entry of extract) {
  entry.header // the tar header
  entry.resume() // the entry is the stream also
}
```

## Headers

The header object using in `entry` should contain the following properties.
Most of these values can be found by stat'ing a file.

``` js
{
  name: 'path/to/this/entry.txt',
  size: 1314,        // entry size. defaults to 0
  mode: 0o644,       // entry mode. defaults to to 0o755 for dirs and 0o644 otherwise
  mtime: new Date(), // last modified date for entry. defaults to now.
  type: 'file',      // type of entry. defaults to file. can be:
                     // file | link | symlink | directory | block-device
                     // character-device | fifo | contiguous-file
  linkname: 'path',  // linked file name
  uid: 0,            // uid of entry owner. defaults to 0
  gid: 0,            // gid of entry owner. defaults to 0
  uname: 'maf',      // uname of entry owner. defaults to null
  gname: 'staff',    // gname of entry owner. defaults to null
  devmajor: 0,       // device major version. defaults to 0
  devminor: 0        // device minor version. defaults to 0
}
```

## Modifying existing tarballs

Using tar-stream it is easy to rewrite paths / change modes etc in an existing tarball.

``` js
const extract = tar.extract()
const pack = tar.pack()
const path = require('path')

extract.on('entry', function (header, stream, callback) {
  // let's prefix all names with 'tmp'
  header.name = path.join('tmp', header.name)
  // write the new entry to the pack stream
  stream.pipe(pack.entry(header, callback))
})

extract.on('finish', function () {
  // all entries done - lets finalize it
  pack.finalize()
})

// pipe the old tarball to the extractor
oldTarballStream.pipe(extract)

// pipe the new tarball the another stream
pack.pipe(newTarballStream)
```

## Saving tarball to fs


``` js
const fs = require('fs')
const tar = require('tar-stream')

const pack = tar.pack() // pack is a stream
const path = 'YourTarBall.tar'
const yourTarball = fs.createWriteStream(path)

// add a file called YourFile.txt with the content "Hello World!"
pack.entry({ name: 'YourFile.txt' }, 'Hello World!', function (err) {
  if (err) throw err
  pack.finalize()
})

// pipe the pack stream to your file
pack.pipe(yourTarball)

yourTarball.on('close', function () {
  console.log(path + ' has been written')
  fs.stat(path, function(err, stats) {
    if (err) throw err
    console.log(stats)
    console.log('Got file info successfully!')
  })
})
```

## Performance

[See tar-fs for a performance comparison with node-tar](https://github.com/mafintosh/tar-fs/blob/master/README.md#performance)

# License

MIT
