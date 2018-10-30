walker [![Build Status](https://secure.travis-ci.org/daaku/nodejs-walker.png)](http://travis-ci.org/daaku/nodejs-walker)
======

A nodejs directory walker. Broadcasts events for various file types as well as
a generic "entry" event for all types and provides the ability to prune
directory trees. This shows the entire API; everything is optional:

```javascript
Walker('/etc/')
  .filterDir(function(dir, stat) {
    if (dir === '/etc/pam.d') {
      console.warn('Skipping /etc/pam.d and children')
      return false
    }
    return true
  })
  .on('entry', function(entry, stat) {
    console.log('Got entry: ' + entry)
  })
  .on('dir', function(dir, stat) {
    console.log('Got directory: ' + dir)
  })
  .on('file', function(file, stat) {
    console.log('Got file: ' + file)
  })
  .on('symlink', function(symlink, stat) {
    console.log('Got symlink: ' + symlink)
  })
  .on('blockDevice', function(blockDevice, stat) {
    console.log('Got blockDevice: ' + blockDevice)
  })
  .on('fifo', function(fifo, stat) {
    console.log('Got fifo: ' + fifo)
  })
  .on('socket', function(socket, stat) {
    console.log('Got socket: ' + socket)
  })
  .on('characterDevice', function(characterDevice, stat) {
    console.log('Got characterDevice: ' + characterDevice)
  })
  .on('error', function(er, entry, stat) {
    console.log('Got error ' + er + ' on entry ' + entry)
  })
  .on('end', function() {
    console.log('All files traversed.')
  })
```

You specify a root directory to walk and optionally specify a function to prune
sub-directory trees via the `filterDir` function. The Walker exposes a number
of events, broadcasting various file type events a generic error event and
finally the event to signal the end of the process.
