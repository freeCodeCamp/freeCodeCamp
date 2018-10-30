// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

var expect = require("expect.js")

var sourceMappingURL = require("../")

var comments = {

  universal: [
    "/*# sourceMappingURL=foo.js.map */"
  ],

  js: [
    "//# sourceMappingURL=foo.js.map"
  ],

  block: [
    "/*",
    "# sourceMappingURL=foo.js.map",
    "*/"
  ],

  mix: [
    "/*",
    "//# sourceMappingURL=foo.js.map",
    "*/"
  ]

}

var nonTrailingComments = {

  jsLeading: {
    contents: [
      "//# sourceMappingURL=foo.js.map",
      "(function(){})"
    ],
    solution: [
      "(function(){})"
    ]
  },

  mixEmbedded: {
    contents: [
      "/*! Library Name v1.0.0",
      "//# sourceMappingURL=foo.js.map",
      "*/",
      "(function(){})"
    ],
    solution: [
      "/*! Library Name v1.0.0",
      "*/",
      "(function(){})"
    ]
  }

}

function forEachComment(fn) {
  forOf(comments, function(name, comment) {
    var description = "the '" + name + "' syntax with "
    fn(comment.join("\n"),   description + "regular newlines")
    fn(comment.join("\r\n"), description + "Windows newlines")
  })
}

function forEachNonTrailingComment(fn) {
  forOf(nonTrailingComments, function(name, comment) {

    var description = "the '" + name + "' syntax with "

    fn({
      contents: comment.contents.join("\n"),
      solution: comment.solution.join("\n")
    }, description + "regular newlines")

    fn({
      contents: comment.contents.join("\r\n"),
      solution: comment.solution.join("\r\n")
    }, description + "Windows newlines")
  })
}

function forOf(obj, fn) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      fn(key, obj[key])
    }
  }
}


