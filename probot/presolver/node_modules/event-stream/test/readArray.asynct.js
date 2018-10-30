
var es = require('../')
  , it = require('it-is').style('colour')
  , d = require('ubelt')

function readStream(stream, pauseAt, done) {
  if(!done) done = pauseAt, pauseAt = -1
  var array = [] 
  stream.on('data', function (data) {
    array.push(data)
    if(!--pauseAt )
      stream.pause(), done(null, array)
  })
  stream.on('error', done)
  stream.on('end', function (data) {
    done(null, array)
  })

}

exports ['read an array'] = function (test) {

  var readThis = d.map(3, 6, 100, d.id) //array of multiples of 3 < 100

  var reader = es.readArray(readThis)

  var writer = es.writeArray(function (err, array){
    if(err) throw err //unpossible
    it(array).deepEqual(readThis)
    test.done()     
  })

  reader.pipe(writer)
}

exports ['read an array and pause it.'] = function (test) {

  var readThis = d.map(3, 6, 100, d.id) //array of multiples of 3 < 100

  var reader = es.readArray(readThis)
  
  readStream(reader, 10, function (err, data) {
    if(err) throw err
    it(data).deepEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30])
    readStream(reader, 10, function (err, data) {
      it(data).deepEqual([33, 36, 39, 42, 45, 48, 51, 54, 57, 60])
      test.done() 
    })
    reader.resume()
  })

}

exports ['reader is readable, but not writeable'] = function (test) {
  var reader = es.readArray([1])
  it(reader).has({
    readable: true,
    writable: false
  })

  test.done()
}


exports ['read one item per tick'] = function (test) {
  var readThis = d.map(3, 6, 100, d.id) //array of multiples of 3 < 100
  var drains = 0
  var reader = es.readArray(readThis)
  var tickMapper = es.map(function (data,callback) {
    process.nextTick(function () {
      callback(null, data)
    })
    //since tickMapper is returning false
    //pipe should pause the writer until a drain occurs
    return false
  })
  reader.pipe(tickMapper)
  readStream(tickMapper, function (err, array) {
    it(array).deepEqual(readThis)
    it(array.length).deepEqual(readThis.length)
    it(drains).equal(readThis.length)
    test.done()
  })
  tickMapper.on('drain', function () {
    drains ++
  })

}
require('./helper')(module)
