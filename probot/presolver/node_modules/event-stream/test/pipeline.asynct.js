var es = require('..')

exports['do not duplicate errors'] = function (test) {

  var errors = 0;
  var pipe = es.pipeline(
    es.through(function(data) {
      return this.emit('data', data);
    }),
    es.through(function(data) {
      return this.emit('error', new Error(data));
    })
  )

  pipe.on('error', function(err) {
    errors++
    console.log('error count', errors)
      process.nextTick(function () {
        return test.done();
      })
  })

  return pipe.write('meh');

}

exports['3 pipe do not duplicate errors'] = function (test) {

  var errors = 0;
  var pipe = es.pipeline(
    es.through(function(data) {
      return this.emit('data', data);
    }),
    es.through(function(data) {
      return this.emit('error', new Error(data));
    }),
    es.through()
  )

  pipe.on('error', function(err) {
    errors++
    console.log('error count', errors)
      process.nextTick(function () {
        return test.done();
      })
  })

  return pipe.write('meh');

}

require('./helper')(module)
