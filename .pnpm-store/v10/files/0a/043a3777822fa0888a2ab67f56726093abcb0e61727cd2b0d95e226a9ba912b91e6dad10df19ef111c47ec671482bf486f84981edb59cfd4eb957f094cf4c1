"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _plugin() {
  const data = require("@parcel/plugin");

  _plugin = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const COMMON_NAMES = new Set(['index', 'src', 'lib']);
const ALLOWED_EXTENSIONS = {
  js: ['js', 'mjs', 'cjs']
};

var _default = new (_plugin().Namer)({
  name({
    bundle,
    bundleGraph
  }) {
    let bundleGroup = bundleGraph.getBundleGroupsContainingBundle(bundle)[0];
    let bundleGroupBundles = bundleGraph.getBundlesInBundleGroup(bundleGroup, {
      includeInline: true
    });
    let isEntry = bundleGraph.isEntryBundleGroup(bundleGroup);

    if (bundle.needsStableName) {
      let entryBundlesOfType = bundleGroupBundles.filter(b => b.needsStableName && b.type === bundle.type);
      (0, _assert().default)(entryBundlesOfType.length === 1, // Otherwise, we'd end up naming two bundles the same thing.
      'Bundle group cannot have more than one entry bundle of the same type');
    }

    let mainBundle = (0, _nullthrows().default)(bundleGroupBundles.find(b => b.getEntryAssets().some(a => a.id === bundleGroup.entryAssetId)));

    if (bundle.id === mainBundle.id && isEntry && bundle.target && bundle.target.distEntry != null) {
      let loc = bundle.target.loc;
      let distEntry = bundle.target.distEntry;

      let distExtension = _path().default.extname(bundle.target.distEntry).slice(1);

      let allowedExtensions = ALLOWED_EXTENSIONS[bundle.type] || [bundle.type];

      if (!allowedExtensions.includes(distExtension) && loc) {
        let fullName = _path().default.relative(_path().default.dirname(loc.filePath), _path().default.join(bundle.target.distDir, distEntry));

        let err = new (_diagnostic().default)({
          diagnostic: {
            message: (0, _diagnostic().md)`Target "${bundle.target.name}" declares an output file path of "${fullName}" which does not match the compiled bundle type "${bundle.type}".`,
            codeFrames: [{
              filePath: loc.filePath,
              codeHighlights: [{
                start: loc.start,
                end: loc.end,
                message: (0, _diagnostic().md)`Did you mean "${fullName.slice(0, -_path().default.extname(fullName).length) + '.' + bundle.type}"?`
              }]
            }],
            hints: [`Try changing the file extension of "${bundle.target.name}" in ${_path().default.relative(process.cwd(), loc.filePath)}.`]
          }
        });
        throw err;
      }

      return bundle.target.distEntry;
    } // Base split bundle names on the first bundle in their group.
    // e.g. if `index.js` imports `foo.css`, the css bundle should be called
    //      `index.css`.


    let name = nameFromContent(mainBundle, isEntry, bundleGroup.entryAssetId, bundleGraph.getEntryRoot(bundle.target));

    if (!bundle.needsStableName) {
      name += '.' + bundle.hashReference;
    }

    return name + '.' + bundle.type;
  }

});

exports.default = _default;

function nameFromContent(bundle, isEntry, entryAssetId, entryRoot) {
  let entryFilePath = (0, _nullthrows().default)(bundle.getEntryAssets().find(a => a.id === entryAssetId)).filePath;
  let name = basenameWithoutExtension(entryFilePath); // If this is an entry bundle, use the original relative path.

  if (bundle.needsStableName) {
    // Match name of target entry if possible, but with a different extension.
    if (isEntry && bundle.target.distEntry != null) {
      return basenameWithoutExtension(bundle.target.distEntry);
    }

    return _path().default.join(_path().default.relative(entryRoot, _path().default.dirname(entryFilePath)), name).replace(/\.\.(\/|\\)/g, 'up_$1');
  } else {
    // If this is an index file or common directory name, use the parent
    // directory name instead, which is probably more descriptive.
    while (COMMON_NAMES.has(name)) {
      entryFilePath = _path().default.dirname(entryFilePath);
      name = _path().default.basename(entryFilePath);

      if (name.startsWith('.')) {
        name = name.replace('.', '');
      }
    }

    return name;
  }
}

function basenameWithoutExtension(file) {
  return _path().default.basename(file, _path().default.extname(file));
}