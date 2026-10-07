"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _async = require("../gensync-utils/async.js");
var _util = require("./util.js");
var context = require("../index.js");
var _plugin = require("./plugin.js");
var _item = require("./item.js");
var _configChain = require("./config-chain.js");
var _deepArray = require("./helpers/deep-array.js");
function _traverse() {
  const data = require("@babel/traverse");
  _traverse = function () {
    return data;
  };
  return data;
}
var _caching = require("./caching.js");
var _options = require("./validation/options.js");
var _plugins = require("./validation/plugins.js");
var _configApi = require("./helpers/config-api.js");
var _partial = require("./partial.js");
var _configError = require("../errors/config-error.js");
var _default = exports.default = _gensync()(function* loadFullConfig(inputOpts) {
  var _opts$assumptions;
  const result = yield* (0, _partial.default)(inputOpts);
  if (!result) {
    return null;
  }
  const {
    options,
    context,
    fileHandling
  } = result;
  if (fileHandling === "ignored") {
    return null;
  }
  const optionDefaults = {};
  const {
    plugins,
    presets
  } = options;
  if (!plugins || !presets) {
    throw new Error("Assertion failure - plugins and presets exist");
  }
  const presetContext = Object.assign({}, context, {
    targets: options.targets
  });
  const toDescriptor = item => {
    const desc = (0, _item.getItemDescriptor)(item);
    if (!desc) {
      throw new Error("Assertion failure - must be config item");
    }
    return desc;
  };
  const presetsDescriptors = presets.map(toDescriptor);
  const initialPluginsDescriptors = plugins.map(toDescriptor);
  const pluginDescriptorsByPass = [[]];
  const passes = [];
  const externalDependencies = [];
  const ignored = yield* enhanceError(context, function* recursePresetDescriptors(rawPresets, pluginDescriptorsPass) {
    const presets = [];
    for (let i = 0; i < rawPresets.length; i++) {
      const descriptor = rawPresets[i];
      if (descriptor.options !== false) {
        try {
          var preset = yield* loadPresetDescriptor(descriptor, presetContext);
        } catch (e) {
          if (e.code === "BABEL_UNKNOWN_OPTION") {
            (0, _options.checkNoUnwrappedItemOptionPairs)(rawPresets, i, "preset", e);
          }
          throw e;
        }
        externalDependencies.push(preset.externalDependencies);
        if (descriptor.ownPass) {
          presets.push({
            preset: preset.chain,
            pass: []
          });
        } else {
          presets.unshift({
            preset: preset.chain,
            pass: pluginDescriptorsPass
          });
        }
      }
    }
    if (presets.length > 0) {
      pluginDescriptorsByPass.splice(1, 0, ...presets.map(o => o.pass).filter(p => p !== pluginDescriptorsPass));
      for (const {
        preset,
        pass
      } of presets) {
        if (!preset) return true;
        pass.push(...preset.plugins);
        const ignored = yield* recursePresetDescriptors(preset.presets, pass);
        if (ignored) return true;
        preset.options.forEach(opts => {
          (0, _util.mergeOptions)(optionDefaults, opts);
        });
      }
    }
  })(presetsDescriptors, pluginDescriptorsByPass[0]);
  if (ignored) return null;
  const opts = optionDefaults;
  (0, _util.mergeOptions)(opts, options);
  const pluginContext = Object.assign({}, presetContext, {
    assumptions: (_opts$assumptions = opts.assumptions) != null ? _opts$assumptions : {}
  });
  yield* enhanceError(context, function* loadPluginDescriptors() {
    pluginDescriptorsByPass[0].unshift(...initialPluginsDescriptors);
    for (const descs of pluginDescriptorsByPass) {
      const pass = [];
      passes.push(pass);
      for (let i = 0; i < descs.length; i++) {
        const descriptor = descs[i];
        if (descriptor.options !== false) {
          try {
            var plugin = yield* loadPluginDescriptor(descriptor, pluginContext);
          } catch (e) {
            if (e.code === "BABEL_UNKNOWN_PLUGIN_PROPERTY") {
              (0, _options.checkNoUnwrappedItemOptionPairs)(descs, i, "plugin", e);
            }
            throw e;
          }
          pass.push(plugin);
          externalDependencies.push(plugin.externalDependencies);
        }
      }
    }
  })();
  opts.plugins = passes[0];
  opts.presets = passes.slice(1).filter(plugins => plugins.length > 0).map(plugins => ({
    plugins
  }));
  opts.passPerPreset = opts.presets.length > 0;
  return {
    options: opts,
    passes: passes,
    externalDependencies: (0, _deepArray.finalize)(externalDependencies)
  };
});
function enhanceError(context, fn) {
  return function* (arg1, arg2) {
    try {
      return yield* fn(arg1, arg2);
    } catch (e) {
      if (!/^\[BABEL\]/.test(e.message)) {
        var _context$filename;
        e.message = `[BABEL] ${(_context$filename = context.filename) != null ? _context$filename : "unknown file"}: ${e.message}`;
      }
      throw e;
    }
  };
}
const makeDescriptorLoader = apiFactory => (0, _caching.makeWeakCache)(function* ({
  value,
  options,
  dirname,
  alias
}, cache) {
  if (options === false) throw new Error("Assertion failure");
  options = options || {};
  const externalDependencies = [];
  let item = value;
  if (typeof value === "function") {
    const factory = (0, _async.maybeAsync)(value, `You appear to be using an async plugin/preset, but Babel has been called synchronously`);
    const api = Object.assign({}, context, apiFactory(cache, externalDependencies));
    try {
      item = yield* factory(api, options, dirname);
    } catch (e) {
      if (alias) {
        e.message += ` (While processing: ${JSON.stringify(alias)})`;
      }
      throw e;
    }
  }
  if (!item || typeof item !== "object") {
    throw new Error("Plugin/Preset did not return an object.");
  }
  if ((0, _async.isThenable)(item)) {
    yield* [];
    throw new Error(`You appear to be using a promise as a plugin, ` + `which your current version of Babel does not support. ` + `If you're using a published plugin, ` + `you may need to upgrade your @babel/core version. ` + `As an alternative, you can prefix the promise with "await". ` + `(While processing: ${JSON.stringify(alias)})`);
  }
  if (externalDependencies.length > 0 && (!cache.configured() || cache.mode() === "forever")) {
    let error = `A plugin/preset has external untracked dependencies ` + `(${externalDependencies[0]}), but the cache `;
    if (!cache.configured()) {
      error += `has not been configured to be invalidated when the external dependencies change. `;
    } else {
      error += ` has been configured to never be invalidated. `;
    }
    error += `Plugins/presets should configure their cache to be invalidated when the external ` + `dependencies change, for example using \`api.cache.invalidate(() => ` + `statSync(filepath).mtimeMs)\` or \`api.cache.never()\`\n` + `(While processing: ${JSON.stringify(alias)})`;
    throw new Error(error);
  }
  return {
    value: item,
    options,
    dirname,
    alias,
    externalDependencies: (0, _deepArray.finalize)(externalDependencies)
  };
});
const pluginDescriptorLoader = makeDescriptorLoader(_configApi.makePluginAPI);
const presetDescriptorLoader = makeDescriptorLoader(_configApi.makePresetAPI);
const instantiatePlugin = (0, _caching.makeWeakCache)(function* ({
  value,
  options,
  dirname,
  alias,
  externalDependencies
}, cache) {
  const pluginObj = (0, _plugins.validatePluginObject)(value);
  const plugin = Object.assign({}, pluginObj);
  if (plugin.visitor) {
    plugin.visitor = _traverse().default.explode(Object.assign({}, plugin.visitor));
  }
  if (plugin.inherits) {
    const inheritsDescriptor = {
      name: undefined,
      alias: `${alias}$inherits`,
      value: plugin.inherits,
      options,
      dirname
    };
    const inherits = yield* (0, _async.forwardAsync)(loadPluginDescriptor, run => {
      return cache.invalidate(data => run(inheritsDescriptor, data));
    });
    plugin.pre = chainMaybeAsync(inherits.pre, plugin.pre);
    plugin.post = chainMaybeAsync(inherits.post, plugin.post);
    plugin.manipulateOptions = chainMaybeAsync(inherits.manipulateOptions, plugin.manipulateOptions);
    plugin.visitor = _traverse().default.visitors.merge([inherits.visitor || {}, plugin.visitor || {}]);
    if (inherits.externalDependencies.length > 0) {
      if (externalDependencies.length === 0) {
        externalDependencies = inherits.externalDependencies;
      } else {
        externalDependencies = (0, _deepArray.finalize)([externalDependencies, inherits.externalDependencies]);
      }
    }
  }
  return new _plugin.default(plugin, options, alias, externalDependencies);
});
function* loadPluginDescriptor(descriptor, context) {
  if (descriptor.value instanceof _plugin.default) {
    if (descriptor.options) {
      throw new Error("Passed options to an existing Plugin instance will not work.");
    }
    return descriptor.value;
  }
  return yield* instantiatePlugin(yield* pluginDescriptorLoader(descriptor, context), context);
}
const needsFilename = val => val && typeof val !== "function";
const validateIfOptionNeedsFilename = (options, descriptor) => {
  if (needsFilename(options.test) || needsFilename(options.include) || needsFilename(options.exclude)) {
    const formattedPresetName = descriptor.name ? `"${descriptor.name}"` : "/* your preset */";
    throw new _configError.default([`Preset ${formattedPresetName} requires a filename to be set when babel is called directly,`, `\`\`\``, `babel.transformSync(code, { filename: 'file.ts', presets: [${formattedPresetName}] });`, `\`\`\``, `See https://babeljs.io/docs/en/options#filename for more information.`].join("\n"));
  }
};
const validatePreset = (preset, context, descriptor) => {
  if (!context.filename) {
    var _options$overrides;
    const {
      options
    } = preset;
    validateIfOptionNeedsFilename(options, descriptor);
    (_options$overrides = options.overrides) == null || _options$overrides.forEach(overrideOptions => validateIfOptionNeedsFilename(overrideOptions, descriptor));
  }
};
const instantiatePreset = (0, _caching.makeWeakCacheSync)(({
  value,
  dirname,
  alias,
  externalDependencies
}) => {
  return {
    options: (0, _options.validate)("preset", value),
    alias,
    dirname,
    externalDependencies
  };
});
function* loadPresetDescriptor(descriptor, context) {
  const preset = instantiatePreset(yield* presetDescriptorLoader(descriptor, context));
  validatePreset(preset, context, descriptor);
  return {
    chain: yield* (0, _configChain.buildPresetChain)(preset, context),
    externalDependencies: preset.externalDependencies
  };
}
function chainMaybeAsync(a, b) {
  if (!a) return b;
  if (!b) return a;
  return function (...args) {
    const res = a.apply(this, args);
    if (res && typeof res.then === "function") {
      return res.then(() => b.apply(this, args));
    }
    return b.apply(this, args);
  };
}
0 && 0;

//# sourceMappingURL=full.js.map
