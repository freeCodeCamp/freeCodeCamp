"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListIndexesOperation = exports.DropIndexOperation = exports.CreateIndexesOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const error_1 = require("../error");
const utils_1 = require("../utils");
const command_1 = require("./command");
const operation_1 = require("./operation");
const VALID_INDEX_OPTIONS = new Set([
    'background',
    'unique',
    'name',
    'partialFilterExpression',
    'sparse',
    'hidden',
    'expireAfterSeconds',
    'storageEngine',
    'collation',
    'version',
    // text indexes
    'weights',
    'default_language',
    'language_override',
    'textIndexVersion',
    // 2d-sphere indexes
    '2dsphereIndexVersion',
    // 2d indexes
    'bits',
    'min',
    'max',
    // geoHaystack Indexes
    'bucketSize',
    // wildcard indexes
    'wildcardProjection'
]);
function isIndexDirection(x) {
    return (typeof x === 'number' || x === '2d' || x === '2dsphere' || x === 'text' || x === 'geoHaystack');
}
function isSingleIndexTuple(t) {
    return Array.isArray(t) && t.length === 2 && isIndexDirection(t[1]);
}
/**
 * Converts an `IndexSpecification`, which can be specified in multiple formats, into a
 * valid `key` for the createIndexes command.
 */
function constructIndexDescriptionMap(indexSpec) {
    const key = new Map();
    const indexSpecs = !Array.isArray(indexSpec) || isSingleIndexTuple(indexSpec) ? [indexSpec] : indexSpec;
    // Iterate through array and handle different types
    for (const spec of indexSpecs) {
        if (typeof spec === 'string') {
            key.set(spec, 1);
        }
        else if (Array.isArray(spec)) {
            key.set(spec[0], spec[1] ?? 1);
        }
        else if (spec instanceof Map) {
            for (const [property, value] of spec) {
                key.set(property, value);
            }
        }
        else if ((0, utils_1.isObject)(spec)) {
            for (const [property, value] of Object.entries(spec)) {
                key.set(property, value);
            }
        }
    }
    return key;
}
/**
 * Receives an index description and returns a modified index description which has had invalid options removed
 * from the description and has mapped the `version` option to the `v` option.
 */
function resolveIndexDescription(description) {
    const validProvidedOptions = Object.entries(description).filter(([optionName]) => VALID_INDEX_OPTIONS.has(optionName));
    return Object.fromEntries(
    // we support the `version` option, but the `createIndexes` command expects it to be the `v`
    validProvidedOptions.map(([name, value]) => (name === 'version' ? ['v', value] : [name, value])));
}
/** @internal */
class CreateIndexesOperation extends command_1.CommandOperation {
    constructor(parent, collectionName, indexes, options) {
        super(parent, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options ?? {};
        // collation is set on each index, it should not be defined at the root
        this.options.collation = undefined;
        this.collectionName = collectionName;
        this.indexes = indexes.map((userIndex) => {
            // Ensure the key is a Map to preserve index key ordering
            const key = userIndex.key instanceof Map ? userIndex.key : new Map(Object.entries(userIndex.key));
            const name = userIndex.name ?? Array.from(key).flat().join('_');
            const validIndexOptions = resolveIndexDescription(userIndex);
            return {
                ...validIndexOptions,
                name,
                key
            };
        });
        this.ns = parent.s.namespace;
    }
    static fromIndexDescriptionArray(parent, collectionName, indexes, options) {
        return new CreateIndexesOperation(parent, collectionName, indexes, options);
    }
    static fromIndexSpecification(parent, collectionName, indexSpec, options = {}) {
        const key = constructIndexDescriptionMap(indexSpec);
        const description = { ...options, key };
        return new CreateIndexesOperation(parent, collectionName, [description], options);
    }
    get commandName() {
        return 'createIndexes';
    }
    buildCommandDocument(connection) {
        const options = this.options;
        const indexes = this.indexes;
        const serverWireVersion = (0, utils_1.maxWireVersion)(connection);
        const cmd = { createIndexes: this.collectionName, indexes };
        if (options.commitQuorum != null) {
            if (serverWireVersion < 9) {
                throw new error_1.MongoCompatibilityError('Option `commitQuorum` for `createIndexes` not supported on servers < 4.4');
            }
            cmd.commitQuorum = options.commitQuorum;
        }
        return cmd;
    }
    handleOk(_response) {
        const indexNames = this.indexes.map(index => index.name || '');
        return indexNames;
    }
}
exports.CreateIndexesOperation = CreateIndexesOperation;
/** @internal */
class DropIndexOperation extends command_1.CommandOperation {
    constructor(collection, indexName, options) {
        super(collection, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options ?? {};
        this.collection = collection;
        this.indexName = indexName;
        this.ns = collection.fullNamespace;
    }
    get commandName() {
        return 'dropIndexes';
    }
    buildCommandDocument(_connection) {
        return { dropIndexes: this.collection.collectionName, index: this.indexName };
    }
}
exports.DropIndexOperation = DropIndexOperation;
/** @internal */
class ListIndexesOperation extends command_1.CommandOperation {
    constructor(collection, options) {
        super(collection, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
        this.options = { ...options };
        delete this.options.writeConcern;
        this.collectionNamespace = collection.s.namespace;
    }
    get commandName() {
        return 'listIndexes';
    }
    buildCommandDocument(connection) {
        const serverWireVersion = (0, utils_1.maxWireVersion)(connection);
        const cursor = this.options.batchSize ? { batchSize: this.options.batchSize } : {};
        const command = { listIndexes: this.collectionNamespace.collection, cursor };
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (serverWireVersion >= 9 && this.options.comment !== undefined) {
            command.comment = this.options.comment;
        }
        return command;
    }
    handleOk(response) {
        return response;
    }
}
exports.ListIndexesOperation = ListIndexesOperation;
(0, operation_1.defineAspects)(ListIndexesOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
(0, operation_1.defineAspects)(CreateIndexesOperation, [operation_1.Aspect.WRITE_OPERATION, operation_1.Aspect.SUPPORTS_RAW_DATA]);
(0, operation_1.defineAspects)(DropIndexOperation, [operation_1.Aspect.WRITE_OPERATION, operation_1.Aspect.SUPPORTS_RAW_DATA]);
//# sourceMappingURL=indexes.js.map