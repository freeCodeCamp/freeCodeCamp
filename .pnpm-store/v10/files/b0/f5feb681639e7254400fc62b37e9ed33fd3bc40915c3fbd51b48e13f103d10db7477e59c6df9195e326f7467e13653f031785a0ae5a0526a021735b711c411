"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.syncStaticDir = exports.copyStaticDirs = void 0;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _chokidar = _interopRequireDefault(require("chokidar"));
var _path = _interopRequireDefault(require("path"));
var _redux = require("../redux");
/**
 * copyStaticDirs
 * --
 * Copy files from the static directory to the public directory
 */
const copyStaticDirs = () => {
  // access the store to get themes
  const {
    flattenedPlugins
  } = _redux.store.getState();
  // if there are legacy themes, only use them. Otherwise proceed with plugins
  const themesSet = flattenedPlugins.map(plugin => {
    return {
      themeDir: plugin.pluginFilepath,
      themeName: plugin.name
    };
  });
  themesSet
  // create an array of potential theme static folders
  .map(theme => _path.default.resolve(theme.themeDir, `static`))
  // filter out the static folders that don't exist
  .filter(themeStaticPath => _fsExtra.default.existsSync(themeStaticPath))
  // copy the files for each folder into the user's build
  .map(folder => _fsExtra.default.copySync(folder, _path.default.join(process.cwd(), `public`), {
    dereference: true
  }));
  const staticDir = _path.default.join(process.cwd(), `static`);
  if (!_fsExtra.default.existsSync(staticDir)) return undefined;
  return _fsExtra.default.copySync(staticDir, _path.default.join(process.cwd(), `public`), {
    dereference: true
  });
};

/**
 * syncStaticDir
 * --
 * Set up a watcher to sync changes from the static directory to the public directory
 */
exports.copyStaticDirs = copyStaticDirs;
const syncStaticDir = () => {
  const staticDir = _path.default.join(process.cwd(), `static`);
  _chokidar.default.watch(staticDir).on(`add`, path => {
    const relativePath = _path.default.relative(staticDir, path);
    _fsExtra.default.copy(path, `${process.cwd()}/public/${relativePath}`);
  }).on(`change`, path => {
    const relativePath = _path.default.relative(staticDir, path);
    _fsExtra.default.copy(path, `${process.cwd()}/public/${relativePath}`);
  });
};
exports.syncStaticDir = syncStaticDir;
//# sourceMappingURL=get-static-dir.js.map