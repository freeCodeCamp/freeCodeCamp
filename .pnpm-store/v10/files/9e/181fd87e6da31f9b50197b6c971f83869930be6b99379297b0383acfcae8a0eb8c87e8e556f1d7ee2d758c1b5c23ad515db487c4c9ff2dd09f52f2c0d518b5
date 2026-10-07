import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { homedir } from 'node:os';
import destr from 'destr';
import { defu } from 'defu';

function isBuffer (obj) {
  return obj &&
    obj.constructor &&
    (typeof obj.constructor.isBuffer === 'function') &&
    obj.constructor.isBuffer(obj)
}

function keyIdentity (key) {
  return key
}

function flatten (target, opts) {
  opts = opts || {};

  const delimiter = opts.delimiter || '.';
  const maxDepth = opts.maxDepth;
  const transformKey = opts.transformKey || keyIdentity;
  const output = {};

  function step (object, prev, currentDepth) {
    currentDepth = currentDepth || 1;
    Object.keys(object).forEach(function (key) {
      const value = object[key];
      const isarray = opts.safe && Array.isArray(value);
      const type = Object.prototype.toString.call(value);
      const isbuffer = isBuffer(value);
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      );

      const newKey = prev
        ? prev + delimiter + transformKey(key)
        : transformKey(key);

      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&
        (!opts.maxDepth || currentDepth < maxDepth)) {
        return step(value, newKey, currentDepth + 1)
      }

      output[newKey] = value;
    });
  }

  step(target);

  return output
}

function unflatten (target, opts) {
  opts = opts || {};

  const delimiter = opts.delimiter || '.';
  const overwrite = opts.overwrite || false;
  const transformKey = opts.transformKey || keyIdentity;
  const result = {};

  const isbuffer = isBuffer(target);
  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
    return target
  }

  // safely ensure that the key is
  // an integer.
  function getkey (key) {
    const parsedKey = Number(key);

    return (
      isNaN(parsedKey) ||
      key.indexOf('.') !== -1 ||
      opts.object
    )
      ? key
      : parsedKey
  }

  function addKeys (keyPrefix, recipient, target) {
    return Object.keys(target).reduce(function (result, key) {
      result[keyPrefix + delimiter + key] = target[key];

      return result
    }, recipient)
  }

  function isEmpty (val) {
    const type = Object.prototype.toString.call(val);
    const isArray = type === '[object Array]';
    const isObject = type === '[object Object]';

    if (!val) {
      return true
    } else if (isArray) {
      return !val.length
    } else if (isObject) {
      return !Object.keys(val).length
    }
  }

  target = Object.keys(target).reduce(function (result, key) {
    const type = Object.prototype.toString.call(target[key]);
    const isObject = (type === '[object Object]' || type === '[object Array]');
    if (!isObject || isEmpty(target[key])) {
      result[key] = target[key];
      return result
    } else {
      return addKeys(
        key,
        result,
        flatten(target[key], opts)
      )
    }
  }, {});

  Object.keys(target).forEach(function (key) {
    const split = key.split(delimiter).map(transformKey);
    let key1 = getkey(split.shift());
    let key2 = getkey(split[0]);
    let recipient = result;

    while (key2 !== undefined) {
      if (key1 === '__proto__') {
        return
      }

      const type = Object.prototype.toString.call(recipient[key1]);
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      );

      // do not write over falsey, non-undefined values if overwrite is false
      if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
        return
      }

      if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {
        recipient[key1] = (
          typeof key2 === 'number' &&
          !opts.object
            ? []
            : {}
        );
      }

      recipient = recipient[key1];
      if (split.length > 0) {
        key1 = getkey(split.shift());
        key2 = getkey(split[0]);
      }
    }

    // unflatten again for 'messy objects'
    recipient[key1] = unflatten(target[key], opts);
  });

  return result
}

const RE_KEY_VAL = /^\s*([^\s=]+)\s*=\s*(.*)?\s*$/;
const RE_LINES = /\n|\r|\r\n/;
const defaults = {
  name: ".conf",
  dir: process.cwd(),
  flat: false
};
function withDefaults(options) {
  if (typeof options === "string") {
    options = { name: options };
  }
  return { ...defaults, ...options };
}
function parse(contents, options = {}) {
  const config = {};
  const lines = contents.split(RE_LINES);
  for (const line of lines) {
    const match = line.match(RE_KEY_VAL);
    if (!match) {
      continue;
    }
    const key = match[1];
    if (!key || key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = destr(
      (match[2] || "").trim()
      /* val */
    );
    if (key.endsWith("[]")) {
      const nkey = key.slice(0, Math.max(0, key.length - 2));
      config[nkey] = (config[nkey] || []).concat(value);
      continue;
    }
    config[key] = value;
  }
  return options.flat ? config : unflatten(config, { overwrite: true });
}
function parseFile(path, options) {
  if (!existsSync(path)) {
    return {};
  }
  return parse(readFileSync(path, "utf8"), options);
}
function read(options) {
  options = withDefaults(options);
  return parseFile(resolve(options.dir, options.name), options);
}
function readUser(options) {
  options = withDefaults(options);
  options.dir = process.env.XDG_CONFIG_HOME || homedir();
  return read(options);
}
function serialize(config) {
  return Object.entries(flatten(config)).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join("\n");
}
function write(config, options) {
  options = withDefaults(options);
  writeFileSync(resolve(options.dir, options.name), serialize(config), {
    encoding: "utf8"
  });
}
function writeUser(config, options) {
  options = withDefaults(options);
  options.dir = process.env.XDG_CONFIG_HOME || homedir();
  write(config, options);
}
function update(config, options) {
  options = withDefaults(options);
  if (!options.flat) {
    config = unflatten(config, { overwrite: true });
  }
  const newConfig = defu(config, read(options));
  write(newConfig, options);
  return newConfig;
}
function updateUser(config, options) {
  options = withDefaults(options);
  options.dir = process.env.XDG_CONFIG_HOME || homedir();
  return update(config, options);
}

export { defaults, parse, parseFile, read, readUser, serialize, update, updateUser, write, writeUser };
