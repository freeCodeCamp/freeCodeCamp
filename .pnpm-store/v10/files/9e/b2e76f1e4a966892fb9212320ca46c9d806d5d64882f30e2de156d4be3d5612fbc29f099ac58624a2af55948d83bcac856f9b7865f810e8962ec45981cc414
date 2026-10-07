function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

var _process$versions;
var hasProcess = typeof process !== "undefined";
// Node >= 26 exposes `localStorage` as a global accessor which emits an
// ExperimentalWarning when it is read - including via `typeof` - unless the process
// was started with `--localstorage-file`. Probing it here would print that warning at
// module evaluation for every consumer, so skip the probe entirely in a bare Node
// process, where `process.env.DEBUG` below is the only reachable way to opt in anyway.
// DOM-bearing hosts that also expose `process` (Electron renderers) still get probed.
var isBareNodeProcess = hasProcess && typeof ((_process$versions = process.versions) == null ? void 0 : _process$versions.node) === "string" && !("window" in globalThis);
var hasLocalStorage = false;
if (!isBareNodeProcess) {
  try {
    hasLocalStorage = typeof localStorage !== "undefined" && typeof localStorage.getItem === "function";
  } catch (error) {}
}
var shouldDebug = hasLocalStorage && /*#__PURE__*/localStorage.getItem("DEBUG") || hasProcess && process.env.DEBUG;
var debugLog = shouldDebug ? console.log : function (_message) {
  return "";
};
/**
 * Makes a virtual copy of the TypeScript environment. This is the main API you want to be using with
 * @typescript/vfs. A lot of the other exposed functions are used by this function to get set up.
 *
 * @param sys an object which conforms to the TS Sys (a shim over read/write access to the fs)
 * @param rootFiles a list of files which are considered inside the project
 * @param ts a copy pf the TypeScript module
 * @param compilerOptions the options for this compiler run
 * @param customTransformers custom transformers for this compiler run
 */
function createVirtualTypeScriptEnvironment(sys, rootFiles, ts, compilerOptions, customTransformers) {
  if (compilerOptions === void 0) {
    compilerOptions = {};
  }
  var mergedCompilerOpts = _extends({}, defaultCompilerOptions(ts), compilerOptions);
  var _createVirtualLanguag = createVirtualLanguageServiceHost(sys, rootFiles, mergedCompilerOpts, ts, customTransformers),
    languageServiceHost = _createVirtualLanguag.languageServiceHost,
    _updateFile = _createVirtualLanguag.updateFile,
    _deleteFile = _createVirtualLanguag.deleteFile;
  var languageService = ts.createLanguageService(languageServiceHost);
  var diagnostics = languageService.getCompilerOptionsDiagnostics();
  if (diagnostics.length) {
    var compilerHost = createVirtualCompilerHost(sys, compilerOptions, ts);
    throw new Error(ts.formatDiagnostics(diagnostics, compilerHost.compilerHost));
  }
  return {
    // @ts-ignore
    name: "vfs",
    sys: sys,
    languageService: languageService,
    getSourceFile: function getSourceFile(fileName) {
      var _languageService$getP;
      return (_languageService$getP = languageService.getProgram()) == null ? void 0 : _languageService$getP.getSourceFile(fileName);
    },
    createFile: function createFile(fileName, content) {
      _updateFile(ts.createSourceFile(fileName, content, mergedCompilerOpts.target, false));
    },
    updateFile: function updateFile(fileName, content, optPrevTextSpan) {
      var prevSourceFile = languageService.getProgram().getSourceFile(fileName);
      if (!prevSourceFile) {
        throw new Error("Did not find a source file for " + fileName);
      }
      var prevFullContents = prevSourceFile.text;
      // TODO: Validate if the default text span has a fencepost error?
      var prevTextSpan = optPrevTextSpan != null ? optPrevTextSpan : ts.createTextSpan(0, prevFullContents.length);
      var newText = prevFullContents.slice(0, prevTextSpan.start) + content + prevFullContents.slice(prevTextSpan.start + prevTextSpan.length);
      var newSourceFile = ts.updateSourceFile(prevSourceFile, newText, {
        span: prevTextSpan,
        newLength: content.length
      });
      _updateFile(newSourceFile);
    },
    deleteFile: function deleteFile(fileName) {
      var sourceFile = languageService.getProgram().getSourceFile(fileName);
      if (sourceFile) {
        _deleteFile(sourceFile);
      }
    }
  };
}
// TODO: This could be replaced by grabbing: https://github.com/microsoft/TypeScript/blob/main/src/lib/libs.json
// and then using that to generate the list of files from the server, but it is not included in the npm package
/**
 * Grab the list of lib files for a particular target, will return a bit more than necessary (by including
 * the dom) but that's OK, we're really working with the constraint that you can't get a list of files
 * when running in a browser.
 *
 * @param target The compiler settings target baseline
 * @param ts A copy of the TypeScript module
 */
