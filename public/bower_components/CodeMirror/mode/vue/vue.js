// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function (mod) {
  "use strict";
  if (typeof exports === "object" && typeof module === "object") {// CommonJS
    mod(require("../../lib/codemirror"),
        require("../../addon/mode/overlay"),
        require("../xml/xml"),
        require("../javascript/javascript"),
        require("../coffeescript/coffeescript"),
        require("../css/css"),
        require("../sass/sass"),
        require("../stylus/stylus"),
        require("../jade/jade"),
        require("../handlebars/handlebars"));
  } else if (typeof define === "function" && define.amd) { // AMD
    define(["../../lib/codemirror",
            "../../addon/mode/overlay",
            "../xml/xml",
            "../javascript/javascript",
            "../coffeescript/coffeescript",
            "../css/css",
            "../sass/sass",
            "../stylus/stylus",
            "../jade/jade",
            "../handlebars/handlebars"], mod);
  } else { // Plain browser env
    mod(CodeMirror);
  }
})(function (CodeMirror) {
  var tagLanguages = {
    script: [
      ["lang", /coffee(script)?/, "coffeescript"],
      ["type", /^(?:text|application)\/(?:x-)?coffee(?:script)?$/, "coffeescript"]
    ],
    style: [
      ["lang", /^stylus$/i, "stylus"],
      ["lang", /^sass$/i, "sass"],
      ["type", /^(text\/)?(x-)?styl(us)?$/i, "stylus"],
      ["type", /^text\/sass/i, "sass"]
    ],
    template: [
      ["lang", /^vue-template$/i, "vue"],
      ["lang", /^jade$/i, "jade"],
      ["lang", /^handlebars$/i, "handlebars"],
      ["type", /^(text\/)?(x-)?jade$/i, "jade"],
      ["type", /^text\/x-handlebars-template$/i, "handlebars"],
      [null, null, "vue-template"]
    ]
  };

  CodeMirror.defineMode("vue-template", function (config, parserConfig) {
    var mustacheOverlay = {
      token: function (stream) {
        if (stream.match(/^\{\{.*?\}\}/)) return "meta mustache";
        while (stream.next() && !stream.match("{{", false)) {}
        return null;
      }
    };
    return CodeMirror.overlayMode(CodeMirror.getMode(config, parserConfig.backdrop || "text/html"), mustacheOverlay);
  });

  CodeMirror.defineMode("vue", function (config) {
    return CodeMirror.getMode(config, {name: "htmlmixed", tags: tagLanguages});
  }, "htmlmixed", "xml", "javascript", "coffeescript", "css", "sass", "stylus", "jade", "handlebars");

  CodeMirror.defineMIME("script/x-vue", "vue");
});
