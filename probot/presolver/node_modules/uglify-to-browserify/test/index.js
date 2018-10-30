var fs = require('fs')
var br = require('../')
var test = fs.readFileSync(require.resolve('uglify-js/test/run-tests.js'), 'utf8')
  .replace(/^#.*\n/, '')

var transform = br(require.resolve('uglify-js'))
transform.pipe(fs.createWriteStream(__dirname + '/output.js'))
  .on('close', function () {
    Function('module,require', test)({
      filename: require.resolve('uglify-js/test/run-tests.js')
    },
      function (name) {
        if (name === '../tools/node') {
          return require('./output.js')
        } else if (/^[a-z]+$/.test(name)) {
          return require(name)
        } else {
          throw new Error('I didn\'t expect you to require ' + name)
        }
      })
  })
transform.end(fs.readFileSync(require.resolve('uglify-js'), 'utf8'))