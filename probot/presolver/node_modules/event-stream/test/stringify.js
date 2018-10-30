


var es = require('../')

exports['handle buffer'] = function (t) {


  es.stringify().on('data', function (d) {
    t.equal(d.trim(), JSON.stringify('HELLO'))
    t.end()
  }).write(new Buffer('HELLO'))

}
require('./helper')(module)
