'use strict';var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};





var _contextCompat = require('eslint-module-utils/contextCompat');
var _ignore = require('eslint-module-utils/ignore');
var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);
var _visit = require('eslint-module-utils/visit');var _visit2 = _interopRequireDefault(_visit);
var _path = require('path');
var _readPkgUp2 = require('eslint-module-utils/readPkgUp');var _readPkgUp3 = _interopRequireDefault(_readPkgUp2);
var _object = require('object.values');var _object2 = _interopRequireDefault(_object);
var _arrayIncludes = require('array-includes');var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);
var _arrayPrototype = require('array.prototype.flatmap');var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _builder = require('../exportMap/builder');var _builder2 = _interopRequireDefault(_builder);
var _patternCapture = require('../exportMap/patternCapture');var _patternCapture2 = _interopRequireDefault(_patternCapture);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}} /**
                                                                                                                                                                                                                                                                                                                                                                                 * @fileOverview Ensures that modules contain exports and/or all
                                                                                                                                                                                                                                                                                                                                                                                 * modules are consumed within other modules.
                                                                                                                                                                                                                                                                                                                                                                                 * @author René Fermann
                                                                                                                                                                                                                                                                                                                                                                                 */ /**
                                                                                                                                                                                                                                                                                                                                                                                     * Attempt to load the internal `FileEnumerator` class, which has existed in a couple
                                                                                                                                                                                                                                                                                                                                                                                     * of different places, depending on the version of `eslint`.  Try requiring it from both
                                                                                                                                                                                                                                                                                                                                                                                     * locations.
                                                                                                                                                                                                                                                                                                                                                                                     * @returns Returns the `FileEnumerator` class if its requirable, otherwise `undefined`.
                                                                                                                                                                                                                                                                                                                                                                                     */function requireFileEnumerator() {var FileEnumerator = void 0;

  // Try getting it from the eslint private / deprecated api
  try {var _require =
    require('eslint/use-at-your-own-risk');FileEnumerator = _require.FileEnumerator;
  } catch (e) {
    // Absorb this if it's MODULE_NOT_FOUND
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }

    // If not there, then try getting it from eslint/lib/cli-engine/file-enumerator (moved there in v6)
    try {var _require2 =
      require('eslint/lib/cli-engine/file-enumerator');FileEnumerator = _require2.FileEnumerator;
    } catch (e) {
      // Absorb this if it's MODULE_NOT_FOUND
      if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
      }
    }
  }
  return FileEnumerator;
}

/**
   * Given a FileEnumerator class, instantiate and load the list of files.
   * @param FileEnumerator the `FileEnumerator` class from `eslint`'s internal api
   * @param {string} src path to the src root
   * @param {string[]} extensions list of supported extensions
   * @returns {{ filename: string, ignored: boolean }[]} list of files to operate on
   */
function listFilesUsingFileEnumerator(FileEnumerator, src, extensions) {
  // We need to know whether this is being run with flat config in order to
  // determine how to report errors if FileEnumerator throws due to a lack of eslintrc.
  var
  ESLINT_USE_FLAT_CONFIG = process.env.ESLINT_USE_FLAT_CONFIG;

  // This condition is sufficient to test in v8, since the environment variable is necessary to turn on flat config
  var isUsingFlatConfig = ESLINT_USE_FLAT_CONFIG && process.env.ESLINT_USE_FLAT_CONFIG !== 'false';

  // In the case of using v9, we can check the `shouldUseFlatConfig` function
  // If this function is present, then we assume it's v9
  try {var _require3 =
    require('eslint/use-at-your-own-risk'),shouldUseFlatConfig = _require3.shouldUseFlatConfig;
    isUsingFlatConfig = shouldUseFlatConfig && ESLINT_USE_FLAT_CONFIG !== 'false';
  } catch (_) {
    // We don't want to throw here, since we only want to update the
    // boolean if the function is available.
  }

  var enumerator = new FileEnumerator({
    extensions: extensions });


  try {
    return Array.from(
    enumerator.iterateFiles(src),
    function (_ref) {var filePath = _ref.filePath,ignored = _ref.ignored;return { filename: filePath, ignored: ignored };});

  } catch (e) {
    // If we're using flat config, and FileEnumerator throws due to a lack of eslintrc,
    // then we want to throw an error so that the user knows about this rule's reliance on
    // the legacy config.
    if (
    isUsingFlatConfig &&
    e.message.includes('No ESLint configuration found'))
    {
      throw new Error('\nDue to the exclusion of certain internal ESLint APIs when using flat config,\nthe import/no-unused-modules rule requires an .eslintrc file to know which\nfiles to ignore (even when using flat config).\nThe .eslintrc file only needs to contain "ignorePatterns", or can be empty if\nyou do not want to ignore any files.\n\nSee https://github.com/import-js/eslint-plugin-import/issues/3079\nfor additional context.\n');









    }
    // If this isn't the case, then we'll just let the error bubble up
    throw e;
  }
}

/**
   * Attempt to require old versions of the file enumeration capability from v6 `eslint` and earlier, and use
   * those functions to provide the list of files to operate on
   * @param {string} src path to the src root
   * @param {string[]} extensions list of supported extensions
   * @returns {string[]} list of files to operate on
   */
function listFilesWithLegacyFunctions(src, extensions) {
  try {
    // eslint/lib/util/glob-util has been moved to eslint/lib/util/glob-utils with version 5.3
    var _require4 = require('eslint/lib/util/glob-utils'),originalListFilesToProcess = _require4.listFilesToProcess;
    // Prevent passing invalid options (extensions array) to old versions of the function.
    // https://github.com/eslint/eslint/blob/v5.16.0/lib/util/glob-utils.js#L178-L280
    // https://github.com/eslint/eslint/blob/v5.2.0/lib/util/glob-util.js#L174-L269

    return originalListFilesToProcess(src, {
      extensions: extensions });

  } catch (e) {
    // Absorb this if it's MODULE_NOT_FOUND
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }

    // Last place to try (pre v5.3)
    var _require5 =

    require('eslint/lib/util/glob-util'),_originalListFilesToProcess = _require5.listFilesToProcess;
    var patterns = src.concat(
    (0, _arrayPrototype2['default'])(
    src,
    function (pattern) {return extensions.map(function (extension) {return (/\*\*|\*\./.test(pattern) ? pattern : String(pattern) + '/**/*' + String(extension));});}));



    return _originalListFilesToProcess(patterns);
  }
}

/**
   * Given a src pattern and list of supported extensions, return a list of files to process
   * with this rule.
   * @param {string} src - file, directory, or glob pattern of files to act on
   * @param {string[]} extensions - list of supported file extensions
   * @returns {string[] | { filename: string, ignored: boolean }[]} the list of files that this rule will evaluate.
   */
function listFilesToProcess(src, extensions) {
  var FileEnumerator = requireFileEnumerator();

  // If we got the FileEnumerator, then let's go with that
  if (FileEnumerator) {
    return listFilesUsingFileEnumerator(FileEnumerator, src, extensions);
  }
  // If not, then we can try even older versions of this capability (listFilesToProcess)
  return listFilesWithLegacyFunctions(src, extensions);
}

var EXPORT_DEFAULT_DECLARATION = 'ExportDefaultDeclaration';
var EXPORT_NAMED_DECLARATION = 'ExportNamedDeclaration';
var EXPORT_ALL_DECLARATION = 'ExportAllDeclaration';
var IMPORT_DECLARATION = 'ImportDeclaration';
var IMPORT_NAMESPACE_SPECIFIER = 'ImportNamespaceSpecifier';
var IMPORT_DEFAULT_SPECIFIER = 'ImportDefaultSpecifier';
var VARIABLE_DECLARATION = 'VariableDeclaration';
var FUNCTION_DECLARATION = 'FunctionDeclaration';
var CLASS_DECLARATION = 'ClassDeclaration';
var IDENTIFIER = 'Identifier';
var OBJECT_PATTERN = 'ObjectPattern';
var ARRAY_PATTERN = 'ArrayPattern';
var TS_INTERFACE_DECLARATION = 'TSInterfaceDeclaration';
var TS_TYPE_ALIAS_DECLARATION = 'TSTypeAliasDeclaration';
var TS_ENUM_DECLARATION = 'TSEnumDeclaration';
var DEFAULT = 'default';

function forEachDeclarationIdentifier(declaration, cb) {
  if (declaration) {
    var isTypeDeclaration = declaration.type === TS_INTERFACE_DECLARATION ||
    declaration.type === TS_TYPE_ALIAS_DECLARATION ||
    declaration.type === TS_ENUM_DECLARATION;

    if (
    declaration.type === FUNCTION_DECLARATION ||
    declaration.type === CLASS_DECLARATION ||
    isTypeDeclaration)
    {
      cb(declaration.id.name, isTypeDeclaration);
    } else if (declaration.type === VARIABLE_DECLARATION) {
      declaration.declarations.forEach(function (_ref2) {var id = _ref2.id;
        if (id.type === OBJECT_PATTERN) {
          (0, _patternCapture2['default'])(id, function (pattern) {
            if (pattern.type === IDENTIFIER) {
              cb(pattern.name, false);
            }
          });
        } else if (id.type === ARRAY_PATTERN) {
          id.elements.forEach(function (_ref3) {var name = _ref3.name;
            cb(name, false);
          });
        } else {
          cb(id.name, false);
        }
      });
    }
  }
}

/**
   * List of imports per file.
   *
   * Represented by a two-level Map to a Set of identifiers. The upper-level Map
   * keys are the paths to the modules containing the imports, while the
   * lower-level Map keys are the paths to the files which are being imported
   * from. Lastly, the Set of identifiers contains either names being imported
   * or a special AST node name listed above (e.g ImportDefaultSpecifier).
   *
   * For example, if we have a file named foo.js containing:
   *
   *   import { o2 } from './bar.js';
   *
   * Then we will have a structure that looks like:
   *
   *   Map { 'foo.js' => Map { 'bar.js' => Set { 'o2' } } }
   *
   * @type {Map<string, Map<string, Set<string>>>}
   */
var importList = new Map();

/**
                             * List of exports per file.
                             *
                             * Represented by a two-level Map to an object of metadata. The upper-level Map
                             * keys are the paths to the modules containing the exports, while the
                             * lower-level Map keys are the specific identifiers or special AST node names
                             * being exported. The leaf-level metadata object at the moment only contains a
                             * `whereUsed` property, which contains a Set of paths to modules that import
                             * the name.
                             *
                             * For example, if we have a file named bar.js containing the following exports:
                             *
                             *   const o2 = 'bar';
                             *   export { o2 };
                             *
                             * And a file named foo.js containing the following import:
                             *
                             *   import { o2 } from './bar.js';
                             *
                             * Then we will have a structure that looks like:
                             *
                             *   Map { 'bar.js' => Map { 'o2' => { whereUsed: Set { 'foo.js' } } } }
                             *
                             * @type {Map<string, Map<string, object>>}
                             */
var exportList = new Map();

var visitorKeyMap = new Map();

/** @type {Set<string>} */
var ignoredFiles = new Set();
var filesOutsideSrc = new Set();

