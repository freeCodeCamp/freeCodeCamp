"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigPrinter = exports.ChainFormatter = void 0;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
const ChainFormatter = exports.ChainFormatter = {
  Programmatic: 0,
  Config: 1
};
const Formatter = {
  title(type, callerName, filepath) {
    let title = "";
    if (type === ChainFormatter.Programmatic) {
      title = "programmatic options";
      if (callerName) {
        title += " from " + callerName;
      }
    } else {
      title = "config " + filepath;
    }
    return title;
  },
  loc(index, envName) {
    let loc = "";
    if (index != null) {
      loc += `.overrides[${index}]`;
    }
    if (envName != null) {
      loc += `.env["${envName}"]`;
    }
    return loc;
  },
  *optionsAndDescriptors(opt) {
    const content = Object.assign({}, opt.options);
    delete content.overrides;
    delete content.env;
    const pluginDescriptors = [...(yield* opt.plugins())];
    if (pluginDescriptors.length) {
      content.plugins = pluginDescriptors.map(d => descriptorToConfig(d));
    }
    const presetDescriptors = [...(yield* opt.presets())];
    if (presetDescriptors.length) {
      content.presets = [...presetDescriptors].map(d => descriptorToConfig(d));
    }
    return JSON.stringify(content, undefined, 2);
  }
};
function descriptorToConfig(d) {
  var _d$file;
  let name = (_d$file = d.file) == null ? void 0 : _d$file.request;
  if (name == null) {
    if (typeof d.value === "object") {
      name = d.value;
    } else if (typeof d.value === "function") {
      name = `[Function: ${d.value.toString().slice(0, 50)} ... ]`;
    }
  }
  if (name == null) {
    name = "[Unknown]";
  }
  if (d.options === undefined) {
    return name;
  } else if (d.name == null) {
    return [name, d.options];
  } else {
    return [name, d.options, d.name];
  }
}
class ConfigPrinter {
  constructor() {
    this._stack = [];
  }
  configure(enabled, type, {
    callerName,
    filepath
  }) {
    if (!enabled) return () => {};
    return (content, index, envName) => {
      this._stack.push({
        type,
        callerName,
        filepath,
        content,
        index,
        envName
      });
    };
  }
  static *format(config) {
    let title = Formatter.title(config.type, config.callerName, config.filepath);
    const loc = Formatter.loc(config.index, config.envName);
    if (loc) title += ` ${loc}`;
    const content = yield* Formatter.optionsAndDescriptors(config.content);
    return `${title}\n${content}`;
  }
  *output() {
    if (this._stack.length === 0) return "";
    const configs = yield* _gensync().all(this._stack.map(s => ConfigPrinter.format(s)));
    return configs.join("\n\n");
  }
}
exports.ConfigPrinter = ConfigPrinter;
0 && 0;

//# sourceMappingURL=printer.js.map
