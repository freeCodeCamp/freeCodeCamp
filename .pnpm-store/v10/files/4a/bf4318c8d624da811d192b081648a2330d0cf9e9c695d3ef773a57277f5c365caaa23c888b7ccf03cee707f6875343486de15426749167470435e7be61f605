'use strict';

const fs = require('fs');
const path = require('path');
const colors = require('picocolors');
const { loadConfig, optimize } = require('../svgo-node.js');
const pluginsMap = require('../../plugins/plugins.js');
const PKG = require('../../package.json');
const { encodeSVGDatauri, decodeSVGDatauri } = require('./tools.js');

const regSVGFile = /\.svg$/i;

/**
 * Synchronously check if path is a directory. Tolerant to errors like ENOENT.
 * @param {string} path
 */
function checkIsDir(path) {
  try {
    return fs.lstatSync(path).isDirectory();
  } catch (e) {
    return false;
  }
}

module.exports = function makeProgram(program) {
  program
    .name(PKG.name)
    .description(PKG.description, {
      INPUT: 'Alias to --input',
    })
    .version(PKG.version, '-v, --version')
    .arguments('[INPUT...]')
    .option('-i, --input <INPUT...>', 'Input files, "-" for STDIN')
    .option('-s, --string <STRING>', 'Input SVG data string')
    .option(
      '-f, --folder <FOLDER>',
      'Input folder, optimize and rewrite all *.svg files'
    )
    .option(
      '-o, --output <OUTPUT...>',
      'Output file or folder (by default the same as the input), "-" for STDOUT'
    )
    .option(
      '-p, --precision <INTEGER>',
      'Set number of digits in the fractional part, overrides plugins params'
    )
    .option('--config <CONFIG>', 'Custom config file, only .js is supported')
    .option(
      '--datauri <FORMAT>',
      'Output as Data URI string (base64), URI encoded (enc) or unencoded (unenc)'
    )
    .option(
      '--multipass',
      'Pass over SVGs multiple times to ensure all optimizations are applied'
    )
    .option('--pretty', 'Make SVG pretty printed')
    .option('--indent <INTEGER>', 'Indent number when pretty printing SVGs')
    .option(
      '--eol <EOL>',
      'Line break to use when outputting SVG: lf, crlf. If unspecified, uses platform default.'
    )
    .option('--final-newline', 'Ensure SVG ends with a line break')
    .option(
      '-r, --recursive',
      "Use with '--folder'. Optimizes *.svg files in folders recursively."
    )
    .option(
      '--exclude <PATTERN...>',
      "Use with '--folder'. Exclude files matching regular expression pattern."
    )
    .option(
      '-q, --quiet',
      'Only output error messages, not regular status messages'
    )
    .option('--show-plugins', 'Show available plugins and exit')
    // used by picocolors internally
    .option('--no-color', 'Output plain text without color')
    .action(action);
};

