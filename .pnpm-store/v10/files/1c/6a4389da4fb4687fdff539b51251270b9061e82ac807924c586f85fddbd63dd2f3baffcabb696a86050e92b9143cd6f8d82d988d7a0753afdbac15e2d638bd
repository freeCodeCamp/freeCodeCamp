"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCachedDescriptors = createCachedDescriptors;
exports.createDescriptor = createDescriptor;
exports.createUncachedDescriptors = createUncachedDescriptors;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _functional = require("../gensync-utils/functional.js");
var _index = require("./files/index.js");
var _item = require("./item.js");
var _caching = require("./caching.js");
var _resolveTargets = require("./resolve-targets.js");
function isEqualDescriptor(a, b) {
  var _a$file, _b$file, _a$file2, _b$file2;
  return a.name === b.name && a.value === b.value && a.options === b.options && a.dirname === b.dirname && a.alias === b.alias && a.ownPass === b.ownPass && ((_a$file = a.file) == null ? void 0 : _a$file.request) === ((_b$file = b.file) == null ? void 0 : _b$file.request) && ((_a$file2 = a.file) == null ? void 0 : _a$file2.resolved) === ((_b$file2 = b.file) == null ? void 0 : _b$file2.resolved);
}
function* handlerOf(value) {
  return value;
}
function optionsWithResolvedBrowserslistConfigFile(options, dirname) {
  if (typeof options.browserslistConfigFile === "string") {
    options.browserslistConfigFile = (0, _resolveTargets.resolveBrowserslistConfigFile)(options.browserslistConfigFile, dirname);
  }
  return options;
}
function createCachedDescriptors(dirname, options, alias) {
  const {
    plugins,
    presets,
    passPerPreset
  } = options;
  return {
    options: optionsWithResolvedBrowserslistConfigFile(options, dirname),
    plugins: plugins ? () => createCachedPluginDescriptors(plugins, dirname)(alias) : () => handlerOf([]),
    presets: presets ? () => createCachedPresetDescriptors(presets, dirname)(alias)(!!passPerPreset) : () => handlerOf([])
  };
}
function createUncachedDescriptors(dirname, options, alias) {
  return {
    options: optionsWithResolvedBrowserslistConfigFile(options, dirname),
    plugins: (0, _functional.once)(() => createPluginDescriptors(options.plugins || [], dirname, alias)),
    presets: (0, _functional.once)(() => createPresetDescriptors(options.presets || [], dirname, alias, !!options.passPerPreset))
  };
}
const PRESET_DESCRIPTOR_CACHE = new WeakMap();
const createCachedPresetDescriptors = (0, _caching.makeWeakCacheSync)((items, cache) => {
  const dirname = cache.using(dir => dir);
  return (0, _caching.makeStrongCacheSync)(alias => (0, _caching.makeStrongCache)(function* (passPerPreset) {
    const descriptors = yield* createPresetDescriptors(items, dirname, alias, passPerPreset);
    return descriptors.map(desc => loadCachedDescriptor(PRESET_DESCRIPTOR_CACHE, desc));
  }));
});
const PLUGIN_DESCRIPTOR_CACHE = new WeakMap();
const createCachedPluginDescriptors = (0, _caching.makeWeakCacheSync)((items, cache) => {
  const dirname = cache.using(dir => dir);
  return (0, _caching.makeStrongCache)(function* (alias) {
    const descriptors = yield* createPluginDescriptors(items, dirname, alias);
    return descriptors.map(desc => loadCachedDescriptor(PLUGIN_DESCRIPTOR_CACHE, desc));
  });
});
const DEFAULT_OPTIONS = {};
function loadCachedDescriptor(cache, desc) {
  const {
    value,
    options = DEFAULT_OPTIONS
  } = desc;
  if (options === false) return desc;
  let cacheByOptions = cache.get(value);
  if (!cacheByOptions) {
    cacheByOptions = new WeakMap();
    cache.set(value, cacheByOptions);
  }
  let possibilities = cacheByOptions.get(options);
  if (!possibilities) {
    possibilities = [];
    cacheByOptions.set(options, possibilities);
  }
  if (!possibilities.includes(desc)) {
    const matches = possibilities.filter(possibility => isEqualDescriptor(possibility, desc));
    if (matches.length > 0) {
      return matches[0];
    }
    possibilities.push(desc);
  }
  return desc;
}
function* createPresetDescriptors(items, dirname, alias, passPerPreset) {
  return yield* createDescriptors("preset", items, dirname, alias, passPerPreset);
}
function* createPluginDescriptors(items, dirname, alias) {
  return yield* createDescriptors("plugin", items, dirname, alias);
}
function* createDescriptors(type, items, dirname, alias, ownPass) {
  const descriptors = yield* _gensync().all(items.map((item, index) => createDescriptor(item, dirname, {
    type,
    alias: `${alias}$${index}`,
    ownPass: !!ownPass
  })));
  assertNoDuplicates(descriptors);
  return descriptors;
}
function* createDescriptor(pair, dirname, {
  type,
  alias,
  ownPass
}) {
  const desc = (0, _item.getItemDescriptor)(pair);
  if (desc) {
    return desc;
  }
  let name;
  let options;
  let value = pair;
  if (Array.isArray(value)) {
    if (value.length === 3) {
      [value, options, name] = value;
    } else {
      [value, options] = value;
    }
  }
  let file = undefined;
  let filepath = null;
  if (typeof value === "string") {
    if (typeof type !== "string") {
      throw new Error("To resolve a string-based item, the type of item must be given");
    }
    const resolver = type === "plugin" ? _index.loadPlugin : _index.loadPreset;
    const request = value;
    ({
      filepath,
      value
    } = yield* resolver(value, dirname));
    file = {
      request,
      resolved: filepath
    };
  }
  if (!value) {
    throw new Error(`Unexpected falsy value: ${String(value)}`);
  }
  if (typeof value === "object" && value.__esModule) {
    if (value.default) {
      value = value.default;
    } else {
      throw new Error("Must export a default export when using ES6 modules.");
    }
  }
  if (typeof value !== "object" && typeof value !== "function") {
    throw new Error(`Unsupported format: ${typeof value}. Expected an object or a function.`);
  }
  if (filepath !== null && typeof value === "object" && value) {
    throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${filepath}`);
  }
  return {
    name,
    alias: filepath || alias,
    value,
    options,
    dirname,
    ownPass,
    file
  };
}
function assertNoDuplicates(items) {
  const map = new Map();
  for (const item of items) {
    if (typeof item.value !== "function") continue;
    let nameMap = map.get(item.value);
    if (!nameMap) {
      nameMap = new Set();
      map.set(item.value, nameMap);
    }
    if (nameMap.has(item.name)) {
      const conflicts = items.filter(i => i.value === item.value);
      throw new Error([`Duplicate plugin/preset detected.`, `If you'd like to use two separate instances of a plugin,`, `they need separate names, e.g.`, ``, `  plugins: [`, `    ['some-plugin', {}],`, `    ['some-plugin', {}, 'some unique name'],`, `  ]`, ``, `Duplicates detected are:`, `${JSON.stringify(conflicts, null, 2)}`].join("\n"));
    }
    nameMap.add(item.name);
  }
}
0 && 0;

//# sourceMappingURL=config-descriptors.js.map
