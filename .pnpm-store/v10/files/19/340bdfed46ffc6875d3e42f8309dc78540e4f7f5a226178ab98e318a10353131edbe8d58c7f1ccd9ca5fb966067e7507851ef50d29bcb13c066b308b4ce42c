var test = require('tape')
var Expand = require('./')

test('default expands {} placeholders', function (t) {
  var expand = Expand()
  t.equal(typeof expand, 'function', 'is a function')
  t.equal(expand('{foo}/{bar}', {
    foo: 'BAR', bar: 'FOO'
  }), 'BAR/FOO')
  t.equal(expand('{foo}{foo}{foo}', {
    foo: 'FOO'
  }), 'FOOFOOFOO', 'expands one placeholder many times')
  t.end()
})

test('support for custom separators', function (t) {
  var expand = Expand({ sep: '[]' })
  t.equal(expand('[foo]/[bar]', {
    foo: 'BAR', bar: 'FOO'
  }), 'BAR/FOO')
  t.equal(expand('[foo][foo][foo]', {
    foo: 'FOO'
  }), 'FOOFOOFOO', 'expands one placeholder many times')
  t.end()
})

test('support for longer custom separators', function (t) {
  var expand = Expand({ sep: '[[]]' })
  t.equal(expand('[[foo]]/[[bar]]', {
    foo: 'BAR', bar: 'FOO'
  }), 'BAR/FOO')
  t.equal(expand('[[foo]][[foo]][[foo]]', {
    foo: 'FOO'
  }), 'FOOFOOFOO', 'expands one placeholder many times')
  t.end()
})

test('whitespace-insensitive', function (t) {
  var expand = Expand({ sep: '[]' })
  t.equal(expand('[ foo ]/[ bar ]', {
    foo: 'BAR', bar: 'FOO'
  }), 'BAR/FOO')
  t.equal(expand('[ foo ][ foo  ][ foo]', {
    foo: 'FOO'
  }), 'FOOFOOFOO', 'expands one placeholder many times')
  t.end()
})

test('dollar escape', function (t) {
  var expand = Expand()
  t.equal(expand('before {foo} after', {
    foo: '$'
  }), 'before $ after')
  t.equal(expand('before {foo} after', {
    foo: '$&'
  }), 'before $& after')
  t.equal(expand('before {foo} after', {
    foo: '$`'
  }), 'before $` after')
  t.equal(expand('before {foo} after', {
    foo: '$\''
  }), 'before $\' after')
  t.equal(expand('before {foo} after', {
    foo: '$0'
  }), 'before $0 after')
  t.end()
})