async function action(args, opts, command) {
  var input = opts.input || args;
  var output = opts.output;
  var config = {};

  if (opts.precision != null) {
    const number = Number.parseInt(opts.precision, 10);
    if (Number.isNaN(number)) {
      console.error(
        "error: option '-p, --precision' argument must be an integer number"
      );
      process.exit(1);
    } else {
      opts.precision = number;
    }
  }

  if (opts.datauri != null) {
    if (
      opts.datauri !== 'base64' &&
      opts.datauri !== 'enc' &&
      opts.datauri !== 'unenc'
    ) {
      console.error(
        "error: option '--datauri' must have one of the following values: 'base64', 'enc' or 'unenc'"
      );
      process.exit(1);
    }
  }

  if (opts.indent != null) {
    const number = Number.parseInt(opts.indent, 10);
    if (Number.isNaN(number)) {
      console.error(
        "error: option '--indent' argument must be an integer number"
      );
      process.exit(1);
    } else {
      opts.indent = number;
    }
  }

  if (opts.eol != null && opts.eol !== 'lf' && opts.eol !== 'crlf') {
    console.error(
      "error: option '--eol' must have one of the following values: 'lf' or 'crlf'"
    );
    process.exit(1);
  }

  // --show-plugins
  if (opts.showPlugins) {
    showAvailablePlugins();
    return;
  }

  // w/o anything
  if (
    (input.length === 0 || input[0] === '-') &&
    !opts.string &&
    !opts.stdin &&
    !opts.folder &&
    process.stdin.isTTY === true
  ) {
    return command.help();
  }

  if (
    typeof process == 'object' &&
    process.versions &&
    process.versions.node &&
    PKG &&
    PKG.engines.node
  ) {
    var nodeVersion = String(PKG.engines.node).match(/\d*(\.\d+)*/)[0];
    if (parseFloat(process.versions.node) < parseFloat(nodeVersion)) {
      throw Error(
        `${PKG.name} requires Node.js version ${nodeVersion} or higher.`
      );
    }
  }

  // --config
  const loadedConfig = await loadConfig(opts.config);
  if (loadedConfig != null) {
    config = loadedConfig;
  }

  // --quiet
  if (opts.quiet) {
    config.quiet = opts.quiet;
  }

  // --recursive
  if (opts.recursive) {
    config.recursive = opts.recursive;
  }

  // --exclude
  config.exclude = opts.exclude
    ? opts.exclude.map((pattern) => RegExp(pattern))
    : [];

  // --precision
  if (opts.precision != null) {
    var precision = Math.min(Math.max(0, opts.precision), 20);
    config.floatPrecision = precision;
  }

  // --multipass
  if (opts.multipass) {
    config.multipass = true;
  }

  // --pretty
  if (opts.pretty) {
    config.js2svg = config.js2svg || {};
    config.js2svg.pretty = true;
    if (opts.indent != null) {
      config.js2svg.indent = opts.indent;
    }
  }

  // --eol
  if (opts.eol) {
    config.js2svg = config.js2svg || {};
    config.js2svg.eol = opts.eol;
  }

  // --final-newline
  if (opts.finalNewline) {
    config.js2svg = config.js2svg || {};
    config.js2svg.finalNewline = true;
  }

  // --output
  if (output) {
    if (input.length && input[0] != '-') {
      if (output.length == 1 && checkIsDir(output[0])) {
        var dir = output[0];
        for (var i = 0; i < input.length; i++) {
          output[i] = checkIsDir(input[i])
            ? input[i]
            : path.resolve(dir, path.basename(input[i]));
        }
      } else if (output.length < input.length) {
        output = output.concat(input.slice(output.length));
      }
    }
  } else if (input.length) {
    output = input;
  } else if (opts.string) {
    output = '-';
  }

  if (opts.datauri) {
    config.datauri = opts.datauri;
  }

  // --folder
  if (opts.folder) {
    var ouputFolder = (output && output[0]) || opts.folder;
    await optimizeFolder(config, opts.folder, ouputFolder);
  }

  // --input
  if (input.length !== 0) {
    // STDIN
    if (input[0] === '-') {
      return new Promise((resolve, reject) => {
        var data = '',
          file = output[0];

        process.stdin
          .on('data', (chunk) => (data += chunk))
          .once('end', () =>
            processSVGData(config, { input: 'string' }, data, file).then(
              resolve,
              reject
            )
          );
      });
      // file
    } else {
      await Promise.all(
        input.map((file, n) => optimizeFile(config, file, output[n]))
      );
    }

    // --string
  } else if (opts.string) {
    var data = decodeSVGDatauri(opts.string);

    return processSVGData(config, { input: 'string' }, data, output[0]);
  }
}

/**
 * Optimize SVG files in a directory.
 * @param {Object} config options
 * @param {string} dir input directory
 * @param {string} output output directory
 * @return {Promise}
 */
function optimizeFolder(config, dir, output) {
  if (!config.quiet) {
    console.log(`Processing directory '${dir}':\n`);
  }
  return fs.promises
    .readdir(dir)
    .then((files) => processDirectory(config, dir, files, output));
}

/**
 * Process given files, take only SVG.
 * @param {Object} config options
 * @param {string} dir input directory
 * @param {Array} files list of file names in the directory
 * @param {string} output output directory
 * @return {Promise}
 */
function processDirectory(config, dir, files, output) {
  // take only *.svg files, recursively if necessary
  var svgFilesDescriptions = getFilesDescriptions(config, dir, files, output);

  return svgFilesDescriptions.length
    ? Promise.all(
        svgFilesDescriptions.map((fileDescription) =>
          optimizeFile(
            config,
            fileDescription.inputPath,
            fileDescription.outputPath
          )
        )
      )
    : Promise.reject(
        new Error(`No SVG files have been found in '${dir}' directory.`)
      );
}

/**
 * Get svg files descriptions
 * @param {Object} config options
 * @param {string} dir input directory
 * @param {Array} files list of file names in the directory
 * @param {string} output output directory
 * @return {Array}
 */
function getFilesDescriptions(config, dir, files, output) {
  const filesInThisFolder = files
    .filter(
      (name) =>
        regSVGFile.test(name) &&
        !config.exclude.some((regExclude) => regExclude.test(name))
    )
    .map((name) => ({
      inputPath: path.resolve(dir, name),
      outputPath: path.resolve(output, name),
    }));

  return config.recursive
    ? [].concat(
        filesInThisFolder,
        files
          .filter((name) => checkIsDir(path.resolve(dir, name)))
          .map((subFolderName) => {
            const subFolderPath = path.resolve(dir, subFolderName);
            const subFolderFiles = fs.readdirSync(subFolderPath);
            const subFolderOutput = path.resolve(output, subFolderName);
            return getFilesDescriptions(
              config,
              subFolderPath,
              subFolderFiles,
              subFolderOutput
            );
          })
          .reduce((a, b) => [].concat(a, b), [])
      )
    : filesInThisFolder;
}

