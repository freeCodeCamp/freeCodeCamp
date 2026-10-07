"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Module = _interopRequireDefault(require("./Module"));

var _ContentModule = _interopRequireDefault(require("./ContentModule"));

var _ContentFolder = _interopRequireDefault(require("./ContentFolder"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConcatenatedModule extends _Module.default {
  constructor(name, data, parent) {
    super(name, data, parent);
    this.name += ' (concatenated)';
    this.children = Object.create(null);
    this.fillContentModules();
  }

  get parsedSize() {
    var _this$getParsedSize;

    return (_this$getParsedSize = this.getParsedSize()) !== null && _this$getParsedSize !== void 0 ? _this$getParsedSize : this.getEstimatedSize('parsedSize');
  }

  get gzipSize() {
    var _this$getGzipSize;

    return (_this$getGzipSize = this.getGzipSize()) !== null && _this$getGzipSize !== void 0 ? _this$getGzipSize : this.getEstimatedSize('gzipSize');
  }

  getEstimatedSize(sizeType) {
    const parentModuleSize = this.parent[sizeType];

    if (parentModuleSize !== undefined) {
      return Math.floor(this.size / this.parent.size * parentModuleSize);
    }
  }

  fillContentModules() {
    this.data.modules.forEach(moduleData => this.addContentModule(moduleData));
  }

  addContentModule(moduleData) {
    const pathParts = (0, _utils.getModulePathParts)(moduleData);

    if (!pathParts) {
      return;
    }

    const [folders, fileName] = [pathParts.slice(0, -1), pathParts[pathParts.length - 1]];
    let currentFolder = this;
    folders.forEach(folderName => {
      let childFolder = currentFolder.getChild(folderName);

      if (!childFolder) {
        childFolder = currentFolder.addChildFolder(new _ContentFolder.default(folderName, this));
      }

      currentFolder = childFolder;
    });
    const ModuleConstructor = moduleData.modules ? ConcatenatedModule : _ContentModule.default;
    const module = new ModuleConstructor(fileName, moduleData, this);
    currentFolder.addChildModule(module);
  }

  getChild(name) {
    return this.children[name];
  }

  addChildModule(module) {
    module.parent = this;
    this.children[module.name] = module;
  }

  addChildFolder(folder) {
    folder.parent = this;
    this.children[folder.name] = folder;
    return folder;
  }

  mergeNestedFolders() {
    Object.values(this.children).forEach(child => {
      if (child.mergeNestedFolders) {
        child.mergeNestedFolders();
      }
    });
  }

  toChartData() {
    return { ...super.toChartData(),
      concatenated: true,
      groups: Object.values(this.children).map(child => child.toChartData())
    };
  }

}

exports.default = ConcatenatedModule;
;