"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.pageSchema = exports.nodeSchema = exports.gatsbyConfigSchema = void 0;
var _joi = _interopRequireDefault(require("joi"));
var _tsCodegen = require("../utils/graphql-typegen/ts-codegen");
const stripTrailingSlash = chain => chain.replace(/(\w)\/+$/, `$1`);

// only add leading slash on relative urls
const addLeadingSlash = chain => chain.when(_joi.default.string().uri({
  relativeOnly: true
}), {
  then: chain.replace(/^([^/])/, `/$1`)
});
const gatsbyConfigSchema = _joi.default.object().keys({
  flags: _joi.default.object(),
  polyfill: _joi.default.boolean().default(true),
  assetPrefix: stripTrailingSlash(_joi.default.string().uri({
    allowRelative: true
  })),
  pathPrefix: addLeadingSlash(stripTrailingSlash(_joi.default.string().uri({
    allowRelative: true,
    relativeOnly: true
  }).default(``)
  // removes single / value
  .allow(``).replace(/^\/$/, ``))),
  linkPrefix: _joi.default.forbidden().error(new Error(`"linkPrefix" should be changed to "pathPrefix"`)),
  siteMetadata: _joi.default.object({
    siteUrl: stripTrailingSlash(_joi.default.string()).uri()
  }).unknown(),
  mapping: _joi.default.object(),
  plugins: _joi.default.array(),
  proxy: _joi.default.array().items(_joi.default.object().keys({
    prefix: _joi.default.string().required(),
    url: _joi.default.string().required()
  })).single(),
  partytownProxiedURLs: _joi.default.array().items(_joi.default.string()),
  developMiddleware: _joi.default.func(),
  jsxRuntime: _joi.default.string().valid(`automatic`, `classic`).default(`classic`),
  jsxImportSource: _joi.default.string(),
  trailingSlash: _joi.default.string().valid(`always`, `never`, `ignore`).default(`always`),
  graphqlTypegen: _joi.default.alternatives(_joi.default.boolean(), _joi.default.object().keys({
    typesOutputPath: _joi.default.string().default(_tsCodegen.DEFAULT_TYPES_OUTPUT_PATH),
    documentSearchPaths: _joi.default.array().items(_joi.default.string()).default(_tsCodegen.DEFAULT_DOCUMENT_SEARCH_PATHS),
    generateOnBuild: _joi.default.boolean().default(false)
  }).unknown(false)).default(false).custom(value => {
    if (value === true) {
      return {
        typesOutputPath: _tsCodegen.DEFAULT_TYPES_OUTPUT_PATH,
        documentSearchPaths: _tsCodegen.DEFAULT_DOCUMENT_SEARCH_PATHS,
        generateOnBuild: false
      };
    }
    return value;
  }),
  headers: _joi.default.array().items(_joi.default.object().keys({
    source: _joi.default.string().required(),
    headers: _joi.default.array().items(_joi.default.object().keys({
      key: _joi.default.string().required(),
      value: _joi.default.string().required()
    }).required().unknown(false)).required()
  }).unknown(false)).default([]),
  adapter: _joi.default.object().keys({
    name: _joi.default.string().required(),
    cache: _joi.default.object().keys({
      restore: _joi.default.func(),
      store: _joi.default.func()
    }).unknown(false),
    adapt: _joi.default.func().required(),
    config: _joi.default.func()
  }).unknown(false)
})
// throws when both assetPrefix and pathPrefix are defined
.when(_joi.default.object({
  assetPrefix: _joi.default.string().uri({
    allowRelative: true,
    relativeOnly: true
  }),
  pathPrefix: _joi.default.string().uri({
    allowRelative: true,
    relativeOnly: true
  }).default(``)
}), {
  then: _joi.default.object({
    assetPrefix: _joi.default.string().uri({
      allowRelative: false
    }).error(new Error(`assetPrefix must be an absolute URI when used with pathPrefix`))
  })
});
exports.gatsbyConfigSchema = gatsbyConfigSchema;
const pageSchema = _joi.default.object().keys({
  path: _joi.default.string().required(),
  matchPath: _joi.default.string(),
  component: _joi.default.string().required(),
  componentChunkName: _joi.default.string().required(),
  context: _joi.default.object(),
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pluginCreator___NODE: _joi.default.string(),
  pluginCreatorId: _joi.default.string()
}).unknown();
exports.pageSchema = pageSchema;
const nodeSchema = _joi.default.object().keys({
  id: _joi.default.string().required(),
  children: _joi.default.array().items(_joi.default.string(), _joi.default.object().forbidden()),
  parent: _joi.default.string().allow(null),
  fields: _joi.default.object(),
  internal: _joi.default.object().keys({
    contentDigest: _joi.default.string().required(),
    mediaType: _joi.default.string(),
    type: _joi.default.string().required(),
    owner: _joi.default.string().required(),
    fieldOwners: _joi.default.object(),
    content: _joi.default.string().allow(``),
    description: _joi.default.string(),
    ignoreType: _joi.default.boolean(),
    counter: _joi.default.number(),
    contentFilePath: _joi.default.string()
  }).unknown(false) // Don't allow non-standard fields
}).unknown();
exports.nodeSchema = nodeSchema;
//# sourceMappingURL=joi.js.map