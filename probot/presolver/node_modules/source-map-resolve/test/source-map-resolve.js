// Copyright 2014, 2015, 2016, 2017 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

var test         = require("tape")
var asyncify     = require("simple-asyncify")
var common       = require("./common")
var u            = common.u
var read         = common.read
var Throws       = common.Throws
var identity     = common.identity

var sourceMapResolve = require("../")

// Polyfills.
require("setimmediate")
if (typeof window !== "undefined" && !window.atob) {
  window.atob = require("Base64").atob
}

"use strict"

var map = {
  simple: {
    mappings: "AAAA",
    sources:  ["foo.js"],
    names:    []
  },
  sourceRoot: {
    mappings:   "AAAA",
    sourceRoot: "/static/js/app/",
    sources:    ["foo.js", "lib/bar.js", "../vendor/dom.js", "/version.js", "//foo.org/baz.js"],
    names:      []
  },
  sourceRootNoSlash: {
    mappings:   "AAAA",
    sourceRoot: "/static/js/app",
    sources:    ["foo.js", "lib/bar.js", "../vendor/dom.js", "/version.js", "//foo.org/baz.js"],
    names:      []
  },
  sourceRootEmpty: {
    mappings:   "AAAA",
    sourceRoot: "",
    sources:    ["foo.js", "lib/bar.js", "../vendor/dom.js", "/version.js", "//foo.org/baz.js"],
    names:      []
  },
  sourcesContent: {
    mappings:       "AAAA",
    sourceRoot:     "/static/js/app/",
    sources:        ["foo.js", "lib/bar.js", "../vendor/dom.js", "/version.js", "//foo.org/baz.js"],
    sourcesContent: ["foo.js", "lib/bar.js", "../vendor/dom.js", "/version.js", "//foo.org/baz.js"],
    names:          []
  },
  mixed: {
    mappings:       "AAAA",
    sources:        ["foo.js", "lib/bar.js", "../vendor/dom.js", "/version.js", "//foo.org/baz.js"],
    sourcesContent: ["foo.js", null        , null              , "/version.js", "//foo.org/baz.js"],
    names:          []
  },
  noSources: {
    mappings: "",
    sources:  [],
    names:    []
  },
  empty: {}
}
map.simpleString = JSON.stringify(map.simple)
map.XSSIsafe = ")]}'" + map.simpleString

