
var es = require('../')
  , it = require('it-is').style('colour')
  , u = require('ubelt')

exports ['read an array'] = function (test) {


  console.log('readable')
  return test.end()
  var readThis = u.map(3, 6, 100, u.id) //array of multiples of 3 < 100

  console.log('readable')

  var reader = 
    es.readable(function (i, callback) {
      if(i >= readThis.length)
        return this.emit('end')
      console.log('readable')
      callback(null, readThis[i])
    })

  var writer = es.writeArray(function (err, array){
    if(err) throw err
    it(array).deepEqual(readThis)
    test.done()
  })

  reader.pipe(writer)
}

exports ['read an array - async'] = function (test) {

  var readThis = u.map(3, 6, 100, u.id) //array of multiples of 3 < 100

  var reader = 
    es.readable(function (i, callback) {
      if(i >= readThis.length)
        return this.emit('end')
      u.delay(callback)(null, readThis[i])
    })

  var writer = es.writeArray(function (err, array){
    if(err) throw err
    it(array).deepEqual(readThis)
    test.done()
  })

  reader.pipe(writer)
}


exports ['emit data then call next() also works'] = function (test) {

  var readThis = u.map(3, 6, 100, u.id) //array of multiples of 3 < 100

  var reader = 
    es.readable(function (i, next) {
      if(i >= readThis.length)
        return this.emit('end')
      this.emit('data', readThis[i])
      next()
    })

  var writer = es.writeArray(function (err, array){
    if(err) throw err
    it(array).deepEqual(readThis)
    test.done()     
  })

  reader.pipe(writer)
}


exports ['callback emits error, then stops'] = function (test) {

  var err = new Error('INTENSIONAL ERROR')
    , called = 0

  var reader = 
    es.readable(function (i, callback) {
      if(called++)
        return
      callback(err)
    })

  reader.on('error', function (_err){
    it(_err).deepEqual(err)
    u.delay(function() {
      it(called).equal(1)
      test.done()
    }, 50)()
  })
}

exports['readable does not call read concurrently'] = function (test) {

  var current = 0
  var source = es.readable(function(count, cb){
    current ++
    if(count > 100)
      return this.emit('end')
    u.delay(function(){
      current --
      it(current).equal(0)      
      cb(null, {ok: true, n: count});
    })();
  });

  var destination = es.map(function(data, cb){
    //console.info(data); 
    cb();
  });

  var all = es.connect(source, destination);

  destination.on('end', test.done)
}

exports ['does not raise a warning: Recursive process.nextTick detected'] = function (test) {
    var readThisDelayed;

    u.delay(function () {
        readThisDelayed = [1, 3, 5];
    })();

    es.readable(function (count, callback) {

        if (readThisDelayed) {
            var that = this;
            readThisDelayed.forEach(function (item) {
                that.emit('data', item);
            });

            this.emit('end');
            test.done();
        }

        callback();
    });
};

//
// emitting multiple errors is not supported by stream.
//
// I do not think that this is a good idea, at least, there should be an option to pipe to 
// continue on error. it makes alot ef sense, if you are using Stream like I am, to be able to emit multiple errors.
// an error might not necessarily mean the end of the stream. it depends on the error, at least.
//
// I will start a thread on the mailing list. I'd rather that than use a custom `pipe` implementation.
// 
// basically, I want to be able use pipe to transform objects, and if one object is invalid, 
// the next might still be good, so I should get to choose if it's gonna stop.
// re-enstate this test when this issue progresses.
//
// hmm. I could add this to es.connect by deregistering the error listener, 
// but I would rather it be an option in core.

/*
exports ['emit multiple errors, with 2nd parameter (continueOnError)'] = function (test) {

  var readThis = d.map(1, 100, d.id)
    , errors = 0
  var reader = 
    es.readable(function (i, callback) {
      console.log(i, readThis.length)
      if(i >= readThis.length)
        return this.emit('end')
      if(!(readThis[i] % 7))
        return callback(readThis[i])
      callback(null, readThis[i])
    }, true)

  var writer = es.writeArray(function (err, array) {
    if(err) throw err
    it(array).every(function (u){
      it(u % 7).notEqual(0)      
    }).property('length', 80)
    it(errors).equal(14)
    test.done()     
  })

  reader.on('error', function (u) {
    errors ++
    console.log(u)
    if('number' !== typeof u)
      throw u

    it(u % 7).equal(0)

  })

  reader.pipe(writer)
}
*/

require('./helper')(module)
