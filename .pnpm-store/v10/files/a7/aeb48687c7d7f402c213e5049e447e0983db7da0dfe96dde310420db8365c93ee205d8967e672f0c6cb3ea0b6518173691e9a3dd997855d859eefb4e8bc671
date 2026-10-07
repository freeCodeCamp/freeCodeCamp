"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSearchIndexesCursor = void 0;
const aggregation_cursor_1 = require("./aggregation_cursor");
/** @public */
class ListSearchIndexesCursor extends aggregation_cursor_1.AggregationCursor {
    /** @internal */
    constructor({ fullNamespace: ns, client }, name, options = {}) {
        const pipeline = name == null ? [{ $listSearchIndexes: {} }] : [{ $listSearchIndexes: { name } }];
        super(client, ns, pipeline, options);
    }
}
exports.ListSearchIndexesCursor = ListSearchIndexesCursor;
//# sourceMappingURL=list_search_indexes_cursor.js.map