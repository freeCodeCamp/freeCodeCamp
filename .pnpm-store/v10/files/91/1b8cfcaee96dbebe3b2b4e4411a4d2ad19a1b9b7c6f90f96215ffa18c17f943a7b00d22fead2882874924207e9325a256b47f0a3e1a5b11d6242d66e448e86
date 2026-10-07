var concat = require('concat-stream')

function MemoryStorage (opts) {}

MemoryStorage.prototype._handleFile = function _handleFile (req, file, cb) {
  file.stream.pipe(concat({ encoding: 'buffer' }, function (data) {
    cb(null, {
      buffer: data,
      size: data.length
    })
  }))
}

MemoryStorage.prototype._removeFile = function _removeFile (req, file, cb) {
  delete file.buffer
  cb(null)
}

module.exports = function (opts) {
  return new MemoryStorage(opts)
}
