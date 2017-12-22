// based on markdalgleish/static-site-generator-webpack-plugin
// use rxjs v5+
const _ = require('lodash');
const { Observable } = require('rxjs');
const evaluate = require('eval');
const invariant = require('invariant');
const RawSource = require('webpack-sources/lib/RawSource');
const {
  findAsset,
  getAssetsFromCompilation,
  pathToAssetName
} = require('./webpack-utils.js');

class TestFileGenerator {
  constructor({
    entry,
    locals = {},
    globals
  } = {}) {
    this.entry = entry;
    this.locals = locals;
    this.globals = globals;
  }

  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      compilation.plugin('optimize-assets', (_, done) => {
        Observable.defer(() => {
          const webpackStats = compilation.getStats();
          const webpackStatsJson = webpackStats.toJson();
          const asset = findAsset(this.entry, compilation, webpackStatsJson);

          invariant(
            asset,
            'Source file not found: %s',
            this.entry
          );

          const assets = getAssetsFromCompilation(
            compilation,
            webpackStatsJson
          );

          const source = asset.source();
          const render = evaluate(
            source,
            /* filename: */
            this.entry,
            /* scope: */
            this.globals,
            /* includeGlobals: */
            true
          );

          if (render.hasOwnProperty('default')) {
            render = render['default'];
          }

          invariant(
            typeof render === 'function',
            `Export from  must be a function that returns an HTML string.
            Is output.libraryTarget in the configuration set to "umd"?`,
            this.entry
          );

          return Observable.from(this.paths)
            .map(path => ({
              path,
              assets,
              webpackStats,
              ...this.locals
            }))
            .switchMap(this.renderPaths(
              render,
              assets,
              webpackStats,
              compilation
            ));
        })
        .subscribe(
          _.noop,
          err => {
            compilation.errors.push(err.stack);
            done();
          },
          done
        );
      });
    });
  }

  renderPaths(render, assets, webpackStats, compilation) {
    // result from render may be Any|Promise
    // typecasts Any to Promise using Promise.resolve
    // defer will then typecast Promise (and any iterable) to Observable
    return locals => Observable.defer(() => Promise.resolve(render(locals)))
      // switchMap will typecast Iterables to Observable
      .switchMap(result => (
        _.isObject(result) ?
          // turn result object to pairs of path, result
          _.pairs(result) :
          [[ locals.path, result ]]
      ))
      .map(([ path, result ]) => [ pathToAssetName(path), result ])
      // is asset already exist in assets, do nothing
      .filter(([ assetName ]) => !!compilation.assets[assetName])
      .do(([ assetName, result ]) => {
        // add new file to wepback assets.
        // webpack will print them to files
        compilation.assets[assetName] = new RawSource(result);
      })
      .ignoreElements()
      .catch(err => {
        compilation.errors.push(err.stack);
      });
  }
}

module.exports = TestFileGenerator;
