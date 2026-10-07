'use strict';

const PersistentFile = require('./PersistentFile');
const VolatileFile = require('./VolatileFile');
const Formidable = require('./Formidable');
const FormidableError = require('./FormidableError');

const plugins = require('./plugins/index');
const parsers = require('./parsers/index');

// make it available without requiring the `new` keyword
// if you want it access `const formidable.IncomingForm` as v1
const formidable = (...args) => new Formidable(...args);

module.exports = Object.assign(formidable, {
  errors: FormidableError,
  File: PersistentFile,
  PersistentFile,
  VolatileFile,
  Formidable,
  formidable,

  // alias
  IncomingForm: Formidable,

  // parsers
  ...parsers,
  parsers,

  // misc
  defaultOptions: Formidable.DEFAULT_OPTIONS,
  enabledPlugins: Formidable.DEFAULT_OPTIONS.enabledPlugins,

  // plugins
  plugins: {
    ...plugins,
  },
});
