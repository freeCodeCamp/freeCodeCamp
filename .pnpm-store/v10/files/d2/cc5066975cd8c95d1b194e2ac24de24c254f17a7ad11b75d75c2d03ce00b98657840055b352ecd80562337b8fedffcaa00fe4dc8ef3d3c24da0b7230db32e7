"use strict";

const fs = require('fs');

const path = require('path');

const {
  bold
} = require('picocolors');

const Logger = require('./Logger');

const viewer = require('./viewer');

const utils = require('./utils');

const {
  writeStats
} = require('./statsUtils');

class BundleAnalyzerPlugin {
  constructor(opts = {}) {
    this.opts = {
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      reportFilename: null,
      reportTitle: utils.defaultTitle,
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      excludeAssets: null,
      logLevel: 'info',
      // deprecated
      startAnalyzer: true,
      analyzerUrl: utils.defaultAnalyzerUrl,
      ...opts,
      analyzerPort: 'analyzerPort' in opts ? opts.analyzerPort === 'auto' ? 0 : opts.analyzerPort : 8888
    };
    this.server = null;
    this.logger = new Logger(this.opts.logLevel);
  }

  apply(compiler) {
    this.compiler = compiler;

    const done = (stats, callback) => {
      callback = callback || (() => {});

      const actions = [];

      if (this.opts.generateStatsFile) {
        actions.push(() => this.generateStatsFile(stats.toJson(this.opts.statsOptions)));
      } // Handling deprecated `startAnalyzer` flag


      if (this.opts.analyzerMode === 'server' && !this.opts.startAnalyzer) {
        this.opts.analyzerMode = 'disabled';
      }

      if (this.opts.analyzerMode === 'server') {
        actions.push(() => this.startAnalyzerServer(stats.toJson()));
      } else if (this.opts.analyzerMode === 'static') {
        actions.push(() => this.generateStaticReport(stats.toJson()));
      } else if (this.opts.analyzerMode === 'json') {
        actions.push(() => this.generateJSONReport(stats.toJson()));
      }

      if (actions.length) {
        // Making analyzer logs to be after all webpack logs in the console
        setImmediate(async () => {
          try {
            await Promise.all(actions.map(action => action()));
            callback();
          } catch (e) {
            callback(e);
          }
        });
      } else {
        callback();
      }
    };

    if (compiler.hooks) {
      compiler.hooks.done.tapAsync('webpack-bundle-analyzer', done);
    } else {
      compiler.plugin('done', done);
    }
  }

  async generateStatsFile(stats) {
    const statsFilepath = path.resolve(this.compiler.outputPath, this.opts.statsFilename);
    await fs.promises.mkdir(path.dirname(statsFilepath), {
      recursive: true
    });

    try {
      await writeStats(stats, statsFilepath);
      this.logger.info(`${bold('Webpack Bundle Analyzer')} saved stats file to ${bold(statsFilepath)}`);
    } catch (error) {
      this.logger.error(`${bold('Webpack Bundle Analyzer')} error saving stats file to ${bold(statsFilepath)}: ${error}`);
    }
  }

  async startAnalyzerServer(stats) {
    if (this.server) {
      (await this.server).updateChartData(stats);
    } else {
      this.server = viewer.startServer(stats, {
        openBrowser: this.opts.openAnalyzer,
        host: this.opts.analyzerHost,
        port: this.opts.analyzerPort,
        reportTitle: this.opts.reportTitle,
        bundleDir: this.getBundleDirFromCompiler(),
        logger: this.logger,
        defaultSizes: this.opts.defaultSizes,
        excludeAssets: this.opts.excludeAssets,
        analyzerUrl: this.opts.analyzerUrl
      });
    }
  }

  async generateJSONReport(stats) {
    await viewer.generateJSONReport(stats, {
      reportFilename: path.resolve(this.compiler.outputPath, this.opts.reportFilename || 'report.json'),
      bundleDir: this.getBundleDirFromCompiler(),
      logger: this.logger,
      excludeAssets: this.opts.excludeAssets
    });
  }

  async generateStaticReport(stats) {
    await viewer.generateReport(stats, {
      openBrowser: this.opts.openAnalyzer,
      reportFilename: path.resolve(this.compiler.outputPath, this.opts.reportFilename || 'report.html'),
      reportTitle: this.opts.reportTitle,
      bundleDir: this.getBundleDirFromCompiler(),
      logger: this.logger,
      defaultSizes: this.opts.defaultSizes,
      excludeAssets: this.opts.excludeAssets
    });
  }

  getBundleDirFromCompiler() {
    if (typeof this.compiler.outputFileSystem.constructor === 'undefined') {
      return this.compiler.outputPath;
    }

    switch (this.compiler.outputFileSystem.constructor.name) {
      case 'MemoryFileSystem':
        return null;
      // Detect AsyncMFS used by Nuxt 2.5 that replaces webpack's MFS during development
      // Related: #274

      case 'AsyncMFS':
        return null;

      default:
        return this.compiler.outputPath;
    }
  }

}

module.exports = BundleAnalyzerPlugin;