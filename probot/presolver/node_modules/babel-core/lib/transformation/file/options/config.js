"use strict";

module.exports = {
  filename: {
    type: "filename",
    description: "filename to use when reading from stdin - this will be used in source-maps, errors etc",
    default: "unknown",
    shorthand: "f"
  },

  filenameRelative: {
    hidden: true,
    type: "string"
  },

  inputSourceMap: {
    hidden: true
  },

  env: {
    hidden: true,
    default: {}
  },

  mode: {
    description: "",
    hidden: true
  },

  retainLines: {
    type: "boolean",
    default: false,
    description: "retain line numbers - will result in really ugly code"
  },

  highlightCode: {
    description: "enable/disable ANSI syntax highlighting of code frames (on by default)",
    type: "boolean",
    default: true
  },

  suppressDeprecationMessages: {
    type: "boolean",
    default: false,
    hidden: true
  },

  presets: {
    type: "list",
    description: "",
    default: []
  },

  plugins: {
    type: "list",
    default: [],
    description: ""
  },

  ignore: {
    type: "list",
    description: "list of glob paths to **not** compile",
    default: []
  },

  only: {
    type: "list",
    description: "list of glob paths to **only** compile"
  },

  code: {
    hidden: true,
    default: true,
    type: "boolean"
  },

  metadata: {
    hidden: true,
    default: true,
    type: "boolean"
  },

  ast: {
    hidden: true,
    default: true,
    type: "boolean"
  },

  extends: {
    type: "string",
    hidden: true
  },

  comments: {
    type: "boolean",
    default: true,
    description: "write comments to generated output (true by default)"
  },

  shouldPrintComment: {
    hidden: true,
    description: "optional callback to control whether a comment should be inserted, when this is used the comments option is ignored"
  },

  wrapPluginVisitorMethod: {
    hidden: true,
    description: "optional callback to wrap all visitor methods"
  },

  compact: {
    type: "booleanString",
    default: "auto",
    description: "do not include superfluous whitespace characters and line terminators [true|false|auto]"
  },

  minified: {
    type: "boolean",
    default: false,
    description: "save as much bytes when printing [true|false]"
  },

  sourceMap: {
    alias: "sourceMaps",
    hidden: true
  },

  sourceMaps: {
    type: "booleanString",
    description: "[true|false|inline]",
    default: false,
    shorthand: "s"
  },

  sourceMapTarget: {
    type: "string",
    description: "set `file` on returned source map"
  },

  sourceFileName: {
    type: "string",
    description: "set `sources[0]` on returned source map"
  },

  sourceRoot: {
    type: "filename",
    description: "the root from which all sources are relative"
  },

  babelrc: {
    description: "Whether or not to look up .babelrc and .babelignore files",
    type: "boolean",
    default: true
  },

  sourceType: {
    description: "",
    default: "module"
  },

  auxiliaryCommentBefore: {
    type: "string",
    description: "print a comment before any injected non-user code"
  },

  auxiliaryCommentAfter: {
    type: "string",
    description: "print a comment after any injected non-user code"
  },

  resolveModuleSource: {
    hidden: true
  },

  getModuleId: {
    hidden: true
  },

  moduleRoot: {
    type: "filename",
    description: "optional prefix for the AMD module formatter that will be prepend to the filename on module definitions"
  },

  moduleIds: {
    type: "boolean",
    default: false,
    shorthand: "M",
    description: "insert an explicit id for modules"
  },

  moduleId: {
    description: "specify a custom name for module ids",
    type: "string"
  },

  passPerPreset: {
    description: "Whether to spawn a traversal pass per a preset. By default all presets are merged.",
    type: "boolean",
    default: false,
    hidden: true
  },

  parserOpts: {
    description: "Options to pass into the parser, or to change parsers (parserOpts.parser)",
    default: false
  },

  generatorOpts: {
    description: "Options to pass into the generator, or to change generators (generatorOpts.generator)",
    default: false
  }
};