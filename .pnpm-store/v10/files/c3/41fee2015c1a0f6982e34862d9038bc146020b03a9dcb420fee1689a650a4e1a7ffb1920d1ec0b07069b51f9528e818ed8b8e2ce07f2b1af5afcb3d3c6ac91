import { Kind, valueFromASTUntyped } from 'graphql';
function isTypeWithFields(t) {
    return t.kind === Kind.OBJECT_TYPE_DEFINITION || t.kind === Kind.OBJECT_TYPE_EXTENSION;
}
export function getArgumentsWithDirectives(documentNode) {
    var _a;
    const result = {};
    const allTypes = documentNode.definitions.filter(isTypeWithFields);
    for (const type of allTypes) {
        if (type.fields == null) {
            continue;
        }
        for (const field of type.fields) {
            const argsWithDirectives = (_a = field.arguments) === null || _a === void 0 ? void 0 : _a.filter(arg => { var _a; return (_a = arg.directives) === null || _a === void 0 ? void 0 : _a.length; });
            if (!(argsWithDirectives === null || argsWithDirectives === void 0 ? void 0 : argsWithDirectives.length)) {
                continue;
            }
            const typeFieldResult = (result[`${type.name.value}.${field.name.value}`] = {});
            for (const arg of argsWithDirectives) {
                const directives = arg.directives.map(d => ({
                    name: d.name.value,
                    args: (d.arguments || []).reduce((prev, dArg) => ({ ...prev, [dArg.name.value]: valueFromASTUntyped(dArg.value) }), {}),
                }));
                typeFieldResult[arg.name.value] = directives;
            }
        }
    }
    return result;
}
