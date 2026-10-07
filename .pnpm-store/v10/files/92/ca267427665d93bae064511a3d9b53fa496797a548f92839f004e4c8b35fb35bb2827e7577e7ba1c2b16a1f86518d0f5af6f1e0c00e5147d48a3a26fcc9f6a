"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createConfig = createConfig;
var _joi = _interopRequireDefault(require("joi"));
const DEFAULT_LIMIT = `100kb`;

// similar to `GatsbyFunctionBodyParserConfig` and `IGatsbyFunctionConfigProcessed`
// from index.d.ts, just with fields required (not optional).
// `createConfig()` will fill in defaults

const defaultBodyParserOptions = {
  limit: DEFAULT_LIMIT
};
const defaultUrlEncoded = {
  extended: true
};
const defaultConfig = {
  bodyParser: {
    text: defaultBodyParserOptions,
    raw: defaultBodyParserOptions,
    json: defaultBodyParserOptions,
    urlencoded: {
      ...defaultBodyParserOptions,
      ...defaultUrlEncoded
    }
  }
};
let warnings = [];
function bodyParserConfigFailover(property, expectedType) {
  return function actualFailover(_, {
    original
  }) {
    warnings.push({
      property: `bodyParser.${property}`,
      original,
      expectedType,
      replacedWith: defaultConfig.bodyParser[property]
    });
    return defaultConfig.bodyParser[property];
  };
}
const functionConfigSchema = _joi.default.object().keys({
  bodyParser: _joi.default.object().keys({
    json: _joi.default.object().keys({
      type: _joi.default.string(),
      limit: _joi.default.alternatives(_joi.default.string(), _joi.default.number())
    }).default(defaultConfig.bodyParser.json).failover(bodyParserConfigFailover(`json`, `{\n  type?: string\n  limit?: string | number\n}`)).unknown(false),
    text: _joi.default.object().keys({
      type: _joi.default.string(),
      limit: _joi.default.alternatives(_joi.default.string(), _joi.default.number())
    }).unknown(false).default(defaultConfig.bodyParser.text).failover(bodyParserConfigFailover(`text`, `{\n  type?: string\n  limit?: string | number\n}`)),
    raw: _joi.default.object().keys({
      type: _joi.default.string(),
      limit: _joi.default.alternatives(_joi.default.string(), _joi.default.number())
    }).unknown(false).default(defaultConfig.bodyParser.raw).failover(bodyParserConfigFailover(`raw`, `{\n  type?: string\n  limit?: string | number\n}`)),
    urlencoded: _joi.default.object().keys({
      type: _joi.default.string(),
      limit: _joi.default.alternatives(_joi.default.string(), _joi.default.number()),
      extended: _joi.default.boolean().required()
    }).unknown(false).default(defaultConfig.bodyParser.urlencoded).failover(bodyParserConfigFailover(`urlencoded`, `{\n  type?: string\n  limit: string | number\n  extended: boolean\n}`))
  }).unknown(false).default(defaultConfig.bodyParser).failover((_, {
    original
  }) => {
    warnings.push({
      property: `bodyParser`,
      original,
      expectedType: `{\n  text?: GatsbyFunctionBodyParserCommonMiddlewareConfig\n  json?: GatsbyFunctionBodyParserCommonMiddlewareConfig\n  raw?: GatsbyFunctionBodyParserCommonMiddlewareConfig\n  urlencoded?: GatsbyFunctionBodyParserUrlencodedConfig\n}`,
      replacedWith: defaultConfig.bodyParser
    });
    return defaultConfig.bodyParser;
  })
}).unknown(false).default(defaultConfig).failover((_, {
  original
}) => {
  warnings.push({
    property: null,
    original,
    expectedType: `{\n  bodyParser?: GatsbyFunctionBodyParserConfig\n}`,
    replacedWith: defaultConfig
  });
  return defaultConfig;
});
function createConfig(userConfig) {
  warnings = [];
  const {
    value
  } = functionConfigSchema.validate(userConfig);
  const config = value;
  return {
    config,
    warnings
  };
}
//# sourceMappingURL=config.js.map