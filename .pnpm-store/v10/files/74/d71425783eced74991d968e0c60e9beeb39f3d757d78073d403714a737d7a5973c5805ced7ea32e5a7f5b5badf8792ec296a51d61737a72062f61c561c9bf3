"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandOperation = void 0;
const constants_1 = require("../cmap/wire_protocol/constants");
const error_1 = require("../error");
const explain_1 = require("../explain");
const read_concern_1 = require("../read_concern");
const utils_1 = require("../utils");
const write_concern_1 = require("../write_concern");
const operation_1 = require("./operation");
/** @internal */
class CommandOperation extends operation_1.AbstractOperation {
    constructor(parent, options) {
        super(options);
        this.options = options ?? {};
        // NOTE: this was explicitly added for the add/remove user operations, it's likely
        //       something we'd want to reconsider. Perhaps those commands can use `Admin`
        //       as a parent?
        const dbNameOverride = options?.dbName || options?.authdb;
        if (dbNameOverride) {
            this.ns = new utils_1.MongoDBNamespace(dbNameOverride, '$cmd');
        }
        else {
            this.ns = parent
                ? parent.s.namespace.withCollection('$cmd')
                : new utils_1.MongoDBNamespace('admin', '$cmd');
        }
        this.readConcern = read_concern_1.ReadConcern.fromOptions(options);
        this.writeConcern = write_concern_1.WriteConcern.fromOptions(options);
        if (this.hasAspect(operation_1.Aspect.EXPLAINABLE)) {
            this.explain = explain_1.Explain.fromOptions(options);
            if (this.explain)
                (0, explain_1.validateExplainTimeoutOptions)(this.options, this.explain);
        }
        else if (options?.explain != null) {
            throw new error_1.MongoInvalidArgumentError(`Option "explain" is not supported on this command`);
        }
    }
    get canRetryWrite() {
        if (this.hasAspect(operation_1.Aspect.EXPLAINABLE)) {
            return this.explain == null;
        }
        return super.canRetryWrite;
    }
    buildOptions(timeoutContext) {
        return {
            ...this.options,
            ...this.bsonOptions,
            timeoutContext,
            readPreference: this.readPreference,
            session: this.session
        };
    }
    buildCommand(connection, session) {
        const command = this.buildCommandDocument(connection, session);
        const inTransaction = this.session && this.session.inTransaction();
        if (this.readConcern && (0, utils_1.commandSupportsReadConcern)(command) && !inTransaction) {
            Object.assign(command, { readConcern: this.readConcern });
        }
        if (this.writeConcern && this.hasAspect(operation_1.Aspect.WRITE_OPERATION) && !inTransaction) {
            write_concern_1.WriteConcern.apply(command, this.writeConcern);
        }
        if (this.options.collation &&
            typeof this.options.collation === 'object' &&
            !this.hasAspect(operation_1.Aspect.SKIP_COLLATION)) {
            Object.assign(command, { collation: this.options.collation });
        }
        if (typeof this.options.maxTimeMS === 'number') {
            command.maxTimeMS = this.options.maxTimeMS;
        }
        if (this.options.rawData != null &&
            this.hasAspect(operation_1.Aspect.SUPPORTS_RAW_DATA) &&
            (0, utils_1.maxWireVersion)(connection) >= constants_1.MIN_SUPPORTED_RAW_DATA_WIRE_VERSION) {
            command.rawData = this.options.rawData;
        }
        if (this.hasAspect(operation_1.Aspect.EXPLAINABLE) && this.explain) {
            return (0, explain_1.decorateWithExplain)(command, this.explain);
        }
        return command;
    }
}
exports.CommandOperation = CommandOperation;
//# sourceMappingURL=command.js.map