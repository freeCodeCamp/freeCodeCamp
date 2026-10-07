import { print } from 'graphql';
import { isSome } from '@graphql-tools/utils';
function directiveAlreadyExists(directivesArr, otherDirective) {
    return !!directivesArr.find(directive => directive.name.value === otherDirective.name.value);
}
function isRepeatableDirective(directive, directives) {
    var _a;
    return !!((_a = directives === null || directives === void 0 ? void 0 : directives[directive.name.value]) === null || _a === void 0 ? void 0 : _a.repeatable);
}
function nameAlreadyExists(name, namesArr) {
    return namesArr.some(({ value }) => value === name.value);
}
function mergeArguments(a1, a2) {
    const result = [...a2];
    for (const argument of a1) {
        const existingIndex = result.findIndex(a => a.name.value === argument.name.value);
        if (existingIndex > -1) {
            const existingArg = result[existingIndex];
            if (existingArg.value.kind === 'ListValue') {
                const source = existingArg.value.values;
                const target = argument.value.values;
                // merge values of two lists
                existingArg.value.values = deduplicateLists(source, target, (targetVal, source) => {
                    const value = targetVal.value;
                    return !value || !source.some((sourceVal) => sourceVal.value === value);
                });
            }
            else {
                existingArg.value = argument.value;
            }
        }
        else {
            result.push(argument);
        }
    }
    return result;
}
function deduplicateDirectives(directives, definitions) {
    return directives
        .map((directive, i, all) => {
        const firstAt = all.findIndex(d => d.name.value === directive.name.value);
        if (firstAt !== i && !isRepeatableDirective(directive, definitions)) {
            const dup = all[firstAt];
            directive.arguments = mergeArguments(directive.arguments, dup.arguments);
            return null;
        }
        return directive;
    })
        .filter(isSome);
}
export function mergeDirectives(d1 = [], d2 = [], config, directives) {
    const reverseOrder = config && config.reverseDirectives;
    const asNext = reverseOrder ? d1 : d2;
    const asFirst = reverseOrder ? d2 : d1;
    const result = deduplicateDirectives([...asNext], directives);
    for (const directive of asFirst) {
        if (directiveAlreadyExists(result, directive) && !isRepeatableDirective(directive, directives)) {
            const existingDirectiveIndex = result.findIndex(d => d.name.value === directive.name.value);
            const existingDirective = result[existingDirectiveIndex];
            result[existingDirectiveIndex].arguments = mergeArguments(directive.arguments || [], existingDirective.arguments || []);
        }
        else {
            result.push(directive);
        }
    }
    return result;
}
function validateInputs(node, existingNode) {
    const printedNode = print({
        ...node,
        description: undefined,
    });
    const printedExistingNode = print({
        ...existingNode,
        description: undefined,
    });
    // eslint-disable-next-line
    const leaveInputs = new RegExp('(directive @w*d*)|( on .*$)', 'g');
    const sameArguments = printedNode.replace(leaveInputs, '') === printedExistingNode.replace(leaveInputs, '');
    if (!sameArguments) {
        throw new Error(`Unable to merge GraphQL directive "${node.name.value}". \nExisting directive:  \n\t${printedExistingNode} \nReceived directive: \n\t${printedNode}`);
    }
}
export function mergeDirective(node, existingNode) {
    if (existingNode) {
        validateInputs(node, existingNode);
        return {
            ...node,
            locations: [
                ...existingNode.locations,
                ...node.locations.filter(name => !nameAlreadyExists(name, existingNode.locations)),
            ],
        };
    }
    return node;
}
function deduplicateLists(source, target, filterFn) {
    return source.concat(target.filter(val => filterFn(val, source)));
}
