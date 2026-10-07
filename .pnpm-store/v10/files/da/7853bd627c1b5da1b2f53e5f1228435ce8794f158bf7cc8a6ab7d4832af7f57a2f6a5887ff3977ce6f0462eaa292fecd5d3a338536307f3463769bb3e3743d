"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteConcern = exports.WRITE_CONCERN_KEYS = void 0;
exports.throwIfWriteConcernError = throwIfWriteConcernError;
const responses_1 = require("./cmap/wire_protocol/responses");
const error_1 = require("./error");
exports.WRITE_CONCERN_KEYS = ['w', 'wtimeout', 'j', 'journal', 'fsync'];
/**
 * A MongoDB WriteConcern, which describes the level of acknowledgement
 * requested from MongoDB for write operations.
 * @public
 *
 * @see https://www.mongodb.com/docs/manual/reference/write-concern/
 */
class WriteConcern {
    /**
     * Constructs a WriteConcern from the write concern properties.
     * @param w - request acknowledgment that the write operation has propagated to a specified number of mongod instances or to mongod instances with specified tags.
     * @param wtimeoutMS - specify a time limit to prevent write operations from blocking indefinitely
     * @param journal - request acknowledgment that the write operation has been written to the on-disk journal
     * @param fsync - equivalent to the j option. Is deprecated and will be removed in the next major version.
     */
    constructor(w, wtimeoutMS, journal, fsync) {
        if (w != null) {
            if (!Number.isNaN(Number(w))) {
                this.w = Number(w);
            }
            else {
                this.w = w;
            }
        }
        if (wtimeoutMS != null) {
            this.wtimeoutMS = this.wtimeout = wtimeoutMS;
        }
        if (journal != null) {
            this.journal = this.j = journal;
        }
        if (fsync != null) {
            this.journal = this.j = fsync ? true : false;
        }
    }
    /**
     * Apply a write concern to a command document. Will modify and return the command.
     */
    static apply(command, writeConcern) {
        const wc = {};
        // The write concern document sent to the server has w/wtimeout/j fields.
        if (writeConcern.w != null)
            wc.w = writeConcern.w;
        if (writeConcern.wtimeoutMS != null)
            wc.wtimeout = writeConcern.wtimeoutMS;
        if (writeConcern.journal != null)
            wc.j = writeConcern.j;
        command.writeConcern = wc;
        return command;
    }
    /** Construct a WriteConcern given an options object. */
    static fromOptions(options, inherit) {
        if (options == null)
            return undefined;
        inherit = inherit ?? {};
        let opts;
        if (typeof options === 'string' || typeof options === 'number') {
            opts = { w: options };
        }
        else if (options instanceof WriteConcern) {
            opts = options;
        }
        else {
            opts = options.writeConcern;
        }
        const parentOpts = inherit instanceof WriteConcern ? inherit : inherit.writeConcern;
        const mergedOpts = { ...parentOpts, ...opts };
        const { w = undefined, wtimeout = undefined, j = undefined, fsync = undefined, journal = undefined, wtimeoutMS = undefined } = mergedOpts;
        if (w != null ||
            wtimeout != null ||
            wtimeoutMS != null ||
            j != null ||
            journal != null ||
            fsync != null) {
            return new WriteConcern(w, wtimeout ?? wtimeoutMS, j ?? journal, fsync);
        }
        return undefined;
    }
}
exports.WriteConcern = WriteConcern;
/** Called with either a plain object or MongoDBResponse */
function throwIfWriteConcernError(response) {
    if (typeof response === 'object' && response != null) {
        const writeConcernError = responses_1.MongoDBResponse.is(response) && response.has('writeConcernError')
            ? response.toObject()
            : !responses_1.MongoDBResponse.is(response) && 'writeConcernError' in response
                ? response
                : null;
        if (writeConcernError != null) {
            throw new error_1.MongoWriteConcernError(writeConcernError);
        }
    }
}
//# sourceMappingURL=write_concern.js.map