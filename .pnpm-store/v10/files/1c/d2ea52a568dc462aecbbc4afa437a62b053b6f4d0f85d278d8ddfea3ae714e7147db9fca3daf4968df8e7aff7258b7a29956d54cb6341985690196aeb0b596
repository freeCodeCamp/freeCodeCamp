import { Kind } from 'graphql';
import { astFromType } from './astFromType.js';
export function updateArgument(argumentNodes, variableDefinitionsMap, variableValues, argName, varName, type, value) {
    argumentNodes[argName] = {
        kind: Kind.ARGUMENT,
        name: {
            kind: Kind.NAME,
            value: argName,
        },
        value: {
            kind: Kind.VARIABLE,
            name: {
                kind: Kind.NAME,
                value: varName,
            },
        },
    };
    variableDefinitionsMap[varName] = {
        kind: Kind.VARIABLE_DEFINITION,
        variable: {
            kind: Kind.VARIABLE,
            name: {
                kind: Kind.NAME,
                value: varName,
            },
        },
        type: astFromType(type),
    };
    if (value !== undefined) {
        variableValues[varName] = value;
        return;
    }
    // including the variable in the map with value of `undefined`
    // will actually be translated by graphql-js into `null`
    // see https://github.com/graphql/graphql-js/issues/2533
    if (varName in variableValues) {
        delete variableValues[varName];
    }
}
export function createVariableNameGenerator(variableDefinitionMap) {
    let varCounter = 0;
    return (argName) => {
        let varName;
        do {
            varName = `_v${(varCounter++).toString()}_${argName}`;
        } while (varName in variableDefinitionMap);
        return varName;
    };
}
