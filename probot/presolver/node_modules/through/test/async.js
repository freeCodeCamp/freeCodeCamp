var from = require('from')
var through = require('../')

var tape = require('tape')

tape('simple async example', function (t) {
 
  var n = 0, expected = [1,2,3,4,5], actual = []
  from(expected)
  .pipe(through(function(data) {
    this.pause()
    n ++
    setTimeout(function(){
      console.log('pushing data', data)
      this.push(data)
      this.resume()
    }.bind(this), 300)
  })).pipe(through(function(data) {
    console.log('pushing data second time', data);
    this.push(data)
  })).on('data', function (d) {
    actual.push(d)
  }).on('end', function() {
    t.deepEqual(actual, expected)
    t.end()
  })

})
