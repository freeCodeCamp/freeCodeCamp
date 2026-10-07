'use strict';

import cliui from 'https://unpkg.com/cliui@7.0.1/index.mjs'; // eslint-disable-line
import Parser from 'https://unpkg.com/yargs-parser@19.0.0/browser.js'; // eslint-disable-line
import {getProcessArgvBin} from '../../build/lib/utils/process-argv.js';
import {YError} from '../../build/lib/yerror.js';

const REQUIRE_ERROR = 'require is not supported in browser';
const REQUIRE_DIRECTORY_ERROR =
  'loading a directory of commands is not supported in browser';

export default {
  assert: {
    notStrictEqual: (a, b) => {
      // noop.
    },
    strictEqual: (a, b) => {
      // noop.
    },
  },
  cliui,
  findUp: () => undefined,
  getEnv: key => {
    // There is no environment in browser:
    return undefined;
  },
  inspect: console.log,
  getCallerFile: () => {
    throw new YError(REQUIRE_DIRECTORY_ERROR);
  },
  getProcessArgvBin,
  mainFilename: 'yargs',
  Parser,
  path: {
    basename: str => str,
    dirname: str => str,
    extname: str => str,
    relative: str => str,
  },
  process: {
    argv: () => [],
    cwd: () => '',
    execPath: () => '',
    // exit is noop browser:
    exit: () => {},
    nextTick: cb => {
      window.setTimeout(cb, 1);
    },
    stdColumns: 80,
  },
  readFileSync: () => {
    return '';
  },
  require: () => {
    throw new YError(REQUIRE_ERROR);
  },
  requireDirectory: () => {
    throw new YError(REQUIRE_DIRECTORY_ERROR);
  },
  stringWidth: str => {
    return [...str].length;
  },
  // TODO: replace this with y18n once it's ported to ESM:
  y18n: {
    __: (...str) => {
      if (str.length === 0) return '';
      const args = str.slice(1);
      return sprintf(str[0], ...args);
    },
    __n: (str1, str2, count, ...args) => {
      if (count === 1) {
        return sprintf(str1, ...args);
      } else {
        return sprintf(str2, ...args);
      }
    },
    getLocale: () => {
      return 'en_US';
    },
    setLocale: () => {},
    updateLocale: () => {},
  },
};

function sprintf(_str, ...args) {
  let str = '';
  const split = _str.split('%s');
  split.forEach((token, i) => {
    str += `${token}${split[i + 1] !== undefined && args[i] ? args[i] : ''}`;
  });
  return str;
}