var isNodeModule = function isNodeModule(path) {return (/\/(node_modules)\//.test(path));};

/**
                                                                                             * read all files matching the patterns in src and ignoreExports
                                                                                             *
                                                                                             * return all files matching src pattern, which are not matching the ignoreExports pattern
                                                                                             * @type {(src: string, ignoreExports: string, context: import('eslint').Rule.RuleContext) => Set<string>}
                                                                                             */
function resolveFiles(src, ignoreExports, context) {
  var extensions = Array.from((0, _ignore.getFileExtensions)(context.settings));

  var srcFileList = listFilesToProcess(src, extensions);

  // prepare list of ignored files
  var ignoredFilesList = listFilesToProcess(ignoreExports, extensions);

  // The modern api will return a list of file paths, rather than an object
  if (ignoredFilesList.length && typeof ignoredFilesList[0] === 'string') {
    ignoredFilesList.forEach(function (filename) {return ignoredFiles.add(filename);});
  } else {
    ignoredFilesList.forEach(function (_ref4) {var filename = _ref4.filename;return ignoredFiles.add(filename);});
  }

  // prepare list of source files, don't consider files from node_modules
  var resolvedFiles = srcFileList.length && typeof srcFileList[0] === 'string' ?
  srcFileList.filter(function (filePath) {return !isNodeModule(filePath);}) :
  (0, _arrayPrototype2['default'])(srcFileList, function (_ref5) {var filename = _ref5.filename;return isNodeModule(filename) ? [] : filename;});

  return new Set(resolvedFiles);
}

/**
   * parse all source files and build up 2 maps containing the existing imports and exports
   */
var prepareImportsAndExports = function prepareImportsAndExports(srcFiles, context) {
  var exportAll = new Map();
  srcFiles.forEach(function (file) {
    var exports = new Map();
    var imports = new Map();
    var currentExports = _builder2['default'].get(file, context);
    if (currentExports) {var

      dependencies =




      currentExports.dependencies,reexports = currentExports.reexports,localImportList = currentExports.imports,namespace = currentExports.namespace,visitorKeys = currentExports.visitorKeys;

      visitorKeyMap.set(file, visitorKeys);
      // dependencies === export * from
      var currentExportAll = new Set();
      dependencies.forEach(function (getDependency) {
        var dependency = getDependency();
        if (dependency === null) {
          return;
        }

        currentExportAll.add(dependency.path);
      });
      exportAll.set(file, currentExportAll);

      reexports.forEach(function (value, key) {
        if (key === DEFAULT) {
          exports.set(IMPORT_DEFAULT_SPECIFIER, { whereUsed: new Set() });
        } else {
          exports.set(key, { whereUsed: new Set() });
        }
        var reexport = value.getImport();
        if (!reexport) {
          return;
        }
        var localImport = imports.get(reexport.path);
        var currentValue = void 0;
        if (value.local === DEFAULT) {
          currentValue = IMPORT_DEFAULT_SPECIFIER;
        } else {
          currentValue = value.local;
        }
        if (typeof localImport !== 'undefined') {
          localImport = new Set([].concat(_toConsumableArray(localImport), [currentValue]));
        } else {
          localImport = new Set([currentValue]);
        }
        imports.set(reexport.path, localImport);
      });

      localImportList.forEach(function (value, key) {
        if (isNodeModule(key)) {
          return;
        }
        var localImport = imports.get(key) || new Set();
        value.declarations.forEach(function (_ref6) {var importedSpecifiers = _ref6.importedSpecifiers;
          importedSpecifiers.forEach(function (specifier) {
            localImport.add(specifier);
          });
        });
        imports.set(key, localImport);
      });
      importList.set(file, imports);

      // build up export list only, if file is not ignored
      if (ignoredFiles.has(file)) {
        return;
      }
      namespace.forEach(function (value, key) {
        if (key === DEFAULT) {
          exports.set(IMPORT_DEFAULT_SPECIFIER, { whereUsed: new Set() });
        } else {
          exports.set(key, { whereUsed: new Set() });
        }
      });
    }
    exports.set(EXPORT_ALL_DECLARATION, { whereUsed: new Set() });
    exports.set(IMPORT_NAMESPACE_SPECIFIER, { whereUsed: new Set() });
    exportList.set(file, exports);
  });
  exportAll.forEach(function (value, key) {
    value.forEach(function (val) {
      var currentExports = exportList.get(val);
      if (currentExports) {
        var currentExport = currentExports.get(EXPORT_ALL_DECLARATION);
        currentExport.whereUsed.add(key);
      }
    });
  });
};

/**
    * traverse through all imports and add the respective path to the whereUsed-list
    * of the corresponding export
    */
var determineUsage = function determineUsage() {
  importList.forEach(function (listValue, listKey) {
    listValue.forEach(function (value, key) {
      var exports = exportList.get(key);
      if (typeof exports !== 'undefined') {
        value.forEach(function (currentImport) {
          var specifier = void 0;
          if (currentImport === IMPORT_NAMESPACE_SPECIFIER) {
            specifier = IMPORT_NAMESPACE_SPECIFIER;
          } else if (currentImport === IMPORT_DEFAULT_SPECIFIER) {
            specifier = IMPORT_DEFAULT_SPECIFIER;
          } else {
            specifier = currentImport;
          }
          if (typeof specifier !== 'undefined') {
            var exportStatement = exports.get(specifier);
            if (typeof exportStatement !== 'undefined') {var
              whereUsed = exportStatement.whereUsed;
              whereUsed.add(listKey);
              exports.set(specifier, { whereUsed: whereUsed });
            }
          }
        });
      }
    });
  });
};

var getSrc = function getSrc(src) {
  if (src) {
    return src;
  }
  return [process.cwd()];
};

/**
    * prepare the lists of existing imports and exports - should only be executed once at
    * the start of a new eslint run
    */
/** @type {Set<string>} */
var srcFiles = void 0;
var lastPrepareKey = void 0;
var doPreparation = function doPreparation(src, ignoreExports, context) {
  var prepareKey = JSON.stringify({
    src: (src || []).sort(),
    ignoreExports: (ignoreExports || []).sort(),
    extensions: Array.from((0, _ignore.getFileExtensions)(context.settings)).sort() });

  if (prepareKey === lastPrepareKey) {
    return;
  }

  importList.clear();
  exportList.clear();
  ignoredFiles.clear();
  filesOutsideSrc.clear();

  srcFiles = resolveFiles(getSrc(src), ignoreExports, context);
  prepareImportsAndExports(srcFiles, context);
  determineUsage();
  lastPrepareKey = prepareKey;
};

var newNamespaceImportExists = function newNamespaceImportExists(specifiers) {return specifiers.some(function (_ref7) {var type = _ref7.type;return type === IMPORT_NAMESPACE_SPECIFIER;});};

var newDefaultImportExists = function newDefaultImportExists(specifiers) {return specifiers.some(function (_ref8) {var type = _ref8.type;return type === IMPORT_DEFAULT_SPECIFIER;});};

var fileIsInPkg = function fileIsInPkg(file) {var _readPkgUp =
  (0, _readPkgUp3['default'])({ cwd: file }),path = _readPkgUp.path,pkg = _readPkgUp.pkg;
  var basePath = (0, _path.dirname)(path);

  var checkPkgFieldString = function checkPkgFieldString(pkgField) {
    if ((0, _path.join)(basePath, pkgField) === file) {
      return true;
    }
  };

  var checkPkgFieldObject = function checkPkgFieldObject(pkgField) {
    var pkgFieldFiles = (0, _arrayPrototype2['default'])((0, _object2['default'])(pkgField), function (value) {return typeof value === 'boolean' ? [] : (0, _path.join)(basePath, value);});

    if ((0, _arrayIncludes2['default'])(pkgFieldFiles, file)) {
      return true;
    }
  };

  var checkPkgField = function checkPkgField(pkgField) {
    if (typeof pkgField === 'string') {
      return checkPkgFieldString(pkgField);
    }

    if ((typeof pkgField === 'undefined' ? 'undefined' : _typeof(pkgField)) === 'object') {
      return checkPkgFieldObject(pkgField);
    }
  };

  if (pkg['private'] === true) {
    return false;
  }

  if (pkg.bin) {
    if (checkPkgField(pkg.bin)) {
      return true;
    }
  }

  if (pkg.browser) {
    if (checkPkgField(pkg.browser)) {
      return true;
    }
  }

  if (pkg.main) {
    if (checkPkgFieldString(pkg.main)) {
      return true;
    }
  }

  return false;
};

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Helpful warnings',
      description: 'Forbid modules without exports, or exports without matching import in another module.',
      url: (0, _docsUrl2['default'])('no-unused-modules') },

    schema: [{
      properties: {
        src: {
          description: 'files/paths to be analyzed (only for unused exports)',
          type: 'array',
          uniqueItems: true,
          items: {
            type: 'string',
            minLength: 1 } },


        ignoreExports: {
          description: 'files/paths for which unused exports will not be reported (e.g module entry points)',
          type: 'array',
          uniqueItems: true,
          items: {
            type: 'string',
            minLength: 1 } },


        missingExports: {
          description: 'report modules without any exports',
          type: 'boolean' },

        unusedExports: {
          description: 'report exports without any usage',
          type: 'boolean' },

        ignoreUnusedTypeExports: {
          description: 'ignore type exports without any usage',
          type: 'boolean' } },


      anyOf: [
      {
        properties: {
          unusedExports: { 'enum': [true] },
          src: {
            minItems: 1 } },


        required: ['unusedExports'] },

      {
        properties: {
          missingExports: { 'enum': [true] } },

        required: ['missingExports'] }] }] },





  create: function () {function create(context) {var _ref9 =






      context.options[0] || {},src = _ref9.src,_ref9$ignoreExports = _ref9.ignoreExports,ignoreExports = _ref9$ignoreExports === undefined ? [] : _ref9$ignoreExports,missingExports = _ref9.missingExports,unusedExports = _ref9.unusedExports,ignoreUnusedTypeExports = _ref9.ignoreUnusedTypeExports;

      if (unusedExports) {
        doPreparation(src, ignoreExports, context);
      }

      var file = (0, _contextCompat.getPhysicalFilename)(context);

      var checkExportPresence = function () {function checkExportPresence(node) {
          if (!missingExports) {
            return;
          }

          if (ignoredFiles.has(file)) {
            return;
          }

          var exportCount = exportList.get(file);
          var exportAll = exportCount.get(EXPORT_ALL_DECLARATION);
          var namespaceImports = exportCount.get(IMPORT_NAMESPACE_SPECIFIER);

          exportCount['delete'](EXPORT_ALL_DECLARATION);
          exportCount['delete'](IMPORT_NAMESPACE_SPECIFIER);
          if (exportCount.size < 1) {
            // node.body[0] === 'undefined' only happens, if everything is commented out in the file
            // being linted
            context.report(node.body[0] ? node.body[0] : node, 'No exports found');
          }
          exportCount.set(EXPORT_ALL_DECLARATION, exportAll);
          exportCount.set(IMPORT_NAMESPACE_SPECIFIER, namespaceImports);
        }return checkExportPresence;}();

      var checkUsage = function () {function checkUsage(node, exportedValue, isTypeExport) {
          if (!unusedExports) {
            return;
          }

          if (isTypeExport && ignoreUnusedTypeExports) {
            return;
          }

          if (ignoredFiles.has(file)) {
            return;
          }

          if (fileIsInPkg(file)) {
            return;
          }

          if (filesOutsideSrc.has(file)) {
            return;
          }

          // make sure file to be linted is included in source files
          if (!srcFiles.has(file)) {
            srcFiles = resolveFiles(getSrc(src), ignoreExports, context);
            if (!srcFiles.has(file)) {
              filesOutsideSrc.add(file);
              return;
            }
          }

          exports = exportList.get(file);

          if (!exports) {
            console.error('file `' + String(file) + '` has no exports. Please update to the latest, and if it still happens, report this on https://github.com/import-js/eslint-plugin-import/issues/2866!');
          }

          // special case: export * from
          var exportAll = exports.get(EXPORT_ALL_DECLARATION);
          if (typeof exportAll !== 'undefined' && exportedValue !== IMPORT_DEFAULT_SPECIFIER) {
            if (exportAll.whereUsed.size > 0) {
              return;
            }
          }

          // special case: namespace import
          var namespaceImports = exports.get(IMPORT_NAMESPACE_SPECIFIER);
          if (typeof namespaceImports !== 'undefined') {
            if (namespaceImports.whereUsed.size > 0) {
              return;
            }
          }

          // exportsList will always map any imported value of 'default' to 'ImportDefaultSpecifier'
          var exportsKey = exportedValue === DEFAULT ? IMPORT_DEFAULT_SPECIFIER : exportedValue;

          var exportStatement = exports.get(exportsKey);

          var value = exportsKey === IMPORT_DEFAULT_SPECIFIER ? DEFAULT : exportsKey;

          if (typeof exportStatement !== 'undefined') {
            if (exportStatement.whereUsed.size < 1) {
              context.report(
              node, 'exported declaration \'' +
              value + '\' not used within other modules');

            }
          } else {
            context.report(
            node, 'exported declaration \'' +
            value + '\' not used within other modules');

          }
        }return checkUsage;}();

      /**
                                 * only useful for tools like vscode-eslint
                                 *
                                 * update lists of existing exports during runtime
                                 */
      var updateExportUsage = function () {function updateExportUsage(node) {
          if (ignoredFiles.has(file)) {
            return;
          }

          var exports = exportList.get(file);

          // new module has been created during runtime
          // include it in further processing
          if (typeof exports === 'undefined') {
            exports = new Map();
          }

          var newExports = new Map();
          var newExportIdentifiers = new Set();

          node.body.forEach(function (_ref10) {var type = _ref10.type,declaration = _ref10.declaration,specifiers = _ref10.specifiers;
            if (type === EXPORT_DEFAULT_DECLARATION) {
              newExportIdentifiers.add(IMPORT_DEFAULT_SPECIFIER);
            }
            if (type === EXPORT_NAMED_DECLARATION) {
              if (specifiers.length > 0) {
                specifiers.forEach(function (specifier) {
                  if (specifier.exported) {
                    newExportIdentifiers.add(specifier.exported.name || specifier.exported.value);
                  }
                });
              }
              forEachDeclarationIdentifier(declaration, function (name) {
                newExportIdentifiers.add(name);
              });
            }
          });

          // old exports exist within list of new exports identifiers: add to map of new exports
          exports.forEach(function (value, key) {
            if (newExportIdentifiers.has(key)) {
              newExports.set(key, value);
            }
          });

          // new export identifiers added: add to map of new exports
          newExportIdentifiers.forEach(function (key) {
            if (!exports.has(key)) {
              newExports.set(key, { whereUsed: new Set() });
            }
          });

          // preserve information about namespace imports
          var exportAll = exports.get(EXPORT_ALL_DECLARATION);
          var namespaceImports = exports.get(IMPORT_NAMESPACE_SPECIFIER);

          if (typeof namespaceImports === 'undefined') {
            namespaceImports = { whereUsed: new Set() };
          }

          newExports.set(EXPORT_ALL_DECLARATION, exportAll);
          newExports.set(IMPORT_NAMESPACE_SPECIFIER, namespaceImports);
          exportList.set(file, newExports);
        }return updateExportUsage;}();

      /**
                                        * only useful for tools like vscode-eslint
                                        *
                                        * update lists of existing imports during runtime
                                        */
      var updateImportUsage = function () {function updateImportUsage(node) {
          if (!unusedExports) {
            return;
          }

          var oldImportPaths = importList.get(file);
          if (typeof oldImportPaths === 'undefined') {
            oldImportPaths = new Map();
          }

          var oldNamespaceImports = new Set();
          var newNamespaceImports = new Set();

          var oldExportAll = new Set();
          var newExportAll = new Set();

          var oldDefaultImports = new Set();
          var newDefaultImports = new Set();

          var oldImports = new Map();
          var newImports = new Map();
          oldImportPaths.forEach(function (value, key) {
            if (value.has(EXPORT_ALL_DECLARATION)) {
              oldExportAll.add(key);
            }
            if (value.has(IMPORT_NAMESPACE_SPECIFIER)) {
              oldNamespaceImports.add(key);
            }
            if (value.has(IMPORT_DEFAULT_SPECIFIER)) {
              oldDefaultImports.add(key);
            }
            value.forEach(function (val) {
              if (
              val !== IMPORT_NAMESPACE_SPECIFIER &&
              val !== IMPORT_DEFAULT_SPECIFIER)
              {
                oldImports.set(val, key);
              }
            });
          });

          function processDynamicImport(source) {
            if (source.type !== 'Literal') {
              return null;
            }
            var p = (0, _resolve2['default'])(source.value, context);
            if (p == null) {
              return null;
            }
            newNamespaceImports.add(p);
          }

          (0, _visit2['default'])(node, visitorKeyMap.get(file), {
            ImportExpression: function () {function ImportExpression(child) {
                processDynamicImport(child.source);
              }return ImportExpression;}(),
            CallExpression: function () {function CallExpression(child) {
                if (child.callee.type === 'Import') {
                  processDynamicImport(child.arguments[0]);
                }
              }return CallExpression;}() });


          node.body.forEach(function (astNode) {
            var resolvedPath = void 0;

            // support for export { value } from 'module'
            if (astNode.type === EXPORT_NAMED_DECLARATION) {
              if (astNode.source) {
                resolvedPath = (0, _resolve2['default'])(astNode.source.raw.replace(/('|")/g, ''), context);
                astNode.specifiers.forEach(function (specifier) {
                  var name = specifier.local.name || specifier.local.value;
                  if (name === DEFAULT) {
                    newDefaultImports.add(resolvedPath);
                  } else {
                    newImports.set(name, resolvedPath);
                  }
                });
              }
            }

            if (astNode.type === EXPORT_ALL_DECLARATION) {
              resolvedPath = (0, _resolve2['default'])(astNode.source.raw.replace(/('|")/g, ''), context);
              newExportAll.add(resolvedPath);
            }

            if (astNode.type === IMPORT_DECLARATION) {
              resolvedPath = (0, _resolve2['default'])(astNode.source.raw.replace(/('|")/g, ''), context);
              if (!resolvedPath) {
                return;
              }

              if (isNodeModule(resolvedPath)) {
                return;
              }

              if (newNamespaceImportExists(astNode.specifiers)) {
                newNamespaceImports.add(resolvedPath);
              }

              if (newDefaultImportExists(astNode.specifiers)) {
                newDefaultImports.add(resolvedPath);
              }

              astNode.specifiers.
              filter(function (specifier) {return specifier.type !== IMPORT_DEFAULT_SPECIFIER && specifier.type !== IMPORT_NAMESPACE_SPECIFIER;}).
              forEach(function (specifier) {
                newImports.set(specifier.imported.name || specifier.imported.value, resolvedPath);
              });
            }
          });

          newExportAll.forEach(function (value) {
            if (!oldExportAll.has(value)) {
              var imports = oldImportPaths.get(value);
              if (typeof imports === 'undefined') {
                imports = new Set();
              }
              imports.add(EXPORT_ALL_DECLARATION);
              oldImportPaths.set(value, imports);

              var _exports = exportList.get(value);
              var currentExport = void 0;
              if (typeof _exports !== 'undefined') {
                currentExport = _exports.get(EXPORT_ALL_DECLARATION);
              } else {
                _exports = new Map();
                exportList.set(value, _exports);
              }

              if (typeof currentExport !== 'undefined') {
                currentExport.whereUsed.add(file);
              } else {
                var whereUsed = new Set();
                whereUsed.add(file);
                _exports.set(EXPORT_ALL_DECLARATION, { whereUsed: whereUsed });
              }
            }
          });

          oldExportAll.forEach(function (value) {
            if (!newExportAll.has(value)) {
              var imports = oldImportPaths.get(value);
              imports['delete'](EXPORT_ALL_DECLARATION);

              var _exports2 = exportList.get(value);
              if (typeof _exports2 !== 'undefined') {
                var currentExport = _exports2.get(EXPORT_ALL_DECLARATION);
                if (typeof currentExport !== 'undefined') {
                  currentExport.whereUsed['delete'](file);
                }
              }
            }
          });

          newDefaultImports.forEach(function (value) {
            if (!oldDefaultImports.has(value)) {
              var imports = oldImportPaths.get(value);
              if (typeof imports === 'undefined') {
                imports = new Set();
              }
              imports.add(IMPORT_DEFAULT_SPECIFIER);
              oldImportPaths.set(value, imports);

              var _exports3 = exportList.get(value);
              var currentExport = void 0;
              if (typeof _exports3 !== 'undefined') {
                currentExport = _exports3.get(IMPORT_DEFAULT_SPECIFIER);
              } else {
                _exports3 = new Map();
                exportList.set(value, _exports3);
              }

              if (typeof currentExport !== 'undefined') {
                currentExport.whereUsed.add(file);
              } else {
                var whereUsed = new Set();
                whereUsed.add(file);
                _exports3.set(IMPORT_DEFAULT_SPECIFIER, { whereUsed: whereUsed });
              }
            }
          });

          oldDefaultImports.forEach(function (value) {
            if (!newDefaultImports.has(value)) {
              var imports = oldImportPaths.get(value);
              imports['delete'](IMPORT_DEFAULT_SPECIFIER);

              var _exports4 = exportList.get(value);
              if (typeof _exports4 !== 'undefined') {
                var currentExport = _exports4.get(IMPORT_DEFAULT_SPECIFIER);
                if (typeof currentExport !== 'undefined') {
                  currentExport.whereUsed['delete'](file);
                }
              }
            }
          });

          newNamespaceImports.forEach(function (value) {
            if (!oldNamespaceImports.has(value)) {
              var imports = oldImportPaths.get(value);
              if (typeof imports === 'undefined') {
                imports = new Set();
              }
              imports.add(IMPORT_NAMESPACE_SPECIFIER);
              oldImportPaths.set(value, imports);

              var _exports5 = exportList.get(value);
              var currentExport = void 0;
              if (typeof _exports5 !== 'undefined') {
                currentExport = _exports5.get(IMPORT_NAMESPACE_SPECIFIER);
              } else {
                _exports5 = new Map();
                exportList.set(value, _exports5);
              }

              if (typeof currentExport !== 'undefined') {
                currentExport.whereUsed.add(file);
              } else {
                var whereUsed = new Set();
                whereUsed.add(file);
                _exports5.set(IMPORT_NAMESPACE_SPECIFIER, { whereUsed: whereUsed });
              }
            }
          });

          oldNamespaceImports.forEach(function (value) {
            if (!newNamespaceImports.has(value)) {
              var imports = oldImportPaths.get(value);
              imports['delete'](IMPORT_NAMESPACE_SPECIFIER);

              var _exports6 = exportList.get(value);
              if (typeof _exports6 !== 'undefined') {
                var currentExport = _exports6.get(IMPORT_NAMESPACE_SPECIFIER);
                if (typeof currentExport !== 'undefined') {
                  currentExport.whereUsed['delete'](file);
                }
              }
            }
          });

          newImports.forEach(function (value, key) {
            if (!oldImports.has(key)) {
              var imports = oldImportPaths.get(value);
              if (typeof imports === 'undefined') {
                imports = new Set();
              }
              imports.add(key);
              oldImportPaths.set(value, imports);

              var _exports7 = exportList.get(value);
              var currentExport = void 0;
              if (typeof _exports7 !== 'undefined') {
                currentExport = _exports7.get(key);
              } else {
                _exports7 = new Map();
                exportList.set(value, _exports7);
              }

              if (typeof currentExport !== 'undefined') {
                currentExport.whereUsed.add(file);
              } else {
                var whereUsed = new Set();
                whereUsed.add(file);
                _exports7.set(key, { whereUsed: whereUsed });
              }
            }
          });

          oldImports.forEach(function (value, key) {
            if (!newImports.has(key)) {
              var imports = oldImportPaths.get(value);
              imports['delete'](key);

              var _exports8 = exportList.get(value);
              if (typeof _exports8 !== 'undefined') {
                var currentExport = _exports8.get(key);
                if (typeof currentExport !== 'undefined') {
                  currentExport.whereUsed['delete'](file);
                }
              }
            }
          });
        }return updateImportUsage;}();

      return {
        'Program:exit': function () {function ProgramExit(node) {
            updateExportUsage(node);
            updateImportUsage(node);
            checkExportPresence(node);
          }return ProgramExit;}(),
        ExportDefaultDeclaration: function () {function ExportDefaultDeclaration(node) {
            checkUsage(node, IMPORT_DEFAULT_SPECIFIER, false);
          }return ExportDefaultDeclaration;}(),
        ExportNamedDeclaration: function () {function ExportNamedDeclaration(node) {
            node.specifiers.forEach(function (specifier) {
              checkUsage(specifier, specifier.exported.name || specifier.exported.value, false);
            });
            forEachDeclarationIdentifier(node.declaration, function (name, isTypeExport) {
              checkUsage(node, name, isTypeExport);
            });
          }return ExportNamedDeclaration;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby11bnVzZWQtbW9kdWxlcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlRmlsZUVudW1lcmF0b3IiLCJGaWxlRW51bWVyYXRvciIsInJlcXVpcmUiLCJlIiwiY29kZSIsImxpc3RGaWxlc1VzaW5nRmlsZUVudW1lcmF0b3IiLCJzcmMiLCJleHRlbnNpb25zIiwiRVNMSU5UX1VTRV9GTEFUX0NPTkZJRyIsInByb2Nlc3MiLCJlbnYiLCJpc1VzaW5nRmxhdENvbmZpZyIsInNob3VsZFVzZUZsYXRDb25maWciLCJfIiwiZW51bWVyYXRvciIsIkFycmF5IiwiZnJvbSIsIml0ZXJhdGVGaWxlcyIsImZpbGVQYXRoIiwiaWdub3JlZCIsImZpbGVuYW1lIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiRXJyb3IiLCJsaXN0RmlsZXNXaXRoTGVnYWN5RnVuY3Rpb25zIiwib3JpZ2luYWxMaXN0RmlsZXNUb1Byb2Nlc3MiLCJsaXN0RmlsZXNUb1Byb2Nlc3MiLCJwYXR0ZXJucyIsImNvbmNhdCIsInBhdHRlcm4iLCJtYXAiLCJleHRlbnNpb24iLCJ0ZXN0IiwiRVhQT1JUX0RFRkFVTFRfREVDTEFSQVRJT04iLCJFWFBPUlRfTkFNRURfREVDTEFSQVRJT04iLCJFWFBPUlRfQUxMX0RFQ0xBUkFUSU9OIiwiSU1QT1JUX0RFQ0xBUkFUSU9OIiwiSU1QT1JUX05BTUVTUEFDRV9TUEVDSUZJRVIiLCJJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVIiLCJWQVJJQUJMRV9ERUNMQVJBVElPTiIsIkZVTkNUSU9OX0RFQ0xBUkFUSU9OIiwiQ0xBU1NfREVDTEFSQVRJT04iLCJJREVOVElGSUVSIiwiT0JKRUNUX1BBVFRFUk4iLCJBUlJBWV9QQVRURVJOIiwiVFNfSU5URVJGQUNFX0RFQ0xBUkFUSU9OIiwiVFNfVFlQRV9BTElBU19ERUNMQVJBVElPTiIsIlRTX0VOVU1fREVDTEFSQVRJT04iLCJERUZBVUxUIiwiZm9yRWFjaERlY2xhcmF0aW9uSWRlbnRpZmllciIsImRlY2xhcmF0aW9uIiwiY2IiLCJpc1R5cGVEZWNsYXJhdGlvbiIsInR5cGUiLCJpZCIsIm5hbWUiLCJkZWNsYXJhdGlvbnMiLCJmb3JFYWNoIiwiZWxlbWVudHMiLCJpbXBvcnRMaXN0IiwiTWFwIiwiZXhwb3J0TGlzdCIsInZpc2l0b3JLZXlNYXAiLCJpZ25vcmVkRmlsZXMiLCJTZXQiLCJmaWxlc091dHNpZGVTcmMiLCJpc05vZGVNb2R1bGUiLCJwYXRoIiwicmVzb2x2ZUZpbGVzIiwiaWdub3JlRXhwb3J0cyIsImNvbnRleHQiLCJzZXR0aW5ncyIsInNyY0ZpbGVMaXN0IiwiaWdub3JlZEZpbGVzTGlzdCIsImxlbmd0aCIsImFkZCIsInJlc29sdmVkRmlsZXMiLCJmaWx0ZXIiLCJwcmVwYXJlSW1wb3J0c0FuZEV4cG9ydHMiLCJzcmNGaWxlcyIsImV4cG9ydEFsbCIsImZpbGUiLCJleHBvcnRzIiwiaW1wb3J0cyIsImN1cnJlbnRFeHBvcnRzIiwiRXhwb3J0TWFwQnVpbGRlciIsImdldCIsImRlcGVuZGVuY2llcyIsInJlZXhwb3J0cyIsImxvY2FsSW1wb3J0TGlzdCIsIm5hbWVzcGFjZSIsInZpc2l0b3JLZXlzIiwic2V0IiwiY3VycmVudEV4cG9ydEFsbCIsImdldERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwidmFsdWUiLCJrZXkiLCJ3aGVyZVVzZWQiLCJyZWV4cG9ydCIsImdldEltcG9ydCIsImxvY2FsSW1wb3J0IiwiY3VycmVudFZhbHVlIiwibG9jYWwiLCJpbXBvcnRlZFNwZWNpZmllcnMiLCJzcGVjaWZpZXIiLCJoYXMiLCJ2YWwiLCJjdXJyZW50RXhwb3J0IiwiZGV0ZXJtaW5lVXNhZ2UiLCJsaXN0VmFsdWUiLCJsaXN0S2V5IiwiY3VycmVudEltcG9ydCIsImV4cG9ydFN0YXRlbWVudCIsImdldFNyYyIsImN3ZCIsImxhc3RQcmVwYXJlS2V5IiwiZG9QcmVwYXJhdGlvbiIsInByZXBhcmVLZXkiLCJKU09OIiwic3RyaW5naWZ5Iiwic29ydCIsImNsZWFyIiwibmV3TmFtZXNwYWNlSW1wb3J0RXhpc3RzIiwic3BlY2lmaWVycyIsInNvbWUiLCJuZXdEZWZhdWx0SW1wb3J0RXhpc3RzIiwiZmlsZUlzSW5Qa2ciLCJwa2ciLCJiYXNlUGF0aCIsImNoZWNrUGtnRmllbGRTdHJpbmciLCJwa2dGaWVsZCIsImNoZWNrUGtnRmllbGRPYmplY3QiLCJwa2dGaWVsZEZpbGVzIiwiY2hlY2tQa2dGaWVsZCIsImJpbiIsImJyb3dzZXIiLCJtYWluIiwibW9kdWxlIiwibWV0YSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwicHJvcGVydGllcyIsInVuaXF1ZUl0ZW1zIiwiaXRlbXMiLCJtaW5MZW5ndGgiLCJtaXNzaW5nRXhwb3J0cyIsInVudXNlZEV4cG9ydHMiLCJpZ25vcmVVbnVzZWRUeXBlRXhwb3J0cyIsImFueU9mIiwibWluSXRlbXMiLCJyZXF1aXJlZCIsImNyZWF0ZSIsIm9wdGlvbnMiLCJjaGVja0V4cG9ydFByZXNlbmNlIiwibm9kZSIsImV4cG9ydENvdW50IiwibmFtZXNwYWNlSW1wb3J0cyIsInNpemUiLCJyZXBvcnQiLCJib2R5IiwiY2hlY2tVc2FnZSIsImV4cG9ydGVkVmFsdWUiLCJpc1R5cGVFeHBvcnQiLCJjb25zb2xlIiwiZXJyb3IiLCJleHBvcnRzS2V5IiwidXBkYXRlRXhwb3J0VXNhZ2UiLCJuZXdFeHBvcnRzIiwibmV3RXhwb3J0SWRlbnRpZmllcnMiLCJleHBvcnRlZCIsInVwZGF0ZUltcG9ydFVzYWdlIiwib2xkSW1wb3J0UGF0aHMiLCJvbGROYW1lc3BhY2VJbXBvcnRzIiwibmV3TmFtZXNwYWNlSW1wb3J0cyIsIm9sZEV4cG9ydEFsbCIsIm5ld0V4cG9ydEFsbCIsIm9sZERlZmF1bHRJbXBvcnRzIiwibmV3RGVmYXVsdEltcG9ydHMiLCJvbGRJbXBvcnRzIiwibmV3SW1wb3J0cyIsInByb2Nlc3NEeW5hbWljSW1wb3J0Iiwic291cmNlIiwicCIsIkltcG9ydEV4cHJlc3Npb24iLCJjaGlsZCIsIkNhbGxFeHByZXNzaW9uIiwiY2FsbGVlIiwiYXJndW1lbnRzIiwiYXN0Tm9kZSIsInJlc29sdmVkUGF0aCIsInJhdyIsInJlcGxhY2UiLCJpbXBvcnRlZCIsIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvbiIsIkV4cG9ydE5hbWVkRGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BO0FBQ0E7QUFDQSxzRDtBQUNBLGtEO0FBQ0E7QUFDQSwyRDtBQUNBLHVDO0FBQ0EsK0M7QUFDQSx5RDs7QUFFQSwrQztBQUNBLDZEO0FBQ0EscUMsMlVBbEJBOzs7O29YQW9CQTs7Ozs7dVhBTUEsU0FBU0EscUJBQVQsR0FBaUMsQ0FDL0IsSUFBSUMsdUJBQUo7O0FBRUE7QUFDQSxNQUFJO0FBQ29CQyxZQUFRLDZCQUFSLENBRHBCLENBQ0NELGNBREQsWUFDQ0EsY0FERDtBQUVILEdBRkQsQ0FFRSxPQUFPRSxDQUFQLEVBQVU7QUFDVjtBQUNBLFFBQUlBLEVBQUVDLElBQUYsS0FBVyxrQkFBZixFQUFtQztBQUNqQyxZQUFNRCxDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJO0FBQ29CRCxjQUFRLHVDQUFSLENBRHBCLENBQ0NELGNBREQsYUFDQ0EsY0FERDtBQUVILEtBRkQsQ0FFRSxPQUFPRSxDQUFQLEVBQVU7QUFDVjtBQUNBLFVBQUlBLEVBQUVDLElBQUYsS0FBVyxrQkFBZixFQUFtQztBQUNqQyxjQUFNRCxDQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsU0FBT0YsY0FBUDtBQUNEOztBQUVEOzs7Ozs7O0FBT0EsU0FBU0ksNEJBQVQsQ0FBc0NKLGNBQXRDLEVBQXNESyxHQUF0RCxFQUEyREMsVUFBM0QsRUFBdUU7QUFDckU7QUFDQTtBQUZxRTtBQUk3REMsd0JBSjZELEdBSWxDQyxRQUFRQyxHQUowQixDQUk3REYsc0JBSjZEOztBQU1yRTtBQUNBLE1BQUlHLG9CQUFvQkgsMEJBQTBCQyxRQUFRQyxHQUFSLENBQVlGLHNCQUFaLEtBQXVDLE9BQXpGOztBQUVBO0FBQ0E7QUFDQSxNQUFJO0FBQzhCTixZQUFRLDZCQUFSLENBRDlCLENB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QSxpQkFBS2xDLFVBQUwsQ0FBZ0JuRSxPQUFoQixDQUF3QixVQUFDZ0QsU0FBRCxFQUFlO0FBQ3JDMkQseUJBQVczRCxTQUFYLEVBQXNCQSxVQUFVb0UsUUFBVixDQUFtQnRILElBQW5CLElBQTJCa0QsVUFBVW9FLFFBQVYsQ0FBbUI3RSxLQUFwRSxFQUEyRSxLQUEzRTtBQUNELGFBRkQ7QUFHQS9DLHlDQUE2QjZHLEtBQUs1RyxXQUFsQyxFQUErQyxVQUFDSyxJQUFELEVBQU8rRyxZQUFQLEVBQXdCO0FBQ3JFRix5QkFBV04sSUFBWCxFQUFpQnZHLElBQWpCLEVBQXVCK0csWUFBdkI7QUFDRCxhQUZEO0FBR0QsV0FoQkksbUNBQVA7O0FBa0JELEtBcGlCYyxtQkFBakIiLCJmaWxlIjoibm8tdW51c2VkLW1vZHVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgRW5zdXJlcyB0aGF0IG1vZHVsZXMgY29udGFpbiBleHBvcnRzIGFuZC9vciBhbGxcbiAqIG1vZHVsZXMgYXJlIGNvbnN1bWVkIHdpdGhpbiBvdGhlciBtb2R1bGVzLlxuICogQGF1dGhvciBSZW7DqSBGZXJtYW5uXG4gKi9cblxuaW1wb3J0IHsgZ2V0UGh5c2ljYWxGaWxlbmFtZSB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvY29udGV4dENvbXBhdCc7XG5pbXBvcnQgeyBnZXRGaWxlRXh0ZW5zaW9ucyB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvaWdub3JlJztcbmltcG9ydCByZXNvbHZlIGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvcmVzb2x2ZSc7XG5pbXBvcnQgdmlzaXQgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy92aXNpdCc7XG5pbXBvcnQgeyBkaXJuYW1lLCBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgcmVhZFBrZ1VwIGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvcmVhZFBrZ1VwJztcbmltcG9ydCB2YWx1ZXMgZnJvbSAnb2JqZWN0LnZhbHVlcyc7XG5pbXBvcnQgaW5jbHVkZXMgZnJvbSAnYXJyYXktaW5jbHVkZXMnO1xuaW1wb3J0IGZsYXRNYXAgZnJvbSAnYXJyYXkucHJvdG90eXBlLmZsYXRtYXAnO1xuXG5pbXBvcnQgRXhwb3J0TWFwQnVpbGRlciBmcm9tICcuLi9leHBvcnRNYXAvYnVpbGRlcic7XG5pbXBvcnQgcmVjdXJzaXZlUGF0dGVybkNhcHR1cmUgZnJvbSAnLi4vZXhwb3J0TWFwL3BhdHRlcm5DYXB0dXJlJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG4vKipcbiAqIEF0dGVtcHQgdG8gbG9hZCB0aGUgaW50ZXJuYWwgYEZpbGVFbnVtZXJhdG9yYCBjbGFzcywgd2hpY2ggaGFzIGV4aXN0ZWQgaW4gYSBjb3VwbGVcbiAqIG9mIGRpZmZlcmVudCBwbGFjZXMsIGRlcGVuZGluZyBvbiB0aGUgdmVyc2lvbiBvZiBgZXNsaW50YC4gIFRyeSByZXF1aXJpbmcgaXQgZnJvbSBib3RoXG4gKiBsb2NhdGlvbnMuXG4gKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBgRmlsZUVudW1lcmF0b3JgIGNsYXNzIGlmIGl0cyByZXF1aXJhYmxlLCBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIHJlcXVpcmVGaWxlRW51bWVyYXRvcigpIHtcbiAgbGV0IEZpbGVFbnVtZXJhdG9yO1xuXG4gIC8vIFRyeSBnZXR0aW5nIGl0IGZyb20gdGhlIGVzbGludCBwcml2YXRlIC8gZGVwcmVjYXRlZCBhcGlcbiAgdHJ5IHtcbiAgICAoeyBGaWxlRW51bWVyYXRvciB9ID0gcmVxdWlyZSgnZXNsaW50L3VzZS1hdC15b3VyLW93bi1yaXNrJykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gQWJzb3JiIHRoaXMgaWYgaXQncyBNT0RVTEVfTk9UX0ZPVU5EXG4gICAgaWYgKGUuY29kZSAhPT0gJ01PRFVMRV9OT1RfRk9VTkQnKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIC8vIElmIG5vdCB0aGVyZSwgdGhlbiB0cnkgZ2V0dGluZyBpdCBmcm9tIGVzbGludC9saWIvY2xpLWVuZ2luZS9maWxlLWVudW1lcmF0b3IgKG1vdmVkIHRoZXJlIGluIHY2KVxuICAgIHRyeSB7XG4gICAgICAoeyBGaWxlRW51bWVyYXRvciB9ID0gcmVxdWlyZSgnZXNsaW50L2xpYi9jbGktZW5naW5lL2ZpbGUtZW51bWVyYXRvcicpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBBYnNvcmIgdGhpcyBpZiBpdCdzIE1PRFVMRV9OT1RfRk9VTkRcbiAgICAgIGlmIChlLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gRmlsZUVudW1lcmF0b3I7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBGaWxlRW51bWVyYXRvciBjbGFzcywgaW5zdGFudGlhdGUgYW5kIGxvYWQgdGhlIGxpc3Qgb2YgZmlsZXMuXG4gKiBAcGFyYW0gRmlsZUVudW1lcmF0b3IgdGhlIGBGaWxlRW51bWVyYXRvcmAgY2xhc3MgZnJvbSBgZXNsaW50YCdzIGludGVybmFsIGFwaVxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyBwYXRoIHRvIHRoZSBzcmMgcm9vdFxuICogQHBhcmFtIHtzdHJpbmdbXX0gZXh0ZW5zaW9ucyBsaXN0IG9mIHN1cHBvcnRlZCBleHRlbnNpb25zXG4gKiBAcmV0dXJucyB7eyBmaWxlbmFtZTogc3RyaW5nLCBpZ25vcmVkOiBib29sZWFuIH1bXX0gbGlzdCBvZiBmaWxlcyB0byBvcGVyYXRlIG9uXG4gKi9cbmZ1bmN0aW9uIGxpc3RGaWxlc1VzaW5nRmlsZUVudW1lcmF0b3IoRmlsZUVudW1lcmF0b3IsIHNyYywgZXh0ZW5zaW9ucykge1xuICAvLyBXZSBuZWVkIHRvIGtub3cgd2hldGhlciB0aGlzIGlzIGJlaW5nIHJ1biB3aXRoIGZsYXQgY29uZmlnIGluIG9yZGVyIHRvXG4gIC8vIGRldGVybWluZSBob3cgdG8gcmVwb3J0IGVycm9ycyBpZiBGaWxlRW51bWVyYXRvciB0aHJvd3MgZHVlIHRvIGEgbGFjayBvZiBlc2xpbnRyYy5cblxuICBjb25zdCB7IEVTTElOVF9VU0VfRkxBVF9DT05GSUcgfSA9IHByb2Nlc3MuZW52O1xuXG4gIC8vIFRoaXMgY29uZGl0aW9uIGlzIHN1ZmZpY2llbnQgdG8gdGVzdCBpbiB2OCwgc2luY2UgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGlzIG5lY2Vzc2FyeSB0byB0dXJuIG9uIGZsYXQgY29uZmlnXG4gIGxldCBpc1VzaW5nRmxhdENvbmZpZyA9IEVTTElOVF9VU0VfRkxBVF9DT05GSUcgJiYgcHJvY2Vzcy5lbnYuRVNMSU5UX1VTRV9GTEFUX0NPTkZJRyAhPT0gJ2ZhbHNlJztcblxuICAvLyBJbiB0aGUgY2FzZSBvZiB1c2luZyB2OSwgd2UgY2FuIGNoZWNrIHRoZSBgc2hvdWxkVXNlRmxhdENvbmZpZ2AgZnVuY3Rpb25cbiAgLy8gSWYgdGhpcyBmdW5jdGlvbiBpcyBwcmVzZW50LCB0aGVuIHdlIGFzc3VtZSBpdCdzIHY5XG4gIHRyeSB7XG4gICAgY29uc3QgeyBzaG91bGRVc2VGbGF0Q29uZmlnIH0gPSByZXF1aXJlKCdlc2xpbnQvdXNlLWF0LXlvdXItb3duLXJpc2snKTtcbiAgICBpc1VzaW5nRmxhdENvbmZpZyA9IHNob3VsZFVzZUZsYXRDb25maWcgJiYgRVNMSU5UX1VTRV9GTEFUX0NPTkZJRyAhPT0gJ2ZhbHNlJztcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gdGhyb3cgaGVyZSwgc2luY2Ugd2Ugb25seSB3YW50IHRvIHVwZGF0ZSB0aGVcbiAgICAvLyBib29sZWFuIGlmIHRoZSBmdW5jdGlvbiBpcyBhdmFpbGFibGUuXG4gIH1cblxuICBjb25zdCBlbnVtZXJhdG9yID0gbmV3IEZpbGVFbnVtZXJhdG9yKHtcbiAgICBleHRlbnNpb25zLFxuICB9KTtcblxuICB0cnkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgZW51bWVyYXRvci5pdGVyYXRlRmlsZXMoc3JjKSxcbiAgICAgICh7IGZpbGVQYXRoLCBpZ25vcmVkIH0pID0+ICh7IGZpbGVuYW1lOiBmaWxlUGF0aCwgaWdub3JlZCB9KSxcbiAgICApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSWYgd2UncmUgdXNpbmcgZmxhdCBjb25maWcsIGFuZCBGaWxlRW51bWVyYXRvciB0aHJvd3MgZHVlIHRvIGEgbGFjayBvZiBlc2xpbnRyYyxcbiAgICAvLyB0aGVuIHdlIHdhbnQgdG8gdGhyb3cgYW4gZXJyb3Igc28gdGhhdCB0aGUgdXNlciBrbm93cyBhYm91dCB0aGlzIHJ1bGUncyByZWxpYW5jZSBvblxuICAgIC8vIHRoZSBsZWdhY3kgY29uZmlnLlxuICAgIGlmIChcbiAgICAgIGlzVXNpbmdGbGF0Q29uZmlnXG4gICAgICAmJiBlLm1lc3NhZ2UuaW5jbHVkZXMoJ05vIEVTTGludCBjb25maWd1cmF0aW9uIGZvdW5kJylcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG5EdWUgdG8gdGhlIGV4Y2x1c2lvbiBvZiBjZXJ0YWluIGludGVybmFsIEVTTGludCBBUElzIHdoZW4gdXNpbmcgZmxhdCBjb25maWcsXG50aGUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzIHJ1bGUgcmVxdWlyZXMgYW4gLmVzbGludHJjIGZpbGUgdG8ga25vdyB3aGljaFxuZmlsZXMgdG8gaWdub3JlIChldmVuIHdoZW4gdXNpbmcgZmxhdCBjb25maWcpLlxuVGhlIC5lc2xpbnRyYyBmaWxlIG9ubHkgbmVlZHMgdG8gY29udGFpbiBcImlnbm9yZVBhdHRlcm5zXCIsIG9yIGNhbiBiZSBlbXB0eSBpZlxueW91IGRvIG5vdCB3YW50IHRvIGlnbm9yZSBhbnkgZmlsZXMuXG5cblNlZSBodHRwczovL2dpdGh1Yi5jb20vaW1wb3J0LWpzL2VzbGludC1wbHVnaW4taW1wb3J0L2lzc3Vlcy8zMDc5XG5mb3IgYWRkaXRpb25hbCBjb250ZXh0LlxuYCk7XG4gICAgfVxuICAgIC8vIElmIHRoaXMgaXNuJ3QgdGhlIGNhc2UsIHRoZW4gd2UnbGwganVzdCBsZXQgdGhlIGVycm9yIGJ1YmJsZSB1cFxuICAgIHRocm93IGU7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIHJlcXVpcmUgb2xkIHZlcnNpb25zIG9mIHRoZSBmaWxlIGVudW1lcmF0aW9uIGNhcGFiaWxpdHkgZnJvbSB2NiBgZXNsaW50YCBhbmQgZWFybGllciwgYW5kIHVzZVxuICogdGhvc2UgZnVuY3Rpb25zIHRvIHByb3ZpZGUgdGhlIGxpc3Qgb2YgZmlsZXMgdG8gb3BlcmF0ZSBvblxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyBwYXRoIHRvIHRoZSBzcmMgcm9vdFxuICogQHBhcmFtIHtzdHJpbmdbXX0gZXh0ZW5zaW9ucyBsaXN0IG9mIHN1cHBvcnRlZCBleHRlbnNpb25zXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IGxpc3Qgb2YgZmlsZXMgdG8gb3BlcmF0ZSBvblxuICovXG5mdW5jdGlvbiBsaXN0RmlsZXNXaXRoTGVnYWN5RnVuY3Rpb25zKHNyYywgZXh0ZW5zaW9ucykge1xuICB0cnkge1xuICAgIC8vIGVzbGludC9saWIvdXRpbC9nbG9iLXV0aWwgaGFzIGJlZW4gbW92ZWQgdG8gZXNsaW50L2xpYi91dGlsL2dsb2ItdXRpbHMgd2l0aCB2ZXJzaW9uIDUuM1xuICAgIGNvbnN0IHsgbGlzdEZpbGVzVG9Qcm9jZXNzOiBvcmlnaW5hbExpc3RGaWxlc1RvUHJvY2VzcyB9ID0gcmVxdWlyZSgnZXNsaW50L2xpYi91dGlsL2dsb2ItdXRpbHMnKTtcbiAgICAvLyBQcmV2ZW50IHBhc3NpbmcgaW52YWxpZCBvcHRpb25zIChleHRlbnNpb25zIGFycmF5KSB0byBvbGQgdmVyc2lvbnMgb2YgdGhlIGZ1bmN0aW9uLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2Jsb2IvdjUuMTYuMC9saWIvdXRpbC9nbG9iLXV0aWxzLmpzI0wxNzgtTDI4MFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2Jsb2IvdjUuMi4wL2xpYi91dGlsL2dsb2ItdXRpbC5qcyNMMTc0LUwyNjlcblxuICAgIHJldHVybiBvcmlnaW5hbExpc3RGaWxlc1RvUHJvY2VzcyhzcmMsIHtcbiAgICAgIGV4dGVuc2lvbnMsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBBYnNvcmIgdGhpcyBpZiBpdCdzIE1PRFVMRV9OT1RfRk9VTkRcbiAgICBpZiAoZS5jb2RlICE9PSAnTU9EVUxFX05PVF9GT1VORCcpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgLy8gTGFzdCBwbGFjZSB0byB0cnkgKHByZSB2NS4zKVxuICAgIGNvbnN0IHtcbiAgICAgIGxpc3RGaWxlc1RvUHJvY2Vzczogb3JpZ2luYWxMaXN0RmlsZXNUb1Byb2Nlc3MsXG4gICAgfSA9IHJlcXVpcmUoJ2VzbGludC9saWIvdXRpbC9nbG9iLXV0aWwnKTtcbiAgICBjb25zdCBwYXR0ZXJucyA9IHNyYy5jb25jYXQoXG4gICAgICBmbGF0TWFwKFxuICAgICAgICBzcmMsXG4gICAgICAgIChwYXR0ZXJuKSA9PiBleHRlbnNpb25zLm1hcCgoZXh0ZW5zaW9uKSA9PiAoL1xcKlxcKnxcXCpcXC4vKS50ZXN0KHBhdHRlcm4pID8gcGF0dGVybiA6IGAke3BhdHRlcm59LyoqLyoke2V4dGVuc2lvbn1gKSxcbiAgICAgICksXG4gICAgKTtcblxuICAgIHJldHVybiBvcmlnaW5hbExpc3RGaWxlc1RvUHJvY2VzcyhwYXR0ZXJucyk7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIHNyYyBwYXR0ZXJuIGFuZCBsaXN0IG9mIHN1cHBvcnRlZCBleHRlbnNpb25zLCByZXR1cm4gYSBsaXN0IG9mIGZpbGVzIHRvIHByb2Nlc3NcbiAqIHdpdGggdGhpcyBydWxlLlxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIGZpbGUsIGRpcmVjdG9yeSwgb3IgZ2xvYiBwYXR0ZXJuIG9mIGZpbGVzIHRvIGFjdCBvblxuICogQHBhcmFtIHtzdHJpbmdbXX0gZXh0ZW5zaW9ucyAtIGxpc3Qgb2Ygc3VwcG9ydGVkIGZpbGUgZXh0ZW5zaW9uc1xuICogQHJldHVybnMge3N0cmluZ1tdIHwgeyBmaWxlbmFtZTogc3RyaW5nLCBpZ25vcmVkOiBib29sZWFuIH1bXX0gdGhlIGxpc3Qgb2YgZmlsZXMgdGhhdCB0aGlzIHJ1bGUgd2lsbCBldmFsdWF0ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdEZpbGVzVG9Qcm9jZXNzKHNyYywgZXh0ZW5zaW9ucykge1xuICBjb25zdCBGaWxlRW51bWVyYXRvciA9IHJlcXVpcmVGaWxlRW51bWVyYXRvcigpO1xuXG4gIC8vIElmIHdlIGdvdCB0aGUgRmlsZUVudW1lcmF0b3IsIHRoZW4gbGV0J3MgZ28gd2l0aCB0aGF0XG4gIGlmIChGaWxlRW51bWVyYXRvcikge1xuICAgIHJldHVybiBsaXN0RmlsZXNVc2luZ0ZpbGVFbnVtZXJhdG9yKEZpbGVFbnVtZXJhdG9yLCBzcmMsIGV4dGVuc2lvbnMpO1xuICB9XG4gIC8vIElmIG5vdCwgdGhlbiB3ZSBjYW4gdHJ5IGV2ZW4gb2xkZXIgdmVyc2lvbnMgb2YgdGhpcyBjYXBhYmlsaXR5IChsaXN0RmlsZXNUb1Byb2Nlc3MpXG4gIHJldHVybiBsaXN0RmlsZXNXaXRoTGVnYWN5RnVuY3Rpb25zKHNyYywgZXh0ZW5zaW9ucyk7XG59XG5cbmNvbnN0IEVYUE9SVF9ERUZBVUxUX0RFQ0xBUkFUSU9OID0gJ0V4cG9ydERlZmF1bHREZWNsYXJhdGlvbic7XG5jb25zdCBFWFBPUlRfTkFNRURfREVDTEFSQVRJT04gPSAnRXhwb3J0TmFtZWREZWNsYXJhdGlvbic7XG5jb25zdCBFWFBPUlRfQUxMX0RFQ0xBUkFUSU9OID0gJ0V4cG9ydEFsbERlY2xhcmF0aW9uJztcbmNvbnN0IElNUE9SVF9ERUNMQVJBVElPTiA9ICdJbXBvcnREZWNsYXJhdGlvbic7XG5jb25zdCBJTVBPUlRfTkFNRVNQQUNFX1NQRUNJRklFUiA9ICdJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXInO1xuY29uc3QgSU1QT1JUX0RFRkFVTFRfU1BFQ0lGSUVSID0gJ0ltcG9ydERlZmF1bHRTcGVjaWZpZXInO1xuY29uc3QgVkFSSUFCTEVfREVDTEFSQVRJT04gPSAnVmFyaWFibGVEZWNsYXJhdGlvbic7XG5jb25zdCBGVU5DVElPTl9ERUNMQVJBVElPTiA9ICdGdW5jdGlvbkRlY2xhcmF0aW9uJztcbmNvbnN0IENMQVNTX0RFQ0xBUkFUSU9OID0gJ0NsYXNzRGVjbGFyYXRpb24nO1xuY29uc3QgSURFTlRJRklFUiA9ICdJZGVudGlmaWVyJztcbmNvbnN0IE9CSkVDVF9QQVRURVJOID0gJ09iamVjdFBhdHRlcm4nO1xuY29uc3QgQVJSQVlfUEFUVEVSTiA9ICdBcnJheVBhdHRlcm4nO1xuY29uc3QgVFNfSU5URVJGQUNFX0RFQ0xBUkFUSU9OID0gJ1RTSW50ZXJmYWNlRGVjbGFyYXRpb24nO1xuY29uc3QgVFNfVFlQRV9BTElBU19ERUNMQVJBVElPTiA9ICdUU1R5cGVBbGlhc0RlY2xhcmF0aW9uJztcbmNvbnN0IFRTX0VOVU1fREVDTEFSQVRJT04gPSAnVFNFbnVtRGVjbGFyYXRpb24nO1xuY29uc3QgREVGQVVMVCA9ICdkZWZhdWx0JztcblxuZnVuY3Rpb24gZm9yRWFjaERlY2xhcmF0aW9uSWRlbnRpZmllcihkZWNsYXJhdGlvbiwgY2IpIHtcbiAgaWYgKGRlY2xhcmF0aW9uKSB7XG4gICAgY29uc3QgaXNUeXBlRGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi50eXBlID09PSBUU19JTlRFUkZBQ0VfREVDTEFSQVRJT05cbiAgICAgIHx8IGRlY2xhcmF0aW9uLnR5cGUgPT09IFRTX1RZUEVfQUxJQVNfREVDTEFSQVRJT05cbiAgICAgIHx8IGRlY2xhcmF0aW9uLnR5cGUgPT09IFRTX0VOVU1fREVDTEFSQVRJT047XG5cbiAgICBpZiAoXG4gICAgICBkZWNsYXJhdGlvbi50eXBlID09PSBGVU5DVElPTl9ERUNMQVJBVElPTlxuICAgICAgfHwgZGVjbGFyYXRpb24udHlwZSA9PT0gQ0xBU1NfREVDTEFSQVRJT05cbiAgICAgIHx8IGlzVHlwZURlY2xhcmF0aW9uXG4gICAgKSB7XG4gICAgICBjYihkZWNsYXJhdGlvbi5pZC5uYW1lLCBpc1R5cGVEZWNsYXJhdGlvbik7XG4gICAgfSBlbHNlIGlmIChkZWNsYXJhdGlvbi50eXBlID09PSBWQVJJQUJMRV9ERUNMQVJBVElPTikge1xuICAgICAgZGVjbGFyYXRpb24uZGVjbGFyYXRpb25zLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICBpZiAoaWQudHlwZSA9PT0gT0JKRUNUX1BBVFRFUk4pIHtcbiAgICAgICAgICByZWN1cnNpdmVQYXR0ZXJuQ2FwdHVyZShpZCwgKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuLnR5cGUgPT09IElERU5USUZJRVIpIHtcbiAgICAgICAgICAgICAgY2IocGF0dGVybi5uYW1lLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaWQudHlwZSA9PT0gQVJSQVlfUEFUVEVSTikge1xuICAgICAgICAgIGlkLmVsZW1lbnRzLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBjYihuYW1lLCBmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IoaWQubmFtZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBMaXN0IG9mIGltcG9ydHMgcGVyIGZpbGUuXG4gKlxuICogUmVwcmVzZW50ZWQgYnkgYSB0d28tbGV2ZWwgTWFwIHRvIGEgU2V0IG9mIGlkZW50aWZpZXJzLiBUaGUgdXBwZXItbGV2ZWwgTWFwXG4gKiBrZXlzIGFyZSB0aGUgcGF0aHMgdG8gdGhlIG1vZHVsZXMgY29udGFpbmluZyB0aGUgaW1wb3J0cywgd2hpbGUgdGhlXG4gKiBsb3dlci1sZXZlbCBNYXAga2V5cyBhcmUgdGhlIHBhdGhzIHRvIHRoZSBmaWxlcyB3aGljaCBhcmUgYmVpbmcgaW1wb3J0ZWRcbiAqIGZyb20uIExhc3RseSwgdGhlIFNldCBvZiBpZGVudGlmaWVycyBjb250YWlucyBlaXRoZXIgbmFtZXMgYmVpbmcgaW1wb3J0ZWRcbiAqIG9yIGEgc3BlY2lhbCBBU1Qgbm9kZSBuYW1lIGxpc3RlZCBhYm92ZSAoZS5nIEltcG9ydERlZmF1bHRTcGVjaWZpZXIpLlxuICpcbiAqIEZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIGEgZmlsZSBuYW1lZCBmb28uanMgY29udGFpbmluZzpcbiAqXG4gKiAgIGltcG9ydCB7IG8yIH0gZnJvbSAnLi9iYXIuanMnO1xuICpcbiAqIFRoZW4gd2Ugd2lsbCBoYXZlIGEgc3RydWN0dXJlIHRoYXQgbG9va3MgbGlrZTpcbiAqXG4gKiAgIE1hcCB7ICdmb28uanMnID0+IE1hcCB7ICdiYXIuanMnID0+IFNldCB7ICdvMicgfSB9IH1cbiAqXG4gKiBAdHlwZSB7TWFwPHN0cmluZywgTWFwPHN0cmluZywgU2V0PHN0cmluZz4+Pn1cbiAqL1xuY29uc3QgaW1wb3J0TGlzdCA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBMaXN0IG9mIGV4cG9ydHMgcGVyIGZpbGUuXG4gKlxuICogUmVwcmVzZW50ZWQgYnkgYSB0d28tbGV2ZWwgTWFwIHRvIGFuIG9iamVjdCBvZiBtZXRhZGF0YS4gVGhlIHVwcGVyLWxldmVsIE1hcFxuICoga2V5cyBhcmUgdGhlIHBhdGhzIHRvIHRoZSBtb2R1bGVzIGNvbnRhaW5pbmcgdGhlIGV4cG9ydHMsIHdoaWxlIHRoZVxuICogbG93ZXItbGV2ZWwgTWFwIGtleXMgYXJlIHRoZSBzcGVjaWZpYyBpZGVudGlmaWVycyBvciBzcGVjaWFsIEFTVCBub2RlIG5hbWVzXG4gKiBiZWluZyBleHBvcnRlZC4gVGhlIGxlYWYtbGV2ZWwgbWV0YWRhdGEgb2JqZWN0IGF0IHRoZSBtb21lbnQgb25seSBjb250YWlucyBhXG4gKiBgd2hlcmVVc2VkYCBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgYSBTZXQgb2YgcGF0aHMgdG8gbW9kdWxlcyB0aGF0IGltcG9ydFxuICogdGhlIG5hbWUuXG4gKlxuICogRm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgYSBmaWxlIG5hbWVkIGJhci5qcyBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZXhwb3J0czpcbiAqXG4gKiAgIGNvbnN0IG8yID0gJ2Jhcic7XG4gKiAgIGV4cG9ydCB7IG8yIH07XG4gKlxuICogQW5kIGEgZmlsZSBuYW1lZCBmb28uanMgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGltcG9ydDpcbiAqXG4gKiAgIGltcG9ydCB7IG8yIH0gZnJvbSAnLi9iYXIuanMnO1xuICpcbiAqIFRoZW4gd2Ugd2lsbCBoYXZlIGEgc3RydWN0dXJlIHRoYXQgbG9va3MgbGlrZTpcbiAqXG4gKiAgIE1hcCB7ICdiYXIuanMnID0+IE1hcCB7ICdvMicgPT4geyB3aGVyZVVzZWQ6IFNldCB7ICdmb28uanMnIH0gfSB9IH1cbiAqXG4gKiBAdHlwZSB7TWFwPHN0cmluZywgTWFwPHN0cmluZywgb2JqZWN0Pj59XG4gKi9cbmNvbnN0IGV4cG9ydExpc3QgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IHZpc2l0b3JLZXlNYXAgPSBuZXcgTWFwKCk7XG5cbi8qKiBAdHlwZSB7U2V0PHN0cmluZz59ICovXG5jb25zdCBpZ25vcmVkRmlsZXMgPSBuZXcgU2V0KCk7XG5jb25zdCBmaWxlc091dHNpZGVTcmMgPSBuZXcgU2V0KCk7XG5cbmNvbnN0IGlzTm9kZU1vZHVsZSA9IChwYXRoKSA9PiAoL1xcLyhub2RlX21vZHVsZXMpXFwvLykudGVzdChwYXRoKTtcblxuLyoqXG4gKiByZWFkIGFsbCBmaWxlcyBtYXRjaGluZyB0aGUgcGF0dGVybnMgaW4gc3JjIGFuZCBpZ25vcmVFeHBvcnRzXG4gKlxuICogcmV0dXJuIGFsbCBmaWxlcyBtYXRjaGluZyBzcmMgcGF0dGVybiwgd2hpY2ggYXJlIG5vdCBtYXRjaGluZyB0aGUgaWdub3JlRXhwb3J0cyBwYXR0ZXJuXG4gKiBAdHlwZSB7KHNyYzogc3RyaW5nLCBpZ25vcmVFeHBvcnRzOiBzdHJpbmcsIGNvbnRleHQ6IGltcG9ydCgnZXNsaW50JykuUnVsZS5SdWxlQ29udGV4dCkgPT4gU2V0PHN0cmluZz59XG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVGaWxlcyhzcmMsIGlnbm9yZUV4cG9ydHMsIGNvbnRleHQpIHtcbiAgY29uc3QgZXh0ZW5zaW9ucyA9IEFycmF5LmZyb20oZ2V0RmlsZUV4dGVuc2lvbnMoY29udGV4dC5zZXR0aW5ncykpO1xuXG4gIGNvbnN0IHNyY0ZpbGVMaXN0ID0gbGlzdEZpbGVzVG9Qcm9jZXNzKHNyYywgZXh0ZW5zaW9ucyk7XG5cbiAgLy8gcHJlcGFyZSBsaXN0IG9mIGlnbm9yZWQgZmlsZXNcbiAgY29uc3QgaWdub3JlZEZpbGVzTGlzdCA9IGxpc3RGaWxlc1RvUHJvY2VzcyhpZ25vcmVFeHBvcnRzLCBleHRlbnNpb25zKTtcblxuICAvLyBUaGUgbW9kZXJuIGFwaSB3aWxsIHJldHVybiBhIGxpc3Qgb2YgZmlsZSBwYXRocywgcmF0aGVyIHRoYW4gYW4gb2JqZWN0XG4gIGlmIChpZ25vcmVkRmlsZXNMaXN0Lmxlbmd0aCAmJiB0eXBlb2YgaWdub3JlZEZpbGVzTGlzdFswXSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZ25vcmVkRmlsZXNMaXN0LmZvckVhY2goKGZpbGVuYW1lKSA9PiBpZ25vcmVkRmlsZXMuYWRkKGZpbGVuYW1lKSk7XG4gIH0gZWxzZSB7XG4gICAgaWdub3JlZEZpbGVzTGlzdC5mb3JFYWNoKCh7IGZpbGVuYW1lIH0pID0+IGlnbm9yZWRGaWxlcy5hZGQoZmlsZW5hbWUpKTtcbiAgfVxuXG4gIC8vIHByZXBhcmUgbGlzdCBvZiBzb3VyY2UgZmlsZXMsIGRvbid0IGNvbnNpZGVyIGZpbGVzIGZyb20gbm9kZV9tb2R1bGVzXG4gIGNvbnN0IHJlc29sdmVkRmlsZXMgPSBzcmNGaWxlTGlzdC5sZW5ndGggJiYgdHlwZW9mIHNyY0ZpbGVMaXN0WzBdID09PSAnc3RyaW5nJ1xuICAgID8gc3JjRmlsZUxpc3QuZmlsdGVyKChmaWxlUGF0aCkgPT4gIWlzTm9kZU1vZHVsZShmaWxlUGF0aCkpXG4gICAgOiBmbGF0TWFwKHNyY0ZpbGVMaXN0LCAoeyBmaWxlbmFtZSB9KSA9PiBpc05vZGVNb2R1bGUoZmlsZW5hbWUpID8gW10gOiBmaWxlbmFtZSk7XG5cbiAgcmV0dXJuIG5ldyBTZXQocmVzb2x2ZWRGaWxlcyk7XG59XG5cbi8qKlxuICogcGFyc2UgYWxsIHNvdXJjZSBmaWxlcyBhbmQgYnVpbGQgdXAgMiBtYXBzIGNvbnRhaW5pbmcgdGhlIGV4aXN0aW5nIGltcG9ydHMgYW5kIGV4cG9ydHNcbiAqL1xuY29uc3QgcHJlcGFyZUltcG9ydHNBbmRFeHBvcnRzID0gKHNyY0ZpbGVzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IGV4cG9ydEFsbCA9IG5ldyBNYXAoKTtcbiAgc3JjRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGV4cG9ydHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgaW1wb3J0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBjdXJyZW50RXhwb3J0cyA9IEV4cG9ydE1hcEJ1aWxkZXIuZ2V0KGZpbGUsIGNvbnRleHQpO1xuICAgIGlmIChjdXJyZW50RXhwb3J0cykge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkZXBlbmRlbmNpZXMsXG4gICAgICAgIHJlZXhwb3J0cyxcbiAgICAgICAgaW1wb3J0czogbG9jYWxJbXBvcnRMaXN0LFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHZpc2l0b3JLZXlzLFxuICAgICAgfSA9IGN1cnJlbnRFeHBvcnRzO1xuXG4gICAgICB2aXNpdG9yS2V5TWFwLnNldChmaWxlLCB2aXNpdG9yS2V5cyk7XG4gICAgICAvLyBkZXBlbmRlbmNpZXMgPT09IGV4cG9ydCAqIGZyb21cbiAgICAgIGNvbnN0IGN1cnJlbnRFeHBvcnRBbGwgPSBuZXcgU2V0KCk7XG4gICAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaCgoZ2V0RGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICBjb25zdCBkZXBlbmRlbmN5ID0gZ2V0RGVwZW5kZW5jeSgpO1xuICAgICAgICBpZiAoZGVwZW5kZW5jeSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRFeHBvcnRBbGwuYWRkKGRlcGVuZGVuY3kucGF0aCk7XG4gICAgICB9KTtcbiAgICAgIGV4cG9ydEFsbC5zZXQoZmlsZSwgY3VycmVudEV4cG9ydEFsbCk7XG5cbiAgICAgIHJlZXhwb3J0cy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09IERFRkFVTFQpIHtcbiAgICAgICAgICBleHBvcnRzLnNldChJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVIsIHsgd2hlcmVVc2VkOiBuZXcgU2V0KCkgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhwb3J0cy5zZXQoa2V5LCB7IHdoZXJlVXNlZDogbmV3IFNldCgpIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlZXhwb3J0ID0gdmFsdWUuZ2V0SW1wb3J0KCk7XG4gICAgICAgIGlmICghcmVleHBvcnQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvY2FsSW1wb3J0ID0gaW1wb3J0cy5nZXQocmVleHBvcnQucGF0aCk7XG4gICAgICAgIGxldCBjdXJyZW50VmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZS5sb2NhbCA9PT0gREVGQVVMVCkge1xuICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IElNUE9SVF9ERUZBVUxUX1NQRUNJRklFUjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50VmFsdWUgPSB2YWx1ZS5sb2NhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxvY2FsSW1wb3J0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGxvY2FsSW1wb3J0ID0gbmV3IFNldChbLi4ubG9jYWxJbXBvcnQsIGN1cnJlbnRWYWx1ZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2FsSW1wb3J0ID0gbmV3IFNldChbY3VycmVudFZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgICAgaW1wb3J0cy5zZXQocmVleHBvcnQucGF0aCwgbG9jYWxJbXBvcnQpO1xuICAgICAgfSk7XG5cbiAgICAgIGxvY2FsSW1wb3J0TGlzdC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChpc05vZGVNb2R1bGUoa2V5KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2NhbEltcG9ydCA9IGltcG9ydHMuZ2V0KGtleSkgfHwgbmV3IFNldCgpO1xuICAgICAgICB2YWx1ZS5kZWNsYXJhdGlvbnMuZm9yRWFjaCgoeyBpbXBvcnRlZFNwZWNpZmllcnMgfSkgPT4ge1xuICAgICAgICAgIGltcG9ydGVkU3BlY2lmaWVycy5mb3JFYWNoKChzcGVjaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGxvY2FsSW1wb3J0LmFkZChzcGVjaWZpZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1wb3J0cy5zZXQoa2V5LCBsb2NhbEltcG9ydCk7XG4gICAgICB9KTtcbiAgICAgIGltcG9ydExpc3Quc2V0KGZpbGUsIGltcG9ydHMpO1xuXG4gICAgICAvLyBidWlsZCB1cCBleHBvcnQgbGlzdCBvbmx5LCBpZiBmaWxlIGlzIG5vdCBpZ25vcmVkXG4gICAgICBpZiAoaWdub3JlZEZpbGVzLmhhcyhmaWxlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBuYW1lc3BhY2UuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSBERUZBVUxUKSB7XG4gICAgICAgICAgZXhwb3J0cy5zZXQoSU1QT1JUX0RFRkFVTFRfU1BFQ0lGSUVSLCB7IHdoZXJlVXNlZDogbmV3IFNldCgpIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4cG9ydHMuc2V0KGtleSwgeyB3aGVyZVVzZWQ6IG5ldyBTZXQoKSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGV4cG9ydHMuc2V0KEVYUE9SVF9BTExfREVDTEFSQVRJT04sIHsgd2hlcmVVc2VkOiBuZXcgU2V0KCkgfSk7XG4gICAgZXhwb3J0cy5zZXQoSU1QT1JUX05BTUVTUEFDRV9TUEVDSUZJRVIsIHsgd2hlcmVVc2VkOiBuZXcgU2V0KCkgfSk7XG4gICAgZXhwb3J0TGlzdC5zZXQoZmlsZSwgZXhwb3J0cyk7XG4gIH0pO1xuICBleHBvcnRBbGwuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIHZhbHVlLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEV4cG9ydHMgPSBleHBvcnRMaXN0LmdldCh2YWwpO1xuICAgICAgaWYgKGN1cnJlbnRFeHBvcnRzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRFeHBvcnQgPSBjdXJyZW50RXhwb3J0cy5nZXQoRVhQT1JUX0FMTF9ERUNMQVJBVElPTik7XG4gICAgICAgIGN1cnJlbnRFeHBvcnQud2hlcmVVc2VkLmFkZChrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogdHJhdmVyc2UgdGhyb3VnaCBhbGwgaW1wb3J0cyBhbmQgYWRkIHRoZSByZXNwZWN0aXZlIHBhdGggdG8gdGhlIHdoZXJlVXNlZC1saXN0XG4gKiBvZiB0aGUgY29ycmVzcG9uZGluZyBleHBvcnRcbiAqL1xuY29uc3QgZGV0ZXJtaW5lVXNhZ2UgPSAoKSA9PiB7XG4gIGltcG9ydExpc3QuZm9yRWFjaCgobGlzdFZhbHVlLCBsaXN0S2V5KSA9PiB7XG4gICAgbGlzdFZhbHVlLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGV4cG9ydHMgPSBleHBvcnRMaXN0LmdldChrZXkpO1xuICAgICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKChjdXJyZW50SW1wb3J0KSA9PiB7XG4gICAgICAgICAgbGV0IHNwZWNpZmllcjtcbiAgICAgICAgICBpZiAoY3VycmVudEltcG9ydCA9PT0gSU1QT1JUX05BTUVTUEFDRV9TUEVDSUZJRVIpIHtcbiAgICAgICAgICAgIHNwZWNpZmllciA9IElNUE9SVF9OQU1FU1BBQ0VfU1BFQ0lGSUVSO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEltcG9ydCA9PT0gSU1QT1JUX0RFRkFVTFRfU1BFQ0lGSUVSKSB7XG4gICAgICAgICAgICBzcGVjaWZpZXIgPSBJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwZWNpZmllciA9IGN1cnJlbnRJbXBvcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgZXhwb3J0U3RhdGVtZW50ID0gZXhwb3J0cy5nZXQoc3BlY2lmaWVyKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXhwb3J0U3RhdGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBjb25zdCB7IHdoZXJlVXNlZCB9ID0gZXhwb3J0U3RhdGVtZW50O1xuICAgICAgICAgICAgICB3aGVyZVVzZWQuYWRkKGxpc3RLZXkpO1xuICAgICAgICAgICAgICBleHBvcnRzLnNldChzcGVjaWZpZXIsIHsgd2hlcmVVc2VkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0U3JjID0gKHNyYykgPT4ge1xuICBpZiAoc3JjKSB7XG4gICAgcmV0dXJuIHNyYztcbiAgfVxuICByZXR1cm4gW3Byb2Nlc3MuY3dkKCldO1xufTtcblxuLyoqXG4gKiBwcmVwYXJlIHRoZSBsaXN0cyBvZiBleGlzdGluZyBpbXBvcnRzIGFuZCBleHBvcnRzIC0gc2hvdWxkIG9ubHkgYmUgZXhlY3V0ZWQgb25jZSBhdFxuICogdGhlIHN0YXJ0IG9mIGEgbmV3IGVzbGludCBydW5cbiAqL1xuLyoqIEB0eXBlIHtTZXQ8c3RyaW5nPn0gKi9cbmxldCBzcmNGaWxlcztcbmxldCBsYXN0UHJlcGFyZUtleTtcbmNvbnN0IGRvUHJlcGFyYXRpb24gPSAoc3JjLCBpZ25vcmVFeHBvcnRzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHByZXBhcmVLZXkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgc3JjOiAoc3JjIHx8IFtdKS5zb3J0KCksXG4gICAgaWdub3JlRXhwb3J0czogKGlnbm9yZUV4cG9ydHMgfHwgW10pLnNvcnQoKSxcbiAgICBleHRlbnNpb25zOiBBcnJheS5mcm9tKGdldEZpbGVFeHRlbnNpb25zKGNvbnRleHQuc2V0dGluZ3MpKS5zb3J0KCksXG4gIH0pO1xuICBpZiAocHJlcGFyZUtleSA9PT0gbGFzdFByZXBhcmVLZXkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbXBvcnRMaXN0LmNsZWFyKCk7XG4gIGV4cG9ydExpc3QuY2xlYXIoKTtcbiAgaWdub3JlZEZpbGVzLmNsZWFyKCk7XG4gIGZpbGVzT3V0c2lkZVNyYy5jbGVhcigpO1xuXG4gIHNyY0ZpbGVzID0gcmVzb2x2ZUZpbGVzKGdldFNyYyhzcmMpLCBpZ25vcmVFeHBvcnRzLCBjb250ZXh0KTtcbiAgcHJlcGFyZUltcG9ydHNBbmRFeHBvcnRzKHNyY0ZpbGVzLCBjb250ZXh0KTtcbiAgZGV0ZXJtaW5lVXNhZ2UoKTtcbiAgbGFzdFByZXBhcmVLZXkgPSBwcmVwYXJlS2V5O1xufTtcblxuY29uc3QgbmV3TmFtZXNwYWNlSW1wb3J0RXhpc3RzID0gKHNwZWNpZmllcnMpID0+IHNwZWNpZmllcnMuc29tZSgoeyB0eXBlIH0pID0+IHR5cGUgPT09IElNUE9SVF9OQU1FU1BBQ0VfU1BFQ0lGSUVSKTtcblxuY29uc3QgbmV3RGVmYXVsdEltcG9ydEV4aXN0cyA9IChzcGVjaWZpZXJzKSA9PiBzcGVjaWZpZXJzLnNvbWUoKHsgdHlwZSB9KSA9PiB0eXBlID09PSBJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVIpO1xuXG5jb25zdCBmaWxlSXNJblBrZyA9IChmaWxlKSA9PiB7XG4gIGNvbnN0IHsgcGF0aCwgcGtnIH0gPSByZWFkUGtnVXAoeyBjd2Q6IGZpbGUgfSk7XG4gIGNvbnN0IGJhc2VQYXRoID0gZGlybmFtZShwYXRoKTtcblxuICBjb25zdCBjaGVja1BrZ0ZpZWxkU3RyaW5nID0gKHBrZ0ZpZWxkKSA9PiB7XG4gICAgaWYgKGpvaW4oYmFzZVBhdGgsIHBrZ0ZpZWxkKSA9PT0gZmlsZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrUGtnRmllbGRPYmplY3QgPSAocGtnRmllbGQpID0+IHtcbiAgICBjb25zdCBwa2dGaWVsZEZpbGVzID0gZmxhdE1hcCh2YWx1ZXMocGtnRmllbGQpLCAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gW10gOiBqb2luKGJhc2VQYXRoLCB2YWx1ZSkpO1xuXG4gICAgaWYgKGluY2x1ZGVzKHBrZ0ZpZWxkRmlsZXMsIGZpbGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tQa2dGaWVsZCA9IChwa2dGaWVsZCkgPT4ge1xuICAgIGlmICh0eXBlb2YgcGtnRmllbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gY2hlY2tQa2dGaWVsZFN0cmluZyhwa2dGaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwa2dGaWVsZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBjaGVja1BrZ0ZpZWxkT2JqZWN0KHBrZ0ZpZWxkKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBrZy5wcml2YXRlID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHBrZy5iaW4pIHtcbiAgICBpZiAoY2hlY2tQa2dGaWVsZChwa2cuYmluKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBrZy5icm93c2VyKSB7XG4gICAgaWYgKGNoZWNrUGtnRmllbGQocGtnLmJyb3dzZXIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAocGtnLm1haW4pIHtcbiAgICBpZiAoY2hlY2tQa2dGaWVsZFN0cmluZyhwa2cubWFpbikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnSGVscGZ1bCB3YXJuaW5ncycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBtb2R1bGVzIHdpdGhvdXQgZXhwb3J0cywgb3IgZXhwb3J0cyB3aXRob3V0IG1hdGNoaW5nIGltcG9ydCBpbiBhbm90aGVyIG1vZHVsZS4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby11bnVzZWQtbW9kdWxlcycpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbe1xuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzcmM6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpbGVzL3BhdGhzIHRvIGJlIGFuYWx5emVkIChvbmx5IGZvciB1bnVzZWQgZXhwb3J0cyknLFxuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgdW5pcXVlSXRlbXM6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGlnbm9yZUV4cG9ydHM6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpbGVzL3BhdGhzIGZvciB3aGljaCB1bnVzZWQgZXhwb3J0cyB3aWxsIG5vdCBiZSByZXBvcnRlZCAoZS5nIG1vZHVsZSBlbnRyeSBwb2ludHMpJyxcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIHVuaXF1ZUl0ZW1zOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtaXNzaW5nRXhwb3J0czoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAncmVwb3J0IG1vZHVsZXMgd2l0aG91dCBhbnkgZXhwb3J0cycsXG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICB9LFxuICAgICAgICB1bnVzZWRFeHBvcnRzOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdyZXBvcnQgZXhwb3J0cyB3aXRob3V0IGFueSB1c2FnZScsXG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICB9LFxuICAgICAgICBpZ25vcmVVbnVzZWRUeXBlRXhwb3J0czoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaWdub3JlIHR5cGUgZXhwb3J0cyB3aXRob3V0IGFueSB1c2FnZScsXG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFueU9mOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB1bnVzZWRFeHBvcnRzOiB7IGVudW06IFt0cnVlXSB9LFxuICAgICAgICAgICAgc3JjOiB7XG4gICAgICAgICAgICAgIG1pbkl0ZW1zOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVpcmVkOiBbJ3VudXNlZEV4cG9ydHMnXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIG1pc3NpbmdFeHBvcnRzOiB7IGVudW06IFt0cnVlXSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxdWlyZWQ6IFsnbWlzc2luZ0V4cG9ydHMnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfV0sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7XG4gICAgICBzcmMsXG4gICAgICBpZ25vcmVFeHBvcnRzID0gW10sXG4gICAgICBtaXNzaW5nRXhwb3J0cyxcbiAgICAgIHVudXNlZEV4cG9ydHMsXG4gICAgICBpZ25vcmVVbnVzZWRUeXBlRXhwb3J0cyxcbiAgICB9ID0gY29udGV4dC5vcHRpb25zWzBdIHx8IHt9O1xuXG4gICAgaWYgKHVudXNlZEV4cG9ydHMpIHtcbiAgICAgIGRvUHJlcGFyYXRpb24oc3JjLCBpZ25vcmVFeHBvcnRzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlID0gZ2V0UGh5c2ljYWxGaWxlbmFtZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGNoZWNrRXhwb3J0UHJlc2VuY2UgPSAobm9kZSkgPT4ge1xuICAgICAgaWYgKCFtaXNzaW5nRXhwb3J0cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpZ25vcmVkRmlsZXMuaGFzKGZpbGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwb3J0Q291bnQgPSBleHBvcnRMaXN0LmdldChmaWxlKTtcbiAgICAgIGNvbnN0IGV4cG9ydEFsbCA9IGV4cG9ydENvdW50LmdldChFWFBPUlRfQUxMX0RFQ0xBUkFUSU9OKTtcbiAgICAgIGNvbnN0IG5hbWVzcGFjZUltcG9ydHMgPSBleHBvcnRDb3VudC5nZXQoSU1QT1JUX05BTUVTUEFDRV9TUEVDSUZJRVIpO1xuXG4gICAgICBleHBvcnRDb3VudC5kZWxldGUoRVhQT1JUX0FMTF9ERUNMQVJBVElPTik7XG4gICAgICBleHBvcnRDb3VudC5kZWxldGUoSU1QT1JUX05BTUVTUEFDRV9TUEVDSUZJRVIpO1xuICAgICAgaWYgKGV4cG9ydENvdW50LnNpemUgPCAxKSB7XG4gICAgICAgIC8vIG5vZGUuYm9keVswXSA9PT0gJ3VuZGVmaW5lZCcgb25seSBoYXBwZW5zLCBpZiBldmVyeXRoaW5nIGlzIGNvbW1lbnRlZCBvdXQgaW4gdGhlIGZpbGVcbiAgICAgICAgLy8gYmVpbmcgbGludGVkXG4gICAgICAgIGNvbnRleHQucmVwb3J0KG5vZGUuYm9keVswXSA/IG5vZGUuYm9keVswXSA6IG5vZGUsICdObyBleHBvcnRzIGZvdW5kJyk7XG4gICAgICB9XG4gICAgICBleHBvcnRDb3VudC5zZXQoRVhQT1JUX0FMTF9ERUNMQVJBVElPTiwgZXhwb3J0QWxsKTtcbiAgICAgIGV4cG9ydENvdW50LnNldChJTVBPUlRfTkFNRVNQQUNFX1NQRUNJRklFUiwgbmFtZXNwYWNlSW1wb3J0cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrVXNhZ2UgPSAobm9kZSwgZXhwb3J0ZWRWYWx1ZSwgaXNUeXBlRXhwb3J0KSA9PiB7XG4gICAgICBpZiAoIXVudXNlZEV4cG9ydHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNUeXBlRXhwb3J0ICYmIGlnbm9yZVVudXNlZFR5cGVFeHBvcnRzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlnbm9yZWRGaWxlcy5oYXMoZmlsZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsZUlzSW5Qa2coZmlsZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsZXNPdXRzaWRlU3JjLmhhcyhmaWxlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSBmaWxlIHRvIGJlIGxpbnRlZCBpcyBpbmNsdWRlZCBpbiBzb3VyY2UgZmlsZXNcbiAgICAgIGlmICghc3JjRmlsZXMuaGFzKGZpbGUpKSB7XG4gICAgICAgIHNyY0ZpbGVzID0gcmVzb2x2ZUZpbGVzKGdldFNyYyhzcmMpLCBpZ25vcmVFeHBvcnRzLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKCFzcmNGaWxlcy5oYXMoZmlsZSkpIHtcbiAgICAgICAgICBmaWxlc091dHNpZGVTcmMuYWRkKGZpbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBleHBvcnRzID0gZXhwb3J0TGlzdC5nZXQoZmlsZSk7XG5cbiAgICAgIGlmICghZXhwb3J0cykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBmaWxlIFxcYCR7ZmlsZX1cXGAgaGFzIG5vIGV4cG9ydHMuIFBsZWFzZSB1cGRhdGUgdG8gdGhlIGxhdGVzdCwgYW5kIGlmIGl0IHN0aWxsIGhhcHBlbnMsIHJlcG9ydCB0aGlzIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9pbXBvcnQtanMvZXNsaW50LXBsdWdpbi1pbXBvcnQvaXNzdWVzLzI4NjYhYCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNwZWNpYWwgY2FzZTogZXhwb3J0ICogZnJvbVxuICAgICAgY29uc3QgZXhwb3J0QWxsID0gZXhwb3J0cy5nZXQoRVhQT1JUX0FMTF9ERUNMQVJBVElPTik7XG4gICAgICBpZiAodHlwZW9mIGV4cG9ydEFsbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0ZWRWYWx1ZSAhPT0gSU1QT1JUX0RFRkFVTFRfU1BFQ0lGSUVSKSB7XG4gICAgICAgIGlmIChleHBvcnRBbGwud2hlcmVVc2VkLnNpemUgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNwZWNpYWwgY2FzZTogbmFtZXNwYWNlIGltcG9ydFxuICAgICAgY29uc3QgbmFtZXNwYWNlSW1wb3J0cyA9IGV4cG9ydHMuZ2V0KElNUE9SVF9OQU1FU1BBQ0VfU1BFQ0lGSUVSKTtcbiAgICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlSW1wb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG5hbWVzcGFjZUltcG9ydHMud2hlcmVVc2VkLnNpemUgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGV4cG9ydHNMaXN0IHdpbGwgYWx3YXlzIG1hcCBhbnkgaW1wb3J0ZWQgdmFsdWUgb2YgJ2RlZmF1bHQnIHRvICdJbXBvcnREZWZhdWx0U3BlY2lmaWVyJ1xuICAgICAgY29uc3QgZXhwb3J0c0tleSA9IGV4cG9ydGVkVmFsdWUgPT09IERFRkFVTFQgPyBJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVIgOiBleHBvcnRlZFZhbHVlO1xuXG4gICAgICBjb25zdCBleHBvcnRTdGF0ZW1lbnQgPSBleHBvcnRzLmdldChleHBvcnRzS2V5KTtcblxuICAgICAgY29uc3QgdmFsdWUgPSBleHBvcnRzS2V5ID09PSBJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVIgPyBERUZBVUxUIDogZXhwb3J0c0tleTtcblxuICAgICAgaWYgKHR5cGVvZiBleHBvcnRTdGF0ZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmIChleHBvcnRTdGF0ZW1lbnQud2hlcmVVc2VkLnNpemUgPCAxKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgYGV4cG9ydGVkIGRlY2xhcmF0aW9uICcke3ZhbHVlfScgbm90IHVzZWQgd2l0aGluIG90aGVyIG1vZHVsZXNgLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQucmVwb3J0KFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgYGV4cG9ydGVkIGRlY2xhcmF0aW9uICcke3ZhbHVlfScgbm90IHVzZWQgd2l0aGluIG90aGVyIG1vZHVsZXNgLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBvbmx5IHVzZWZ1bCBmb3IgdG9vbHMgbGlrZSB2c2NvZGUtZXNsaW50XG4gICAgICpcbiAgICAgKiB1cGRhdGUgbGlzdHMgb2YgZXhpc3RpbmcgZXhwb3J0cyBkdXJpbmcgcnVudGltZVxuICAgICAqL1xuICAgIGNvbnN0IHVwZGF0ZUV4cG9ydFVzYWdlID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChpZ25vcmVkRmlsZXMuaGFzKGZpbGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGV4cG9ydHMgPSBleHBvcnRMaXN0LmdldChmaWxlKTtcblxuICAgICAgLy8gbmV3IG1vZHVsZSBoYXMgYmVlbiBjcmVhdGVkIGR1cmluZyBydW50aW1lXG4gICAgICAvLyBpbmNsdWRlIGl0IGluIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuICAgICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBleHBvcnRzID0gbmV3IE1hcCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdFeHBvcnRzID0gbmV3IE1hcCgpO1xuICAgICAgY29uc3QgbmV3RXhwb3J0SWRlbnRpZmllcnMgPSBuZXcgU2V0KCk7XG5cbiAgICAgIG5vZGUuYm9keS5mb3JFYWNoKCh7IHR5cGUsIGRlY2xhcmF0aW9uLCBzcGVjaWZpZXJzIH0pID0+IHtcbiAgICAgICAgaWYgKHR5cGUgPT09IEVYUE9SVF9ERUZBVUxUX0RFQ0xBUkFUSU9OKSB7XG4gICAgICAgICAgbmV3RXhwb3J0SWRlbnRpZmllcnMuYWRkKElNUE9SVF9ERUZBVUxUX1NQRUNJRklFUik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IEVYUE9SVF9OQU1FRF9ERUNMQVJBVElPTikge1xuICAgICAgICAgIGlmIChzcGVjaWZpZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNwZWNpZmllcnMuZm9yRWFjaCgoc3BlY2lmaWVyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzcGVjaWZpZXIuZXhwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdFeHBvcnRJZGVudGlmaWVycy5hZGQoc3BlY2lmaWVyLmV4cG9ydGVkLm5hbWUgfHwgc3BlY2lmaWVyLmV4cG9ydGVkLnZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvckVhY2hEZWNsYXJhdGlvbklkZW50aWZpZXIoZGVjbGFyYXRpb24sIChuYW1lKSA9PiB7XG4gICAgICAgICAgICBuZXdFeHBvcnRJZGVudGlmaWVycy5hZGQobmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBvbGQgZXhwb3J0cyBleGlzdCB3aXRoaW4gbGlzdCBvZiBuZXcgZXhwb3J0cyBpZGVudGlmaWVyczogYWRkIHRvIG1hcCBvZiBuZXcgZXhwb3J0c1xuICAgICAgZXhwb3J0cy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChuZXdFeHBvcnRJZGVudGlmaWVycy5oYXMoa2V5KSkge1xuICAgICAgICAgIG5ld0V4cG9ydHMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gbmV3IGV4cG9ydCBpZGVudGlmaWVycyBhZGRlZDogYWRkIHRvIG1hcCBvZiBuZXcgZXhwb3J0c1xuICAgICAgbmV3RXhwb3J0SWRlbnRpZmllcnMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICghZXhwb3J0cy5oYXMoa2V5KSkge1xuICAgICAgICAgIG5ld0V4cG9ydHMuc2V0KGtleSwgeyB3aGVyZVVzZWQ6IG5ldyBTZXQoKSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHByZXNlcnZlIGluZm9ybWF0aW9uIGFib3V0IG5hbWVzcGFjZSBpbXBvcnRzXG4gICAgICBjb25zdCBleHBvcnRBbGwgPSBleHBvcnRzLmdldChFWFBPUlRfQUxMX0RFQ0xBUkFUSU9OKTtcbiAgICAgIGxldCBuYW1lc3BhY2VJbXBvcnRzID0gZXhwb3J0cy5nZXQoSU1QT1JUX05BTUVTUEFDRV9TUEVDSUZJRVIpO1xuXG4gICAgICBpZiAodHlwZW9mIG5hbWVzcGFjZUltcG9ydHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVzcGFjZUltcG9ydHMgPSB7IHdoZXJlVXNlZDogbmV3IFNldCgpIH07XG4gICAgICB9XG5cbiAgICAgIG5ld0V4cG9ydHMuc2V0KEVYUE9SVF9BTExfREVDTEFSQVRJT04sIGV4cG9ydEFsbCk7XG4gICAgICBuZXdFeHBvcnRzLnNldChJTVBPUlRfTkFNRVNQQUNFX1NQRUNJRklFUiwgbmFtZXNwYWNlSW1wb3J0cyk7XG4gICAgICBleHBvcnRMaXN0LnNldChmaWxlLCBuZXdFeHBvcnRzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogb25seSB1c2VmdWwgZm9yIHRvb2xzIGxpa2UgdnNjb2RlLWVzbGludFxuICAgICAqXG4gICAgICogdXBkYXRlIGxpc3RzIG9mIGV4aXN0aW5nIGltcG9ydHMgZHVyaW5nIHJ1bnRpbWVcbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVJbXBvcnRVc2FnZSA9IChub2RlKSA9PiB7XG4gICAgICBpZiAoIXVudXNlZEV4cG9ydHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgb2xkSW1wb3J0UGF0aHMgPSBpbXBvcnRMaXN0LmdldChmaWxlKTtcbiAgICAgIGlmICh0eXBlb2Ygb2xkSW1wb3J0UGF0aHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9sZEltcG9ydFBhdGhzID0gbmV3IE1hcCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGROYW1lc3BhY2VJbXBvcnRzID0gbmV3IFNldCgpO1xuICAgICAgY29uc3QgbmV3TmFtZXNwYWNlSW1wb3J0cyA9IG5ldyBTZXQoKTtcblxuICAgICAgY29uc3Qgb2xkRXhwb3J0QWxsID0gbmV3IFNldCgpO1xuICAgICAgY29uc3QgbmV3RXhwb3J0QWxsID0gbmV3IFNldCgpO1xuXG4gICAgICBjb25zdCBvbGREZWZhdWx0SW1wb3J0cyA9IG5ldyBTZXQoKTtcbiAgICAgIGNvbnN0IG5ld0RlZmF1bHRJbXBvcnRzID0gbmV3IFNldCgpO1xuXG4gICAgICBjb25zdCBvbGRJbXBvcnRzID0gbmV3IE1hcCgpO1xuICAgICAgY29uc3QgbmV3SW1wb3J0cyA9IG5ldyBNYXAoKTtcbiAgICAgIG9sZEltcG9ydFBhdGhzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLmhhcyhFWFBPUlRfQUxMX0RFQ0xBUkFUSU9OKSkge1xuICAgICAgICAgIG9sZEV4cG9ydEFsbC5hZGQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUuaGFzKElNUE9SVF9OQU1FU1BBQ0VfU1BFQ0lGSUVSKSkge1xuICAgICAgICAgIG9sZE5hbWVzcGFjZUltcG9ydHMuYWRkKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmhhcyhJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVIpKSB7XG4gICAgICAgICAgb2xkRGVmYXVsdEltcG9ydHMuYWRkKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdmFsICE9PSBJTVBPUlRfTkFNRVNQQUNFX1NQRUNJRklFUlxuICAgICAgICAgICAgJiYgdmFsICE9PSBJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG9sZEltcG9ydHMuc2V0KHZhbCwga2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHByb2Nlc3NEeW5hbWljSW1wb3J0KHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLnR5cGUgIT09ICdMaXRlcmFsJykge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHAgPSByZXNvbHZlKHNvdXJjZS52YWx1ZSwgY29udGV4dCk7XG4gICAgICAgIGlmIChwID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBuZXdOYW1lc3BhY2VJbXBvcnRzLmFkZChwKTtcbiAgICAgIH1cblxuICAgICAgdmlzaXQobm9kZSwgdmlzaXRvcktleU1hcC5nZXQoZmlsZSksIHtcbiAgICAgICAgSW1wb3J0RXhwcmVzc2lvbihjaGlsZCkge1xuICAgICAgICAgIHByb2Nlc3NEeW5hbWljSW1wb3J0KGNoaWxkLnNvdXJjZSk7XG4gICAgICAgIH0sXG4gICAgICAgIENhbGxFeHByZXNzaW9uKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkLmNhbGxlZS50eXBlID09PSAnSW1wb3J0Jykge1xuICAgICAgICAgICAgcHJvY2Vzc0R5bmFtaWNJbXBvcnQoY2hpbGQuYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbm9kZS5ib2R5LmZvckVhY2goKGFzdE5vZGUpID0+IHtcbiAgICAgICAgbGV0IHJlc29sdmVkUGF0aDtcblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBleHBvcnQgeyB2YWx1ZSB9IGZyb20gJ21vZHVsZSdcbiAgICAgICAgaWYgKGFzdE5vZGUudHlwZSA9PT0gRVhQT1JUX05BTUVEX0RFQ0xBUkFUSU9OKSB7XG4gICAgICAgICAgaWYgKGFzdE5vZGUuc291cmNlKSB7XG4gICAgICAgICAgICByZXNvbHZlZFBhdGggPSByZXNvbHZlKGFzdE5vZGUuc291cmNlLnJhdy5yZXBsYWNlKC8oJ3xcIikvZywgJycpLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGFzdE5vZGUuc3BlY2lmaWVycy5mb3JFYWNoKChzcGVjaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNwZWNpZmllci5sb2NhbC5uYW1lIHx8IHNwZWNpZmllci5sb2NhbC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IERFRkFVTFQpIHtcbiAgICAgICAgICAgICAgICBuZXdEZWZhdWx0SW1wb3J0cy5hZGQocmVzb2x2ZWRQYXRoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdJbXBvcnRzLnNldChuYW1lLCByZXNvbHZlZFBhdGgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXN0Tm9kZS50eXBlID09PSBFWFBPUlRfQUxMX0RFQ0xBUkFUSU9OKSB7XG4gICAgICAgICAgcmVzb2x2ZWRQYXRoID0gcmVzb2x2ZShhc3ROb2RlLnNvdXJjZS5yYXcucmVwbGFjZSgvKCd8XCIpL2csICcnKSwgY29udGV4dCk7XG4gICAgICAgICAgbmV3RXhwb3J0QWxsLmFkZChyZXNvbHZlZFBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzdE5vZGUudHlwZSA9PT0gSU1QT1JUX0RFQ0xBUkFUSU9OKSB7XG4gICAgICAgICAgcmVzb2x2ZWRQYXRoID0gcmVzb2x2ZShhc3ROb2RlLnNvdXJjZS5yYXcucmVwbGFjZSgvKCd8XCIpL2csICcnKSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKCFyZXNvbHZlZFBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNOb2RlTW9kdWxlKHJlc29sdmVkUGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmV3TmFtZXNwYWNlSW1wb3J0RXhpc3RzKGFzdE5vZGUuc3BlY2lmaWVycykpIHtcbiAgICAgICAgICAgIG5ld05hbWVzcGFjZUltcG9ydHMuYWRkKHJlc29sdmVkUGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5ld0RlZmF1bHRJbXBvcnRFeGlzdHMoYXN0Tm9kZS5zcGVjaWZpZXJzKSkge1xuICAgICAgICAgICAgbmV3RGVmYXVsdEltcG9ydHMuYWRkKHJlc29sdmVkUGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXN0Tm9kZS5zcGVjaWZpZXJzXG4gICAgICAgICAgICAuZmlsdGVyKChzcGVjaWZpZXIpID0+IHNwZWNpZmllci50eXBlICE9PSBJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVIgJiYgc3BlY2lmaWVyLnR5cGUgIT09IElNUE9SVF9OQU1FU1BBQ0VfU1BFQ0lGSUVSKVxuICAgICAgICAgICAgLmZvckVhY2goKHNwZWNpZmllcikgPT4ge1xuICAgICAgICAgICAgICBuZXdJbXBvcnRzLnNldChzcGVjaWZpZXIuaW1wb3J0ZWQubmFtZSB8fCBzcGVjaWZpZXIuaW1wb3J0ZWQudmFsdWUsIHJlc29sdmVkUGF0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG5ld0V4cG9ydEFsbC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIW9sZEV4cG9ydEFsbC5oYXModmFsdWUpKSB7XG4gICAgICAgICAgbGV0IGltcG9ydHMgPSBvbGRJbXBvcnRQYXRocy5nZXQodmFsdWUpO1xuICAgICAgICAgIGlmICh0eXBlb2YgaW1wb3J0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGltcG9ydHMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltcG9ydHMuYWRkKEVYUE9SVF9BTExfREVDTEFSQVRJT04pO1xuICAgICAgICAgIG9sZEltcG9ydFBhdGhzLnNldCh2YWx1ZSwgaW1wb3J0cyk7XG5cbiAgICAgICAgICBsZXQgZXhwb3J0cyA9IGV4cG9ydExpc3QuZ2V0KHZhbHVlKTtcbiAgICAgICAgICBsZXQgY3VycmVudEV4cG9ydDtcbiAgICAgICAgICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjdXJyZW50RXhwb3J0ID0gZXhwb3J0cy5nZXQoRVhQT1JUX0FMTF9ERUNMQVJBVElPTik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cG9ydHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBleHBvcnRMaXN0LnNldCh2YWx1ZSwgZXhwb3J0cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RXhwb3J0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY3VycmVudEV4cG9ydC53aGVyZVVzZWQuYWRkKGZpbGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB3aGVyZVVzZWQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICB3aGVyZVVzZWQuYWRkKGZpbGUpO1xuICAgICAgICAgICAgZXhwb3J0cy5zZXQoRVhQT1JUX0FMTF9ERUNMQVJBVElPTiwgeyB3aGVyZVVzZWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgb2xkRXhwb3J0QWxsLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghbmV3RXhwb3J0QWxsLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICBjb25zdCBpbXBvcnRzID0gb2xkSW1wb3J0UGF0aHMuZ2V0KHZhbHVlKTtcbiAgICAgICAgICBpbXBvcnRzLmRlbGV0ZShFWFBPUlRfQUxMX0RFQ0xBUkFUSU9OKTtcblxuICAgICAgICAgIGNvbnN0IGV4cG9ydHMgPSBleHBvcnRMaXN0LmdldCh2YWx1ZSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEV4cG9ydCA9IGV4cG9ydHMuZ2V0KEVYUE9SVF9BTExfREVDTEFSQVRJT04pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RXhwb3J0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBjdXJyZW50RXhwb3J0LndoZXJlVXNlZC5kZWxldGUoZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbmV3RGVmYXVsdEltcG9ydHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCFvbGREZWZhdWx0SW1wb3J0cy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgbGV0IGltcG9ydHMgPSBvbGRJbXBvcnRQYXRocy5nZXQodmFsdWUpO1xuICAgICAgICAgIGlmICh0eXBlb2YgaW1wb3J0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGltcG9ydHMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltcG9ydHMuYWRkKElNUE9SVF9ERUZBVUxUX1NQRUNJRklFUik7XG4gICAgICAgICAgb2xkSW1wb3J0UGF0aHMuc2V0KHZhbHVlLCBpbXBvcnRzKTtcblxuICAgICAgICAgIGxldCBleHBvcnRzID0gZXhwb3J0TGlzdC5nZXQodmFsdWUpO1xuICAgICAgICAgIGxldCBjdXJyZW50RXhwb3J0O1xuICAgICAgICAgIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGN1cnJlbnRFeHBvcnQgPSBleHBvcnRzLmdldChJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZXhwb3J0TGlzdC5zZXQodmFsdWUsIGV4cG9ydHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEV4cG9ydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGN1cnJlbnRFeHBvcnQud2hlcmVVc2VkLmFkZChmaWxlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgd2hlcmVVc2VkID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgd2hlcmVVc2VkLmFkZChmaWxlKTtcbiAgICAgICAgICAgIGV4cG9ydHMuc2V0KElNUE9SVF9ERUZBVUxUX1NQRUNJRklFUiwgeyB3aGVyZVVzZWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgb2xkRGVmYXVsdEltcG9ydHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCFuZXdEZWZhdWx0SW1wb3J0cy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgY29uc3QgaW1wb3J0cyA9IG9sZEltcG9ydFBhdGhzLmdldCh2YWx1ZSk7XG4gICAgICAgICAgaW1wb3J0cy5kZWxldGUoSU1QT1JUX0RFRkFVTFRfU1BFQ0lGSUVSKTtcblxuICAgICAgICAgIGNvbnN0IGV4cG9ydHMgPSBleHBvcnRMaXN0LmdldCh2YWx1ZSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEV4cG9ydCA9IGV4cG9ydHMuZ2V0KElNUE9SVF9ERUZBVUxUX1NQRUNJRklFUik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRFeHBvcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRFeHBvcnQud2hlcmVVc2VkLmRlbGV0ZShmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBuZXdOYW1lc3BhY2VJbXBvcnRzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghb2xkTmFtZXNwYWNlSW1wb3J0cy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgbGV0IGltcG9ydHMgPSBvbGRJbXBvcnRQYXRocy5nZXQodmFsdWUpO1xuICAgICAgICAgIGlmICh0eXBlb2YgaW1wb3J0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGltcG9ydHMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltcG9ydHMuYWRkKElNUE9SVF9OQU1FU1BBQ0VfU1BFQ0lGSUVSKTtcbiAgICAgICAgICBvbGRJbXBvcnRQYXRocy5zZXQodmFsdWUsIGltcG9ydHMpO1xuXG4gICAgICAgICAgbGV0IGV4cG9ydHMgPSBleHBvcnRMaXN0LmdldCh2YWx1ZSk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRFeHBvcnQ7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY3VycmVudEV4cG9ydCA9IGV4cG9ydHMuZ2V0KElNUE9SVF9OQU1FU1BBQ0VfU1BFQ0lGSUVSKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGV4cG9ydExpc3Quc2V0KHZhbHVlLCBleHBvcnRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRFeHBvcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjdXJyZW50RXhwb3J0LndoZXJlVXNlZC5hZGQoZmlsZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHdoZXJlVXNlZCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIHdoZXJlVXNlZC5hZGQoZmlsZSk7XG4gICAgICAgICAgICBleHBvcnRzLnNldChJTVBPUlRfTkFNRVNQQUNFX1NQRUNJRklFUiwgeyB3aGVyZVVzZWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgb2xkTmFtZXNwYWNlSW1wb3J0cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIW5ld05hbWVzcGFjZUltcG9ydHMuaGFzKHZhbHVlKSkge1xuICAgICAgICAgIGNvbnN0IGltcG9ydHMgPSBvbGRJbXBvcnRQYXRocy5nZXQodmFsdWUpO1xuICAgICAgICAgIGltcG9ydHMuZGVsZXRlKElNUE9SVF9OQU1FU1BBQ0VfU1BFQ0lGSUVSKTtcblxuICAgICAgICAgIGNvbnN0IGV4cG9ydHMgPSBleHBvcnRMaXN0LmdldCh2YWx1ZSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEV4cG9ydCA9IGV4cG9ydHMuZ2V0KElNUE9SVF9OQU1FU1BBQ0VfU1BFQ0lGSUVSKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEV4cG9ydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgY3VycmVudEV4cG9ydC53aGVyZVVzZWQuZGVsZXRlKGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG5ld0ltcG9ydHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAoIW9sZEltcG9ydHMuaGFzKGtleSkpIHtcbiAgICAgICAgICBsZXQgaW1wb3J0cyA9IG9sZEltcG9ydFBhdGhzLmdldCh2YWx1ZSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBpbXBvcnRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaW1wb3J0cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1wb3J0cy5hZGQoa2V5KTtcbiAgICAgICAgICBvbGRJbXBvcnRQYXRocy5zZXQodmFsdWUsIGltcG9ydHMpO1xuXG4gICAgICAgICAgbGV0IGV4cG9ydHMgPSBleHBvcnRMaXN0LmdldCh2YWx1ZSk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRFeHBvcnQ7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY3VycmVudEV4cG9ydCA9IGV4cG9ydHMuZ2V0KGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cG9ydHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBleHBvcnRMaXN0LnNldCh2YWx1ZSwgZXhwb3J0cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RXhwb3J0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY3VycmVudEV4cG9ydC53aGVyZVVzZWQuYWRkKGZpbGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB3aGVyZVVzZWQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICB3aGVyZVVzZWQuYWRkKGZpbGUpO1xuICAgICAgICAgICAgZXhwb3J0cy5zZXQoa2V5LCB7IHdoZXJlVXNlZCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBvbGRJbXBvcnRzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKCFuZXdJbXBvcnRzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgY29uc3QgaW1wb3J0cyA9IG9sZEltcG9ydFBhdGhzLmdldCh2YWx1ZSk7XG4gICAgICAgICAgaW1wb3J0cy5kZWxldGUoa2V5KTtcblxuICAgICAgICAgIGNvbnN0IGV4cG9ydHMgPSBleHBvcnRMaXN0LmdldCh2YWx1ZSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEV4cG9ydCA9IGV4cG9ydHMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRFeHBvcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRFeHBvcnQud2hlcmVVc2VkLmRlbGV0ZShmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ1Byb2dyYW06ZXhpdCcobm9kZSkge1xuICAgICAgICB1cGRhdGVFeHBvcnRVc2FnZShub2RlKTtcbiAgICAgICAgdXBkYXRlSW1wb3J0VXNhZ2Uobm9kZSk7XG4gICAgICAgIGNoZWNrRXhwb3J0UHJlc2VuY2Uobm9kZSk7XG4gICAgICB9LFxuICAgICAgRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgY2hlY2tVc2FnZShub2RlLCBJTVBPUlRfREVGQVVMVF9TUEVDSUZJRVIsIGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICBFeHBvcnROYW1lZERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS5zcGVjaWZpZXJzLmZvckVhY2goKHNwZWNpZmllcikgPT4ge1xuICAgICAgICAgIGNoZWNrVXNhZ2Uoc3BlY2lmaWVyLCBzcGVjaWZpZXIuZXhwb3J0ZWQubmFtZSB8fCBzcGVjaWZpZXIuZXhwb3J0ZWQudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvckVhY2hEZWNsYXJhdGlvbklkZW50aWZpZXIobm9kZS5kZWNsYXJhdGlvbiwgKG5hbWUsIGlzVHlwZUV4cG9ydCkgPT4ge1xuICAgICAgICAgIGNoZWNrVXNhZ2Uobm9kZSwgbmFtZSwgaXNUeXBlRXhwb3J0KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuIl19