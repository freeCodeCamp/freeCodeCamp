import { Kind } from 'graphql';
import { mergeType } from './type.js';
import { mergeEnum } from './enum.js';
import { mergeScalar } from './scalar.js';
import { mergeUnion } from './union.js';
import { mergeInputType } from './input-type.js';
import { mergeInterface } from './interface.js';
import { mergeDirective } from './directives.js';
import { mergeSchemaDefs } from './schema-def.js';
import { collectComment } from '@graphql-tools/utils';
export const schemaDefSymbol = 'SCHEMA_DEF_SYMBOL';
export function isNamedDefinitionNode(definitionNode) {
    return 'name' in definitionNode;
}
export function mergeGraphQLNodes(nodes, config, directives = {}) {
    var _a, _b, _c;
    const mergedResultMap = directives;
    for (const nodeDefinition of nodes) {
        if (isNamedDefinitionNode(nodeDefinition)) {
            const name = (_a = nodeDefinition.name) === null || _a === void 0 ? void 0 : _a.value;
            if (config === null || config === void 0 ? void 0 : config.commentDescriptions) {
                collectComment(nodeDefinition);
            }
            if (name == null) {
                continue;
            }
            if (((_b = config === null || config === void 0 ? void 0 : config.exclusions) === null || _b === void 0 ? void 0 : _b.includes(name + '.*')) || ((_c = config === null || config === void 0 ? void 0 : config.exclusions) === null || _c === void 0 ? void 0 : _c.includes(name))) {
                delete mergedResultMap[name];
            }
            else {
                switch (nodeDefinition.kind) {
                    case Kind.OBJECT_TYPE_DEFINITION:
                    case Kind.OBJECT_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeType(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.ENUM_TYPE_DEFINITION:
                    case Kind.ENUM_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeEnum(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.UNION_TYPE_DEFINITION:
                    case Kind.UNION_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeUnion(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.SCALAR_TYPE_DEFINITION:
                    case Kind.SCALAR_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeScalar(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
                    case Kind.INPUT_OBJECT_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeInputType(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.INTERFACE_TYPE_DEFINITION:
                    case Kind.INTERFACE_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeInterface(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.DIRECTIVE_DEFINITION:
                        mergedResultMap[name] = mergeDirective(nodeDefinition, mergedResultMap[name]);
                        break;
                }
            }
        }
        else if (nodeDefinition.kind === Kind.SCHEMA_DEFINITION || nodeDefinition.kind === Kind.SCHEMA_EXTENSION) {
            mergedResultMap[schemaDefSymbol] = mergeSchemaDefs(nodeDefinition, mergedResultMap[schemaDefSymbol], config);
        }
    }
    return mergedResultMap;
}
