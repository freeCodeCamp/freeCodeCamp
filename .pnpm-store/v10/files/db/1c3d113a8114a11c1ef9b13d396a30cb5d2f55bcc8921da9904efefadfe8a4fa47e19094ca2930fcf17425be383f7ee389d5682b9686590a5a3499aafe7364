import { optimizeDocuments } from '@graphql-tools/relay-operation-optimizer';
export function optimizeOperations(schema, documents, options) {
    const newDocuments = optimizeDocuments(schema, documents.map(s => s.document), options);
    return newDocuments.map((document, index) => {
        var _a;
        return ({
            location: ((_a = documents[index]) === null || _a === void 0 ? void 0 : _a.location) || 'optimized by relay',
            document,
        });
    });
}
