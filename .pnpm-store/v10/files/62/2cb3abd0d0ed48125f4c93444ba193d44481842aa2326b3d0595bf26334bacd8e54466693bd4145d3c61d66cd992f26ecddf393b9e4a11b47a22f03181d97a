"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevPackager = void 0;

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _sourceMap() {
  const data = _interopRequireDefault(require("@parcel/source-map"));

  _sourceMap = function () {
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

function _fs() {
  const data = _interopRequireDefault(require("fs"));

  _fs = function () {
    return data;
  };

  return data;
}

var _utils2 = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PRELUDE = _fs().default.readFileSync(_path().default.join(__dirname, 'dev-prelude.js'), 'utf8').trim().replace(/;$/, '');

class DevPackager {
  constructor(options, bundleGraph, bundle, parcelRequireName) {
    this.options = options;
    this.bundleGraph = bundleGraph;
    this.bundle = bundle;
    this.parcelRequireName = parcelRequireName;
  }

  async package() {
    // Load assets
    let queue = new (_utils().PromiseQueue)({
      maxConcurrent: 32
    });
    this.bundle.traverseAssets(asset => {
      queue.add(async () => {
        let [code, mapBuffer] = await Promise.all([asset.getCode(), this.bundle.env.sourceMap && asset.getMapBuffer()]);
        return {
          code,
          mapBuffer
        };
      });
    });
    let results = await queue.run();
    let assets = '';
    let i = 0;
    let first = true;
    let map = new (_sourceMap().default)(this.options.projectRoot);
    let prefix = this.getPrefix();
    let lineOffset = (0, _utils().countLines)(prefix);
    let script = null;
    this.bundle.traverse(node => {
      let wrapped = first ? '' : ',';

      if (node.type === 'dependency') {
        let resolved = this.bundleGraph.getResolvedAsset(node.value, this.bundle);

        if (resolved && resolved.type !== 'js') {
          // if this is a reference to another javascript asset, we should not include
          // its output, as its contents should already be loaded.
          (0, _assert().default)(!this.bundle.hasAsset(resolved));
          wrapped += JSON.stringify(this.bundleGraph.getAssetPublicId(resolved)) + ':[function() {},{}]';
        } else {
          return;
        }
      }

      if (node.type === 'asset') {
        let asset = node.value;
        (0, _assert().default)(asset.type === 'js', 'all assets in a js bundle must be js assets'); // If this is the main entry of a script rather than a module, we need to hoist it
        // outside the bundle wrapper function so that its variables are exposed as globals.

        if (this.bundle.env.sourceType === 'script' && asset === this.bundle.getMainEntry()) {
          script = results[i++];
          return;
        }

        let deps = {};
        let dependencies = this.bundleGraph.getDependencies(asset);

        for (let dep of dependencies) {
          let resolved = this.bundleGraph.getResolvedAsset(dep, this.bundle);

          if (this.bundleGraph.isDependencySkipped(dep)) {
            deps[(0, _utils2.getSpecifier)(dep)] = false;
          } else if (resolved) {
            deps[(0, _utils2.getSpecifier)(dep)] = this.bundleGraph.getAssetPublicId(resolved);
          } else {
            // An external module - map placeholder to original specifier.
            deps[(0, _utils2.getSpecifier)(dep)] = dep.specifier;
          }
        }

        let {
          code,
          mapBuffer
        } = results[i];
        let output = code || '';
        wrapped += JSON.stringify(this.bundleGraph.getAssetPublicId(asset)) + ':[function(require,module,exports) {\n' + output + '\n},';
        wrapped += JSON.stringify(deps);
        wrapped += ']';

        if (this.bundle.env.isNode() && asset.meta.has_node_replacements === true) {
          const relPath = (0, _utils().normalizeSeparators)(_path().default.relative(this.bundle.target.distDir, _path().default.dirname(asset.filePath)));
          wrapped = wrapped.replace('$parcel$dirnameReplace', relPath);
          wrapped = wrapped.replace('$parcel$filenameReplace', relPath);
        }

        if (this.bundle.env.sourceMap) {
          if (mapBuffer) {
            map.addBuffer(mapBuffer, lineOffset);
          } else {
            map.addEmptyMap(_path().default.relative(this.options.projectRoot, asset.filePath).replace(/\\+/g, '/'), output, lineOffset);
          }

          lineOffset += (0, _utils().countLines)(output) + 1;
        }

        i++;
      }

      assets += wrapped;
      first = false;
    });
    let entries = this.bundle.getEntryAssets();
    let mainEntry = this.bundle.getMainEntry();

    if (!this.isEntry() && this.bundle.env.outputFormat === 'global' || this.bundle.env.sourceType === 'script') {
      // In async bundles we don't want the main entry to execute until we require it
      // as there might be dependencies in a sibling bundle that hasn't loaded yet.
      entries = entries.filter(a => {
        var _mainEntry;

        return a.id !== ((_mainEntry = mainEntry) === null || _mainEntry === void 0 ? void 0 : _mainEntry.id);
      });
      mainEntry = null;
    }

    let contents = prefix + '({' + assets + '},' + JSON.stringify(entries.map(asset => this.bundleGraph.getAssetPublicId(asset))) + ', ' + JSON.stringify(mainEntry ? this.bundleGraph.getAssetPublicId(mainEntry) : null) + ', ' + JSON.stringify(this.parcelRequireName) + ')' + '\n'; // The entry asset of a script bundle gets hoisted outside the bundle wrapper function
    // so that its variables become globals. We need to replace any require calls for
    // runtimes with a parcelRequire call.

    if (this.bundle.env.sourceType === 'script' && script) {
      let entryMap;
      let mapBuffer = script.mapBuffer;

      if (mapBuffer) {
        entryMap = new (_sourceMap().default)(this.options.projectRoot, mapBuffer);
      }

      contents += (0, _utils2.replaceScriptDependencies)(this.bundleGraph, this.bundle, script.code, entryMap, this.parcelRequireName);

      if (this.bundle.env.sourceMap && entryMap) {
        map.addSourceMap(entryMap, lineOffset);
      }
    }

    return {
      contents,
      map
    };
  }

  getPrefix() {
    let interpreter;
    let mainEntry = this.bundle.getMainEntry();

    if (mainEntry && this.isEntry() && !this.bundle.target.env.isBrowser()) {
      let _interpreter = mainEntry.meta.interpreter;
      (0, _assert().default)(_interpreter == null || typeof _interpreter === 'string');
      interpreter = _interpreter;
    }

    let importScripts = '';

    if (this.bundle.env.isWorker()) {
      let bundles = this.bundleGraph.getReferencedBundles(this.bundle);

      for (let b of bundles) {
        importScripts += `importScripts("${(0, _utils().relativeBundlePath)(this.bundle, b)}");\n`;
      }
    }

    return (// If the entry asset included a hashbang, repeat it at the top of the bundle
      (interpreter != null ? `#!${interpreter}\n` : '') + importScripts + PRELUDE
    );
  }

  isEntry() {
    return !this.bundleGraph.hasParentBundleOfType(this.bundle, 'js') || this.bundle.env.isIsolated() || this.bundle.bundleBehavior === 'isolated';
  }

}

exports.DevPackager = DevPackager;