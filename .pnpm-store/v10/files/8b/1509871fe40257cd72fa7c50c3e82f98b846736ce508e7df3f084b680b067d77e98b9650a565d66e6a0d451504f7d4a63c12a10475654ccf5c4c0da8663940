"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.validatePackageName = validatePackageName;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reasoning behind this validation:
// https://github.com/parcel-bundler/parcel/issues/3397#issuecomment-521353931
function validatePackageName(pkg, pluginType, key) {
  // $FlowFixMe
  if (!pkg) {
    return;
  }

  (0, _assert().default)(typeof pkg === 'string', `"${key}" must be a string`);

  if (pkg.startsWith('@parcel')) {
    (0, _assert().default)(pkg.replace(/^@parcel\//, '').startsWith(`${pluginType}-`), `Official parcel ${pluginType} packages must be named according to "@parcel/${pluginType}-{name}"`);
  } else if (pkg.startsWith('@')) {
    let [scope, name] = pkg.split('/');
    (0, _assert().default)(name.startsWith(`parcel-${pluginType}-`) || name === `parcel-${pluginType}`, `Scoped parcel ${pluginType} packages must be named according to "${scope}/parcel-${pluginType}[-{name}]"`);
  } else {
    (0, _assert().default)(pkg.startsWith(`parcel-${pluginType}-`), `Parcel ${pluginType} packages must be named according to "parcel-${pluginType}-{name}"`);
  }
}

const validatePluginName = (pluginType, key) => {
  return val => {
    // allow plugin spread...
    if (val === '...') return;

    try {
      validatePackageName(val, pluginType, key);
    } catch (e) {
      return e.message;
    }
  };
};

const validateExtends = val => {
  // allow relative paths...
  if (val.startsWith('.')) return;

  try {
    validatePackageName(val, 'config', 'extends');
  } catch (e) {
    return e.message;
  }
};

const pipelineSchema = (pluginType, key) => {
  return {
    type: 'array',
    items: {
      type: 'string',
      __validate: validatePluginName(pluginType, key)
    }
  };
};

const mapPipelineSchema = (pluginType, key) => {
  return {
    type: 'object',
    properties: {},
    additionalProperties: pipelineSchema(pluginType, key)
  };
};

const mapStringSchema = (pluginType, key) => {
  return {
    type: 'object',
    properties: {},
    additionalProperties: {
      type: 'string',
      __validate: validatePluginName(pluginType, key)
    }
  };
};

var _default = {
  type: 'object',
  properties: {
    $schema: {
      type: 'string'
    },
    extends: {
      oneOf: [{
        type: 'string',
        __validate: validateExtends
      }, {
        type: 'array',
        items: {
          type: 'string',
          __validate: validateExtends
        }
      }]
    },
    bundler: {
      type: 'string',
      __validate: validatePluginName('bundler', 'bundler')
    },
    resolvers: pipelineSchema('resolver', 'resolvers'),
    transformers: mapPipelineSchema('transformer', 'transformers'),
    validators: mapPipelineSchema('validator', 'validators'),
    namers: pipelineSchema('namer', 'namers'),
    packagers: mapStringSchema('packager', 'packagers'),
    optimizers: mapPipelineSchema('optimizer', 'optimizers'),
    compressors: mapPipelineSchema('compressor', 'compressors'),
    reporters: pipelineSchema('reporter', 'reporters'),
    runtimes: pipelineSchema('runtime', 'runtimes'),
    filePath: {
      type: 'string'
    },
    resolveFrom: {
      type: 'string'
    }
  },
  additionalProperties: false
};
exports.default = _default;