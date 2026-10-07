"use strict"

var mergeModules = require("../lib/helpers/merge-exports")

// Update this array if you add/rename/remove files in this directory.
// We support Browserify by skipping automatic module discovery and requiring modules directly.
var modules = [
  require("./internal"),
  require("./utf32"),
  require("./utf16"),
  require("./utf7"),
  require("./sbcs-codec"),
  require("./sbcs-data"),
  require("./sbcs-data-generated"),
  require("./dbcs-codec"),
  require("./dbcs-data")
]

// Put all encoding/alias/codec definitions to single object and export it.
for (var i = 0; i < modules.length; i++) {
  var module = modules[i]
  mergeModules(exports, module)
}
