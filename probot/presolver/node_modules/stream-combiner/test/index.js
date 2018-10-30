var es = require('event-stream')
var combine = require('..')
var test = require('tape')

test('do not duplicate errors', function (test) {

  var errors = 0;
  var pipe = combine(
    es.through(function(data) {
      return this.emit('data', data);
    }),
    es.through(function(data) {
      return this.emit('error', new Error(data));
    })
  )

  pipe.on('error', function(err) {
    errors++
    test.ok(errors, 'expected error count')
      process.nextTick(function () {
        return test.end();
      })
  })

  return pipe.write('meh');
})

test('3 pipe do not duplicate errors', function (test) {

  var errors = 0;
  var pipe = combine(
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
    test.ok(errors, 'expected error count')
      process.nextTick(function () {
        return test.end();
      })
  })

  return pipe.write('meh');

})

test('0 argument through stream', function (test) {
  test.plan(3)
  var pipe = combine()
   , expected = [ 'beep', 'boop', 'robots' ]

  pipe.pipe(es.through(function(data) {
    test.equal(data, expected.shift())
  }))
  pipe.write('beep')
  pipe.write('boop')
  pipe.end('robots')
})

