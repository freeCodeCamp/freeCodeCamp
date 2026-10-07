"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntryResolver = void 0;
exports.default = createEntryRequest;

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
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

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _jsonSourcemap() {
  const data = require("@mischnic/json-sourcemap");

  _jsonSourcemap = function () {
    return data;
  };

  return data;
}

var _projectPath = require("../projectPath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const type = 'entry_request';

function createEntryRequest(input) {
  return {
    id: `${type}:${(0, _projectPath.fromProjectPathRelative)(input)}`,
    type,
    run,
    input
  };
}

async function run({
  input,
  api,
  options
}) {
  let entryResolver = new EntryResolver(options);
  let filePath = (0, _projectPath.fromProjectPath)(options.projectRoot, input);
  let result = await entryResolver.resolveEntry(filePath); // Connect files like package.json that affect the entry
  // resolution so we invalidate when they change.

  for (let file of result.files) {
    api.invalidateOnFileUpdate(file.filePath);
    api.invalidateOnFileDelete(file.filePath);
  } // If the entry specifier is a glob, add a glob node so
  // we invalidate when a new file matches.


  if ((0, _utils().isGlob)(filePath)) {
    api.invalidateOnFileCreate({
      glob: input
    });
  } // Invalidate whenever an entry is deleted.
  // If the entry was a glob, we'll re-evaluate it, and otherwise
  // a proper entry error will be thrown.


  for (let entry of result.entries) {
    api.invalidateOnFileDelete(entry.filePath);
  }

  return result;
}

async function assertFile(fs, entry, relativeSource, pkgFilePath, keyPath, options) {
  let source = _path().default.join(entry, relativeSource);

  let stat;

  try {
    stat = await fs.stat(source);
  } catch (err) {
    let contents = await fs.readFile(pkgFilePath, 'utf8');
    let alternatives = await (0, _utils().findAlternativeFiles)(fs, relativeSource, entry, options.projectRoot, false);
    throw new (_diagnostic().default)({
      diagnostic: {
        origin: '@parcel/core',
        message: (0, _diagnostic().md)`${_path().default.relative(process.cwd(), source)} does not exist.`,
        codeFrames: [{
          filePath: pkgFilePath,
          codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(contents, [{
            key: keyPath,
            type: 'value'
          }])
        }],
        hints: alternatives.map(r => {
          return (0, _diagnostic().md)`Did you mean '__${r}__'?`;
        })
      }
    });
  }

  if (!stat.isFile()) {
    let contents = await fs.readFile(pkgFilePath, 'utf8');
    throw new (_diagnostic().default)({
      diagnostic: {
        origin: '@parcel/core',
        message: (0, _diagnostic().md)`${_path().default.relative(process.cwd(), source)} is not a file.`,
        codeFrames: [{
          filePath: pkgFilePath,
          codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(contents, [{
            key: keyPath,
            type: 'value'
          }])
        }]
      }
    });
  }
}

class EntryResolver {
  constructor(options) {
    this.options = options;
  }

  async resolveEntry(entry) {
    if ((0, _utils().isGlob)(entry)) {
      let files = await (0, _utils().glob)(entry, this.options.inputFS, {
        absolute: true,
        onlyFiles: false
      });
      let results = await Promise.all(files.map(f => this.resolveEntry(_path().default.normalize(f))));
      return results.reduce((p, res) => ({
        entries: p.entries.concat(res.entries),
        files: p.files.concat(res.files)
      }), {
        entries: [],
        files: []
      });
    }

    let stat;

    try {
      stat = await this.options.inputFS.stat(entry);
    } catch (err) {
      throw new (_diagnostic().default)({
        diagnostic: {
          message: (0, _diagnostic().md)`Entry ${entry} does not exist`
        }
      });
    }

    if (stat.isDirectory()) {
      let pkg = await this.readPackage(entry);

      if (pkg) {
        let {
          filePath
        } = pkg;
        let entries = [];
        let files = [{
          filePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, filePath)
        }];
        let targetsWithSources = 0;

        if (pkg.targets) {
          for (let targetName in pkg.targets) {
            let target = pkg.targets[targetName];

            if (target.source != null) {
              targetsWithSources++;
              let targetSources = Array.isArray(target.source) ? target.source : [target.source];
              let i = 0;

              for (let relativeSource of targetSources) {
                let source = _path().default.join(entry, relativeSource);

                let keyPath = `/targets/${targetName}/source${Array.isArray(target.source) ? `/${i}` : ''}`;
                await assertFile(this.options.inputFS, entry, relativeSource, filePath, keyPath, this.options);
                entries.push({
                  filePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, source),
                  packagePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, entry),
                  target: targetName,
                  loc: {
                    filePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, pkg.filePath),
                    ...(0, _diagnostic().getJSONSourceLocation)(pkg.map.pointers[keyPath], 'value')
                  }
                });
                i++;
              }
            }
          }
        }

        let allTargetsHaveSource = targetsWithSources > 0 && pkg != null && pkg.targets != null && Object.keys(pkg.targets).length === targetsWithSources;

        if (!allTargetsHaveSource && pkg.source != null) {
          let pkgSources = Array.isArray(pkg.source) ? pkg.source : [pkg.source];
          let i = 0;

          for (let pkgSource of pkgSources) {
            let source = _path().default.join(_path().default.dirname(filePath), pkgSource);

            let keyPath = `/source${Array.isArray(pkg.source) ? `/${i}` : ''}`;
            await assertFile(this.options.inputFS, entry, pkgSource, filePath, keyPath, this.options);
            entries.push({
              filePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, source),
              packagePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, entry),
              loc: {
                filePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, pkg.filePath),
                ...(0, _diagnostic().getJSONSourceLocation)(pkg.map.pointers[keyPath], 'value')
              }
            });
            i++;
          }
        } // Only return if we found any valid entries


        if (entries.length && files.length) {
          return {
            entries,
            files
          };
        }
      }

      throw new (_diagnostic().default)({
        diagnostic: {
          message: (0, _diagnostic().md)`Could not find entry: ${entry}`
        }
      });
    } else if (stat.isFile()) {
      let projectRoot = this.options.projectRoot;
      let packagePath = (0, _utils().isDirectoryInside)(this.options.inputFS.cwd(), projectRoot) ? this.options.inputFS.cwd() : projectRoot;
      return {
        entries: [{
          filePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, entry),
          packagePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, packagePath)
        }],
        files: []
      };
    }

    throw new (_diagnostic().default)({
      diagnostic: {
        message: (0, _diagnostic().md)`Unknown entry: ${entry}`
      }
    });
  }

  async readPackage(entry) {
    let content, pkg;

    let pkgFile = _path().default.join(entry, 'package.json');

    try {
      content = await this.options.inputFS.readFile(pkgFile, 'utf8');
    } catch (err) {
      return null;
    }

    try {
      pkg = JSON.parse(content);
    } catch (err) {
      // TODO: code frame?
      throw new (_diagnostic().default)({
        diagnostic: {
          message: (0, _diagnostic().md)`Error parsing ${_path().default.relative(this.options.inputFS.cwd(), pkgFile)}: ${err.message}`
        }
      });
    }

    return { ...pkg,
      filePath: pkgFile,
      map: (0, _jsonSourcemap().parse)(content, undefined, {
        tabWidth: 1
      })
    };
  }

}

exports.EntryResolver = EntryResolver;