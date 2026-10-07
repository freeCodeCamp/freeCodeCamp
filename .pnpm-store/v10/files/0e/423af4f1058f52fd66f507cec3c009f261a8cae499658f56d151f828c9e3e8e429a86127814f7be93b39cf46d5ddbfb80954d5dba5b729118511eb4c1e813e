"use strict";

var _fs = require("fs");

var _path = require("path");

var _globals = _interopRequireDefault(require("./globals.json"));

var snapshotProcessor = _interopRequireWildcard(require("./processors/snapshot-processor"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// copied from https://github.com/babel/babel/blob/d8da63c929f2d28c401571e2a43166678c555bc4/packages/babel-helpers/src/helpers.js#L602-L606

/* istanbul ignore next */
const interopRequireDefault = obj => obj && obj.__esModule ? obj : {
  default: obj
};

const importDefault = moduleName => // eslint-disable-next-line @typescript-eslint/no-require-imports
interopRequireDefault(require(moduleName)).default;

const rulesDir = (0, _path.join)(__dirname, 'rules');
const excludedFiles = ['__tests__', 'detectJestVersion', 'utils'];
const rules = (0, _fs.readdirSync)(rulesDir).map(rule => (0, _path.parse)(rule).name).filter(rule => !excludedFiles.includes(rule)).reduce((acc, curr) => ({ ...acc,
  [curr]: importDefault((0, _path.join)(rulesDir, curr))
}), {});
const recommendedRules = Object.entries(rules).filter(([, rule]) => rule.meta.docs.recommended).reduce((acc, [name, rule]) => ({ ...acc,
  [`jest/${name}`]: rule.meta.docs.recommended
}), {});
const allRules = Object.entries(rules).filter(([, rule]) => !rule.meta.deprecated).reduce((acc, [name]) => ({ ...acc,
  [`jest/${name}`]: 'error'
}), {});

const createConfig = rules => ({
  plugins: ['jest'],
  env: {
    'jest/globals': true
  },
  rules
});

module.exports = {
  configs: {
    all: createConfig(allRules),
    recommended: createConfig(recommendedRules),
    style: {
      plugins: ['jest'],
      rules: {
        'jest/no-alias-methods': 'warn',
        'jest/prefer-to-be': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error'
      }
    }
  },
  environments: {
    globals: {
      globals: _globals.default
    }
  },
  processors: {
    '.snap': snapshotProcessor
  },
  rules
};