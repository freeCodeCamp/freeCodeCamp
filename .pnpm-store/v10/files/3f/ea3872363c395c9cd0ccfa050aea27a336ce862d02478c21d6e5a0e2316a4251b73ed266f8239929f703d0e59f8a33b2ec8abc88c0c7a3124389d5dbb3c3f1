function removeUploadedFiles (uploadedFiles, remove, cb) {
  var length = uploadedFiles.length
  var errors = []

  if (length === 0) return cb(null, errors)

  function handleFile (idx) {
    var file = uploadedFiles[idx]

    remove(file, function (err) {
      if (err) {
        err.file = file
        err.field = file.fieldname
        errors.push(err)
      }

      if (idx < length - 1) {
        handleFile(idx + 1)
      } else {
        cb(null, errors)
      }
    })
  }

  handleFile(0)
}

module.exports = removeUploadedFiles
