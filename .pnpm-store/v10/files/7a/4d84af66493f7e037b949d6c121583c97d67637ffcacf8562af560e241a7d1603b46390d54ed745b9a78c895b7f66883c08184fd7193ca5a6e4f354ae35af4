# tar-fs

filesystem bindings for [tar-stream](https://github.com/mafintosh/tar-stream).

```
npm install tar-fs
```

[![build status](https://secure.travis-ci.org/mafintosh/tar-fs.png)](http://travis-ci.org/mafintosh/tar-fs)

## Usage

tar-fs allows you to pack directories into tarballs and extract tarballs into directories.

It doesn't gunzip for you, so if you want to extract a `.tar.gz` with this you'll need to use something like [gunzip-maybe](https://github.com/mafintosh/gunzip-maybe) in addition to this.

``` js
var tar = require('tar-fs')
var fs = require('fs')

// packing a directory
tar.pack('./my-directory').pipe(fs.createWriteStream('my-tarball.tar'))

// extracting a directory
fs.createReadStream('my-other-tarball.tar').pipe(tar.extract('./my-other-directory'))
```

To ignore various files when packing or extracting add a ignore function to the options. `ignore`
is also an alias for `filter`. Additionally you get `header` if you use ignore while extracting.
That way you could also filter by metadata.

``` js
var pack = tar.pack('./my-directory', {
  ignore: function(name) {
    return path.extname(name) === '.bin' // ignore .bin files when packing
  }
})

var extract = tar.extract('./my-other-directory', {
  ignore: function(name) {
    return path.extname(name) === '.bin' // ignore .bin files inside the tarball when extracing
  }
})

var extractFilesDirs = tar.extract('./my-other-other-directory', {
  ignore: function(_, header) {
    // pass files & directories, ignore e.g. symlinks
    return header.type !== 'file' && header.type !== 'directory'
  }
})
```

You can also specify which entries to pack using the `entries` option

```js
var pack = tar.pack('./my-directory', {
  entries: ['file1', 'subdir/file2'] // only the specific entries will be packed
})
```

If you want to modify the headers when packing/extracting add a map function to the options

``` js
var pack = tar.pack('./my-directory', {
  map: function(header) {
    header.name = 'prefixed/'+header.name
    return header
  }
})

var extract = tar.extract('./my-directory', {
  map: function(header) {
    header.name = 'another-prefix/'+header.name
    return header
  }
})
```

Similarly you can use `mapStream` incase you wanna modify the input/output file streams

``` js
var pack = tar.pack('./my-directory', {
  mapStream: function(fileStream, header) {
    // NOTE: the returned stream HAS to have the same length as the input stream.
    // If not make sure to update the size in the header passed in here.
    if (path.extname(header.name) === '.js') {
      return fileStream.pipe(someTransform)
    }
    return fileStream;
  }
})

var extract = tar.extract('./my-directory', {
  mapStream: function(fileStream, header) {
    if (path.extname(header.name) === '.js') {
      return fileStream.pipe(someTransform)
    }
    return fileStream;
  }
})
```

Set `options.fmode` and `options.dmode` to ensure that files/directories extracted have the corresponding modes

``` js
var extract = tar.extract('./my-directory', {
  dmode: parseInt(555, 8), // all dirs should be readable
  fmode: parseInt(444, 8) // all files should be readable
})
```

It can be useful to use `dmode` and `fmode` if you are packing/unpacking tarballs between *nix/windows to ensure that all files/directories unpacked are readable.

Alternatively you can set `options.readable` and/or `options.writable` to set the dmode and fmode to readable/writable.

``` js
var extract = tar.extract('./my-directory', {
  readable: true, // all dirs and files should be readable
  writable: true, // all dirs and files should be writable
})
```

Set `options.strict` to `false` if you want to ignore errors due to unsupported entry types (like device files)

To dereference symlinks (pack the contents of the symlink instead of the link itself) set `options.dereference` to `true`.

## Copy a directory

Copying a directory with permissions and mtime intact is as simple as

``` js
tar.pack('source-directory').pipe(tar.extract('dest-directory'))
```

## Interaction with [`tar-stream`](https://github.com/mafintosh/tar-stream)

Use `finalize: false` and the `finish` hook to
leave the pack stream open for further entries (see
[`tar-stream#pack`](https://github.com/mafintosh/tar-stream#packing)),
and use `pack` to pass an existing pack stream.

``` js
var mypack = tar.pack('./my-directory', {
  finalize: false,
  finish: function(sameAsMypack) {
    mypack.entry({name: 'generated-file.txt'}, "hello")
    tar.pack('./other-directory', {
      pack: sameAsMypack
    })
  }
})
```


## Performance

Packing and extracting a 6.1 GB with 2496 directories and 2398 files yields the following results on my Macbook Air.
[See the benchmark here](https://gist.github.com/mafintosh/8102201)

* tar-fs: 34.261 seconds
* [node-tar](https://github.com/isaacs/node-tar): 366.123 seconds (or 10x slower)

## License

MIT