var code = {
  fileRelative:       u("foo.js.map"),
  domainRelative:     u("/foo.js.map"),
  schemeRelative:     u("//foo.org/foo.js.map"),
  absolute:           u("https://foo.org/foo.js.map"),
  dataUri:            u("data:application/json," +
                        "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                        "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D"),
  base64:             u("data:application/json;base64," +
                        "eyJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VzIjpbImZvby5qcyJdLCJuYW1lcyI6W119"),
  dataUriText:        u("data:text/json," +
                        "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                        "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D"),
  dataUriParameter:   u("data:application/json;charset=UTF-8;foo=bar," +
                        "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                        "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D"),
  dataUriNoMime:      u("data:,foo"),
  dataUriInvalidMime: u("data:text/html,foo"),
  dataUriInvalidJSON: u("data:application/json,foo"),
  dataUriXSSIsafe:    u("data:application/json," + ")%5D%7D%27" +
                        "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                        "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D"),
  dataUriEmpty:       u("data:"),
  noMap:              ""
}


function testResolveSourceMap(method, sync) {
  return function(t) {
    var wrap = (sync ? identity : asyncify)

    var codeUrl = "http://example.com/a/b/c/foo.js"

    t.plan(1 + 12*3 + 6*4)

    t.equal(typeof method, "function", "is a function")

    if (sync) {
      method = asyncify(method)
    }

    var next = false
    function isAsync() { t.ok(next, "is async") }

    method(code.fileRelative, codeUrl, wrap(read(map.simpleString)), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "foo.js.map",
        url:               "http://example.com/a/b/c/foo.js.map",
        sourcesRelativeTo: "http://example.com/a/b/c/foo.js.map",
        map:               map.simple
      }, "fileRelative")
      isAsync()
    })

    method(code.domainRelative, codeUrl, wrap(read(map.simpleString)), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "/foo.js.map",
        url:               "http://example.com/foo.js.map",
        sourcesRelativeTo: "http://example.com/foo.js.map",
        map:               map.simple
      }, "domainRelative")
      isAsync()
    })

    method(code.schemeRelative, codeUrl, wrap(read(map.simpleString)), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "//foo.org/foo.js.map",
        url:               "http://foo.org/foo.js.map",
        sourcesRelativeTo: "http://foo.org/foo.js.map",
        map:               map.simple
      }, "schemeRelative")
      isAsync()
    })

    method(code.absolute, codeUrl, wrap(read(map.simpleString)), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "https://foo.org/foo.js.map",
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               map.simple
      }, "absolute")
      isAsync()
    })

    method(code.dataUri, codeUrl, wrap(Throws), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "data:application/json," +
                           "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                           "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               map.simple
      }, "dataUri")
      isAsync()
    })

    method(code.base64, codeUrl, wrap(Throws), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "data:application/json;base64," +
                           "eyJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VzIjpbImZvby5qcyJdLCJuYW1lcyI6W119",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               map.simple
      }, "base64")
      isAsync()
    })

    method(code.dataUriText, codeUrl, wrap(Throws), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "data:text/json," +
                           "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                           "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               map.simple
      }, "dataUriText")
      isAsync()
    })

    method(code.dataUriParameter, codeUrl, wrap(Throws), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "data:application/json;charset=UTF-8;foo=bar," +
                           "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                           "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               map.simple
      }, "dataUriParameter")
      isAsync()
    })

    method(code.dataUriNoMime, codeUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "data:,foo",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               "foo"
      }, "dataUriNoMime .sourceMapData")
      t.ok(error.message.match(/mime type.+text\/plain/), "dataUriNoMime")
      t.notOk(result)
      isAsync()
    })

    method(code.dataUriInvalidMime, codeUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "data:text/html,foo",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               "foo"
      }, "dataUriInvalidMime .sourceMapData")
      t.ok(error.message.match(/mime type.+text\/html/), "dataUriInvalidMime")
      t.notOk(result)
      isAsync()
    })

    method(code.dataUriInvalidJSON, codeUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "data:application/json,foo",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               "foo"
      }, "dataUriInvalidJSON .sourceMapData")
      t.ok(error instanceof SyntaxError && error.message !== "data:application/json,foo",
        "dataUriInvalidJSON")
      t.notOk(result)
      isAsync()
    })

    method(code.dataUriXSSIsafe, codeUrl, wrap(Throws), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "data:application/json," + ")%5D%7D%27" +
                           "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                           "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               map.simple
      }, "dataUriXSSIsafe")
      isAsync()
    })

    method(code.dataUriEmpty, codeUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "data:",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               ""
      }, "dataUriEmpty .sourceMapData")
      t.ok(error.message.match(/mime type.+text\/plain/), "dataUriEmpty")
      t.notOk(result)
      isAsync()
    })

    method(code.noMap, codeUrl, wrap(Throws), function(error, result) {
      t.error(error)
      t.equal(result, null, "noMap")
      isAsync()
    })

    method(code.absolute, codeUrl, wrap(read([map.simpleString])), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "https://foo.org/foo.js.map",
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               map.simple
      }, "read non-string")
      isAsync()
    })

    method(code.absolute, codeUrl, wrap(read("invalid JSON")), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "https://foo.org/foo.js.map",
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               "invalid JSON"
      }, "read invalid JSON .sourceMapData")
      t.ok(error instanceof SyntaxError, "read invalid JSON")
      t.notOk(result)
      isAsync()
    })

    method(code.absolute, codeUrl, wrap(read(map.XSSIsafe)), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "https://foo.org/foo.js.map",
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               map.simple
      }, "XSSIsafe map")
      isAsync()
    })

    method(code.absolute, codeUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "https://foo.org/foo.js.map",
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               null
      }, "read throws .sourceMapData")
      t.equal(error.message, "https://foo.org/foo.js.map", "read throws")
      t.notOk(result)
      isAsync()
    })

    next = true
  }
}

test(".resolveSourceMap",     testResolveSourceMap(sourceMapResolve.resolveSourceMap,    false))

test(".resolveSourceMapSync", testResolveSourceMap(sourceMapResolve.resolveSourceMapSync, true))


