var fs = require('fs')

var input = __dirname + '/../src/redis'
var loaded = {}

var promises = fs.readdirSync(input).map(function (file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(input + '/' + file, function (err, data) {
      if (err != null) {
        return reject(err)
      }
      loaded[file] = data.toString('utf8')
      return resolve()
    })
  })
})

Promise.all(promises)
.then(function () {
  console.log(JSON.stringify(loaded, Object.keys(loaded).sort(), 2))
})
.catch(function (err) {
  console.error(err)
  process.exit(1)
})
