"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCollectionOperation = void 0;
exports.createCollections = createCollections;
const constants_1 = require("../cmap/wire_protocol/constants");
const responses_1 = require("../cmap/wire_protocol/responses");
const collection_1 = require("../collection");
const error_1 = require("../error");
const timeout_1 = require("../timeout");
const utils_1 = require("../utils");
const command_1 = require("./command");
const execute_operation_1 = require("./execute_operation");
const indexes_1 = require("./indexes");
const operation_1 = require("./operation");
const ILLEGAL_COMMAND_FIELDS = new Set([
    'w',
    'wtimeout',
    'timeoutMS',
    'j',
    'fsync',
    'autoIndexId',
    'pkFactory',
    'raw',
    'readPreference',
    'session',
    'readConcern',
    'writeConcern',
    'raw',
    'fieldsAsRaw',
    'useBigInt64',
    'promoteLongs',
    'promoteValues',
    'promoteBuffers',
    'bsonRegExp',
    'serializeFunctions',
    'ignoreUndefined',
    'enableUtf8Validation'
]);
/* @internal */
const INVALID_QE_VERSION = 'Driver support of Queryable Encryption is incompatible with server. Upgrade server to use Queryable Encryption.';
/** @internal */
class CreateCollectionOperation extends command_1.CommandOperation {
    constructor(db, name, options = {}) {
        super(db, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        this.db = db;
        this.name = name;
    }
    get commandName() {
        return 'create';
    }
    buildCommandDocument(_connection, _session) {
        const isOptionValid = ([k, v]) => v != null && typeof v !== 'function' && !ILLEGAL_COMMAND_FIELDS.has(k);
        return {
            create: this.name,
            ...Object.fromEntries(Object.entries(this.options).filter(isOptionValid))
        };
    }
    handleOk(_response) {
        return new collection_1.Collection(this.db, this.name, this.options);
    }
}
exports.CreateCollectionOperation = CreateCollectionOperation;
async function createCollections(db, name, options) {
    const timeoutContext = timeout_1.TimeoutContext.create({
        session: options.session,
        serverSelectionTimeoutMS: db.client.s.options.serverSelectionTimeoutMS,
        waitQueueTimeoutMS: db.client.s.options.waitQueueTimeoutMS,
        timeoutMS: options.timeoutMS
    });
    const encryptedFields = options.encryptedFields ??
        db.client.s.options.autoEncryption?.encryptedFieldsMap?.[`${db.databaseName}.${name}`];
    if (encryptedFields) {
        class CreateSupportingFLEv2CollectionOperation extends CreateCollectionOperation {
            buildCommandDocument(connection, session) {
                if (!connection.description.loadBalanced &&
                    (0, utils_1.maxWireVersion)(connection) < constants_1.MIN_SUPPORTED_QE_WIRE_VERSION) {
                    throw new error_1.MongoCompatibilityError(`${INVALID_QE_VERSION} The minimum server version required is ${constants_1.MIN_SUPPORTED_QE_SERVER_VERSION}`);
                }
                return super.buildCommandDocument(connection, session);
            }
        }
        // Create auxilliary collections for queryable encryption support.
        const escCollection = encryptedFields.escCollection ?? `enxcol_.${name}.esc`;
        const ecocCollection = encryptedFields.ecocCollection ?? `enxcol_.${name}.ecoc`;
        for (const collectionName of [escCollection, ecocCollection]) {
            const createOp = new CreateSupportingFLEv2CollectionOperation(db, collectionName, {
                clusteredIndex: {
                    key: { _id: 1 },
                    unique: true
                },
                session: options.session
            });
            await (0, execute_operation_1.executeOperation)(db.client, createOp, timeoutContext);
        }
        if (!options.encryptedFields) {
            options = { ...options, encryptedFields };
        }
    }
    const coll = await (0, execute_operation_1.executeOperation)(db.client, new CreateCollectionOperation(db, name, options), timeoutContext);
    if (encryptedFields) {
        // Create the required index for queryable encryption support.
        const createIndexOp = indexes_1.CreateIndexesOperation.fromIndexSpecification(db, name, { __safeContent__: 1 }, { session: options.session });
        await (0, execute_operation_1.executeOperation)(db.client, createIndexOp, timeoutContext);
    }
    return coll;
}
(0, operation_1.defineAspects)(CreateCollectionOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=create_collection.js.map