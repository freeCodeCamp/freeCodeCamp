"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVariableNameGenerator = exports.updateArgument = void 0;
const graphql_1 = require("graphql");
const astFromType_js_1 = require("./astFromType.js");
function updateArgument(argumentNodes, variableDefinitionsMap, variableValues, argName, varName, type, value) {
    argumentNodes[argName] = {
        kind: graphql_1.Kind.ARGUMENT,
        name: {
            kind: graphql_1.Kind.NAME,
            value: argName,
        },
        value: {
            kind: graphql_1.Kind.VARIABLE,
            name: {
                kind: graphql_1.Kind.NAME,
                value: varName,
            },
        },
    };
    variableDefinitionsMap[varName] = {
        kind: graphql_1.Kind.VARIABLE_DEFINITION,
        variable: {
            kind: graphql_1.Kind.VARIABLE,
            name: {
                kind: graphql_1.Kind.NAME,
                value: varName,
            },
        },
        type: (0, astFromType_js_1.astFromType)(type),
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
exports.updateArgument = updateArgument;
function createVariableNameGenerator(variableDefinitionMap) {
    let varCounter = 0;
    return (argName) => {
        let varName;
        do {
            varName = `_v${(varCounter++).toString()}_${argName}`;
        } while (varName in variableDefinitionMap);
        return varName;
    };
}
exports.createVariableNameGenerator = createVariableNameGenerator;
