"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.addImageRoutes = void 0;
exports.addRemoteFilePolyfillInterface = addRemoteFilePolyfillInterface;
exports.getRemoteFileFields = getRemoteFileFields;
exports.isImageCdnEnabled = isImageCdnEnabled;
exports.polyfillImageServiceDevRoutes = void 0;
var _path = _interopRequireDefault(require("path"));
var _graphqlCompose = require("graphql-compose");
var _getRemoteFileEnums = require("./graphql/get-remote-file-enums");
exports.getRemoteFileEnums = _getRemoteFileEnums.getRemoteFileEnums;
var _getGatsbyVersion = require("./utils/get-gatsby-version");
var _hasFeature = require("../has-feature");
var _publicUrlResolver = require("./graphql/public-url-resolver");
exports.publicUrlResolver = _publicUrlResolver.publicUrlResolver;
var _resizeResolver = require("./graphql/resize-resolver");
exports.resizeResolver = _resizeResolver.resizeResolver;
var _gatsbyImageResolver = require("./graphql/gatsby-image-resolver");
exports.gatsbyImageResolver = _gatsbyImageResolver.gatsbyImageResolver;
var _httpRoutes = require("./http-routes");
exports.polyfillImageServiceDevRoutes = _httpRoutes.polyfillImageServiceDevRoutes;
exports.addImageRoutes = _httpRoutes.addImageRoutes;
let enums;
function getRemoteFileFields(enums, actions, store) {
  return {
    id: `ID!`,
    mimeType: `String!`,
    filename: `String!`,
    filesize: `Int`,
    width: `Int`,
    height: `Int`,
    publicUrl: (0, _publicUrlResolver.generatePublicUrlFieldConfig)(actions, store),
    resize: (0, _resizeResolver.generateResizeFieldConfig)(enums, actions, store),
    gatsbyImage: (0, _gatsbyImageResolver.generateGatsbyImageFieldConfig)(enums, actions, store)
  };
}
function addRemoteFilePolyfillInterface(type, {
  schema,
  actions,
  store
}) {
  // When the image-cdn is part of Gatsby we will only add the RemoteFile interface if necessary
  if ((0, _hasFeature.hasFeature)(`image-cdn`)) {
    // @ts-ignore - wrong typing by typecomposer
    if (!type.config.interfaces.includes(`RemoteFile`)) {
      // @ts-ignore - wrong typing by typecomposer
      type.config.interfaces.push(`RemoteFile`);
    }
    return type;
  }
  if (!enums) {
    // We only want to create the enums and interface once
    const composer = new _graphqlCompose.SchemaComposer();
    enums = (0, _getRemoteFileEnums.getRemoteFileEnums)(composer.createEnumTC.bind(composer));
    const types = [];
    for (const key in enums) {
      if (enums[key]) {
        types.push(schema.buildEnumType({
          name: enums[key].getTypeName(),
          values: enums[key].getFields()
        }));
      }
    }
    types.push(schema.buildObjectType({
      name: `RemoteFileResize`,
      fields: {
        width: `Int`,
        height: `Int`,
        src: `String`
      }
    }), schema.buildInterfaceType({
      name: `RemoteFile`,
      fields: getRemoteFileFields(enums, actions, store)
    }));
    actions.createTypes(types, {
      name: `gatsby`,
      // @ts-ignore - version is allowed
      version: (0, _getGatsbyVersion.getGatsbyVersion)(),
      resolve: _path.default.join(__dirname, `../`)
    });
  }

  // @ts-ignore - wrong typing by typecomposer
  type.config.interfaces = type.config.interfaces || [];
  // @ts-ignore - wrong typing by typecomposer
  if (!type.config.interfaces.includes(`RemoteFile`)) {
    // @ts-ignore - wrong typing by typecomposer
    type.config.interfaces.push(`RemoteFile`);
  }
  // @ts-ignore - wrong typing by typecomposer
  type.config.fields = {
    // @ts-ignore - wrong typing by typecomposer
    ...type.config.fields,
    ...getRemoteFileFields(enums, actions, store)
  };
  return type;
}
function isImageCdnEnabled() {
  return process.env.GATSBY_CLOUD_IMAGE_CDN === `1` || process.env.GATSBY_CLOUD_IMAGE_CDN === `true`;
}