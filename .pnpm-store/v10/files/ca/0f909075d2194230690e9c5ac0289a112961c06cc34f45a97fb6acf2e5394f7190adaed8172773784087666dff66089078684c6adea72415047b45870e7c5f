import { isListType, isNonNullType } from 'graphql';
export function mergeOutputs(content) {
    const result = { content: '', prepend: [], append: [] };
    if (Array.isArray(content)) {
        content.forEach(item => {
            if (typeof item === 'string') {
                result.content += item;
            }
            else {
                result.content += item.content;
                result.prepend.push(...(item.prepend || []));
                result.append.push(...(item.append || []));
            }
        });
    }
    return [...result.prepend, result.content, ...result.append].join('\n');
}
export function isWrapperType(t) {
    return isListType(t) || isNonNullType(t);
}
export function getBaseType(type) {
    if (isWrapperType(type)) {
        return getBaseType(type.ofType);
    }
    return type;
}
export function removeNonNullWrapper(type) {
    return isNonNullType(type) ? type.ofType : type;
}
