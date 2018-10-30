var es = require('../')
  , it = require('it-is').style('colour')
  , d = require('ubelt')
  , spec = require('stream-spec')

var next = process.nextTick

var fizzbuzz = '12F4BF78FB11F1314FB1617F19BF2223FB26F2829FB3132F34BF3738FB41F4344FB4647F49BF5253FB56F5859FB6162F64BF6768FB71F7374FB7677F79BF8283FB86F8889FB9192F94BF9798FB'
  , fizz7buzz = '12F4BFseven8FB11F1314FB161sevenF19BF2223FB26F2829FB3132F34BF3seven38FB41F4344FB464sevenF49BF5253FB56F5859FB6162F64BF6seven68FBseven1Fseven3seven4FBseven6sevensevenFseven9BF8283FB86F8889FB9192F94BF9seven98FB'
  , fizzbuzzwhitespce = '  12F4BF78FB11F1314FB1617F19BF2223FB26F2829FB3132F34BF3738FB41F4344FB4647F49BF5253FB56F5859FB6162F64BF6768FB71F7374FB7677F79BF8283FB86F8889FB9192F94BF9798FB  '

exports ['fizz buzz'] = function (test) {

  var readThis = d.map(1, 100, function (i) {
    return (
     ! (i % 3 || i % 5) ? "FB" :
      !(i % 3) ? "F" :
      !(i % 5) ? "B" :
      ''+i
    )
  }) //array of multiples of 3 < 100

  var reader = es.readArray(readThis)
  var join = es.wait(function (err, string){
    it(string).equal(fizzbuzz)
    test.done()
  })
  reader.pipe(join)

}


exports ['fizz buzz replace'] = function (test) {
  var split = es.split(/(1)/)
  var replace = es.replace('7', 'seven')
//  var x = spec(replace).through()
  split
    .pipe(replace)
    .pipe(es.join(function (err, string) {
      it(string).equal(fizz7buzz)
    }))

    replace.on('close', function () {
//      x.validate()
      test.done()
    })

  split.write(fizzbuzz)
  split.end()

}


exports ['fizz buzz replace whitespace using regexp'] = function (test) {
  var split = es.split(/(1)/)
  var replaceLeading = es.replace(/^[\s]*/, '')
  var replaceTrailing = es.replace(/[\s]*$/, '')
//  var x = spec(replace).through()
  split
    .pipe(replaceLeading)
    .pipe(replaceTrailing)
    .pipe(es.join(function (err, string) {
      it(string).equal(fizzbuzz)
    }))

    replaceTrailing.on('close', function () {
//      x.validate()
      test.done()
    })

  split.write(fizzbuzz)
  split.end()

}

require('./helper')(module)
