#!/usr/bin/env node

/**
 * Marked CLI
 * Copyright (c) 2011-2013, Christopher Jeffrey (MIT License)
 */

import { promises } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { homedir } from 'node:os';
import { createRequire } from 'node:module';
import { marked } from '../lib/marked.esm.js';

const { access, readFile, writeFile } = promises;
const require = createRequire(import.meta.url);

/**
 * @param {Process} nodeProcess inject process so it can be mocked in tests.
 */
export async function main(nodeProcess) {
  /**
   * Man Page
   */
  async function help() {
    const { spawn } = await import('child_process');
    const { fileURLToPath } = await import('url');

    const options = {
      cwd: nodeProcess.cwd(),
      env: nodeProcess.env,
      stdio: 'inherit',
    };

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const helpText = await readFile(resolve(__dirname, '../man/marked.1.md'), 'utf8');

    await new Promise(res => {
      spawn('man', [resolve(__dirname, '../man/marked.1')], options)
        .on('error', () => {
          console.log(helpText);
        })
        .on('close', res);
    });
  }

  async function version() {
    const pkg = require('../package.json');
    console.log(pkg.version);
  }

  /**
   * Main
   */
  async function start(argv) {
    const files = [];
    const options = {};
    let input;
    let output;
    let string;
    let arg;
    let tokens;
    let config;
    let opt;
    let noclobber;

    function getArg() {
      let arg = argv.shift();

      if (arg.indexOf('--') === 0) {
        // e.g. --opt
        arg = arg.split('=');
        if (arg.length > 1) {
          // e.g. --opt=val
          argv.unshift(arg.slice(1).join('='));
        }
        arg = arg[0];
      } else if (arg[0] === '-') {
        if (arg.length > 2) {
          // e.g. -abc
          argv = arg.substring(1).split('').map(function(ch) {
            return '-' + ch;
          }).concat(argv);
          arg = argv.shift();
        } else {
          // e.g. -a
        }
      } else {
        // e.g. foo
      }

      return arg;
    }

    while (argv.length) {
      arg = getArg();
      switch (arg) {
        case '-o':
        case '--output':
          output = argv.shift();
          break;
        case '-i':
        case '--input':
          input = argv.shift();
          break;
        case '-s':
        case '--string':
          string = argv.shift();
          break;
        case '-t':
        case '--tokens':
          tokens = true;
          break;
        case '-c':
        case '--config':
          config = argv.shift();
          break;
        case '-n':
        case '--no-clobber':
          noclobber = true;
          break;
        case '-h':
        case '--help':
          return await help();
        case '-v':
        case '--version':
          return await version();
        default:
          if (arg.indexOf('--') === 0) {
            opt = camelize(arg.replace(/^--(no-)?/, ''));
            if (!(opt in marked.defaults)) {
              continue;
            }
            if (arg.indexOf('--no-') === 0) {
              options[opt] = typeof marked.defaults[opt] !== 'boolean'
                ? null
                : false;
            } else {
              options[opt] = typeof marked.defaults[opt] !== 'boolean'
                ? argv.shift()
                : true;
            }
          } else {
            files.push(arg);
          }
          break;
      }
    }

    async function getData() {
      if (!input) {
        if (files.length <= 2) {
          if (string) {
            return string;
          }
          return await getStdin();
        }
        input = files.pop();
      }
      return await readFile(input, 'utf8');
    }

    function resolveFile(file) {
      return resolve(file.replace(/^~/, homedir));
    }

    function fileExists(file) {
      return access(resolveFile(file)).then(() => true, () => false);
    }

    async function runConfig(file) {
      const configFile = resolveFile(file);
      let markedConfig;
      try {
        // try require for json
        markedConfig = require(configFile);
      } catch (err) {
        if (err.code !== 'ERR_REQUIRE_ESM') {
          throw err;
        }
        // must import esm
        markedConfig = await import('file:///' + configFile);
      }

      if (markedConfig.default) {
        markedConfig = markedConfig.default;
      }

      if (typeof markedConfig === 'function') {
        markedConfig(marked);
      } else {
        marked.use(markedConfig);
      }
    }

    const data = await getData();

    if (config) {
      if (!await fileExists(config)) {
        throw Error(`Cannot load config file '${config}'`);
      }

      await runConfig(config);
    } else {
      const defaultConfig = [
        '~/.marked.json',
        '~/.marked.js',
        '~/.marked/index.js',
      ];

      for (const configFile of defaultConfig) {
        if (await fileExists(configFile)) {
          await runConfig(configFile);
          break;
        }
      }
    }

    const html = tokens
      ? JSON.stringify(marked.lexer(data, options), null, 2)
      : await marked.parse(data, options);

    if (output) {
      if (noclobber && await fileExists(output)) {
        throw Error('marked: output file \'' + output + '\' already exists, disable the \'-n\' / \'--no-clobber\' flag to overwrite\n');
      }
      return await writeFile(output, html);
    }

    nodeProcess.stdout.write(html + '\n');
  }

  /**
   * Helpers
   */
  function getStdin() {
    return new Promise((resolve, reject) => {
      const stdin = nodeProcess.stdin;
      let buff = '';

      stdin.setEncoding('utf8');

      stdin.on('data', function(data) {
        buff += data;
      });

      stdin.on('error', function(err) {
        reject(err);
      });

      stdin.on('end', function() {
        resolve(buff);
      });

      stdin.resume();
    });
  }

  /**
   * @param {string} text
   */
  function camelize(text) {
    return text.replace(/(\w)-(\w)/g, function(_, a, b) {
      return a + b.toUpperCase();
    });
  }

  try {
    await start(nodeProcess.argv.slice());
    nodeProcess.exit(0);
  } catch (err) {
    if (err.code === 'ENOENT') {
      nodeProcess.stderr.write('marked: ' + err.path + ': No such file or directory');
    } else {
      nodeProcess.stderr.write(err.message);
    }
    return nodeProcess.exit(1);
  }
}