function testResolveSources(method, sync) {
  return function(t) {
    var wrap = (sync ? identity : asyncify)

    var mapUrl = "http://example.com/a/b/c/foo.js.map"

    t.plan(1 + 11*3 + 4)

    t.equal(typeof method, "function", "is a function")

    if (sync) {
      method = asyncify(method)
    }

    var next = false
    function isAsync() { t.ok(next, "is async") }

    var options

    method(map.simple, mapUrl, wrap(identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: ["http://example.com/a/b/c/foo.js"],
        sourcesContent:  ["http://example.com/a/b/c/foo.js"]
      }, "simple")
      isAsync()
    })

    method(map.sourceRoot, mapUrl, wrap(identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: [
          "http://example.com/static/js/app/foo.js",
          "http://example.com/static/js/app/lib/bar.js",
          "http://example.com/static/js/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ],
        sourcesContent: [
          "http://example.com/static/js/app/foo.js",
          "http://example.com/static/js/app/lib/bar.js",
          "http://example.com/static/js/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ]
      }, "sourceRoot")
      isAsync()
    })

    options = {sourceRoot: false}
    method(map.sourceRoot, mapUrl, wrap(identity), options, function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: [
          "http://example.com/a/b/c/foo.js",
          "http://example.com/a/b/c/lib/bar.js",
          "http://example.com/a/b/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ],
        sourcesContent: [
          "http://example.com/a/b/c/foo.js",
          "http://example.com/a/b/c/lib/bar.js",
          "http://example.com/a/b/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ]
      }, "ignore sourceRoot")
      isAsync()
    })

    options = {sourceRoot: "/static/js/"}
    method(map.sourceRoot, mapUrl, wrap(identity), options, function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: [
          "http://example.com/static/js/foo.js",
          "http://example.com/static/js/lib/bar.js",
          "http://example.com/static/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ],
        sourcesContent: [
          "http://example.com/static/js/foo.js",
          "http://example.com/static/js/lib/bar.js",
          "http://example.com/static/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ]
      }, "custom sourceRoot")
      isAsync()
    })

    method(map.sourceRootNoSlash, mapUrl, wrap(identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: [
          "http://example.com/static/js/app/foo.js",
          "http://example.com/static/js/app/lib/bar.js",
          "http://example.com/static/js/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ],
        sourcesContent: [
          "http://example.com/static/js/app/foo.js",
          "http://example.com/static/js/app/lib/bar.js",
          "http://example.com/static/js/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ]
      }, "sourceRootNoSlash")
      isAsync()
    })

    method(map.sourceRootEmpty, mapUrl, wrap(identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: [
          "http://example.com/a/b/c/foo.js",
          "http://example.com/a/b/c/lib/bar.js",
          "http://example.com/a/b/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ],
        sourcesContent: [
          "http://example.com/a/b/c/foo.js",
          "http://example.com/a/b/c/lib/bar.js",
          "http://example.com/a/b/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ]
      }, "sourceRootEmpty")
      isAsync()
    })

    method(map.sourcesContent, mapUrl, wrap(Throws), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: [
          "http://example.com/static/js/app/foo.js",
          "http://example.com/static/js/app/lib/bar.js",
          "http://example.com/static/js/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ],
        sourcesContent: [
          "foo.js",
          "lib/bar.js",
          "../vendor/dom.js",
          "/version.js",
          "//foo.org/baz.js"
        ]
      }, "sourcesContent")
      isAsync()
    })

    method(map.mixed, mapUrl, wrap(identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: [
          "http://example.com/a/b/c/foo.js",
          "http://example.com/a/b/c/lib/bar.js",
          "http://example.com/a/b/vendor/dom.js",
          "http://example.com/version.js",
          "http://foo.org/baz.js"
        ],
        sourcesContent: [
          "foo.js",
          "http://example.com/a/b/c/lib/bar.js",
          "http://example.com/a/b/vendor/dom.js",
          "/version.js",
          "//foo.org/baz.js"
        ]
      }, "mixed")
      isAsync()
    })

    method(map.noSources, mapUrl, wrap(identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: [],
        sourcesContent: []
      }, "noSources")
      isAsync()
    })

    method(map.empty, mapUrl, wrap(identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: [],
        sourcesContent: []
      }, "empty")
      isAsync()
    })

    method(map.simple, mapUrl, wrap(read(["non", "string"])), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourcesResolved: ["http://example.com/a/b/c/foo.js"],
        sourcesContent:  ["non,string"]
      }, "read non-string")
      isAsync()
    })

    method(map.mixed, mapUrl, wrap(Throws), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/a/b/c/foo.js",
        "http://example.com/a/b/c/lib/bar.js",
        "http://example.com/a/b/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "read throws .sourcesResolved")
      var sourcesContent = result.sourcesContent
      for (var index = 0, len = sourcesContent.length; index < len; index++) {
        var item = sourcesContent[index]
        if (item instanceof Error) {
          sourcesContent[index] = null
        }
      }
      t.deepEqual(sourcesContent, [
        "foo.js",
        null,
        null,
        "/version.js",
        "//foo.org/baz.js"
      ], "read throws .sourcesContent")
      isAsync()
    })

    next = true
  }
}

