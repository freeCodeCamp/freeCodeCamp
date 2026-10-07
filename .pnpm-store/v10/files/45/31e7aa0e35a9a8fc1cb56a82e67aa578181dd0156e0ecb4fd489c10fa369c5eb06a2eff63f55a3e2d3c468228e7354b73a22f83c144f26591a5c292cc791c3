"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImplementingTypes = void 0;
const graphql_1 = require("graphql");
function getImplementingTypes(interfaceName, schema) {
    const allTypesMap = schema.getTypeMap();
    const result = [];
    for (const graphqlTypeName in allTypesMap) {
        const graphqlType = allTypesMap[graphqlTypeName];
        if ((0, graphql_1.isObjectType)(graphqlType)) {
            const allInterfaces = graphqlType.getInterfaces();
            if (allInterfaces.find(int => int.name === interfaceName)) {
                result.push(graphqlType.name);
            }
        }
    }
    return result;
}
exports.getImplementingTypes = getImplementingTypes;