var knownLibFilesForCompilerOptions = function knownLibFilesForCompilerOptions(compilerOptions, ts) {
  var target = compilerOptions.target || ts.ScriptTarget.ES5;
  var lib = compilerOptions.lib || [];
  // Note that this will include files which can't be found for particular versions of TS
  // TODO: Replace this with some sort of API call if https://github.com/microsoft/TypeScript/pull/54011
  // or similar is merged.
  var files = ["lib.d.ts", "lib.core.d.ts", "lib.decorators.d.ts", "lib.decorators.legacy.d.ts", "lib.dom.asynciterable.d.ts", "lib.dom.d.ts", "lib.dom.iterable.d.ts", "lib.webworker.asynciterable.d.ts", "lib.webworker.d.ts", "lib.webworker.importscripts.d.ts", "lib.webworker.iterable.d.ts", "lib.scripthost.d.ts", "lib.es5.d.ts", "lib.es6.d.ts", "lib.es7.d.ts", "lib.core.es6.d.ts", "lib.core.es7.d.ts", "lib.es2015.collection.d.ts", "lib.es2015.core.d.ts", "lib.es2015.d.ts", "lib.es2015.generator.d.ts", "lib.es2015.iterable.d.ts", "lib.es2015.promise.d.ts", "lib.es2015.proxy.d.ts", "lib.es2015.reflect.d.ts", "lib.es2015.symbol.d.ts", "lib.es2015.symbol.wellknown.d.ts", "lib.es2016.array.include.d.ts", "lib.es2016.d.ts", "lib.es2016.full.d.ts", "lib.es2016.intl.d.ts", "lib.es2017.arraybuffer.d.ts", "lib.es2017.d.ts", "lib.es2017.date.d.ts", "lib.es2017.full.d.ts", "lib.es2017.intl.d.ts", "lib.es2017.object.d.ts", "lib.es2017.sharedmemory.d.ts", "lib.es2017.string.d.ts", "lib.es2017.typedarrays.d.ts", "lib.es2018.asyncgenerator.d.ts", "lib.es2018.asynciterable.d.ts", "lib.es2018.d.ts", "lib.es2018.full.d.ts", "lib.es2018.intl.d.ts", "lib.es2018.promise.d.ts", "lib.es2018.regexp.d.ts", "lib.es2019.array.d.ts", "lib.es2019.d.ts", "lib.es2019.full.d.ts", "lib.es2019.intl.d.ts", "lib.es2019.object.d.ts", "lib.es2019.string.d.ts", "lib.es2019.symbol.d.ts", "lib.es2020.bigint.d.ts", "lib.es2020.d.ts", "lib.es2020.date.d.ts", "lib.es2020.full.d.ts", "lib.es2020.intl.d.ts", "lib.es2020.number.d.ts", "lib.es2020.promise.d.ts", "lib.es2020.sharedmemory.d.ts", "lib.es2020.string.d.ts", "lib.es2020.symbol.wellknown.d.ts", "lib.es2021.d.ts", "lib.es2021.full.d.ts", "lib.es2021.intl.d.ts", "lib.es2021.promise.d.ts", "lib.es2021.string.d.ts", "lib.es2021.weakref.d.ts", "lib.es2022.array.d.ts", "lib.es2022.d.ts", "lib.es2022.error.d.ts", "lib.es2022.full.d.ts", "lib.es2022.intl.d.ts", "lib.es2022.object.d.ts", "lib.es2022.regexp.d.ts", "lib.es2022.sharedmemory.d.ts", "lib.es2022.string.d.ts", "lib.es2023.array.d.ts", "lib.es2023.collection.d.ts", "lib.es2023.d.ts", "lib.es2023.full.d.ts", "lib.es2023.intl.d.ts", "lib.es2024.arraybuffer.d.ts", "lib.es2024.collection.d.ts", "lib.es2024.d.ts", "lib.es2024.full.d.ts", "lib.es2024.object.d.ts", "lib.es2024.promise.d.ts", "lib.es2024.regexp.d.ts", "lib.es2024.sharedmemory.d.ts", "lib.es2024.string.d.ts", "lib.es2025.collection.d.ts", "lib.es2025.d.ts", "lib.es2025.float16.d.ts", "lib.es2025.full.d.ts", "lib.es2025.intl.d.ts", "lib.es2025.iterator.d.ts", "lib.es2025.promise.d.ts", "lib.es2025.regexp.d.ts", "lib.esnext.array.d.ts", "lib.esnext.asynciterable.d.ts", "lib.esnext.bigint.d.ts", "lib.esnext.collection.d.ts", "lib.esnext.d.ts", "lib.esnext.date.d.ts", "lib.esnext.decorators.d.ts", "lib.esnext.disposable.d.ts", "lib.esnext.error.d.ts", "lib.esnext.float16.d.ts", "lib.esnext.full.d.ts", "lib.esnext.intl.d.ts", "lib.esnext.iterator.d.ts", "lib.esnext.object.d.ts", "lib.esnext.promise.d.ts", "lib.esnext.regexp.d.ts", "lib.esnext.sharedmemory.d.ts", "lib.esnext.string.d.ts", "lib.esnext.symbol.d.ts", "lib.esnext.temporal.d.ts", "lib.esnext.typedarrays.d.ts", "lib.esnext.weakref.d.ts"];
  var targetToCut = ts.ScriptTarget[target];
  var matches = files.filter(function (f) {
    return f.startsWith("lib." + targetToCut.toLowerCase());
  });
  var targetCutIndex = files.indexOf(matches.pop());
  var getMax = function getMax(array) {
    return array && array.length ? array.reduce(function (max, current) {
      return current > max ? current : max;
    }) : undefined;
  };
  // Find the index for everything in
  var indexesForCutting = lib.map(function (lib) {
    var matches = files.filter(function (f) {
      return f.startsWith("lib." + lib.toLowerCase());
    });
    if (matches.length === 0) return 0;
    var cutIndex = files.indexOf(matches.pop());
    return cutIndex;
  });
  var libCutIndex = getMax(indexesForCutting) || 0;
  var finalCutIndex = Math.max(targetCutIndex, libCutIndex);
  return files.slice(0, finalCutIndex + 1);
};
/**
 * Sets up a Map with lib contents by grabbing the necessary files from
 * the local copy of typescript via the file system.
 *
 * The first two args are un-used, but kept around so as to not cause a
 * semver major bump for no gain to module users.
 */
