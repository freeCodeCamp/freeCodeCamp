const test = require('tap').test
const fss = require('./').stable
const clone = require('clone')
const s = JSON.stringify
const stream = require('stream')

test('circular reference to root', function (assert) {
  const fixture = { name: 'Tywin Lannister' }
  fixture.circle = fixture
  const expected = s({ circle: '[Circular]', name: 'Tywin Lannister' })
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('circular getter reference to root', function (assert) {
  const fixture = {
    name: 'Tywin Lannister',
    get circle () {
      return fixture
    }
  }

  const expected = s({ circle: '[Circular]', name: 'Tywin Lannister' })
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('nested circular reference to root', function (assert) {
  const fixture = { name: 'Tywin Lannister' }
  fixture.id = { circle: fixture }
  const expected = s({ id: { circle: '[Circular]' }, name: 'Tywin Lannister' })
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('child circular reference', function (assert) {
  const fixture = {
    name: 'Tywin Lannister',
    child: { name: 'Tyrion Lannister' }
  }
  fixture.child.dinklage = fixture.child
  const expected = s({
    child: {
      dinklage: '[Circular]',
      name: 'Tyrion Lannister'
    },
    name: 'Tywin Lannister'
  })
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('nested child circular reference', function (assert) {
  const fixture = {
    name: 'Tywin Lannister',
    child: { name: 'Tyrion Lannister' }
  }
  fixture.child.actor = { dinklage: fixture.child }
  const expected = s({
    child: {
      actor: { dinklage: '[Circular]' },
      name: 'Tyrion Lannister'
    },
    name: 'Tywin Lannister'
  })
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('circular objects in an array', function (assert) {
  const fixture = { name: 'Tywin Lannister' }
  fixture.hand = [fixture, fixture]
  const expected = s({
    hand: ['[Circular]', '[Circular]'],
    name: 'Tywin Lannister'
  })
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('nested circular references in an array', function (assert) {
  const fixture = {
    name: 'Tywin Lannister',
    offspring: [{ name: 'Tyrion Lannister' }, { name: 'Cersei Lannister' }]
  }
  fixture.offspring[0].dinklage = fixture.offspring[0]
  fixture.offspring[1].headey = fixture.offspring[1]

  const expected = s({
    name: 'Tywin Lannister',
    offspring: [
      { dinklage: '[Circular]', name: 'Tyrion Lannister' },
      { headey: '[Circular]', name: 'Cersei Lannister' }
    ]
  })
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('circular arrays', function (assert) {
  const fixture = []
  fixture.push(fixture, fixture)
  const expected = s(['[Circular]', '[Circular]'])
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('nested circular arrays', function (assert) {
  const fixture = []
  fixture.push(
    { name: 'Jon Snow', bastards: fixture },
    { name: 'Ramsay Bolton', bastards: fixture }
  )
  const expected = s([
    { bastards: '[Circular]', name: 'Jon Snow' },
    { bastards: '[Circular]', name: 'Ramsay Bolton' }
  ])
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('repeated non-circular references in objects', function (assert) {
  const daenerys = { name: 'Daenerys Targaryen' }
  const fixture = {
    motherOfDragons: daenerys,
    queenOfMeereen: daenerys
  }
  const expected = s(fixture)
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('repeated non-circular references in arrays', function (assert) {
  const daenerys = { name: 'Daenerys Targaryen' }
  const fixture = [daenerys, daenerys]
  const expected = s(fixture)
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('double child circular reference', function (assert) {
  // create circular reference
  const child = { name: 'Tyrion Lannister' }
  child.dinklage = child

  // include it twice in the fixture
  const fixture = { name: 'Tywin Lannister', childA: child, childB: child }
  const cloned = clone(fixture)
  const expected = s({
    childA: {
      dinklage: '[Circular]',
      name: 'Tyrion Lannister'
    },
    childB: {
      dinklage: '[Circular]',
      name: 'Tyrion Lannister'
    },
    name: 'Tywin Lannister'
  })
  const actual = fss(fixture)
  assert.equal(actual, expected)

  // check if the fixture has not been modified
  assert.same(fixture, cloned)
  assert.end()
})

test('child circular reference with toJSON', function (assert) {
  // Create a test object that has an overridden `toJSON` property
  TestObject.prototype.toJSON = function () {
    return { special: 'case' }
  }
  function TestObject (content) {}

  // Creating a simple circular object structure
  const parentObject = {}
  parentObject.childObject = new TestObject()
  parentObject.childObject.parentObject = parentObject

  // Creating a simple circular object structure
  const otherParentObject = new TestObject()
  otherParentObject.otherChildObject = {}
  otherParentObject.otherChildObject.otherParentObject = otherParentObject

  // Making sure our original tests work
  assert.same(parentObject.childObject.parentObject, parentObject)
  assert.same(
    otherParentObject.otherChildObject.otherParentObject,
    otherParentObject
  )

  // Should both be idempotent
  assert.equal(fss(parentObject), '{"childObject":{"special":"case"}}')
  assert.equal(fss(otherParentObject), '{"special":"case"}')

  // Therefore the following assertion should be `true`
  assert.same(parentObject.childObject.parentObject, parentObject)
  assert.same(
    otherParentObject.otherChildObject.otherParentObject,
    otherParentObject
  )

  assert.end()
})

test('null object', function (assert) {
  const expected = s(null)
  const actual = fss(null)
  assert.equal(actual, expected)
  assert.end()
})

test('null property', function (assert) {
  const expected = s({ f: null })
  const actual = fss({ f: null })
  assert.equal(actual, expected)
  assert.end()
})

test('nested child circular reference in toJSON', function (assert) {
  var circle = { some: 'data' }
  circle.circle = circle
  var a = {
    b: {
      toJSON: function () {
        a.b = 2
        return '[Redacted]'
      }
    },
    baz: {
      circle,
      toJSON: function () {
        a.baz = circle
        return '[Redacted]'
      }
    }
  }
  var o = {
    a,
    bar: a
  }

  const expected = s({
    a: {
      b: '[Redacted]',
      baz: '[Redacted]'
    },
    bar: {
      // TODO: This is a known limitation of the current implementation.
      // The ideal result would be:
      //
      // b: 2,
      // baz: {
      //   circle: '[Circular]',
      //   some: 'data'
      // }
      //
      b: '[Redacted]',
      baz: '[Redacted]'
    }
  })
  const actual = fss(o)
  assert.equal(actual, expected)
  assert.end()
})

test('circular getters are restored when stringified', function (assert) {
  const fixture = {
    name: 'Tywin Lannister',
    get circle () {
      return fixture
    }
  }
  fss(fixture)

  assert.equal(fixture.circle, fixture)
  assert.end()
})

test('non-configurable circular getters use a replacer instead of markers', function (assert) {
  const fixture = { name: 'Tywin Lannister' }
  Object.defineProperty(fixture, 'circle', {
    configurable: false,
    get: function () {
      return fixture
    },
    enumerable: true
  })

  fss(fixture)

  assert.equal(fixture.circle, fixture)
  assert.end()
})

test('getter child circular reference', function (assert) {
  const fixture = {
    name: 'Tywin Lannister',
    child: {
      name: 'Tyrion Lannister',
      get dinklage () {
        return fixture.child
      }
    },
    get self () {
      return fixture
    }
  }

  const expected = s({
    child: {
      dinklage: '[Circular]',
      name: 'Tyrion Lannister'
    },
    name: 'Tywin Lannister',
    self: '[Circular]'
  })
  const actual = fss(fixture)
  assert.equal(actual, expected)
  assert.end()
})

test('Proxy throwing', function (assert) {
  assert.plan(1)
  const s = new stream.PassThrough()
  s.resume()
  s.write('', () => {
    assert.end()
  })
  const actual = fss({ s, p: new Proxy({}, { get () { throw new Error('kaboom') } }) })
  assert.equal(actual, '"[unable to serialize, circular reference is too complex to analyze]"')
})

test('depthLimit option - will replace deep objects', function (assert) {
  const fixture = {
    name: 'Tywin Lannister',
    child: {
      name: 'Tyrion Lannister'
    },
    get self () {
      return fixture
    }
  }

  const expected = s({
    child: '[...]',
    name: 'Tywin Lannister',
    self: '[Circular]'
  })
  const actual = fss(fixture, undefined, undefined, {
    depthLimit: 1,
    edgesLimit: 1
  })
  assert.equal(actual, expected)
  assert.end()
})

test('edgesLimit option - will replace deep objects', function (assert) {
  const fixture = {
    object: {
      1: { test: 'test' },
      2: { test: 'test' },
      3: { test: 'test' },
      4: { test: 'test' }
    },
    array: [
      { test: 'test' },
      { test: 'test' },
      { test: 'test' },
      { test: 'test' }
    ],
    get self () {
      return fixture
    }
  }

  const expected = s({
    array: [{ test: 'test' }, { test: 'test' }, { test: 'test' }, '[...]'],
    object: {
      1: { test: 'test' },
      2: { test: 'test' },
      3: { test: 'test' },
      4: '[...]'
    },
    self: '[Circular]'
  })
  const actual = fss(fixture, undefined, undefined, {
    depthLimit: 3,
    edgesLimit: 3
  })
  assert.equal(actual, expected)
  assert.end()
})
