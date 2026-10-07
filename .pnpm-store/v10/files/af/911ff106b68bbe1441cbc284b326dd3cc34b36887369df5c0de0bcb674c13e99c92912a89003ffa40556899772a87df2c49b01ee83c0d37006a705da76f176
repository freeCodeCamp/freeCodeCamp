import { isObjectType } from 'graphql';
export function getImplementingTypes(interfaceName, schema) {
    const allTypesMap = schema.getTypeMap();
    const result = [];
    for (const graphqlTypeName in allTypesMap) {
        const graphqlType = allTypesMap[graphqlTypeName];
        if (isObjectType(graphqlType)) {
            const allInterfaces = graphqlType.getInterfaces();
            if (allInterfaces.find(int => int.name === interfaceName)) {
                result.push(graphqlType.name);
            }
        }
    }
    return result;
}