var createDefaultMapFromNodeModules = function createDefaultMapFromNodeModules(_compilerOptions, _ts, tsLibDirectory) {
  var path = requirePath();
  var fs = requireFS();
  var getLib = function getLib(name) {
    var lib = tsLibDirectory || path.dirname(require.resolve("typescript"));
    return fs.readFileSync(path.join(lib, name), "utf8");
  };
  var isDtsFile = function isDtsFile(file) {
    return /\.d\.([^\.]+\.)?[cm]?ts$/i.test(file);
  };
  var libFiles = fs.readdirSync(tsLibDirectory || path.dirname(require.resolve("typescript")));
  var knownLibFiles = libFiles.filter(function (f) {
    return f.startsWith("lib.") && isDtsFile(f);
  });
  var fsMap = new Map();
  knownLibFiles.forEach(function (lib) {
    fsMap.set("/" + lib, getLib(lib));
  });
  return fsMap;
};
/**
 * Adds recursively files from the FS into the map based on the folder
 */
var addAllFilesFromFolder = function addAllFilesFromFolder(map, workingDir) {
  var path = requirePath();
  var fs = requireFS();
  var _walk = function walk(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function (file) {
      file = path.join(dir, file);
      var stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        /* Recurse into a subdirectory */
        results = results.concat(_walk(file));
      } else {
        /* Is a file */
        results.push(file);
      }
    });
    return results;
  };
  var allFiles = _walk(workingDir);
  allFiles.forEach(function (lib) {
    var fsPath = "/node_modules/@types" + lib.replace(workingDir, "");
    var content = fs.readFileSync(lib, "utf8");
    var validExtensions = [".ts", ".tsx"];
    if (validExtensions.includes(path.extname(fsPath))) {
      map.set(fsPath, content);
    }
  });
};
/** Adds all files from node_modules/@types into the FS Map */
var addFilesForTypesIntoFolder = function addFilesForTypesIntoFolder(map) {
  return addAllFilesFromFolder(map, "node_modules/@types");
};
/**
 * Create a virtual FS Map with the lib files from a particular TypeScript
 * version based on the target, Always includes dom ATM.
 *
 * @param options The compiler target, which dictates the libs to set up
 * @param version the versions of TypeScript which are supported
 * @param cache should the values be stored in local storage
 * @param ts a copy of the typescript import
 * @param lzstring an optional copy of the lz-string import
 * @param fetcher an optional replacement for the global fetch function (tests mainly)
 * @param storer an optional replacement for the localStorage global (tests mainly)
 */
