"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeGraphQLNodes = exports.isNamedDefinitionNode = exports.schemaDefSymbol = void 0;
const graphql_1 = require("graphql");
const type_js_1 = require("./type.js");
const enum_js_1 = require("./enum.js");
const scalar_js_1 = require("./scalar.js");
const union_js_1 = require("./union.js");
const input_type_js_1 = require("./input-type.js");
const interface_js_1 = require("./interface.js");
const directives_js_1 = require("./directives.js");
const schema_def_js_1 = require("./schema-def.js");
const utils_1 = require("@graphql-tools/utils");
exports.schemaDefSymbol = 'SCHEMA_DEF_SYMBOL';
function isNamedDefinitionNode(definitionNode) {
    return 'name' in definitionNode;
}
exports.isNamedDefinitionNode = isNamedDefinitionNode;
function mergeGraphQLNodes(nodes, config, directives = {}) {
    var _a, _b, _c;
    const mergedResultMap = directives;
    for (const nodeDefinition of nodes) {
        if (isNamedDefinitionNode(nodeDefinition)) {
            const name = (_a = nodeDefinition.name) === null || _a === void 0 ? void 0 : _a.value;
            if (config === null || config === void 0 ? void 0 : config.commentDescriptions) {
                (0, utils_1.collectComment)(nodeDefinition);
            }
            if (name == null) {
                continue;
            }
            if (((_b = config === null || config === void 0 ? void 0 : config.exclusions) === null || _b === void 0 ? void 0 : _b.includes(name + '.*')) || ((_c = config === null || config === void 0 ? void 0 : config.exclusions) === null || _c === void 0 ? void 0 : _c.includes(name))) {
                delete mergedResultMap[name];
            }
            else {
                switch (nodeDefinition.kind) {
                    case graphql_1.Kind.OBJECT_TYPE_DEFINITION:
                    case graphql_1.Kind.OBJECT_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, type_js_1.mergeType)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.ENUM_TYPE_DEFINITION:
                    case graphql_1.Kind.ENUM_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, enum_js_1.mergeEnum)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.UNION_TYPE_DEFINITION:
                    case graphql_1.Kind.UNION_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, union_js_1.mergeUnion)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.SCALAR_TYPE_DEFINITION:
                    case graphql_1.Kind.SCALAR_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, scalar_js_1.mergeScalar)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION:
                    case graphql_1.Kind.INPUT_OBJECT_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, input_type_js_1.mergeInputType)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.INTERFACE_TYPE_DEFINITION:
                    case graphql_1.Kind.INTERFACE_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, interface_js_1.mergeInterface)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.DIRECTIVE_DEFINITION:
                        mergedResultMap[name] = (0, directives_js_1.mergeDirective)(nodeDefinition, mergedResultMap[name]);
                        break;
                }
            }
        }
        else if (nodeDefinition.kind === graphql_1.Kind.SCHEMA_DEFINITION || nodeDefinition.kind === graphql_1.Kind.SCHEMA_EXTENSION) {
            mergedResultMap[exports.schemaDefSymbol] = (0, schema_def_js_1.mergeSchemaDefs)(nodeDefinition, mergedResultMap[exports.schemaDefSymbol], config);
        }
    }
    return mergedResultMap;
}
exports.mergeGraphQLNodes = mergeGraphQLNodes;
