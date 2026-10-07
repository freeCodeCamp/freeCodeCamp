var tap = require("tap")
  , test = tap.test
  , ProtoList = require("../proto-list.js")

tap.plan(1)

tap.test("protoList tests", function (t) {
  var p = new ProtoList
  p.push({foo:"bar"})
  p.push({})
  p.set("foo", "baz")
  t.equal(p.get("foo"), "baz")

  var p = new ProtoList
  p.push({foo:"bar"})
  p.set("foo", "baz")
  t.equal(p.get("foo"), "baz")
  t.equal(p.length, 1)
  p.pop()
  t.equal(p.length, 0)
  p.set("foo", "asdf")
  t.equal(p.length, 1)
  t.equal(p.get("foo"), "asdf")
  p.push({bar:"baz"})
  t.equal(p.length, 2)
  t.equal(p.get("foo"), "asdf")
  p.shift()
  t.equal(p.length, 1)
  t.equal(p.get("foo"), undefined)


  p.unshift({foo:"blo", bar:"rab"})
  p.unshift({foo:"boo"})
  t.equal(p.length, 3)
  t.equal(p.get("foo"), "boo")
  t.equal(p.get("bar"), "rab")

  var ret = p.splice(1, 1, {bar:"bar"})
  t.same(ret, [{foo:"blo", bar:"rab"}])
  t.equal(p.get("bar"), "bar")

  // should not inherit default object properties
  t.equal(p.get('hasOwnProperty'), undefined)

  // unless we give it those.
  p.root = {}
  t.equal(p.get('hasOwnProperty'), {}.hasOwnProperty)

  p.root = {default:'monkey'}
  t.equal(p.get('default'), 'monkey')

  p.push({red:'blue'})
  p.push({red:'blue'})
  p.push({red:'blue'})
  while (p.length) {
    t.equal(p.get('default'), 'monkey')
    p.shift()
  }

  t.end()
})
