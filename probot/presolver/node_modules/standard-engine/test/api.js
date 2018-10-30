var eslint = require('eslint')
var Linter = require('../').linter
var test = require('tape')

function getStandard () {
  return new Linter({
    eslint: eslint,
    eslintConfig: require('../tmp/standard/options').eslintConfig
  })
}

test('api: lintFiles', function (t) {
  t.plan(3)
  var standard = getStandard()
  standard.lintFiles([], { cwd: 'bin' }, function (err, result) {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 0)
  })
})

test('api: lintText', function (t) {
  t.plan(3)
  var standard = getStandard()
  standard.lintText('console.log("hi there")\n', function (err, result) {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 1, 'should have used single quotes')
  })
})

test('api: lintTextSync', function (t) {
  t.plan(2)
  var standard = getStandard()
  var result = standard.lintTextSync('console.log("hi there")\n')
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 1, 'should have used single quotes')
})

test('api: parseOpts -- avoid self.eslintConfig parser mutation', function (t) {
  t.plan(2)
  var standard = getStandard()
  var opts = standard.parseOpts({parser: 'blah'})
  t.equal(opts.parser, 'blah')
  t.equal(standard.eslintConfig.parser, undefined)
})

test('api: parseOpts -- avoid self.eslintConfig global mutation', function (t) {
  t.plan(2)
  var standard = getStandard()
  var opts = standard.parseOpts({globals: ['what']})
  t.deepEqual(opts.globals, ['what'])
  t.deepEqual(standard.eslintConfig.globals, [])
})
