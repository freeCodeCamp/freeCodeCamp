"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadConcern = exports.ReadConcernLevel = void 0;
/** @public */
exports.ReadConcernLevel = Object.freeze({
    local: 'local',
    majority: 'majority',
    linearizable: 'linearizable',
    available: 'available',
    snapshot: 'snapshot'
});
/**
 * The MongoDB ReadConcern, which allows for control of the consistency and isolation properties
 * of the data read from replica sets and replica set shards.
 * @public
 *
 * @see https://www.mongodb.com/docs/manual/reference/read-concern/index.html
 */
class ReadConcern {
    /** Constructs a ReadConcern from the read concern level.*/
    constructor(level) {
        /**
         * A spec test exists that allows level to be any string.
         * "invalid readConcern with out stage"
         * @see ./test/spec/crud/v2/aggregate-out-readConcern.json
         * @see https://github.com/mongodb/specifications/blob/master/source/read-write-concern/read-write-concern.md#unknown-levels-and-additional-options-for-string-based-readconcerns
         */
        this.level = exports.ReadConcernLevel[level] ?? level;
    }
    /**
     * Construct a ReadConcern given an options object.
     *
     * @param options - The options object from which to extract the write concern.
     */
    static fromOptions(options) {
        if (options == null) {
            return;
        }
        if (options.readConcern) {
            const { readConcern } = options;
            if (readConcern instanceof ReadConcern) {
                return readConcern;
            }
            else if (typeof readConcern === 'string') {
                return new ReadConcern(readConcern);
            }
            else if ('level' in readConcern && readConcern.level) {
                return new ReadConcern(readConcern.level);
            }
        }
        if (options.level) {
            return new ReadConcern(options.level);
        }
        return;
    }
    static get MAJORITY() {
        return exports.ReadConcernLevel.majority;
    }
    static get AVAILABLE() {
        return exports.ReadConcernLevel.available;
    }
    static get LINEARIZABLE() {
        return exports.ReadConcernLevel.linearizable;
    }
    static get SNAPSHOT() {
        return exports.ReadConcernLevel.snapshot;
    }
    toJSON() {
        return { level: this.level };
    }
}
exports.ReadConcern = ReadConcern;
//# sourceMappingURL=read_concern.js.map