var createDefaultMapFromCDN = function createDefaultMapFromCDN(options, version, cache, ts, lzstring, fetcher, storer) {
  var fetchlike = fetcher || fetch;
  var fsMap = new Map();
  var files = knownLibFilesForCompilerOptions(options, ts);
  var prefix = "https://playgroundcdn.typescriptlang.org/cdn/" + version + "/typescript/lib/";
  function zip(str) {
    return lzstring ? lzstring.compressToUTF16(str) : str;
  }
  function unzip(str) {
    return lzstring ? lzstring.decompressFromUTF16(str) : str;
  }
  // Map the known libs to a node fetch promise, then return the contents
  function uncached() {
    return Promise.all(files.map(function (lib) {
      return fetchlike(prefix + lib).then(function (resp) {
        return resp.text();
      });
    })).then(function (contents) {
      contents.forEach(function (text, index) {
        return fsMap.set("/" + files[index], text);
      });
    })
    // Return a NOOP for .d.ts files which aren't in the current build of TypeScript
    ["catch"](function () {});
  }
  // A localstorage and lzzip aware version of the lib files
  function cached() {
    var storelike = storer || localStorage;
    var keys = Object.keys(storelike);
    keys.forEach(function (key) {
      // Remove anything which isn't from this version
      if (key.startsWith("ts-lib-") && !key.startsWith("ts-lib-" + version)) {
        storelike.removeItem(key);
      }
    });
    return Promise.all(files.map(function (lib) {
      var cacheKey = "ts-lib-" + version + "-" + lib;
      var content = storelike.getItem(cacheKey);
      if (!content) {
        // Make the API call and store the text concent in the cache
        return fetchlike(prefix + lib).then(function (resp) {
          return resp.text();
        }).then(function (t) {
          storelike.setItem(cacheKey, zip(t));
          return t;
        })
        // Return a NOOP for .d.ts files which aren't in the current build of TypeScript
        ["catch"](function () {});
      } else {
        return Promise.resolve(unzip(content));
      }
    })).then(function (contents) {
      contents.forEach(function (text, index) {
        if (text) {
          var name = "/" + files[index];
          fsMap.set(name, text);
        }
      });
    });
  }
  var func = cache ? cached : uncached;
  return func().then(function () {
    return fsMap;
  });
};
function notImplemented(methodName) {
  throw new Error("Method '" + methodName + "' is not implemented.");
}
function audit(name, fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var res = fn.apply(void 0, args);
    var smallres = typeof res === "string" ? res.slice(0, 80) + "..." : res;
    debugLog.apply(void 0, ["> " + name].concat(args));
    debugLog("< " + smallres);
    return res;
  };
}
/** The default compiler options if TypeScript could ever change the compiler options */
var defaultCompilerOptions = function defaultCompilerOptions(ts) {
  return _extends({}, ts.getDefaultCompilerOptions(), {
    jsx: ts.JsxEmit.React,
    strict: true,
    esModuleInterop: true,
    module: ts.ModuleKind.ESNext,
    suppressOutputPathCheck: true,
    skipLibCheck: true,
    skipDefaultLibCheck: true
  }, ts.versionMajorMinor && Number(ts.versionMajorMinor.split(".")[0]) >= 6 ? {
    ignoreDeprecations: "6.0"
  } : {
    moduleResolution: ts.ModuleResolutionKind.NodeJs
  });
};
// "/DOM.d.ts" => "/lib.dom.d.ts"
var libize = function libize(path) {
  return path.replace("/", "/lib.").toLowerCase();
};
/**
 * Creates an in-memory System object which can be used in a TypeScript program, this
 * is what provides read/write aspects of the virtual fs
 */
