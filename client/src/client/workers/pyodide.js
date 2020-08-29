/**
 * The main bootstrap script for loading pyodide.
 */

var languagePluginLoader = new Promise((resolve, reject) => {
  // This is filled in by the Makefile to be either a local file or the
  // deployed location. TODO: This should be done in a less hacky
  // way.
  var baseURL =
    self.languagePluginUrl || 'https://pyodide-cdn2.iodide.io/v0.15.0/full/';
  baseURL = baseURL.substr(0, baseURL.lastIndexOf('/')) + '/';

  // //////////////////////////////////////////////////////////
  // Package loading
  let loadedPackages = {};
  var loadPackagePromise = new Promise(resolve => resolve());
  // Regexp for validating package name and URI
  var package_name_regexp = '[a-z0-9_][a-z0-9_-]*';
  var package_uri_regexp = new RegExp(
    '^https?://.*?(' + package_name_regexp + ').js$',
    'i'
  );
  var package_name_regexp = new RegExp('^' + package_name_regexp + '$', 'i');

  let _uri_to_package_name = package_uri => {
    // Generate a unique package name from URI

    if (package_name_regexp.test(package_uri)) {
      return package_uri;
    } else if (package_uri_regexp.test(package_uri)) {
      let match = package_uri_regexp.exec(package_uri);
      // Get the regexp group corresponding to the package name
      return match[1];
    } else {
      return null;
    }
  };

  // clang-format off
  let preloadWasm = () => {
    // On Chrome, we have to instantiate wasm asynchronously. Since that
    // can't be done synchronously within the call to dlopen, we instantiate
    // every .so that comes our way up front, caching it in the
    // `preloadedWasm` dictionary.

    let promise = new Promise(resolve => resolve());
    let FS = pyodide._module.FS;

    function recurseDir(rootpath) {
      let dirs;
      try {
        dirs = FS.readdir(rootpath);
      } catch {
        return;
      }
      for (let entry of dirs) {
        if (entry.startsWith('.')) {
          continue;
        }
        const path = rootpath + entry;
        if (entry.endsWith('.so')) {
          if (Module['preloadedWasm'][path] === undefined) {
            promise = promise
              .then(() =>
                Module['loadWebAssemblyModule'](FS.readFile(path), {
                  loadAsync: true
                })
              )
              .then(module => {
                Module['preloadedWasm'][path] = module;
              });
          }
        } else if (FS.isDir(FS.lookupPath(path).node.mode)) {
          recurseDir(path + '/');
        }
      }
    }

    recurseDir('/');

    return promise;
  };
  // clang-format on

  function loadScript(url, onload, onerror) {
    if (self.document) {
      // browser
      const script = self.document.createElement('script');
      script.src = url;
      script.onload = e => {
        onload();
      };
      script.onerror = e => {
        onerror();
      };
      self.document.head.appendChild(script);
    } else if (self.importScripts) {
      // webworker
      try {
        self.importScripts(url);
        onload();
      } catch {
        onerror();
      }
    }
  }

  let _loadPackage = (names, messageCallback, errorCallback) => {
    if (messageCallback == undefined) {
      messageCallback = () => {};
    }
    if (errorCallback == undefined) {
      errorCallback = () => {};
    }
    let _messageCallback = msg => {
      console.log(msg);
      messageCallback(msg);
    };
    let _errorCallback = errMsg => {
      console.error(errMsg);
      errorCallback(errMsg);
    };

    // DFS to find all dependencies of the requested packages
    let packages = self.pyodide._module.packages.dependencies;
    let loadedPackages = self.pyodide.loadedPackages;
    let queue = [].concat(names || []);
    let toLoad = {};
    while (queue.length) {
      let package_uri = queue.pop();

      const pkg = _uri_to_package_name(package_uri);

      if (pkg == null) {
        _errorCallback(`Invalid package name or URI '${package_uri}'`);
        return;
      } else if (pkg == package_uri) {
        package_uri = 'default channel';
      }

      if (pkg in loadedPackages) {
        if (package_uri != loadedPackages[pkg]) {
          _errorCallback(
            `URI mismatch, attempting to load package ` +
              `${pkg} from ${package_uri} while it is already ` +
              `loaded from ${loadedPackages[pkg]}!`
          );
          return;
        } else {
          _messageCallback(`${pkg} already loaded from ${loadedPackages[pkg]}`);
        }
      } else if (pkg in toLoad) {
        if (package_uri != toLoad[pkg]) {
          _errorCallback(
            `URI mismatch, attempting to load package ` +
              `${pkg} from ${package_uri} while it is already ` +
              `being loaded from ${toLoad[pkg]}!`
          );
          return;
        }
      } else {
        console.log(`${pkg} to be loaded from ${package_uri}`); // debug level info.

        toLoad[pkg] = package_uri;
        if (packages.hasOwnProperty(pkg)) {
          packages[pkg].forEach(subpackage => {
            if (!(subpackage in loadedPackages) && !(subpackage in toLoad)) {
              queue.push(subpackage);
            }
          });
        } else {
          _errorCallback(`Unknown package '${pkg}'`);
        }
      }
    }

    self.pyodide._module.locateFile = path => {
      // handle packages loaded from custom URLs
      let pkg = path.replace(/\.data$/, '');
      if (pkg in toLoad) {
        let package_uri = toLoad[pkg];
        if (package_uri != 'default channel') {
          return package_uri.replace(/\.js$/, '.data');
        }
      }
      return baseURL + path;
    };

    let promise = new Promise((resolve, reject) => {
      if (Object.keys(toLoad).length === 0) {
        resolve('No new packages to load');
        return;
      }

      let packageList = Array.from(Object.keys(toLoad));
      _messageCallback(`Loading ${packageList.join(', ')}`);

      // monitorRunDependencies is called at the beginning and the end of each
      // package being loaded. We know we are done when it has been called
      // exactly "toLoad * 2" times.
      var packageCounter = Object.keys(toLoad).length * 2;

      self.pyodide._module.monitorRunDependencies = () => {
        packageCounter--;
        if (packageCounter === 0) {
          for (let pkg in toLoad) {
            self.pyodide.loadedPackages[pkg] = toLoad[pkg];
          }
          delete self.pyodide._module.monitorRunDependencies;
          self.removeEventListener('error', windowErrorHandler);

          let resolveMsg = `Loaded `;
          if (packageList.length > 0) {
            resolveMsg += packageList.join(', ');
          } else {
            resolveMsg += 'no packages';
          }

          if (!isFirefox) {
            preloadWasm().then(() => {
              console.log(resolveMsg);
              resolve(resolveMsg);
            });
          } else {
            console.log(resolveMsg);
            resolve(resolveMsg);
          }
        }
      };

      // Add a handler for any exceptions that are thrown in the process of
      // loading a package
      var windowErrorHandler = err => {
        delete self.pyodide._module.monitorRunDependencies;
        self.removeEventListener('error', windowErrorHandler);
        // Set up a new Promise chain, since this one failed
        loadPackagePromise = new Promise(resolve => resolve());
        reject(err.message);
      };
      self.addEventListener('error', windowErrorHandler);

      for (let pkg in toLoad) {
        let scriptSrc;
        let package_uri = toLoad[pkg];
        if (package_uri == 'default channel') {
          scriptSrc = `${baseURL}${pkg}.js`;
        } else {
          scriptSrc = `${package_uri}`;
        }
        _messageCallback(`Loading ${pkg} from ${scriptSrc}`);
        loadScript(
          scriptSrc,
          () => {},
          () => {
            // If the package_uri fails to load, call monitorRunDependencies twice
            // (so packageCounter will still hit 0 and finish loading), and remove
            // the package from toLoad so we don't mark it as loaded, and remove
            // the package from packageList so we don't say that it was loaded.
            _errorCallback(`Couldn't load package from URL ${scriptSrc}`);
            delete toLoad[pkg];
            let packageListIndex = packageList.indexOf(pkg);
            if (packageListIndex !== -1) {
              packageList.splice(packageListIndex, 1);
            }
            for (let i = 0; i < 2; i++) {
              self.pyodide._module.monitorRunDependencies();
            }
          }
        );
      }

      // We have to invalidate Python's import caches, or it won't
      // see the new files. This is done here so it happens in parallel
      // with the fetching over the network.
      self.pyodide.runPython(
        'import importlib as _importlib\n' + '_importlib.invalidate_caches()\n'
      );
    });

    return promise;
  };

  let loadPackage = (names, messageCallback, errorCallback) => {
    /* We want to make sure that only one loadPackage invocation runs at any
     * given time, so this creates a "chain" of promises. */
    loadPackagePromise = loadPackagePromise.then(() =>
      _loadPackage(names, messageCallback, errorCallback)
    );
    return loadPackagePromise;
  };

  // //////////////////////////////////////////////////////////
  // Fix Python recursion limit
  function fixRecursionLimit(pyodide) {
    // The Javascript/Wasm call stack may be too small to handle the default
    // Python call stack limit of 1000 frames. This is generally the case on
    // Chrom(ium), but not on Firefox. Here, we determine the Javascript call
    // stack depth available, and then divide by 50 (determined heuristically)
    // to set the maximum Python call stack depth.

    let depth = 0;
    function recurse() {
      depth += 1;
      recurse();
    }
    try {
      recurse();
    } catch (err) {}

    let recursionLimit = depth / 50;
    if (recursionLimit > 1000) {
      recursionLimit = 1000;
    }
    pyodide.runPython(
      `import sys; sys.setrecursionlimit(int(${recursionLimit}))`
    );
  }

  // //////////////////////////////////////////////////////////
  // Rearrange namespace for public API
  let PUBLIC_API = [
    'globals',
    'loadPackage',
    'loadedPackages',
    'pyimport',
    'repr',
    'runPython',
    'runPythonAsync',
    'checkABI',
    'version',
    'autocomplete'
  ];

  function makePublicAPI(module, public_api) {
    var namespace = { _module: module };
    for (let name of public_api) {
      namespace[name] = module[name];
    }
    return namespace;
  }

  // //////////////////////////////////////////////////////////
  // Loading Pyodide
  let wasmURL = `${baseURL}pyodide.asm.wasm`;
  let Module = {};
  self.Module = Module;

  Module.noImageDecoding = true;
  Module.noAudioDecoding = true;
  Module.noWasmDecoding = true;
  Module.preloadedWasm = {};
  let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  let wasm_promise,
    wasm_fetch = fetch(wasmURL);
  const compileBuffer = () =>
    wasm_fetch
      .then(response => response.arrayBuffer())
      .then(bytes => WebAssembly.compile(bytes));
  if (WebAssembly.compileStreaming === undefined) {
    wasm_promise = compileBuffer();
  } else {
    wasm_promise = WebAssembly.compileStreaming(wasm_fetch);
    wasm_promise = wasm_promise.catch(e => {
      if (e instanceof TypeError) {
        console.error(
          'pyodide streaming compilation failed:',
          e,
          '- falling back to buffered compilation'
        );
        return compileBuffer();
      }
      throw e;
    });
  }

  Module.instantiateWasm = (info, receiveInstance) => {
    wasm_promise
      .then(module => WebAssembly.instantiate(module, info))
      .then(instance => receiveInstance(instance));
    return {};
  };

  Module.checkABI = function(ABI_number) {
    if (ABI_number !== parseInt('1')) {
      var ABI_mismatch_exception = `ABI numbers differ. Expected 1, got ${ABI_number}`;
      console.error(ABI_mismatch_exception);
      throw ABI_mismatch_exception;
    }
    return true;
  };

  Module.autocomplete = function(path) {
    var pyodide_module = Module.pyimport('pyodide');
    return pyodide_module.get_completions(path);
  };

  Module.locateFile = path => baseURL + path;
  var postRunPromise = new Promise((resolve, reject) => {
    Module.postRun = () => {
      delete self.Module;
      fetch(`${baseURL}packages.json`)
        .then(response => response.json())
        .then(json => {
          fixRecursionLimit(self.pyodide);
          self.pyodide.globals = self.pyodide.runPython(
            'import sys\nsys.modules["__main__"]'
          );
          self.pyodide = makePublicAPI(self.pyodide, PUBLIC_API);
          self.pyodide._module.packages = json;
          if (self.iodide !== undefined) {
            // Perform some completions immediately so there isn't a delay on
            // the first call to autocomplete
            self.pyodide.runPython('import pyodide');
            self.pyodide.runPython('pyodide.get_completions("")');
          }
          resolve();
        });
    };
  });

  var dataLoadPromise = new Promise((resolve, reject) => {
    Module.monitorRunDependencies = n => {
      if (n === 0) {
        delete Module.monitorRunDependencies;
        resolve();
      }
    };
  });

  Promise.all([postRunPromise, dataLoadPromise]).then(() => resolve());

  const data_script_src = `${baseURL}pyodide.asm.data.js`;
  loadScript(
    data_script_src,
    () => {
      const scriptSrc = `${baseURL}pyodide.asm.js`;
      loadScript(
        scriptSrc,
        () => {
          // The emscripten module needs to be at this location for the core
          // filesystem to install itself. Once that's complete, it will be replaced
          // by the call to `makePublicAPI` with a more limited public API.
          self.pyodide = pyodide(Module);
          self.pyodide.loadedPackages = {};
          self.pyodide.loadPackage = loadPackage;
        },
        () => {}
      );
    },
    () => {}
  );

  // //////////////////////////////////////////////////////////
  // Iodide-specific functionality, that doesn't make sense
  // if not using with Iodide.
  if (self.iodide !== undefined) {
    // Load the custom CSS for Pyodide
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `${baseURL}renderedhtml.css`;
    document.getElementsByTagName('head')[0].appendChild(link);

    // Add a custom output handler for Python objects
    self.iodide.addOutputRenderer({
      shouldRender: val => {
        return (
          typeof val === 'function' && pyodide._module.PyProxy.isPyProxy(val)
        );
      },

      render: val => {
        let div = document.createElement('div');
        div.className = 'rendered_html';
        var element;
        if (val._repr_html_ !== undefined) {
          let result = val._repr_html_();
          if (typeof result === 'string') {
            div.appendChild(
              new DOMParser().parseFromString(result, 'text/html').body
                .firstChild
            );
            element = div;
          } else {
            element = result;
          }
        } else {
          let pre = document.createElement('pre');
          pre.textContent = val.toString();
          div.appendChild(pre);
          element = div;
        }
        return element.outerHTML;
      }
    });
  }
});
languagePluginLoader;
