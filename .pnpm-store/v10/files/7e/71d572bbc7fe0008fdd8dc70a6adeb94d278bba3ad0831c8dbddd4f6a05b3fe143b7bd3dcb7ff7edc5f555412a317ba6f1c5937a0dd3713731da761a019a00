"use strict";

exports.__esModule = true;
exports.ForceCssHMRForEdgeCases = void 0;
/**
 * This is total hack that is meant to handle:
 *  - https://github.com/webpack-contrib/mini-css-extract-plugin/issues/706
 *  - https://github.com/webpack-contrib/mini-css-extract-plugin/issues/708
 * The way it works it is looking up what HotModuleReplacementPlugin checks internally
 * and tricks it by checking up if any modules that uses mini-css-extract-plugin
 * changed or was newly added and then modifying blank.css hash.
 * blank.css is css module that is used by all pages and is there from the start
 * so changing hash of that _should_ ensure that:
 *  - when new css is imported it will reload css
 *  - when css imported by not loaded (by runtime) page template changes it will reload css
 */
class ForceCssHMRForEdgeCases {
  hackCounter = 0;
  previouslySeenCss = new Set();
  constructor() {
    this.name = `ForceCssHMRForEdgeCases`;
  }
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(this.name, compilation => {
      compilation.hooks.fullHash.tap(this.name, () => {
        const chunkGraph = compilation.chunkGraph;
        const records = compilation.records;
        if (!records.chunkModuleHashes) {
          return;
        }
        const seenCssInThisCompilation = new Set();
        /**
         * We will get list of css modules that are removed in this compilation
         * by starting with list of css used in last compilation and removing
         * all modules that are used in this one.
         */
        const cssRemovedInThisCompilation = this.previouslySeenCss;
        let newOrUpdatedCss = false;
        for (const chunk of compilation.chunks) {
          const getModuleHash = module => {
            if (compilation.codeGenerationResults.has(module, chunk.runtime)) {
              return compilation.codeGenerationResults.getHash(module, chunk.runtime);
            } else {
              return chunkGraph.getModuleHash(module, chunk.runtime);
            }
          };
          const modules = chunkGraph.getChunkModulesIterable(chunk);
          if (modules !== undefined) {
            for (const module of modules) {
              var _module$loaders;
              const key = `${chunk.id}|${module.identifier()}`;
              if (!this.originalBlankCssHash &&
              // @ts-ignore - exists on NormalModule but not Module
              module.rawRequest === `./blank.css`) {
                this.blankCssKey = key;
                this.originalBlankCssHash = records.chunkModuleHashes[this.blankCssKey];
              }

              // @ts-ignore - exists on NormalModule but not Module
              const isUsingMiniCssExtract = (_module$loaders = module.loaders) === null || _module$loaders === void 0 ? void 0 : _module$loaders.find(loader => {
                var _loader$loader;
                return loader === null || loader === void 0 ? void 0 : (_loader$loader = loader.loader) === null || _loader$loader === void 0 ? void 0 : _loader$loader.includes(`mini-css-extract-plugin`);
              });
              if (isUsingMiniCssExtract) {
                seenCssInThisCompilation.add(key);
                cssRemovedInThisCompilation.delete(key);
                const hash = getModuleHash(module);
                if (records.chunkModuleHashes[key] !== hash) {
                  newOrUpdatedCss = true;
                }
              }
            }
          }
        }

        // If css file was edited or new css import was added (`newOrUpdatedCss`)
        // or if css import was removed (`cssRemovedInThisCompilation.size > 0`)
        // trick Webpack's HMR into thinking `blank.css` file changed.
        if ((newOrUpdatedCss || cssRemovedInThisCompilation.size > 0) && this.originalBlankCssHash && this.blankCssKey) {
          records.chunkModuleHashes[this.blankCssKey] = this.originalBlankCssHash + String(this.hackCounter++);
        }
        this.previouslySeenCss = seenCssInThisCompilation;
      });
    });
  }
}
exports.ForceCssHMRForEdgeCases = ForceCssHMRForEdgeCases;
//# sourceMappingURL=force-css-hmr-for-edge-cases.js.map