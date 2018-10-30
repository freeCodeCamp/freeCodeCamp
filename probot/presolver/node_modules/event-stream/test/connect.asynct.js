var es = require('../')
  , it = require('it-is').style('colour')
  , d = require('ubelt')

function makeExamplePipe() {

  return es.connect(
    es.map(function (data, callback) {
      callback(null, data * 2)
    }),
    es.map(function (data, callback) {
      d.delay(callback)(null, data)    
    }),
    es.map(function (data, callback) {
      callback(null, data + 2)
    }))
}

exports['simple pipe'] = function (test) {

  var pipe = makeExamplePipe()

  pipe.on('data', function (data) {
    it(data).equal(18)
    test.done()
  })
  
  pipe.write(8)

}

exports['read array then map'] = function (test) {

  var readThis = d.map(3, 6, 100, d.id) //array of multiples of 3 < 100
    , first = es.readArray(readThis)
    , read = []
    , pipe =
  es.connect(
    first,
    es.map(function (data, callback) {
      callback(null, {data: data})      
    }),
    es.map(function (data, callback) {
      callback(null, {data: data})
    }),
    es.writeArray(function (err, array) {
      it(array).deepEqual(d.map(readThis, function (data) {
        return {data: {data: data}}
      }))
      test.done()  
    })
  )
}

exports ['connect returns a stream'] = function (test) {

  var rw = 
    es.connect(
      es.map(function (data, callback) {
        callback(null, data * 2)      
      }),
      es.map(function (data, callback) {
        callback(null, data * 5)      
      })
    )

  it(rw).has({readable: true, writable: true})

  var array = [190, 24, 6, 7, 40, 57, 4, 6]
    , _array = []
    , c = 
  es.connect(
    es.readArray(array),
    rw,
    es.log('after rw:'),
    es.writeArray(function (err, _array) {
      it(_array).deepEqual(array.map(function (e) { return e * 10 }))
      test.done()
    })
    )
  
}


require('./helper')(module)

