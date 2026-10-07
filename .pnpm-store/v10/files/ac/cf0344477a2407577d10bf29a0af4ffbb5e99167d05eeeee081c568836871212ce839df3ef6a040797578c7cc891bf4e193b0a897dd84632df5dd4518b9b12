"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDatabaseOperation = exports.DropCollectionOperation = void 0;
exports.dropCollections = dropCollections;
const __1 = require("..");
const responses_1 = require("../cmap/wire_protocol/responses");
const abstract_cursor_1 = require("../cursor/abstract_cursor");
const error_1 = require("../error");
const timeout_1 = require("../timeout");
const command_1 = require("./command");
const execute_operation_1 = require("./execute_operation");
const operation_1 = require("./operation");
/** @internal */
class DropCollectionOperation extends command_1.CommandOperation {
    constructor(db, name, options = {}) {
        super(db, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        this.name = name;
    }
    get commandName() {
        return 'drop';
    }
    buildCommandDocument(_connection, _session) {
        return { drop: this.name };
    }
    handleOk(_response) {
        return true;
    }
}
exports.DropCollectionOperation = DropCollectionOperation;
async function dropCollections(db, name, options) {
    const timeoutContext = timeout_1.TimeoutContext.create({
        session: options.session,
        serverSelectionTimeoutMS: db.client.s.options.serverSelectionTimeoutMS,
        waitQueueTimeoutMS: db.client.s.options.waitQueueTimeoutMS,
        timeoutMS: options.timeoutMS
    });
    const encryptedFieldsMap = db.client.s.options.autoEncryption?.encryptedFieldsMap;
    let encryptedFields = options.encryptedFields ?? encryptedFieldsMap?.[`${db.databaseName}.${name}`];
    if (!encryptedFields && encryptedFieldsMap) {
        // If the MongoClient was configured with an encryptedFieldsMap,
        // and no encryptedFields config was available in it or explicitly
        // passed as an argument, the spec tells us to look one up using
        // listCollections().
        const listCollectionsResult = await db
            .listCollections({ name }, {
            nameOnly: false,
            session: options.session,
            timeoutContext: new abstract_cursor_1.CursorTimeoutContext(timeoutContext, Symbol())
        })
            .toArray();
        encryptedFields = listCollectionsResult?.[0]?.options?.encryptedFields;
    }
    if (encryptedFields) {
        const escCollection = encryptedFields.escCollection || `enxcol_.${name}.esc`;
        const ecocCollection = encryptedFields.ecocCollection || `enxcol_.${name}.ecoc`;
        for (const collectionName of [escCollection, ecocCollection]) {
            // Drop auxilliary collections, ignoring potential NamespaceNotFound errors.
            const dropOp = new DropCollectionOperation(db, collectionName, options);
            try {
                await (0, execute_operation_1.executeOperation)(db.client, dropOp, timeoutContext);
            }
            catch (err) {
                if (!(err instanceof __1.MongoServerError) ||
                    err.code !== error_1.MONGODB_ERROR_CODES.NamespaceNotFound) {
                    throw err;
                }
            }
        }
    }
    return await (0, execute_operation_1.executeOperation)(db.client, new DropCollectionOperation(db, name, options), timeoutContext);
}
/** @internal */
class DropDatabaseOperation extends command_1.CommandOperation {
    constructor(db, options) {
        super(db, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
    }
    get commandName() {
        return 'dropDatabase';
    }
    buildCommandDocument(_connection, _session) {
        return { dropDatabase: 1 };
    }
    handleOk(_response) {
        return true;
    }
}
exports.DropDatabaseOperation = DropDatabaseOperation;
(0, operation_1.defineAspects)(DropCollectionOperation, [operation_1.Aspect.WRITE_OPERATION]);
(0, operation_1.defineAspects)(DropDatabaseOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=drop.js.map