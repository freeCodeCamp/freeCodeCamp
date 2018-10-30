var Bottleneck = require('../../lib/index.js')
var now = Date.now()

var limiter = new Bottleneck({
  reservoir: 2,
  reservoirRefreshAmount: 2,
  reservoirRefreshInterval: 200
})
var f1 = () => {
  var secDiff = Math.floor((Date.now() - now) / 100)
  return Promise.resolve(`[${secDiff}]`)
}

limiter.schedule(f1).then((x) => process.stdout.write(x))
limiter.schedule(f1).then((x) => process.stdout.write(x))
limiter.schedule(f1).then((x) => process.stdout.write(x))
limiter.schedule(f1).then((x) => process.stdout.write(x))
