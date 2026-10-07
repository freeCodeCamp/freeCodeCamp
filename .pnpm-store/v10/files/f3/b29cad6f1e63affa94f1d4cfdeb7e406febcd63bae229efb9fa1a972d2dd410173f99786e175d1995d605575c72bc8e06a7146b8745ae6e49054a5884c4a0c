"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRegExpFeaturePlugin = createRegExpFeaturePlugin;
var _regexpuCore = require("regexpu-core");
var _core = require("@babel/core");
var _helperAnnotateAsPure = require("@babel/helper-annotate-as-pure");
var _semver = require("semver");
var _features = require("./features.js");
var _util = require("./util.js");
const versionKey = "@babel/plugin-regexp-features/version";
function createRegExpFeaturePlugin({
  name,
  feature,
  options = {},
  manipulateOptions = () => {}
}) {
  return {
    name,
    manipulateOptions,
    pre() {
      var _file$get;
      const {
        file
      } = this;
      const features = (_file$get = file.get(_features.featuresKey)) != null ? _file$get : 0;
      let newFeatures = (0, _features.enableFeature)(features, _features.FEATURES[feature]);
      const {
        useUnicodeFlag,
        runtime
      } = options;
      if (useUnicodeFlag === false) {
        newFeatures = (0, _features.enableFeature)(newFeatures, _features.FEATURES.unicodeFlag);
      }
      if (newFeatures !== features) {
        file.set(_features.featuresKey, newFeatures);
      }
      if (runtime !== undefined) {
        if (file.has(_features.runtimeKey) && file.get(_features.runtimeKey) !== runtime && (0, _features.hasFeature)(newFeatures, _features.FEATURES.duplicateNamedCaptureGroups)) {
          throw new Error(`The 'runtime' option must be the same for ` + `'@babel/plugin-transform-named-capturing-groups-regex' and ` + `'@babel/plugin-proposal-duplicate-named-capturing-groups-regex'.`);
        }
        if (feature === "namedCaptureGroups") {
          if (!runtime || !file.has(_features.runtimeKey)) file.set(_features.runtimeKey, runtime);
        } else {
          file.set(_features.runtimeKey, runtime);
        }
      }
      {
        if (typeof file.get(versionKey) === "number") {
          file.set(versionKey, "7.22.15");
          return;
        }
      }
      if (!file.get(versionKey) || _semver.lt(file.get(versionKey), "7.22.15")) {
        file.set(versionKey, "7.22.15");
      }
    },
    visitor: {
      RegExpLiteral(path) {
        var _file$get2, _newFlags;
        const {
          node
        } = path;
        const {
          file
        } = this;
        const features = file.get(_features.featuresKey);
        const runtime = (_file$get2 = file.get(_features.runtimeKey)) != null ? _file$get2 : true;
        const regexpuOptions = (0, _util.generateRegexpuOptions)(node.pattern, features);
        if ((0, _util.canSkipRegexpu)(node, regexpuOptions)) {
          return;
        }
        const namedCaptureGroups = {
          __proto__: null
        };
        if (regexpuOptions.namedGroups === "transform") {
          regexpuOptions.onNamedGroup = (name, index) => {
            const prev = namedCaptureGroups[name];
            if (typeof prev === "number") {
              namedCaptureGroups[name] = [prev, index];
            } else if (Array.isArray(prev)) {
              prev.push(index);
            } else {
              namedCaptureGroups[name] = index;
            }
          };
        }
        let newFlags;
        if (regexpuOptions.modifiers === "transform") {
          regexpuOptions.onNewFlags = flags => {
            newFlags = flags;
          };
        }
        node.pattern = _regexpuCore(node.pattern, node.flags, regexpuOptions);
        if (regexpuOptions.namedGroups === "transform" && Object.keys(namedCaptureGroups).length > 0 && runtime && !isRegExpTest(path)) {
          const call = _core.types.callExpression(this.addHelper("wrapRegExp"), [node, _core.types.valueToNode(namedCaptureGroups)]);
          (0, _helperAnnotateAsPure.default)(call);
          path.replaceWith(call);
        }
        node.flags = (0, _util.transformFlags)(regexpuOptions, (_newFlags = newFlags) != null ? _newFlags : node.flags);
      }
    }
  };
}
function isRegExpTest(path) {
  return path.parentPath.isMemberExpression({
    object: path.node,
    computed: false
  }) && path.parentPath.get("property").isIdentifier({
    name: "test"
  });
}

//# sourceMappingURL=index.js.map
