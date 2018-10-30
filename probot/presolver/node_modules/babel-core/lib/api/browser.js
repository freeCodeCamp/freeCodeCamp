"use strict";

exports.__esModule = true;
exports.transformFileSync = exports.transformFile = exports.transformFromAst = exports.transform = exports.analyse = exports.Pipeline = exports.Plugin = exports.OptionManager = exports.traverse = exports.types = exports.messages = exports.util = exports.version = exports.template = exports.buildExternalHelpers = exports.options = exports.File = undefined;

var _node = require("./node");

Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function get() {
    return _node.File;
  }
});
Object.defineProperty(exports, "options", {
  enumerable: true,
  get: function get() {
    return _node.options;
  }
});
Object.defineProperty(exports, "buildExternalHelpers", {
  enumerable: true,
  get: function get() {
    return _node.buildExternalHelpers;
  }
});
Object.defineProperty(exports, "template", {
  enumerable: true,
  get: function get() {
    return _node.template;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function get() {
    return _node.version;
  }
});
Object.defineProperty(exports, "util", {
  enumerable: true,
  get: function get() {
    return _node.util;
  }
});
Object.defineProperty(exports, "messages", {
  enumerable: true,
  get: function get() {
    return _node.messages;
  }
});
Object.defineProperty(exports, "types", {
  enumerable: true,
  get: function get() {
    return _node.types;
  }
});
Object.defineProperty(exports, "traverse", {
  enumerable: true,
  get: function get() {
    return _node.traverse;
  }
});
Object.defineProperty(exports, "OptionManager", {
  enumerable: true,
  get: function get() {
    return _node.OptionManager;
  }
});
Object.defineProperty(exports, "Plugin", {
  enumerable: true,
  get: function get() {
    return _node.Plugin;
  }
});
Object.defineProperty(exports, "Pipeline", {
  enumerable: true,
  get: function get() {
    return _node.Pipeline;
  }
});
Object.defineProperty(exports, "analyse", {
  enumerable: true,
  get: function get() {
    return _node.analyse;
  }
});
Object.defineProperty(exports, "transform", {
  enumerable: true,
  get: function get() {
    return _node.transform;
  }
});
Object.defineProperty(exports, "transformFromAst", {
  enumerable: true,
  get: function get() {
    return _node.transformFromAst;
  }
});
Object.defineProperty(exports, "transformFile", {
  enumerable: true,
  get: function get() {
    return _node.transformFile;
  }
});
Object.defineProperty(exports, "transformFileSync", {
  enumerable: true,
  get: function get() {
    return _node.transformFileSync;
  }
});
exports.run = run;
exports.load = load;
function run(code) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return new Function((0, _node.transform)(code, opts).code)();
}

function load(url, callback) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hold = arguments[3];

  opts.filename = opts.filename || url;

  var xhr = global.ActiveXObject ? new global.ActiveXObject("Microsoft.XMLHTTP") : new global.XMLHttpRequest();
  xhr.open("GET", url, true);
  if ("overrideMimeType" in xhr) xhr.overrideMimeType("text/plain");

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    var status = xhr.status;
    if (status === 0 || status === 200) {
      var param = [xhr.responseText, opts];
      if (!hold) run(param);
      if (callback) callback(param);
    } else {
      throw new Error("Could not load " + url);
    }
  };

  xhr.send(null);
}

function runScripts() {
  var scripts = [];
  var types = ["text/ecmascript-6", "text/6to5", "text/babel", "module"];
  var index = 0;

  function exec() {
    var param = scripts[index];
    if (param instanceof Array) {
      run(param, index);
      index++;
      exec();
    }
  }

  function run(script, i) {
    var opts = {};

    if (script.src) {
      load(script.src, function (param) {
        scripts[i] = param;
        exec();
      }, opts, true);
    } else {
      opts.filename = "embedded";
      scripts[i] = [script.innerHTML, opts];
    }
  }

  var _scripts = global.document.getElementsByTagName("script");

  for (var i = 0; i < _scripts.length; ++i) {
    var _script = _scripts[i];
    if (types.indexOf(_script.type) >= 0) scripts.push(_script);
  }

  for (var _i = 0; _i < scripts.length; _i++) {
    run(scripts[_i], _i);
  }

  exec();
}

if (global.addEventListener) {
  global.addEventListener("DOMContentLoaded", runScripts, false);
} else if (global.attachEvent) {
  global.attachEvent("onload", runScripts);
}