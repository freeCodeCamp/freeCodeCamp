// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

var test = require("tape")

var resolveUrl = require("../")

"use strict"

test("resolveUrl", function(t) {

  t.plan(7)

  t.equal(typeof resolveUrl, "function", "is a function")

  t.equal(
    resolveUrl("https://example.com/"),
    "https://example.com/"
  )

  var loc = "https://example.com/articles/resolving-urls/edit"

  t.equal(
    resolveUrl(loc, "remove"),
    "https://example.com/articles/resolving-urls/remove"
  )

  t.equal(
    resolveUrl(loc, "/static/scripts/app.js"),
    "https://example.com/static/scripts/app.js"
  )

  t.equal(
    resolveUrl(loc, "/static/scripts/app.js", "../source-maps/app.js.map"),
    "https://example.com/static/source-maps/app.js.map"
  )

  t.equal(
    resolveUrl(loc, "/static/scripts/app.js", "../source-maps/app.js.map", "../coffee/app.coffee"),
    "https://example.com/static/coffee/app.coffee"
  )

  t.equal(
    resolveUrl(loc, "//cdn.example.com/jquery.js"),
    "https://cdn.example.com/jquery.js"
  )

})

test("edge cases", function(t) {

  t.plan(4)

  t["throws"](resolveUrl, /at least one argument/, "throws with no arguments")

  var accidentallyUndefined
  var result
  t.doesNotThrow(
    function() { result = resolveUrl(accidentallyUndefined) },
    "undefined is still an argument"
  )
  t.ok(result.match(/\/undefined$/), "undefined is stringified")

  t.equal(
    resolveUrl("http://foo.org/test", undefined, {}, ["a/b"], null),
    "http://foo.org/a/null",
    "arguments are stringified"
  )

})