/**
 * Read SVG file and pass to processing.
 * @param {Object} config options
 * @param {string} file
 * @param {string} output
 * @return {Promise}
 */
function optimizeFile(config, file, output) {
  return fs.promises.readFile(file, 'utf8').then(
    (data) =>
      processSVGData(config, { input: 'file', path: file }, data, output, file),
    (error) => checkOptimizeFileError(config, file, output, error)
  );
}

/**
 * Optimize SVG data.
 * @param {Object} config options
 * @param {string} data SVG content to optimize
 * @param {string} output where to write optimized file
 * @param {string} [input] input file name (being used if output is a directory)
 * @return {Promise}
 */
function processSVGData(config, info, data, output, input) {
  var startTime = Date.now(),
    prevFileSize = Buffer.byteLength(data, 'utf8');

  const result = optimize(data, { ...config, ...info });
  if (result.modernError) {
    console.error(colors.red(result.modernError.toString()));
    process.exit(1);
  }
  if (config.datauri) {
    result.data = encodeSVGDatauri(result.data, config.datauri);
  }
  var resultFileSize = Buffer.byteLength(result.data, 'utf8'),
    processingTime = Date.now() - startTime;

  return writeOutput(input, output, result.data).then(
    function () {
      if (!config.quiet && output != '-') {
        if (input) {
          console.log(`\n${path.basename(input)}:`);
        }
        printTimeInfo(processingTime);
        printProfitInfo(prevFileSize, resultFileSize);
      }
    },
    (error) =>
      Promise.reject(
        new Error(
          error.code === 'ENOTDIR'
            ? `Error: output '${output}' is not a directory.`
            : error
        )
      )
  );
}

/**
 * Write result of an optimization.
 * @param {string} input
 * @param {string} output output file name. '-' for stdout
 * @param {string} data data to write
 * @return {Promise}
 */
function writeOutput(input, output, data) {
  if (output == '-') {
    console.log(data);
    return Promise.resolve();
  }

  fs.mkdirSync(path.dirname(output), { recursive: true });

  return fs.promises
    .writeFile(output, data, 'utf8')
    .catch((error) => checkWriteFileError(input, output, data, error));
}

/**
 * Write a time taken by optimization.
 * @param {number} time time in milliseconds.
 */
function printTimeInfo(time) {
  console.log(`Done in ${time} ms!`);
}

/**
 * Write optimizing information in human readable format.
 * @param {number} inBytes size before optimization.
 * @param {number} outBytes size after optimization.
 */
function printProfitInfo(inBytes, outBytes) {
  var profitPercents = 100 - (outBytes * 100) / inBytes;

  console.log(
    Math.round((inBytes / 1024) * 1000) / 1000 +
      ' KiB' +
      (profitPercents < 0 ? ' + ' : ' - ') +
      colors.green(Math.abs(Math.round(profitPercents * 10) / 10) + '%') +
      ' = ' +
      Math.round((outBytes / 1024) * 1000) / 1000 +
      ' KiB'
  );
}

/**
 * Check for errors, if it's a dir optimize the dir.
 * @param {Object} config
 * @param {string} input
 * @param {string} output
 * @param {Error} error
 * @return {Promise}
 */
function checkOptimizeFileError(config, input, output, error) {
  if (error.code == 'EISDIR') {
    return optimizeFolder(config, input, output);
  } else if (error.code == 'ENOENT') {
    return Promise.reject(
      new Error(`Error: no such file or directory '${error.path}'.`)
    );
  }
  return Promise.reject(error);
}

/**
 * Check for saving file error. If the output is a dir, then write file there.
 * @param {string} input
 * @param {string} output
 * @param {string} data
 * @param {Error} error
 * @return {Promise}
 */
function checkWriteFileError(input, output, data, error) {
  if (error.code == 'EISDIR' && input) {
    return fs.promises.writeFile(
      path.resolve(output, path.basename(input)),
      data,
      'utf8'
    );
  } else {
    return Promise.reject(error);
  }
}

/**
 * Show list of available plugins with short description.
 */
function showAvailablePlugins() {
  const list = Object.entries(pluginsMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, plugin]) => ` [ ${colors.green(name)} ] ${plugin.description}`)
    .join('\n');
  console.log('Currently available plugins:\n' + list);
}

module.exports.checkIsDir = checkIsDir;
