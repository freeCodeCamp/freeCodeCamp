const tar = require('tar-stream')
const fs = require('fs')
const path = require('path')
const pipeline = require('pump') // eequire('stream').pipeline

fs.createReadStream('test.tar')
  .pipe(tar.extract())
  .on('entry', function (header, stream, done) {
    console.log(header.name)
    pipeline(stream, fs.createWriteStream(path.join('/tmp', header.name)), done)
  })
