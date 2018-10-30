var fs = require('fs')
var path = require('path')
var compile = require('./')

delete require.cache[require.resolve(__filename)]

module.exports = function(file, opts) {
  file = path.join(path.dirname(module.parent.filename), file)
  if (!fs.existsSync(file) && fs.existsSync(file+'.schema')) file += '.schema'
  if (!fs.existsSync(file) && fs.existsSync(file+'.json')) file += '.json'
  return compile(fs.readFileSync(file, 'utf-8'), opts)
}
