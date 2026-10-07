'use strict';

const os = require('os');
const fs = require('fs');
const { pathToFileURL } = require('url');
const path = require('path');
const {
  extendDefaultPlugins,
  optimize: optimizeAgnostic,
  createContentItem,
} = require('./svgo.js');

exports.extendDefaultPlugins = extendDefaultPlugins;
exports.createContentItem = createContentItem;

const importConfig = async (configFile) => {
  let config;
  // at the moment dynamic import may randomly fail with segfault
  // to workaround this for some users .cjs extension is loaded
  // exclusively with require
  if (configFile.endsWith('.cjs')) {
    config = require(configFile);
  } else {
    try {
      // dynamic import expects file url instead of path and may fail
      // when windows path is provided
      const { default: imported } = await import(pathToFileURL(configFile));
      config = imported;
    } catch (importError) {
      // TODO remove require in v3
      try {
        config = require(configFile);
      } catch (requireError) {
        // throw original error if es module is detected
        if (requireError.code === 'ERR_REQUIRE_ESM') {
          throw importError;
        } else {
          throw requireError;
        }
      }
    }
  }
  if (config == null || typeof config !== 'object' || Array.isArray(config)) {
    throw Error(`Invalid config file "${configFile}"`);
  }
  return config;
};

const isFile = async (file) => {
  try {
    const stats = await fs.promises.stat(file);
    return stats.isFile();
  } catch {
    return false;
  }
};

const loadConfig = async (configFile, cwd = process.cwd()) => {
  if (configFile != null) {
    if (path.isAbsolute(configFile)) {
      return await importConfig(configFile);
    } else {
      return await importConfig(path.join(cwd, configFile));
    }
  }
  let dir = cwd;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const js = path.join(dir, 'svgo.config.js');
    if (await isFile(js)) {
      return await importConfig(js);
    }
    const mjs = path.join(dir, 'svgo.config.mjs');
    if (await isFile(mjs)) {
      return await importConfig(mjs);
    }
    const cjs = path.join(dir, 'svgo.config.cjs');
    if (await isFile(cjs)) {
      return await importConfig(cjs);
    }
    const parent = path.dirname(dir);
    if (dir === parent) {
      return null;
    }
    dir = parent;
  }
};
exports.loadConfig = loadConfig;

const optimize = (input, config) => {
  if (config == null) {
    config = {};
  }
  if (typeof config !== 'object') {
    throw Error('Config should be an object');
  }
  return optimizeAgnostic(input, {
    ...config,
    js2svg: {
      // platform specific default for end of line
      eol: os.EOL === '\r\n' ? 'crlf' : 'lf',
      ...config.js2svg,
    },
  });
};
exports.optimize = optimize;
