// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { IsUnion } from '../../types/union.mjs';
import { IsDeferred } from '../../types/deferred.mjs';
import { IsRef } from '../../types/ref.mjs';
function CollectDistributionNames(expression, result = []) {
    return (
    // Conditional
    IsDeferred(expression) && Guard.IsEqual(expression.action, 'Conditional')
        ? IsRef(expression.parameters[0])
            ? CollectDistributionNames(expression.parameters[2], CollectDistributionNames(expression.parameters[3], [...result, expression.parameters[0]['$ref']]))
            : CollectDistributionNames(expression.parameters[2], CollectDistributionNames(expression.parameters[3], result))
        // Mapped
        : IsDeferred(expression) && Guard.IsEqual(expression.action, 'Mapped')
            ? (IsDeferred(expression.parameters[1]) && Guard.IsEqual(expression.parameters[1].action, 'KeyOf') && IsRef(expression.parameters[1].parameters[0]) ? [...result, expression.parameters[1].parameters[0]['$ref']] :
                result) : result);
}
function BuildDistributionArray(parameters, names) {
    return parameters.reduce((result, left) => [...result, names.includes(left.name)], []);
}
function ZipDistributionArray(arguments_, distributionArray, result = []) {
    return Guard.TakeLeft(arguments_, (argumentLeft, argumentRight) => Guard.TakeLeft(distributionArray, (booleanLeft, booleanRight) => ZipDistributionArray(argumentRight, booleanRight, [...result, [booleanLeft, argumentLeft]]), () => result), () => result);
}
function Expand(type) {
    return (IsUnion(type)
        ? [...type.anyOf]
        : [type]);
}
function Append(current, type) {
    return current.reduce((result, left) => [...result, [...left, type]], []);
}
function Cross(current, variants) {
    return variants.reduce((result, left) => {
        return [...result, ...Append(current, left)];
    }, []);
}
function Distribute(zipped) {
    return zipped.reduce((result, left) => {
        return Guard.IsEqual(left[0], true)
            ? Cross(result, Expand(left[1]))
            : Cross(result, [left[1]]); // - no-expansion
    }, [[]]);
}
export function DistributeArguments(parameters, arguments_, expression) {
    const distributionNames = CollectDistributionNames(expression);
    const distributionArray = BuildDistributionArray(parameters, distributionNames);
    const zippedArguments = ZipDistributionArray(arguments_, distributionArray);
    return (IsDeferred(expression) && Guard.IsEqual(expression.action, 'Conditional')
        ? Distribute(zippedArguments)
        : IsDeferred(expression) && Guard.IsEqual(expression.action, 'Mapped')
            ? Distribute(zippedArguments)
            : [arguments_]);
}
