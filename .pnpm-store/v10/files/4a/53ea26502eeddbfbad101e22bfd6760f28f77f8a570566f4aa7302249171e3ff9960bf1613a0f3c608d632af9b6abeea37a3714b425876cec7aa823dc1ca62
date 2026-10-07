"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizeOperations = void 0;
const relay_operation_optimizer_1 = require("@graphql-tools/relay-operation-optimizer");
function optimizeOperations(schema, documents, options) {
    const newDocuments = (0, relay_operation_optimizer_1.optimizeDocuments)(schema, documents.map(s => s.document), options);
    return newDocuments.map((document, index) => {
        var _a;
        return ({
            location: ((_a = documents[index]) === null || _a === void 0 ? void 0 : _a.location) || 'optimized by relay',
            document,
        });
    });
}
exports.optimizeOperations = optimizeOperations;
