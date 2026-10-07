"use strict";

exports.__esModule = true;
exports.getNodeInterface = exports.addNodeInterfaceFields = exports.addNodeInterface = exports.NodeInterfaceFields = void 0;
var _sort = require("./sort");
var _filter = require("./filter");
const NodeInterfaceFields = [`id`, `parent`, `children`, `internal`];
exports.NodeInterfaceFields = NodeInterfaceFields;
const getOrCreateNodeInterface = schemaComposer => {
  // TODO: why is `mediaType` on Internal? Applies only to File!?
  // `fieldOwners` is an object
  // Should we drop ignoreType?
  const internalTC = schemaComposer.getOrCreateOTC(`Internal`, tc => {
    tc.addFields({
      content: `String`,
      contentDigest: `String!`,
      description: `String`,
      fieldOwners: [`String`],
      ignoreType: `Boolean`,
      mediaType: `String`,
      owner: `String!`,
      type: `String!`,
      contentFilePath: `String`
    });
    // TODO: Can be removed with graphql-compose 5.11
    tc.getInputTypeComposer();
  });
  const nodeInterfaceTC = schemaComposer.getOrCreateIFTC(`Node`, tc => {
    tc.setDescription(`Node Interface`);
    tc.addFields({
      id: `ID!`,
      parent: {
        type: `Node`,
        resolve: (source, _args, context) => {
          const {
            path
          } = context;
          return context.nodeModel.getNodeById({
            id: source.parent
          }, {
            path
          });
        },
        extensions: {
          searchable: _filter.SEARCHABLE_ENUM.SEARCHABLE,
          sortable: _sort.SORTABLE_ENUM.SORTABLE,
          needsResolve: true
        }
      },
      children: {
        type: `[Node!]!`,
        resolve: (source, _args, context) => {
          const {
            path
          } = context;
          return context.nodeModel.getNodesByIds({
            ids: source.children
          }, {
            path
          });
        },
        extensions: {
          searchable: _filter.SEARCHABLE_ENUM.SEARCHABLE,
          sortable: _sort.SORTABLE_ENUM.SORTABLE,
          needsResolve: true
        }
      },
      internal: internalTC.getTypeNonNull()
    });
    const nodeInputTC = tc.getInputTypeComposer();
    nodeInputTC.extendField(`id`, {
      type: `String`
    });
  });
  return nodeInterfaceTC;
};
const addNodeInterfaceFields = ({
  schemaComposer,
  typeComposer
}) => {
  const nodeInterfaceTC = getOrCreateNodeInterface(schemaComposer);
  typeComposer.addFields(nodeInterfaceTC.getFields());
  nodeInterfaceTC.setResolveType(node => node.internal.type);
  schemaComposer.addSchemaMustHaveType(typeComposer);
};
exports.addNodeInterfaceFields = addNodeInterfaceFields;
const addNodeInterface = ({
  schemaComposer,
  typeComposer
}) => {
  const nodeInterfaceTC = getOrCreateNodeInterface(schemaComposer);
  typeComposer.addInterface(nodeInterfaceTC);
  addNodeInterfaceFields({
    schemaComposer,
    typeComposer
  });
};
exports.addNodeInterface = addNodeInterface;
const getNodeInterface = ({
  schemaComposer
}) => getOrCreateNodeInterface(schemaComposer);
exports.getNodeInterface = getNodeInterface;
//# sourceMappingURL=node-interface.js.map