function createSystem(files) {
  return {
    args: [],
    createDirectory: function createDirectory() {
      return notImplemented("createDirectory");
    },
    // TODO: could make a real file tree
    directoryExists: audit("directoryExists", function (directory) {
      return Array.from(files.keys()).some(function (path) {
        return path.startsWith(directory);
      });
    }),
    exit: function exit() {
      return notImplemented("exit");
    },
    fileExists: audit("fileExists", function (fileName) {
      return files.has(fileName) || files.has(libize(fileName));
    }),
    getCurrentDirectory: function getCurrentDirectory() {
      return "/";
    },
    getDirectories: function getDirectories() {
      return [];
    },
    getExecutingFilePath: function getExecutingFilePath() {
      return notImplemented("getExecutingFilePath");
    },
    readDirectory: audit("readDirectory", function (directory) {
      return directory === "/" ? Array.from(files.keys()) : [];
    }),
    readFile: audit("readFile", function (fileName) {
      var _files$get;
      return (_files$get = files.get(fileName)) != null ? _files$get : files.get(libize(fileName));
    }),
    resolvePath: function resolvePath(path) {
      return path;
    },
    newLine: "\n",
    useCaseSensitiveFileNames: true,
    write: function write() {
      return notImplemented("write");
    },
    writeFile: function writeFile(fileName, contents) {
      files.set(fileName, contents);
    },
    deleteFile: function deleteFile(fileName) {
      files["delete"](fileName);
    }
  };
}
/**
 * Creates a file-system backed System object which can be used in a TypeScript program, you provide
 * a set of virtual files which are prioritised over the FS versions, then a path to the root of your
 * project (basically the folder your node_modules lives)
 */
