"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gzipSize = _interopRequireDefault(require("gzip-size"));

var _Module = _interopRequireDefault(require("./Module"));

var _BaseFolder = _interopRequireDefault(require("./BaseFolder"));

var _ConcatenatedModule = _interopRequireDefault(require("./ConcatenatedModule"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Folder extends _BaseFolder.default {
  get parsedSize() {
    return this.src ? this.src.length : 0;
  }

  get gzipSize() {
    if (!Object.prototype.hasOwnProperty.call(this, '_gzipSize')) {
      this._gzipSize = this.src ? _gzipSize.default.sync(this.src) : 0;
    }

    return this._gzipSize;
  }

  addModule(moduleData) {
    const pathParts = (0, _utils.getModulePathParts)(moduleData);

    if (!pathParts) {
      return;
    }

    const [folders, fileName] = [pathParts.slice(0, -1), pathParts[pathParts.length - 1]];
    let currentFolder = this;
    folders.forEach(folderName => {
      let childNode = currentFolder.getChild(folderName);

      if ( // Folder is not created yet
      !childNode || // In some situations (invalid usage of dynamic `require()`) webpack generates a module with empty require
      // context, but it's moduleId points to a directory in filesystem.
      // In this case we replace this `File` node with `Folder`.
      // See `test/stats/with-invalid-dynamic-require.json` as an example.
      !(childNode instanceof Folder)) {
        childNode = currentFolder.addChildFolder(new Folder(folderName));
      }

      currentFolder = childNode;
    });
    const ModuleConstructor = moduleData.modules ? _ConcatenatedModule.default : _Module.default;
    const module = new ModuleConstructor(fileName, moduleData, this);
    currentFolder.addChildModule(module);
  }

  toChartData() {
    return { ...super.toChartData(),
      parsedSize: this.parsedSize,
      gzipSize: this.gzipSize
    };
  }

}

exports.default = Folder;
;