"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pruneSchema = void 0;
const graphql_1 = require("graphql");
const mapSchema_js_1 = require("./mapSchema.js");
const Interfaces_js_1 = require("./Interfaces.js");
const rootTypes_js_1 = require("./rootTypes.js");
const get_implementing_types_js_1 = require("./get-implementing-types.js");
/**
 * Prunes the provided schema, removing unused and empty types
 * @param schema The schema to prune
 * @param options Additional options for removing unused types from the schema
 */
function pruneSchema(schema, options = {}) {
    const { skipEmptyCompositeTypePruning, skipEmptyUnionPruning, skipPruning, skipUnimplementedInterfacesPruning, skipUnusedTypesPruning, } = options;
    let prunedTypes = []; // Pruned types during mapping
    let prunedSchema = schema;
    do {
        let visited = visitSchema(prunedSchema);
        // Custom pruning  was defined, so we need to pre-emptively revisit the schema accounting for this
        if (skipPruning) {
            const revisit = [];
            for (const typeName in prunedSchema.getTypeMap()) {
                if (typeName.startsWith('__')) {
                    continue;
                }
                const type = prunedSchema.getType(typeName);
                // if we want to skip pruning for this type, add it to the list of types to revisit
                if (type && skipPruning(type)) {
                    revisit.push(typeName);
                }
            }
            visited = visitQueue(revisit, prunedSchema, visited); // visit again
        }
        prunedTypes = [];
        prunedSchema = (0, mapSchema_js_1.mapSchema)(prunedSchema, {
            [Interfaces_js_1.MapperKind.TYPE]: type => {
                if (!visited.has(type.name) && !(0, graphql_1.isSpecifiedScalarType)(type)) {
                    if ((0, graphql_1.isUnionType)(type) ||
                        (0, graphql_1.isInputObjectType)(type) ||
                        (0, graphql_1.isInterfaceType)(type) ||
                        (0, graphql_1.isObjectType)(type) ||
                        (0, graphql_1.isScalarType)(type)) {
                        // skipUnusedTypesPruning: skip pruning unused types
                        if (skipUnusedTypesPruning) {
                            return type;
                        }
                        // skipEmptyUnionPruning: skip pruning empty unions
                        if ((0, graphql_1.isUnionType)(type) && skipEmptyUnionPruning && !Object.keys(type.getTypes()).length) {
                            return type;
                        }
                        if ((0, graphql_1.isInputObjectType)(type) || (0, graphql_1.isInterfaceType)(type) || (0, graphql_1.isObjectType)(type)) {
                            // skipEmptyCompositeTypePruning: skip pruning object types or interfaces with no fields
                            if (skipEmptyCompositeTypePruning && !Object.keys(type.getFields()).length) {
                                return type;
                            }
                        }
                        // skipUnimplementedInterfacesPruning: skip pruning interfaces that are not implemented by any other types
                        if ((0, graphql_1.isInterfaceType)(type) && skipUnimplementedInterfacesPruning) {
                            return type;
                        }
                    }
                    prunedTypes.push(type.name);
                    visited.delete(type.name);
                    return null;
                }
                return type;
            },
        });
    } while (prunedTypes.length); // Might have empty types and need to prune again
    return prunedSchema;
}
exports.pruneSchema = pruneSchema;
function visitSchema(schema) {
    const queue = []; // queue of nodes to visit
    // Grab the root types and start there
    for (const type of (0, rootTypes_js_1.getRootTypes)(schema)) {
        queue.push(type.name);
    }
    return visitQueue(queue, schema);
}
function visitQueue(queue, schema, visited = new Set()) {
    // Interfaces encountered that are field return types need to be revisited to add their implementations
    const revisit = new Map();
    // Navigate all types starting with pre-queued types (root types)
    while (queue.length) {
        const typeName = queue.pop();
        // Skip types we already visited unless it is an interface type that needs revisiting
        if (visited.has(typeName) && revisit[typeName] !== true) {
            continue;
        }
        const type = schema.getType(typeName);
        if (type) {
            // Get types for union
            if ((0, graphql_1.isUnionType)(type)) {
                queue.push(...type.getTypes().map(type => type.name));
            }
            // If it is an interface and it is a returned type, grab all implementations so we can use proper __typename in fragments
            if ((0, graphql_1.isInterfaceType)(type) && revisit[typeName] === true) {
                queue.push(...(0, get_implementing_types_js_1.getImplementingTypes)(type.name, schema));
                // No need to revisit this interface again
                revisit[typeName] = false;
            }
            if ((0, graphql_1.isEnumType)(type)) {
                // Visit enum values directives argument types
                queue.push(...type.getValues().flatMap(value => {
                    if (value.astNode) {
                        return getDirectivesArgumentsTypeNames(schema, value.astNode);
                    }
                    return [];
                }));
            }
            // Visit interfaces this type is implementing if they haven't been visited yet
            if ('getInterfaces' in type) {
                // Only pushes to queue to visit but not return types
                queue.push(...type.getInterfaces().map(iface => iface.name));
            }
            // If the type has fields visit those field types
            if ('getFields' in type) {
                const fields = type.getFields();
                const entries = Object.entries(fields);
                if (!entries.length) {
                    continue;
                }
                for (const [, field] of entries) {
                    if ((0, graphql_1.isObjectType)(type)) {
                        // Visit arg types and arg directives arguments types
                        queue.push(...field.args.flatMap(arg => {
                            const typeNames = [(0, graphql_1.getNamedType)(arg.type).name];
                            if (arg.astNode) {
                                typeNames.push(...getDirectivesArgumentsTypeNames(schema, arg.astNode));
                            }
                            return typeNames;
                        }));
                    }
                    const namedType = (0, graphql_1.getNamedType)(field.type);
                    queue.push(namedType.name);
                    if (field.astNode) {
                        queue.push(...getDirectivesArgumentsTypeNames(schema, field.astNode));
                    }
                    // Interfaces returned on fields need to be revisited to add their implementations
                    if ((0, graphql_1.isInterfaceType)(namedType) && !(namedType.name in revisit)) {
                        revisit[namedType.name] = true;
                    }
                }
            }
            if (type.astNode) {
                queue.push(...getDirectivesArgumentsTypeNames(schema, type.astNode));
            }
            visited.add(typeName); // Mark as visited (and therefore it is used and should be kept)
        }
    }
    return visited;
}
function getDirectivesArgumentsTypeNames(schema, astNode) {
    var _a;
    return ((_a = astNode.directives) !== null && _a !== void 0 ? _a : []).flatMap(directive => { var _a, _b; return (_b = (_a = schema.getDirective(directive.name.value)) === null || _a === void 0 ? void 0 : _a.args.map(arg => (0, graphql_1.getNamedType)(arg.type).name)) !== null && _b !== void 0 ? _b : []; });
}
