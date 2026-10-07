"use strict";

exports.__esModule = true;
exports.createSchemaComposer = void 0;
var _graphqlCompose = require("graphql-compose");
var _extensions = require("./extensions");
var _date = require("./types/date");
var _media = require("./types/media");
var _nodeInterface = require("./types/node-interface");
var _remoteFileInterface = require("./types/remote-file-interface");
const createSchemaComposer = ({
  fieldExtensions
} = {}) => {
  const schemaComposer = new _graphqlCompose.SchemaComposer();

  // set default interfaces so plugins can use them
  (0, _nodeInterface.getNodeInterface)({
    schemaComposer
  });
  (0, _remoteFileInterface.getOrCreateRemoteFileInterface)(schemaComposer);
  schemaComposer.add(_date.GraphQLDate);
  schemaComposer.add(_graphqlCompose.GraphQLJSON);
  schemaComposer.add(_media.GatsbyImageDataScalar);
  (0, _extensions.addDirectives)({
    schemaComposer,
    fieldExtensions
  });
  return schemaComposer;
};
exports.createSchemaComposer = createSchemaComposer;
//# sourceMappingURL=schema-composer.js.map