describe("sourceMappingURL", function() {

  describe(".getFrom", function() {

    forEachComment(function(comment, description) {

      it("gets the url from " + description, function() {
        expect(sourceMappingURL.getFrom("code\n" + comment))
          .to.equal("foo.js.map")

        expect(sourceMappingURL.getFrom("code" + comment))
          .to.equal("foo.js.map")

        expect(sourceMappingURL.getFrom(comment))
          .to.equal("foo.js.map")
      })

    })

    forEachNonTrailingComment(function(comment, description) {

      it("gets the url from " + description, function() {
        expect(sourceMappingURL.getFrom("code\n" + comment.contents))
          .to.equal("foo.js.map")

        expect(sourceMappingURL.getFrom("code" + comment.contents))
          .to.equal("foo.js.map")

        expect(sourceMappingURL.getFrom(comment.contents))
          .to.equal("foo.js.map")
      })

    })


    it("returns null if no comment", function() {
      expect(sourceMappingURL.getFrom("code"))
        .to.equal(null)
    })


    it("can return an empty string as url", function() {
      expect(sourceMappingURL.getFrom("/*# sourceMappingURL= */"))
        .to.equal("")
    })


    it("is detachable", function() {
      var get = sourceMappingURL.getFrom
      expect(get("/*# sourceMappingURL=foo */"))
        .to.equal("foo")
    })

  })


  describe(".existsIn", function() {

    forEachComment(function(comment, description) {

      it("returns true for " + description, function() {
        expect(sourceMappingURL.existsIn("code\n" + comment))
          .to.equal(true)

        expect(sourceMappingURL.existsIn("code" + comment))
          .to.equal(true)

        expect(sourceMappingURL.existsIn(comment))
          .to.equal(true)
      })

    })

    forEachNonTrailingComment(function(comment, description) {

      it("returns true for " + description, function() {
        expect(sourceMappingURL.existsIn("code\n" + comment.contents))
          .to.equal(true)

        expect(sourceMappingURL.existsIn("code" + comment.contents))
          .to.equal(true)

        expect(sourceMappingURL.existsIn(comment.contents))
          .to.equal(true)
      })

    })


    it("returns false if no comment", function() {
      expect(sourceMappingURL.existsIn("code"))
        .to.equal(false)
    })


    it("is detachable", function() {
      var has = sourceMappingURL.existsIn
      expect(has("/*# sourceMappingURL=foo */"))
        .to.equal(true)
    })

  })


  describe(".removeFrom", function() {

    forEachComment(function(comment, description) {

      it("removes the comment for " + description, function() {
        expect(sourceMappingURL.removeFrom("code\n" + comment))
          .to.equal("code\n")

        expect(sourceMappingURL.removeFrom("code" + comment))
          .to.equal("code")

        expect(sourceMappingURL.removeFrom(comment))
          .to.equal("")
      })

    })

    forEachNonTrailingComment(function(comment, description) {

      it("removes the comment for " + description, function() {
        expect(sourceMappingURL.removeFrom("code\n" + comment.contents))
          .to.equal("code\n" + comment.solution)

        expect(sourceMappingURL.removeFrom("code" + comment.contents))
          .to.equal("code" + comment.solution)

        expect(sourceMappingURL.removeFrom(comment.contents))
          .to.equal(comment.solution)
      })

    })


    it("does nothing if no comment", function() {
      expect(sourceMappingURL.removeFrom("code\n"))
        .to.equal("code\n")
    })


    it("is detachable", function() {
      var remove = sourceMappingURL.removeFrom
      expect(remove("/*# sourceMappingURL=foo */"))
        .to.equal("")
    })

  })


  describe(".insertBefore", function() {

    forEachComment(function(comment, description) {

      it("inserts a string before the comment for " + description, function() {
        expect(sourceMappingURL.insertBefore("code\n" + comment, "more code\n"))
          .to.equal("code\nmore code\n" + comment)

        expect(sourceMappingURL.insertBefore("code" + comment, "\nmore code"))
          .to.equal("code\nmore code" + comment)

        expect(sourceMappingURL.insertBefore(comment, "some code"))
          .to.equal("some code" + comment)
      })

    })


    it("inserts a string before an embedded comment", function() {
      expect(sourceMappingURL.insertBefore("/*! Library Name v1.0.0\n" +
        "//# sourceMappingURL=foo.js.map\n*/\n(function(){})", "code\n"))
        .to.equal("/*! Library Name v1.0.0\ncode\n" +
          "//# sourceMappingURL=foo.js.map\n*/\n(function(){})")
    })


    it("inserts a string before a leading comment", function() {
      expect(sourceMappingURL.insertBefore("//# sourceMappingURL=foo.js.map\n" +
        "(function(){})", "code\n"))
        .to.equal("code\n//# sourceMappingURL=foo.js.map\n" +
          "(function(){})")
    })


    it("appends if no comment", function() {
      expect(sourceMappingURL.insertBefore("code", "\nmore code"))
        .to.equal("code\nmore code")
    })


    it("is detachable", function() {
      var insertBefore = sourceMappingURL.insertBefore
      expect(insertBefore("/*# sourceMappingURL=foo */", "bar"))
        .to.equal("bar/*# sourceMappingURL=foo */")
    })

  })


  describe(".regex", function() {

    it("includes ._innerRegex", function() {
      expect(sourceMappingURL.regex.source)
        .to.contain(sourceMappingURL._innerRegex.source)
    })


    var match = function(code) {
      expect(code)
        .to.match(sourceMappingURL.regex)
    }

    var noMatch = function(code) {
      expect(code)
        .not.to.match(sourceMappingURL.regex)
    }


    forEachComment(function(comment, description) {

      it("matches " + description, function() {
        match("code\n" + comment)
        match("code" + comment)
        match(comment)
      })


      it("matches " + description + ", with trailing whitespace", function() {
        match(comment + "  ")
        match(comment + "\n")
        match(comment + "\n\n\t\n    \t  ")
      })

    })


    it("does not match some cases that are easy to mess up", function() {
      noMatch(
        "/* # sourceMappingURL=foo */"
      )

      noMatch(
        "// # sourceMappingURL=foo"
      )
    })


    it("is liberal regarding inner whitespace", function() {
      match(
        "/*# sourceMappingURL=foo*/"
      )

      match(
        "/*# sourceMappingURL=foo    */"
      )

      match(
        "/*# sourceMappingURL=foo   \t\n" +
        "*/"
      )

      match(
        "/*    \n" +
        "# sourceMappingURL=foo\n" +
        "*/"
      )

      match(
        "/*\n" +
        "# sourceMappingURL=foo\n" +
        "     */"
      )

      match(
        "/*\n" +
        "# sourceMappingURL=foo\n" +
        "\n" +
        "\t\n" +
        "*/"
      )
    })

  })


  describe("._innerRegex", function() {

    it("matches the contents of sourceMappingURL comments", function() {
      expect("# sourceMappingURL=http://www.example.com/foo/bar.js.map")
        .to.match(sourceMappingURL._innerRegex)
    })


    it("captures the url in the first capture group", function() {
      expect(sourceMappingURL._innerRegex.exec("# sourceMappingURL=foo")[1])
        .to.equal("foo")
    })


    it("supports the legacy syntax", function() {
      expect("@ sourceMappingURL=http://www.example.com/foo/bar.js.map")
        .to.match(sourceMappingURL._innerRegex)
    })

  })

})
