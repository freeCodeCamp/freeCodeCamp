"use strict";

exports.__esModule = true;
exports.GatsbyGraphQLTypeKind = void 0;
exports.buildEnumType = buildEnumType;
exports.buildInputObjectType = buildInputObjectType;
exports.buildInterfaceType = buildInterfaceType;
exports.buildObjectType = buildObjectType;
exports.buildScalarType = buildScalarType;
exports.buildUnionType = buildUnionType;
exports.isGatsbyType = isGatsbyType;
var GatsbyGraphQLTypeKind;
exports.GatsbyGraphQLTypeKind = GatsbyGraphQLTypeKind;
(function (GatsbyGraphQLTypeKind) {
  GatsbyGraphQLTypeKind["OBJECT"] = "OBJECT";
  GatsbyGraphQLTypeKind["INPUT_OBJECT"] = "INPUT_OBJECT";
  GatsbyGraphQLTypeKind["UNION"] = "UNION";
  GatsbyGraphQLTypeKind["INTERFACE"] = "INTERFACE";
  GatsbyGraphQLTypeKind["ENUM"] = "ENUM";
  GatsbyGraphQLTypeKind["SCALAR"] = "SCALAR";
})(GatsbyGraphQLTypeKind || (exports.GatsbyGraphQLTypeKind = GatsbyGraphQLTypeKind = {}));
function buildObjectType(config) {
  return {
    kind: GatsbyGraphQLTypeKind.OBJECT,
    config
  };
}
function buildUnionType(config) {
  return {
    kind: GatsbyGraphQLTypeKind.UNION,
    config
  };
}
function buildInterfaceType(config) {
  return {
    kind: GatsbyGraphQLTypeKind.INTERFACE,
    config
  };
}
function buildInputObjectType(config) {
  return {
    kind: GatsbyGraphQLTypeKind.INPUT_OBJECT,
    config
  };
}
function buildEnumType(config) {
  return {
    kind: GatsbyGraphQLTypeKind.ENUM,
    config
  };
}
function buildScalarType(config) {
  return {
    kind: GatsbyGraphQLTypeKind.SCALAR,
    config
  };
}
function isGatsbyType(something) {
  return typeof something === `object` && something.kind && GatsbyGraphQLTypeKind[something.kind];
}
//# sourceMappingURL=type-builders.js.map