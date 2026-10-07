#! /usr/bin/env node
"use strict";

const {
  resolve,
  dirname
} = require('path');

const commander = require('commander');

const {
  magenta
} = require('picocolors');

const analyzer = require('../analyzer');

const viewer = require('../viewer');

const Logger = require('../Logger');

const utils = require('../utils');

const SIZES = new Set(['stat', 'parsed', 'gzip']);
const program = commander.version(require('../../package.json').version).usage(`<bundleStatsFile> [bundleDir] [options]

  Arguments:

    bundleStatsFile  Path to Webpack Stats JSON file.
    bundleDir        Directory containing all generated bundles.
                     You should provided it if you want analyzer to show you the real parsed module sizes.
                     By default a directory of stats file is used.`).option('-m, --mode <mode>', 'Analyzer mode. Should be `server`,`static` or `json`.' + br('In `server` mode analyzer will start HTTP server to show bundle report.') + br('In `static` mode single HTML file with bundle report will be generated.') + br('In `json` mode single JSON file with bundle report will be generated.'), 'server').option( // Had to make `host` parameter optional in order to let `-h` flag output help message
// Fixes https://github.com/webpack-contrib/webpack-bundle-analyzer/issues/239
'-h, --host [host]', 'Host that will be used in `server` mode to start HTTP server.', '127.0.0.1').option('-p, --port <n>', 'Port that will be used in `server` mode to start HTTP server.', 8888).option('-r, --report <file>', 'Path to bundle report file that will be generated in `static` mode.').option('-t, --title <title>', 'String to use in title element of html report.').option('-s, --default-sizes <type>', 'Module sizes to show in treemap by default.' + br(`Possible values: ${[...SIZES].join(', ')}`), 'parsed').option('-O, --no-open', "Don't open report in default browser automatically.").option('-e, --exclude <regexp>', 'Assets that should be excluded from the report.' + br('Can be specified multiple times.'), array()).option('-l, --log-level <level>', 'Log level.' + br(`Possible values: ${[...Logger.levels].join(', ')}`), Logger.defaultLevel).parse(process.argv);
let [bundleStatsFile, bundleDir] = program.args;
let {
  mode,
  host,
  port,
  report: reportFilename,
  title: reportTitle,
  defaultSizes,
  logLevel,
  open: openBrowser,
  exclude: excludeAssets
} = program.opts();
const logger = new Logger(logLevel);

if (typeof reportTitle === 'undefined') {
  reportTitle = utils.defaultTitle;
}

if (!bundleStatsFile) showHelp('Provide path to Webpack Stats file as first argument');

if (mode !== 'server' && mode !== 'static' && mode !== 'json') {
  showHelp('Invalid mode. Should be either `server`, `static` or `json`.');
}

if (mode === 'server') {
  if (!host) showHelp('Invalid host name');
  port = port === 'auto' ? 0 : Number(port);
  if (isNaN(port)) showHelp('Invalid port. Should be a number or `auto`');
}

if (!SIZES.has(defaultSizes)) showHelp(`Invalid default sizes option. Possible values are: ${[...SIZES].join(', ')}`);
bundleStatsFile = resolve(bundleStatsFile);
if (!bundleDir) bundleDir = dirname(bundleStatsFile);
parseAndAnalyse(bundleStatsFile);

async function parseAndAnalyse(bundleStatsFile) {
  try {
    const bundleStats = await analyzer.readStatsFromFile(bundleStatsFile);

    if (mode === 'server') {
      viewer.startServer(bundleStats, {
        openBrowser,
        port,
        host,
        defaultSizes,
        reportTitle,
        bundleDir,
        excludeAssets,
        logger: new Logger(logLevel),
        analyzerUrl: utils.defaultAnalyzerUrl
      });
    } else if (mode === 'static') {
      viewer.generateReport(bundleStats, {
        openBrowser,
        reportFilename: resolve(reportFilename || 'report.html'),
        reportTitle,
        defaultSizes,
        bundleDir,
        excludeAssets,
        logger: new Logger(logLevel)
      });
    } else if (mode === 'json') {
      viewer.generateJSONReport(bundleStats, {
        reportFilename: resolve(reportFilename || 'report.json'),
        bundleDir,
        excludeAssets,
        logger: new Logger(logLevel)
      });
    }
  } catch (err) {
    logger.error(`Couldn't read webpack bundle stats from "${bundleStatsFile}":\n${err}`);
    logger.debug(err.stack);
    process.exit(1);
  }
}

function showHelp(error) {
  if (error) console.log(`\n  ${magenta(error)}\n`);
  program.outputHelp();
  process.exit(1);
}

function br(str) {
  return `\n${' '.repeat(28)}${str}`;
}

function array() {
  const arr = [];
  return val => {
    arr.push(val);
    return arr;
  };
}