import { getOperationAST } from 'graphql';
import { memoize1 } from './memoize.js';
export function getOperationASTFromDocument(documentNode, operationName) {
    const doc = getOperationAST(documentNode, operationName);
    if (!doc) {
        throw new Error(`Cannot infer operation ${operationName || ''}`);
    }
    return doc;
}
export const getOperationASTFromRequest = memoize1(function getOperationASTFromRequest(request) {
    return getOperationASTFromDocument(request.document, request.operationName);
});
