'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core.cjs');
const basic = require('./shared/consola.DCGIlDNP.cjs');
require('node:util');
require('node:path');

function createConsola(options = {}) {
  let level = core.LogLevels.info;
  if (process.env.CONSOLA_LEVEL) {
    level = Number.parseInt(process.env.CONSOLA_LEVEL) ?? level;
  }
  const consola2 = core.createConsola({
    level,
    defaults: { level },
    stdout: process.stdout,
    stderr: process.stderr,
    reporters: options.reporters || [new basic.BasicReporter()],
    ...options
  });
  return consola2;
}
const consola = createConsola();

exports.Consola = core.Consola;
exports.LogLevels = core.LogLevels;
exports.LogTypes = core.LogTypes;
exports.consola = consola;
exports.createConsola = createConsola;
exports.default = consola;