test(".resolveSources",     testResolveSources(sourceMapResolve.resolveSources,    false))

test(".resolveSourcesSync", testResolveSources(sourceMapResolve.resolveSourcesSync, true))

test(".resolveSourcesSync no read", function(t) {
  t.plan(1)

  var mapUrl = "http://example.com/a/b/c/foo.js.map"
  var result = sourceMapResolve.resolveSourcesSync(map.mixed, mapUrl, null)

  t.deepEqual(result, {
    sourcesResolved: [
      "http://example.com/a/b/c/foo.js",
      "http://example.com/a/b/c/lib/bar.js",
      "http://example.com/a/b/vendor/dom.js",
      "http://example.com/version.js",
      "http://foo.org/baz.js"
    ],
    sourcesContent: []
  })
})


function testResolve(method, sync) {
  return function(t) {
    var wrap = (sync ? identity : asyncify)
    var wrapMap = function(mapFn, fn) {
      return wrap(function(url) {
        if (/\.map$/.test(url)) {
          return mapFn(url)
        }
        return fn(url)
      })
    }

    var codeUrl = "http://example.com/a/b/c/foo.js"

    t.plan(1 + 15*3 + 21*4 + 4)

    t.equal(typeof method, "function", "is a function")

    if (sync) {
      method = asyncify(method)
    }

    var next = false
    function isAsync() { t.ok(next, "is async") }

    var readSimple = wrapMap(read(map.simpleString), identity)

    method(code.fileRelative, codeUrl, readSimple, function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "foo.js.map",
        url:               "http://example.com/a/b/c/foo.js.map",
        sourcesRelativeTo: "http://example.com/a/b/c/foo.js.map",
        map:               map.simple,
        sourcesResolved:   ["http://example.com/a/b/c/foo.js"],
        sourcesContent:    ["http://example.com/a/b/c/foo.js"]
      }, "fileRelative")
      isAsync()
    })

    method(code.domainRelative, codeUrl, readSimple, function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "/foo.js.map",
        url:               "http://example.com/foo.js.map",
        sourcesRelativeTo: "http://example.com/foo.js.map",
        map:               map.simple,
        sourcesResolved:   ["http://example.com/foo.js"],
        sourcesContent:    ["http://example.com/foo.js"]
      }, "domainRelative")
      isAsync()
    })

    method(code.schemeRelative, codeUrl, readSimple, function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "//foo.org/foo.js.map",
        url:               "http://foo.org/foo.js.map",
        sourcesRelativeTo: "http://foo.org/foo.js.map",
        map:               map.simple,
        sourcesResolved:   ["http://foo.org/foo.js"],
        sourcesContent:    ["http://foo.org/foo.js"]
      }, "schemeRelative")
      isAsync()
    })

    method(code.absolute, codeUrl, readSimple, function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "https://foo.org/foo.js.map",
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               map.simple,
        sourcesResolved:   ["https://foo.org/foo.js"],
        sourcesContent:    ["https://foo.org/foo.js"]
      }, "absolute")
      isAsync()
    })

    method(code.dataUri, codeUrl, wrapMap(Throws, identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "data:application/json," +
                           "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                           "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               map.simple,
        sourcesResolved:   ["http://example.com/a/b/c/foo.js"],
        sourcesContent:    ["http://example.com/a/b/c/foo.js"]
      }, "dataUri")
      isAsync()
    })

    method(code.base64, codeUrl, wrapMap(Throws, identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "data:application/json;base64," +
                           "eyJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VzIjpbImZvby5qcyJdLCJuYW1lcyI6W119",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               map.simple,
        sourcesResolved:   ["http://example.com/a/b/c/foo.js"],
        sourcesContent:    ["http://example.com/a/b/c/foo.js"]
      }, "base64")
      isAsync()
    })

    method(code.dataUriText, codeUrl, wrapMap(Throws, identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "data:text/json," +
                           "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                           "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               map.simple,
        sourcesResolved:   ["http://example.com/a/b/c/foo.js"],
        sourcesContent:    ["http://example.com/a/b/c/foo.js"]
      }, "dataUriText")
      isAsync()
    })

    method(code.dataUriParameter, codeUrl, wrapMap(Throws, identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "data:application/json;charset=UTF-8;foo=bar," +
                           "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                           "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               map.simple,
        sourcesResolved:   ["http://example.com/a/b/c/foo.js"],
        sourcesContent:    ["http://example.com/a/b/c/foo.js"]
      }, "dataUriParameter")
      isAsync()
    })

    method(code.dataUriNoMime, codeUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "data:,foo",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               "foo"
      }, "dataUriNoMime .sourceMapData")
      t.ok(error.message.match(/mime type.+text\/plain/), "dataUriNoMime")
      t.notOk(result)
      isAsync()
    })

    method(code.dataUriInvalidMime, codeUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "data:text/html,foo",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               "foo"
      }, "dataUriInvalidMime .sourceMapData")
      t.ok(error.message.match(/mime type.+text\/html/), "dataUriInvalidMime")
      t.notOk(result)
      isAsync()
    })

    method(code.dataUriInvalidJSON, codeUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "data:application/json,foo",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               "foo"
      }, "dataUriInvalidJSON .sourceMapData")
      t.ok(error instanceof SyntaxError && error.message !== "data:application/json,foo",
        "dataUriInvalidJSON")
      t.notOk(result)
      isAsync()
    })

    method(code.dataUriXSSIsafe, codeUrl, wrapMap(Throws, identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "data:application/json," + ")%5D%7D%27" +
                           "%7B%22mappings%22%3A%22AAAA%22%2C%22sources%22%3A%5B%22" +
                           "foo.js%22%5D%2C%22names%22%3A%5B%5D%7D",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               map.simple,
        sourcesResolved:   ["http://example.com/a/b/c/foo.js"],
        sourcesContent:    ["http://example.com/a/b/c/foo.js"]
      }, "dataUriXSSIsafe")
      isAsync()
    })

    method(code.dataUriEmpty, codeUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "data:",
        url:               null,
        sourcesRelativeTo: codeUrl,
        map:               ""
      }, "dataUriEmpty .sourceMapData")
      t.ok(error.message.match(/mime type.+text\/plain/), "dataUriEmpty")
      t.notOk(result)
      isAsync()
    })

    method(code.noMap, codeUrl, wrap(Throws), function(error, result) {
      t.error(error)
      t.equal(result, null, "noMap")
      isAsync()
    })

    method(code.absolute, codeUrl, wrap(read([map.simpleString])), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "https://foo.org/foo.js.map",
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               map.simple,
        sourcesResolved:   ["https://foo.org/foo.js"],
        sourcesContent:    [map.simpleString]
      }, "read non-string")
      isAsync()
    })

    method(code.absolute, codeUrl, wrap(read("invalid JSON")), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "https://foo.org/foo.js.map",
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               "invalid JSON"
      }, "read invalid JSON .sourceMapData")
      t.ok(error instanceof SyntaxError, "read invalid JSON")
      t.notOk(result)
      isAsync()
    })

    method(code.absolute, codeUrl, wrapMap(read(map.XSSIsafe), identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  "https://foo.org/foo.js.map",
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               map.simple,
        sourcesResolved:   ["https://foo.org/foo.js"],
        sourcesContent:    ["https://foo.org/foo.js"]
      }, "XSSIsafe map")
      isAsync()
    })

    method(code.absolute, codeUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  "https://foo.org/foo.js.map",
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               null
      }, "read throws .sourceMapData")
      t.equal(error.message, "https://foo.org/foo.js.map", "read throws")
      t.notOk(result)
      isAsync()
    })

    function readMap(what) {
      return wrapMap(read(JSON.stringify(what)), identity)
    }

    var options

    method(code.fileRelative, codeUrl, readMap(map.simple), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, ["http://example.com/a/b/c/foo.js"], "simple")
      t.deepEqual(result.sourcesContent,  ["http://example.com/a/b/c/foo.js"], "simple")
      isAsync()
    })

    method(code.fileRelative, codeUrl, readMap(map.sourceRoot), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/static/js/app/foo.js",
        "http://example.com/static/js/app/lib/bar.js",
        "http://example.com/static/js/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "sourceRoot")
      t.deepEqual(result.sourcesContent, [
        "http://example.com/static/js/app/foo.js",
        "http://example.com/static/js/app/lib/bar.js",
        "http://example.com/static/js/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "sourceRoot")
      isAsync()
    })

    options = {sourceRoot: false}
    method(code.fileRelative, codeUrl, readMap(map.sourceRoot), options, function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/a/b/c/foo.js",
        "http://example.com/a/b/c/lib/bar.js",
        "http://example.com/a/b/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "ignore sourceRoot")
      t.deepEqual(result.sourcesContent, [
        "http://example.com/a/b/c/foo.js",
        "http://example.com/a/b/c/lib/bar.js",
        "http://example.com/a/b/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "ignore sourceRoot")
      isAsync()
    })

    options = {sourceRoot: "/static/js/"}
    method(code.fileRelative, codeUrl, readMap(map.sourceRoot), options, function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/static/js/foo.js",
        "http://example.com/static/js/lib/bar.js",
        "http://example.com/static/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "custom sourceRoot")
      t.deepEqual(result.sourcesContent, [
        "http://example.com/static/js/foo.js",
        "http://example.com/static/js/lib/bar.js",
        "http://example.com/static/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "custom sourceRoot")
      isAsync()
    })

    method(code.fileRelative, codeUrl, readMap(map.sourceRootNoSlash), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/static/js/app/foo.js",
        "http://example.com/static/js/app/lib/bar.js",
        "http://example.com/static/js/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "sourceRootNoSlash")
      t.deepEqual(result.sourcesContent, [
        "http://example.com/static/js/app/foo.js",
        "http://example.com/static/js/app/lib/bar.js",
        "http://example.com/static/js/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "sourceRootNoSlash")
      isAsync()
    })

    method(code.fileRelative, codeUrl, readMap(map.sourceRootEmpty), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/a/b/c/foo.js",
        "http://example.com/a/b/c/lib/bar.js",
        "http://example.com/a/b/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "sourceRootEmpty")
      t.deepEqual(result.sourcesContent, [
        "http://example.com/a/b/c/foo.js",
        "http://example.com/a/b/c/lib/bar.js",
        "http://example.com/a/b/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "sourceRootEmpty")
      isAsync()
    })

    method(code.fileRelative, codeUrl, readMap(map.sourcesContent), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/static/js/app/foo.js",
        "http://example.com/static/js/app/lib/bar.js",
        "http://example.com/static/js/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "sourcesContent")
      t.deepEqual(result.sourcesContent, [
        "foo.js",
        "lib/bar.js",
        "../vendor/dom.js",
        "/version.js",
        "//foo.org/baz.js"
      ], "sourcesContent")
      isAsync()
    })

    method(code.fileRelative, codeUrl, readMap(map.mixed), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/a/b/c/foo.js",
        "http://example.com/a/b/c/lib/bar.js",
        "http://example.com/a/b/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "mixed")
      t.deepEqual(result.sourcesContent, [
        "foo.js",
        "http://example.com/a/b/c/lib/bar.js",
        "http://example.com/a/b/vendor/dom.js",
        "/version.js",
        "//foo.org/baz.js"
      ], "mixed")
      isAsync()
    })

    method(code.fileRelative, codeUrl, readMap(map.noSources), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [], "noSources")
      t.deepEqual(result.sourcesContent, [], "noSources")
      isAsync()
    })

    method(code.fileRelative, codeUrl, readMap(map.empty), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [], "noSources")
      t.deepEqual(result.sourcesContent, [], "noSources")
      isAsync()
    })

    method(code.fileRelative, codeUrl, wrap(read([map.simpleString])), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, ["http://example.com/a/b/c/foo.js"], "read non-string")
      t.deepEqual(result.sourcesContent,  [map.simpleString],                  "read non-string")
      isAsync()
    })

    function ThrowsMap(what) {
      return wrapMap(read(JSON.stringify(what)), Throws)
    }

    method(code.fileRelative, codeUrl, ThrowsMap(map.mixed), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/a/b/c/foo.js",
        "http://example.com/a/b/c/lib/bar.js",
        "http://example.com/a/b/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "read throws .sourcesResolved")
      var sourcesContent = result.sourcesContent
      for (var index = 0, len = sourcesContent.length; index < len; index++) {
        var item = sourcesContent[index]
        if (item instanceof Error) {
          sourcesContent[index] = null
        }
      }
      t.deepEqual(sourcesContent, [
        "foo.js",
        null,
        null,
        "/version.js",
        "//foo.org/baz.js"
      ], "read throws .sourcesContent")
      isAsync()
    })

    var mapUrl = "https://foo.org/foo.js.map"

    method(null, mapUrl, readSimple, function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  null,
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               map.simple,
        sourcesResolved:   ["https://foo.org/foo.js"],
        sourcesContent:    ["https://foo.org/foo.js"]
      }, "mapUrl simple")
      isAsync()
    })

    method(null, mapUrl, wrap(read([map.simpleString])), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  null,
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               map.simple,
        sourcesResolved:   ["https://foo.org/foo.js"],
        sourcesContent:    [map.simpleString]
      }, "mapUrl read non-string")
      isAsync()
    })

    method(null, mapUrl, wrap(read("invalid JSON")), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  null,
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               "invalid JSON"
      }, "mapUrl read invalid JSON .sourceMapData")
      t.ok(error instanceof SyntaxError, "mapUrl read invalid JSON")
      t.notOk(result)
      isAsync()
    })

    method(null, mapUrl, wrapMap(read(map.XSSIsafe), identity), function(error, result) {
      t.error(error)
      t.deepEqual(result, {
        sourceMappingURL:  null,
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               map.simple,
        sourcesResolved:   ["https://foo.org/foo.js"],
        sourcesContent:    ["https://foo.org/foo.js"]
      }, "mapUrl XSSIsafe map")
      isAsync()
    })

    method(null, mapUrl, wrap(Throws), function(error, result) {
      t.deepEqual(error.sourceMapData, {
        sourceMappingURL:  null,
        url:               "https://foo.org/foo.js.map",
        sourcesRelativeTo: "https://foo.org/foo.js.map",
        map:               null
      }, "mapUrl read throws .sourceMapData")
      t.equal(error.message, "https://foo.org/foo.js.map", "mapUrl read throws")
      t.notOk(result)
      isAsync()
    })

    mapUrl = "http://example.com/a/b/c/foo.js.map"

    options = {sourceRoot: "/static/js/"}
    method(null, mapUrl, readMap(map.sourceRoot), options, function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/static/js/foo.js",
        "http://example.com/static/js/lib/bar.js",
        "http://example.com/static/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "mapUrl custom sourceRoot")
      t.deepEqual(result.sourcesContent, [
        "http://example.com/static/js/foo.js",
        "http://example.com/static/js/lib/bar.js",
        "http://example.com/static/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "mapUrl custom sourceRoot")
      isAsync()
    })

    method(null, mapUrl, readMap(map.mixed), function(error, result) {
      t.error(error)
      t.deepEqual(result.sourcesResolved, [
        "http://example.com/a/b/c/foo.js",
        "http://example.com/a/b/c/lib/bar.js",
        "http://example.com/a/b/vendor/dom.js",
        "http://example.com/version.js",
        "http://foo.org/baz.js"
      ], "mapUrl mixed")
      t.deepEqual(result.sourcesContent, [
        "foo.js",
        "http://example.com/a/b/c/lib/bar.js",
        "http://example.com/a/b/vendor/dom.js",
        "/version.js",
        "//foo.org/baz.js"
      ], "mapUrl mixed")
      isAsync()
    })

    next = true
  }
}

test(".resolve",     testResolve(sourceMapResolve.resolve,    false))

test(".resolveSync", testResolve(sourceMapResolve.resolveSync, true))

test(".parseMapToJSON", function(t) {
  t.plan(1)
  t.deepEqual(sourceMapResolve.parseMapToJSON(map.XSSIsafe), map.simple)
})
