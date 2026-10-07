"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCollectionsCursor = void 0;
const execute_operation_1 = require("../operations/execute_operation");
const list_collections_1 = require("../operations/list_collections");
const abstract_cursor_1 = require("./abstract_cursor");
/** @public */
class ListCollectionsCursor extends abstract_cursor_1.AbstractCursor {
    constructor(db, filter, options) {
        super(db.client, db.s.namespace, options);
        this.parent = db;
        this.filter = filter;
        this.options = options;
    }
    clone() {
        return new ListCollectionsCursor(this.parent, this.filter, {
            ...this.options,
            ...this.cursorOptions
        });
    }
    /** @internal */
    async _initialize(session) {
        const operation = new list_collections_1.ListCollectionsOperation(this.parent, this.filter, {
            ...this.cursorOptions,
            ...this.options,
            session,
            signal: this.signal
        });
        const response = await (0, execute_operation_1.executeOperation)(this.parent.client, operation, this.timeoutContext);
        return { server: operation.server, session, response };
    }
}
exports.ListCollectionsCursor = ListCollectionsCursor;
//# sourceMappingURL=list_collections_cursor.js.map