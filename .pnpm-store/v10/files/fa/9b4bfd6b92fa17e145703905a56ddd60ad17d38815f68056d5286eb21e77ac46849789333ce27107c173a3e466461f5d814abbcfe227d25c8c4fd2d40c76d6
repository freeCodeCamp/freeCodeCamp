import { Kind } from 'graphql';
export function isDocumentNode(object) {
    return object && typeof object === 'object' && 'kind' in object && object.kind === Kind.DOCUMENT;
}
