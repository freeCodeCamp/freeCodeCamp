"use strict";

const {
  isAbsolute,
  join
} = require('path'); // @ts-ignore


const arrify = require('arrify');

const {
  isMatch
} = require('micromatch');

const {
  getOptions
} = require('./options');

const linter = require('./linter');

const {
  parseFiles,
  parseFoldersToGlobs
} = require('./utils');
/** @typedef {import('webpack').Compiler} Compiler */

/** @typedef {import('./options').Options} Options */


const ESLINT_PLUGIN = 'ESLintWebpackPlugin';
let counter = 0;

class ESLintWebpackPlugin {
  /**
   * @param {Options} options
   */
  constructor(options = {}) {
    this.key = ESLINT_PLUGIN;
    this.options = getOptions(options);
    this.run = this.run.bind(this);
  }
  /**
   * @param {Compiler} compiler
   * @returns {void}
   */


  apply(compiler) {
    // Generate key for each compilation,
    // this differentiates one from the other when being cached.
    this.key = compiler.name || `${this.key}_${counter += 1}`;
    const options = { ...this.options,
      exclude: parseFiles(this.options.exclude || [], this.getContext(compiler)),
      extensions: arrify(this.options.extensions),
      files: parseFiles(this.options.files || '', this.getContext(compiler))
    };
    const wanted = parseFoldersToGlobs(options.files, options.extensions);
    const exclude = parseFoldersToGlobs(this.options.exclude ? options.exclude : '**/node_modules/**', []); // If `lintDirtyModulesOnly` is disabled,
    // execute the linter on the build

    if (!this.options.lintDirtyModulesOnly) {
      compiler.hooks.run.tapPromise(this.key, c => this.run(c, options, wanted, exclude));
    }

    let isFirstRun = this.options.lintDirtyModulesOnly;
    compiler.hooks.watchRun.tapPromise(this.key, c => {
      if (isFirstRun) {
        isFirstRun = false;
        return Promise.resolve();
      }

      return this.run(c, options, wanted, exclude);
    });
  }
  /**
   * @param {Compiler} compiler
   * @param {Options} options
   * @param {string[]} wanted
   * @param {string[]} exclude
   */


  async run(compiler, options, wanted, exclude) {
    // Do not re-hook
    if ( // @ts-ignore
    compiler.hooks.thisCompilation.taps.find(({
      name
    }) => name === this.key)) {
      return;
    }

    compiler.hooks.thisCompilation.tap(this.key, compilation => {
      /** @type {import('./linter').Linter} */
      let lint;
      /** @type {import('./linter').Reporter} */

      let report;
      /** @type number */

      let threads;

      try {
        ({
          lint,
          report,
          threads
        } = linter(this.key, options, compilation));
      } catch (e) {
        compilation.errors.push(e);
        return;
      }
      /** @type {string[]} */


      const files = []; // @ts-ignore
      // Add the file to be linted

      compilation.hooks.succeedModule.tap(this.key, ({
        resource
      }) => {
        if (resource) {
          const [file] = resource.split('?');

          if (file && !files.includes(file) && isMatch(file, wanted, {
            dot: true
          }) && !isMatch(file, exclude, {
            dot: true
          })) {
            files.push(file);

            if (threads > 1) {
              lint(file);
            }
          }
        }
      }); // Lint all files added

      compilation.hooks.finishModules.tap(this.key, () => {
        if (files.length > 0 && threads <= 1) {
          lint(files);
        }
      }); // await and interpret results

      compilation.hooks.additionalAssets.tapPromise(this.key, processResults);

      async function processResults() {
        const {
          errors,
          warnings,
          generateReportAsset
        } = await report();

        if (warnings && !options.failOnWarning) {
          // @ts-ignore
          compilation.warnings.push(warnings);
        } else if (warnings && options.failOnWarning) {
          // @ts-ignore
          compilation.errors.push(warnings);
        }

        if (errors && options.failOnError) {
          // @ts-ignore
          compilation.errors.push(errors);
        } else if (errors && !options.failOnError) {
          // @ts-ignore
          compilation.warnings.push(errors);
        }

        if (generateReportAsset) {
          await generateReportAsset(compilation);
        }
      }
    });
  }
  /**
   *
   * @param {Compiler} compiler
   * @returns {string}
   */


  getContext(compiler) {
    if (!this.options.context) {
      return String(compiler.options.context);
    }

    if (!isAbsolute(this.options.context)) {
      return join(String(compiler.options.context), this.options.context);
    }

    return this.options.context;
  }

}

module.exports = ESLintWebpackPlugin;