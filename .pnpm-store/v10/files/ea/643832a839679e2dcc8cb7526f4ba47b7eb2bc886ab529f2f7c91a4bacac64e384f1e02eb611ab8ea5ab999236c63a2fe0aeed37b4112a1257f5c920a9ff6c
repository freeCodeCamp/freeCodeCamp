/**
 * @license React
 * react-server-dom-webpack-plugin.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

'use strict';

var path = require('path');
var url = require('url');
var asyncLib = require('neo-async');
var ModuleDependency = require('webpack/lib/dependencies/ModuleDependency');
var NullDependency = require('webpack/lib/dependencies/NullDependency');
var Template = require('webpack/lib/Template');
var webpack = require('webpack');

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

class ClientReferenceDependency extends ModuleDependency {
  constructor(request) {
    super(request);
  }

  get type() {
    return 'client-reference';
  }

} // This is the module that will be used to anchor all client references to.
// I.e. it will have all the client files as async deps from this point on.
// We use the Flight client implementation because you can't get to these
// without the client runtime so it's the first time in the loading sequence
// you might want them.


var clientImportName = 'react-server-dom-webpack';

var clientFileName = require.resolve('../');

var PLUGIN_NAME = 'React Server Plugin';
class ReactFlightWebpackPlugin {
  constructor(options) {
    if (!options || typeof options.isServer !== 'boolean') {
      throw new Error(PLUGIN_NAME + ': You must specify the isServer option as a boolean.');
    }

    if (options.isServer) {
      throw new Error('TODO: Implement the server compiler.');
    }

    if (!options.clientReferences) {
      this.clientReferences = [{
        directory: '.',
        recursive: true,
        include: /\.client\.(js|ts|jsx|tsx)$/
      }];
    } else if (typeof options.clientReferences === 'string' || !isArray(options.clientReferences)) {
      this.clientReferences = [options.clientReferences];
    } else {
      this.clientReferences = options.clientReferences;
    }

    if (typeof options.chunkName === 'string') {
      this.chunkName = options.chunkName;

      if (!/\[(index|request)\]/.test(this.chunkName)) {
        this.chunkName += '[index]';
      }
    } else {
      this.chunkName = 'client[index]';
    }

    this.manifestFilename = options.manifestFilename || 'react-client-manifest.json';
  }

  apply(compiler) {
    var _this = this;

    var resolvedClientReferences;
    var clientFileNameFound = false; // Find all client files on the file system

    compiler.hooks.beforeCompile.tapAsync(PLUGIN_NAME, function (_ref, callback) {
      var contextModuleFactory = _ref.contextModuleFactory;
      var contextResolver = compiler.resolverFactory.get('context', {});

      _this.resolveAllClientFiles(compiler.context, contextResolver, compiler.inputFileSystem, contextModuleFactory, function (err, resolvedClientRefs) {
        if (err) {
          callback(err);
          return;
        }

        resolvedClientReferences = resolvedClientRefs;
        callback();
      });
    });
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, function (compilation, _ref2) {
      var normalModuleFactory = _ref2.normalModuleFactory;
      compilation.dependencyFactories.set(ClientReferenceDependency, normalModuleFactory);
      compilation.dependencyTemplates.set(ClientReferenceDependency, new NullDependency.Template());

      var handler = function (parser) {
        // We need to add all client references as dependency of something in the graph so
        // Webpack knows which entries need to know about the relevant chunks and include the
        // map in their runtime. The things that actually resolves the dependency is the Flight
        // client runtime. So we add them as a dependency of the Flight client runtime.
        // Anything that imports the runtime will be made aware of these chunks.
        parser.hooks.program.tap(PLUGIN_NAME, function () {
          var module = parser.state.module;

          if (module.resource !== clientFileName) {
            return;
          }

          clientFileNameFound = true;

          if (resolvedClientReferences) {
            for (var i = 0; i < resolvedClientReferences.length; i++) {
              var dep = resolvedClientReferences[i];

              var chunkName = _this.chunkName.replace(/\[index\]/g, '' + i).replace(/\[request\]/g, Template.toPath(dep.userRequest));

              var block = new webpack.AsyncDependenciesBlock({
                name: chunkName
              }, null, dep.request);
              block.addDependency(dep);
              module.addBlock(block);
            }
          }
        });
      };

      normalModuleFactory.hooks.parser.for('javascript/auto').tap('HarmonyModulesPlugin', handler);
      normalModuleFactory.hooks.parser.for('javascript/esm').tap('HarmonyModulesPlugin', handler);
      normalModuleFactory.hooks.parser.for('javascript/dynamic').tap('HarmonyModulesPlugin', handler);
    });
    compiler.hooks.make.tap(PLUGIN_NAME, function (compilation) {
      compilation.hooks.processAssets.tap({
        name: PLUGIN_NAME,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT
      }, function () {
        if (clientFileNameFound === false) {
          compilation.warnings.push(new webpack.WebpackError("Client runtime at " + clientImportName + " was not found. React Server Components module map file " + _this.manifestFilename + " was not created."));
          return;
        }

        var json = {};
        compilation.chunkGroups.forEach(function (chunkGroup) {
          var chunkIds = chunkGroup.chunks.map(function (c) {
            return c.id;
          });

          function recordModule(id, module) {
            // TODO: Hook into deps instead of the target module.
            // That way we know by the type of dep whether to include.
            // It also resolves conflicts when the same module is in multiple chunks.
            if (!/\.client\.(js|ts)x?$/.test(module.resource)) {
              return;
            }

            var moduleProvidedExports = compilation.moduleGraph.getExportsInfo(module).getProvidedExports();
            var moduleExports = {};
            ['', '*'].concat(Array.isArray(moduleProvidedExports) ? moduleProvidedExports : []).forEach(function (name) {
              moduleExports[name] = {
                id: id,
                chunks: chunkIds,
                name: name
              };
            });
            var href = url.pathToFileURL(module.resource).href;

            if (href !== undefined) {
              json[href] = moduleExports;
            }
          }

          chunkGroup.chunks.forEach(function (chunk) {
            var chunkModules = compilation.chunkGraph.getChunkModulesIterable(chunk);
            Array.from(chunkModules).forEach(function (module) {
              var moduleId = compilation.chunkGraph.getModuleId(module);
              recordModule(moduleId, module); // If this is a concatenation, register each child to the parent ID.

              if (module.modules) {
                module.modules.forEach(function (concatenatedMod) {
                  recordModule(moduleId, concatenatedMod);
                });
              }
            });
          });
        });
        var output = JSON.stringify(json, null, 2);
        compilation.emitAsset(_this.manifestFilename, new webpack.sources.RawSource(output, false));
      });
    });
  } // This attempts to replicate the dynamic file path resolution used for other wildcard
  // resolution in Webpack is using.


  resolveAllClientFiles(context, contextResolver, fs, contextModuleFactory, callback) {
    asyncLib.map(this.clientReferences, function (clientReferencePath, cb) {
      if (typeof clientReferencePath === 'string') {
        cb(null, [new ClientReferenceDependency(clientReferencePath)]);
        return;
      }

      var clientReferenceSearch = clientReferencePath;
      contextResolver.resolve({}, context, clientReferencePath.directory, {}, function (err, resolvedDirectory) {
        if (err) return cb(err);
        var options = {
          resource: resolvedDirectory,
          resourceQuery: '',
          recursive: clientReferenceSearch.recursive === undefined ? true : clientReferenceSearch.recursive,
          regExp: clientReferenceSearch.include,
          include: undefined,
          exclude: clientReferenceSearch.exclude
        };
        contextModuleFactory.resolveDependencies(fs, options, function (err2, deps) {
          if (err2) return cb(err2);
          var clientRefDeps = deps.map(function (dep) {
            // use userRequest instead of request. request always end with undefined which is wrong
            var request = path.join(resolvedDirectory, dep.userRequest);
            var clientRefDep = new ClientReferenceDependency(request);
            clientRefDep.userRequest = dep.userRequest;
            return clientRefDep;
          });
          cb(null, clientRefDeps);
        });
      });
    }, function (err, result) {
      if (err) return callback(err);
      var flat = [];

      for (var i = 0; i < result.length; i++) {
        flat.push.apply(flat, result[i]);
      }

      callback(null, flat);
    });
  }

}

module.exports = ReactFlightWebpackPlugin;