function createFSBackedSystem(files, _projectRoot, ts, tsLibDirectory) {
  // We need to make an isolated folder for the tsconfig, but also need to be able to resolve the
  // existing node_modules structures going back through the history
  var root = _projectRoot + "/vfs";
  var path = requirePath();
  // The default System in TypeScript
  var nodeSys = ts.sys;
  var tsLib = tsLibDirectory != null ? tsLibDirectory : path.dirname(require.resolve("typescript"));
  return {
    // @ts-ignore
    name: "fs-vfs",
    root: root,
    args: [],
    createDirectory: function createDirectory() {
      return notImplemented("createDirectory");
    },
    // TODO: could make a real file tree
    directoryExists: audit("directoryExists", function (directory) {
      return Array.from(files.keys()).some(function (path) {
        return path.startsWith(directory);
      }) || nodeSys.directoryExists(directory);
    }),
    exit: nodeSys.exit,
    fileExists: audit("fileExists", function (fileName) {
      if (files.has(fileName)) return true;
      // Don't let other tsconfigs end up touching the vfs
      if (fileName.includes("tsconfig.json") || fileName.includes("tsconfig.json")) return false;
      if (fileName.startsWith("/lib")) {
        var tsLibName = tsLib + "/" + fileName.replace("/", "");
        return nodeSys.fileExists(tsLibName);
      }
      return nodeSys.fileExists(fileName);
    }),
    getCurrentDirectory: function getCurrentDirectory() {
      return root;
    },
    getDirectories: nodeSys.getDirectories,
    getExecutingFilePath: function getExecutingFilePath() {
      return notImplemented("getExecutingFilePath");
    },
    readDirectory: audit("readDirectory", function () {
      if ((arguments.length <= 0 ? undefined : arguments[0]) === "/") {
        return Array.from(files.keys());
      } else {
        return nodeSys.readDirectory.apply(nodeSys, arguments);
      }
    }),
    readFile: audit("readFile", function (fileName) {
      if (files.has(fileName)) return files.get(fileName);
      if (fileName.startsWith("/lib")) {
        var tsLibName = tsLib + "/" + fileName.replace("/", "");
        var result = nodeSys.readFile(tsLibName);
        if (!result) {
          var libs = nodeSys.readDirectory(tsLib);
          throw new Error("TSVFS: A request was made for " + tsLibName + " but there wasn't a file found in the file map. You likely have a mismatch in the compiler options for the CDN download vs the compiler program. Existing Libs: " + libs + ".");
        }
        return result;
      }
      return nodeSys.readFile(fileName);
    }),
    resolvePath: function resolvePath(path) {
      if (files.has(path)) return path;
      return nodeSys.resolvePath(path);
    },
    newLine: "\n",
    useCaseSensitiveFileNames: true,
    write: function write() {
      return notImplemented("write");
    },
    writeFile: function writeFile(fileName, contents) {
      files.set(fileName, contents);
    },
    deleteFile: function deleteFile(fileName) {
      files["delete"](fileName);
    },
    realpath: nodeSys.realpath
  };
}
/**
 * Creates an in-memory CompilerHost -which is essentially an extra wrapper to System
 * which works with TypeScript objects - returns both a compiler host, and a way to add new SourceFile
 * instances to the in-memory file system.
 */
function createVirtualCompilerHost(sys, compilerOptions, ts) {
  var sourceFiles = new Map();
  var save = function save(sourceFile) {
    sourceFiles.set(sourceFile.fileName, sourceFile);
    return sourceFile;
  };
  var vHost = {
    compilerHost: _extends({}, sys, {
      getCanonicalFileName: function getCanonicalFileName(fileName) {
        return fileName;
      },
      getDefaultLibFileName: function getDefaultLibFileName() {
        return "/" + ts.getDefaultLibFileName(compilerOptions);
      },
      // '/lib.d.ts',
      // getDefaultLibLocation: () => '/',
      getNewLine: function getNewLine() {
        return sys.newLine;
      },
      getSourceFile: function getSourceFile(fileName, languageVersionOrOptions) {
        var _ref;
        return sourceFiles.get(fileName) || save(ts.createSourceFile(fileName, sys.readFile(fileName), (_ref = languageVersionOrOptions != null ? languageVersionOrOptions : compilerOptions.target) != null ? _ref : defaultCompilerOptions(ts).target, false));
      },
      useCaseSensitiveFileNames: function useCaseSensitiveFileNames() {
        return sys.useCaseSensitiveFileNames;
      }
    }),
    updateFile: function updateFile(sourceFile) {
      var alreadyExists = sourceFiles.has(sourceFile.fileName);
      sys.writeFile(sourceFile.fileName, sourceFile.text);
      sourceFiles.set(sourceFile.fileName, sourceFile);
      return alreadyExists;
    },
    deleteFile: function deleteFile(sourceFile) {
      var alreadyExists = sourceFiles.has(sourceFile.fileName);
      sourceFiles["delete"](sourceFile.fileName);
      sys.deleteFile(sourceFile.fileName);
      return alreadyExists;
    }
  };
  return vHost;
}
/**
 * Creates an object which can host a language service against the virtual file-system
 */
