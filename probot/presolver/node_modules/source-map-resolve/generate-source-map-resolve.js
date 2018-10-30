// Copyright 2014, 2017 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

var fs = require("fs")

var template = fs.readFileSync("source-map-resolve.js.template").toString()
var nodeCode = fs.readFileSync("lib/source-map-resolve-node.js").toString()

nodeCode = nodeCode

  // Remove leading comments and `require`s.
  .replace(/^\s*(?:\/\/.+\s+|var\s+\w+\s*=\s*require\([^)]+\).*\s+)*/, "")

  // Remove `urix`.
  .replace(/(\w+)\s*=\s*urix\(\1\)\s*/g, "")

  // Remove `decode-uri-component`.
  .replace(/(var readUrl = )decodeUriComponent\(([\w.]+)\)/g, "$1$2")

  // Change `module.exports = {...}` to `return {...}`.
  .replace(/module\.exports = (\{[^}]+\})\s*$/, "return $1")

  // Indent.
  .replace(/^(?!$)/gm, "  ")

var code = template.replace(/[ \t]*\{\{source-map-resolve-node.js\}\}/, nodeCode)

fs.writeFileSync("source-map-resolve.js", code)
