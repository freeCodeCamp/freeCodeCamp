"use strict";

exports.__esModule = true;
exports.schemaReducer = void 0;
var _graphql = require("graphql");
const schemaReducer = (state = new _graphql.GraphQLSchema({
  query: null
}), action) => {
  switch (action.type) {
    case `SET_SCHEMA`:
      return action.payload;
    default:
      return state;
  }
};
exports.schemaReducer = schemaReducer;
//# sourceMappingURL=schema.js.map