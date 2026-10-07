"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FEATURES = void 0;
exports.enableFeature = enableFeature;
exports.isLoose = isLoose;
exports.shouldTransform = shouldTransform;
var _decorators = require("./decorators.js");
const FEATURES = exports.FEATURES = Object.freeze({
  fields: 1 << 1,
  privateMethods: 1 << 2,
  decorators: 1 << 3,
  privateIn: 1 << 4,
  staticBlocks: 1 << 5
});
const featuresSameLoose = new Map([[FEATURES.fields, "@babel/plugin-transform-class-properties"], [FEATURES.privateMethods, "@babel/plugin-transform-private-methods"], [FEATURES.privateIn, "@babel/plugin-transform-private-property-in-object"]]);
const featuresKey = "@babel/plugin-class-features/featuresKey";
const looseKey = "@babel/plugin-class-features/looseKey";
var looseLowPriorityKey = "@babel/plugin-class-features/looseLowPriorityKey/#__internal__@babel/preset-env__please-overwrite-loose-instead-of-throwing";
var canIgnoreLoose = function (file, feature) {
  return !!(file.get(looseLowPriorityKey) & feature);
};
function enableFeature(file, feature, loose) {
  if (!hasFeature(file, feature) || canIgnoreLoose(file, feature)) {
    file.set(featuresKey, file.get(featuresKey) | feature);
    if (loose === "#__internal__@babel/preset-env__prefer-true-but-false-is-ok-if-it-prevents-an-error") {
      setLoose(file, feature, true);
      file.set(looseLowPriorityKey, file.get(looseLowPriorityKey) | feature);
    } else if (loose === "#__internal__@babel/preset-env__prefer-false-but-true-is-ok-if-it-prevents-an-error") {
      setLoose(file, feature, false);
      file.set(looseLowPriorityKey, file.get(looseLowPriorityKey) | feature);
    } else {
      setLoose(file, feature, loose);
    }
  }
  let resolvedLoose;
  for (const [mask, name] of featuresSameLoose) {
    if (!hasFeature(file, mask)) continue;
    if (canIgnoreLoose(file, mask)) continue;
    const loose = isLoose(file, mask);
    if (resolvedLoose === !loose) {
      throw new Error("'loose' mode configuration must be the same for @babel/plugin-transform-class-properties, " + "@babel/plugin-transform-private-methods and " + "@babel/plugin-transform-private-property-in-object (when they are enabled)." + "\n\n" + getBabelShowConfigForHint(file));
    } else {
      resolvedLoose = loose;
      var higherPriorityPluginName = name;
    }
  }
  if (resolvedLoose !== undefined) {
    for (const [mask, name] of featuresSameLoose) {
      if (hasFeature(file, mask) && isLoose(file, mask) !== resolvedLoose) {
        setLoose(file, mask, resolvedLoose);
        console.warn(`Though the "loose" option was set to "${!resolvedLoose}" in your @babel/preset-env ` + `config, it will not be used for ${name} since the "loose" mode option was set to ` + `"${resolvedLoose}" for ${higherPriorityPluginName}.\nThe "loose" option must be the ` + `same for @babel/plugin-transform-class-properties, @babel/plugin-transform-private-methods ` + `and @babel/plugin-transform-private-property-in-object (when they are enabled): you can ` + `silence this warning by explicitly adding\n` + `\t["${name}", { "loose": ${resolvedLoose} }]\n` + `to the "plugins" section of your Babel config.` + "\n\n" + getBabelShowConfigForHint(file));
      }
    }
  }
}
function getBabelShowConfigForHint(file) {
  let {
    filename
  } = file.opts;
  if (!filename || filename === "unknown") {
    filename = "[name of the input file]";
  }
  return `\
If you already set the same 'loose' mode for these plugins in your config, it's possible that they \
are enabled multiple times with different options.
You can re-run Babel with the BABEL_SHOW_CONFIG_FOR environment variable to show the loaded \
configuration:
\tnpx cross-env BABEL_SHOW_CONFIG_FOR=${filename} <your build command>
See https://babeljs.io/docs/configuration#print-effective-configs for more info.`;
}
function hasFeature(file, feature) {
  return !!(file.get(featuresKey) & feature);
}
function isLoose(file, feature) {
  return !!(file.get(looseKey) & feature);
}
function setLoose(file, feature, loose) {
  if (loose) file.set(looseKey, file.get(looseKey) | feature);else file.set(looseKey, file.get(looseKey) & ~feature);
  file.set(looseLowPriorityKey, file.get(looseLowPriorityKey) & ~feature);
}
function shouldTransform(path, file) {
  let decoratorPath = null;
  let publicFieldPath = null;
  let privateFieldPath = null;
  let privateMethodPath = null;
  let staticBlockPath = null;
  if ((0, _decorators.hasOwnDecorators)(path.node)) {
    decoratorPath = path.get("decorators.0");
  }
  for (const el of path.get("body.body")) {
    if (!decoratorPath && (0, _decorators.hasOwnDecorators)(el.node)) {
      decoratorPath = el.get("decorators.0");
    }
    if (!publicFieldPath && el.isClassProperty()) {
      publicFieldPath = el;
    }
    if (!privateFieldPath && el.isClassPrivateProperty()) {
      privateFieldPath = el;
    }
    if (!privateMethodPath && el.isClassPrivateMethod != null && el.isClassPrivateMethod()) {
      privateMethodPath = el;
    }
    if (!staticBlockPath && el.isStaticBlock != null && el.isStaticBlock()) {
      staticBlockPath = el;
    }
  }
  if (decoratorPath && privateFieldPath) {
    throw privateFieldPath.buildCodeFrameError("Private fields in decorated classes are not supported yet.");
  }
  if (decoratorPath && privateMethodPath) {
    throw privateMethodPath.buildCodeFrameError("Private methods in decorated classes are not supported yet.");
  }
  if (decoratorPath && !hasFeature(file, FEATURES.decorators)) {
    throw path.buildCodeFrameError("Decorators are not enabled." + "\nIf you are using " + '["@babel/plugin-proposal-decorators", { "version": "legacy" }], ' + 'make sure it comes *before* "@babel/plugin-transform-class-properties" ' + "and enable loose mode, like so:\n" + '\t["@babel/plugin-proposal-decorators", { "version": "legacy" }]\n' + '\t["@babel/plugin-transform-class-properties", { "loose": true }]');
  }
  if (privateMethodPath && !hasFeature(file, FEATURES.privateMethods)) {
    throw privateMethodPath.buildCodeFrameError("Class private methods are not enabled. " + "Please add `@babel/plugin-transform-private-methods` to your configuration.");
  }
  if ((publicFieldPath || privateFieldPath) && !hasFeature(file, FEATURES.fields) && !hasFeature(file, FEATURES.privateMethods)) {
    throw path.buildCodeFrameError("Class fields are not enabled. " + "Please add `@babel/plugin-transform-class-properties` to your configuration.");
  }
  if (staticBlockPath && !hasFeature(file, FEATURES.staticBlocks)) {
    throw path.buildCodeFrameError("Static class blocks are not enabled. " + "Please add `@babel/plugin-transform-class-static-block` to your configuration.");
  }
  if (decoratorPath || privateMethodPath || staticBlockPath) {
    return true;
  }
  if ((publicFieldPath || privateFieldPath) && hasFeature(file, FEATURES.fields)) {
    return true;
  }
  return false;
}

//# sourceMappingURL=features.js.map
