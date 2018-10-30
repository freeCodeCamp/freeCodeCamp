var test = require("tape")
var extend = require("./")
var mutableExtend = require("./mutable")

test("merge", function(assert) {
    var a = { a: "foo" }
    var b = { b: "bar" }

    assert.deepEqual(extend(a, b), { a: "foo", b: "bar" })
    assert.end()
})

test("replace", function(assert) {
    var a = { a: "foo" }
    var b = { a: "bar" }

    assert.deepEqual(extend(a, b), { a: "bar" })
    assert.end()
})

test("undefined", function(assert) {
    var a = { a: undefined }
    var b = { b: "foo" }

    assert.deepEqual(extend(a, b), { a: undefined, b: "foo" })
    assert.deepEqual(extend(b, a), { a: undefined, b: "foo" })
    assert.end()
})

test("handle 0", function(assert) {
    var a = { a: "default" }
    var b = { a: 0 }

    assert.deepEqual(extend(a, b), { a: 0 })
    assert.deepEqual(extend(b, a), { a: "default" })
    assert.end()
})

test("is immutable", function (assert) {
    var record = {}

    extend(record, { foo: "bar" })
    assert.equal(record.foo, undefined)
    assert.end()
})

test("null as argument", function (assert) {
    var a = { foo: "bar" }
    var b = null
    var c = void 0

    assert.deepEqual(extend(b, a, c), { foo: "bar" })
    assert.end()
})

test("mutable", function (assert) {
    var a = { foo: "bar" }

    mutableExtend(a, { bar: "baz" })

    assert.equal(a.bar, "baz")
    assert.end()
})

test("null prototype", function(assert) {
    var a = { a: "foo" }
    var b = Object.create(null)
    b.b = "bar";

    assert.deepEqual(extend(a, b), { a: "foo", b: "bar" })
    assert.end()
})

test("null prototype mutable", function (assert) {
    var a = { foo: "bar" }
    var b = Object.create(null)
    b.bar = "baz";

    mutableExtend(a, b)

    assert.equal(a.bar, "baz")
    assert.end()
})
