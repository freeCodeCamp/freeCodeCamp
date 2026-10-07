var test = require("tape")

var isString = require("../index")

test("isString is a function", function (assert) {
    assert.equal(typeof isString, "function")
    assert.end()
})

test("string literal is truthy", function (assert) {
    assert.equal(isString("hello"), true)
    assert.end()
})

test("empty string is truthy", function (assert) {
    assert.equal(isString(""), true)
    assert.end()
})

test("string object is truthy", function (assert) {
    assert.equal(isString(new String("hello")), true)
    assert.end()
})

test("number is falsey", function (assert) {
    assert.equal(isString(9), false)
    assert.end()
})

test("boolean is falsey", function (assert) {
    assert.equal(isString(true), false)
    assert.end()
})

test("date is falsey", function (assert) {
    assert.equal(isString(new Date()), false)
    assert.end()
})

test("object is falsey", function (assert) {
    assert.equal(isString({}), false)
    assert.end()
})
test("null is falsey", function (assert) {
    assert.equal(isString(null), false)
    assert.end()
})
test("undefined is falsey", function (assert) {
    assert.equal(isString(undefined), false)
    assert.end()
})