function createVirtualLanguageServiceHost(sys, rootFiles, compilerOptions, ts, customTransformers) {
  var fileNames = [].concat(rootFiles);
  var _createVirtualCompile = createVirtualCompilerHost(sys, compilerOptions, ts),
    compilerHost = _createVirtualCompile.compilerHost,
    _updateFile2 = _createVirtualCompile.updateFile,
    _deleteFile2 = _createVirtualCompile.deleteFile;
  var fileVersions = new Map();
  var projectVersion = 0;
  var languageServiceHost = _extends({}, compilerHost, {
    getProjectVersion: function getProjectVersion() {
      return projectVersion.toString();
    },
    getCompilationSettings: function getCompilationSettings() {
      return compilerOptions;
    },
    getCustomTransformers: function getCustomTransformers() {
      return customTransformers;
    },
    // A couple weeks of 4.8 TypeScript nightlies had a bug where the Program's
    // list of files was just a reference to the array returned by this host method,
    // which means mutations by the host that ought to result in a new Program being
    // created were not detected, since the old list of files and the new list of files
    // were in fact a reference to the same underlying array. That was fixed in
    // https://github.com/microsoft/TypeScript/pull/49813, but since the twoslash runner
    // is used in bisecting for changes, it needs to guard against being busted in that
    // couple-week period, so we defensively make a slice here.
    getScriptFileNames: function getScriptFileNames() {
      return fileNames.slice();
    },
    getScriptSnapshot: function getScriptSnapshot(fileName) {
      var contents = sys.readFile(fileName);
      if (contents && typeof contents === "string") {
        return ts.ScriptSnapshot.fromString(contents);
      }
      return;
    },
    getScriptVersion: function getScriptVersion(fileName) {
      return fileVersions.get(fileName) || "0";
    },
    writeFile: sys.writeFile
  });
  var lsHost = {
    languageServiceHost: languageServiceHost,
    updateFile: function updateFile(sourceFile) {
      projectVersion++;
      fileVersions.set(sourceFile.fileName, projectVersion.toString());
      if (!fileNames.includes(sourceFile.fileName)) {
        fileNames.push(sourceFile.fileName);
      }
      _updateFile2(sourceFile);
    },
    deleteFile: function deleteFile(sourceFile) {
      projectVersion++;
      fileVersions.set(sourceFile.fileName, projectVersion.toString());
      var index = fileNames.indexOf(sourceFile.fileName);
      if (index !== -1) {
        fileNames.splice(index, 1);
      }
      _deleteFile2(sourceFile);
    }
  };
  return lsHost;
}
var requirePath = function requirePath() {
  return require(String.fromCharCode(112, 97, 116, 104));
};
var requireFS = function requireFS() {
  return require(String.fromCharCode(102, 115));
};

const tsvfs = { addAllFilesFromFolder, addFilesForTypesIntoFolder, createDefaultMapFromCDN, createDefaultMapFromNodeModules, createFSBackedSystem, createSystem, createVirtualCompilerHost, createVirtualLanguageServiceHost, createVirtualTypeScriptEnvironment, knownLibFilesForCompilerOptions };
//# sourceMappingURL=vfs.esm.js.map

const getGlobal = function () { 
  if (typeof self !== 'undefined') { return self; } 
  if (typeof window !== 'undefined') { return window; } 
  if (typeof global !== 'undefined') { return global; } 
  throw new Error('unable to locate global object'); 
}; 

const globals = getGlobal(); 
globals.tsvfs = tsvfs;
