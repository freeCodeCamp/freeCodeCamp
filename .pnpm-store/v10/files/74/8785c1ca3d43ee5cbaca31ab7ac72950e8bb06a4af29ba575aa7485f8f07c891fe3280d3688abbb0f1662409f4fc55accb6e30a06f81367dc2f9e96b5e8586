"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadPreference = exports.ReadPreferenceMode = void 0;
const error_1 = require("./error");
/** @public */
exports.ReadPreferenceMode = Object.freeze({
    primary: 'primary',
    primaryPreferred: 'primaryPreferred',
    secondary: 'secondary',
    secondaryPreferred: 'secondaryPreferred',
    nearest: 'nearest'
});
/**
 * The **ReadPreference** class is a class that represents a MongoDB ReadPreference and is
 * used to construct connections.
 * @public
 *
 * @see https://www.mongodb.com/docs/manual/core/read-preference/
 */
class ReadPreference {
    /**
     * @param mode - A string describing the read preference mode (primary|primaryPreferred|secondary|secondaryPreferred|nearest)
     * @param tags - A tag set used to target reads to members with the specified tag(s). tagSet is not available if using read preference mode primary.
     * @param options - Additional read preference options
     */
    constructor(mode, tags, options) {
        if (!ReadPreference.isValid(mode)) {
            throw new error_1.MongoInvalidArgumentError(`Invalid read preference mode ${JSON.stringify(mode)}`);
        }
        if (options == null && typeof tags === 'object' && !Array.isArray(tags)) {
            options = tags;
            tags = undefined;
        }
        else if (tags && !Array.isArray(tags)) {
            throw new error_1.MongoInvalidArgumentError('ReadPreference tags must be an array');
        }
        this.mode = mode;
        this.tags = tags;
        this.hedge = options?.hedge;
        this.maxStalenessSeconds = undefined;
        this.minWireVersion = undefined;
        options = options ?? {};
        if (options.maxStalenessSeconds != null) {
            if (options.maxStalenessSeconds <= 0) {
                throw new error_1.MongoInvalidArgumentError('maxStalenessSeconds must be a positive integer');
            }
            this.maxStalenessSeconds = options.maxStalenessSeconds;
            // NOTE: The minimum required wire version is 5 for this read preference. If the existing
            //       topology has a lower value then a MongoError will be thrown during server selection.
            this.minWireVersion = 5;
        }
        if (this.mode === ReadPreference.PRIMARY) {
            if (this.tags && Array.isArray(this.tags) && this.tags.length > 0) {
                throw new error_1.MongoInvalidArgumentError('Primary read preference cannot be combined with tags');
            }
            if (this.maxStalenessSeconds) {
                throw new error_1.MongoInvalidArgumentError('Primary read preference cannot be combined with maxStalenessSeconds');
            }
            if (this.hedge) {
                throw new error_1.MongoInvalidArgumentError('Primary read preference cannot be combined with hedge');
            }
        }
    }
    // Support the deprecated `preference` property introduced in the porcelain layer
    get preference() {
        return this.mode;
    }
    static fromString(mode) {
        return new ReadPreference(mode);
    }
    /**
     * Construct a ReadPreference given an options object.
     *
     * @param options - The options object from which to extract the read preference.
     */
    static fromOptions(options) {
        if (!options)
            return;
        const readPreference = options.readPreference ?? options.session?.transaction.options.readPreference;
        const readPreferenceTags = options.readPreferenceTags;
        if (readPreference == null) {
            return;
        }
        if (typeof readPreference === 'string') {
            return new ReadPreference(readPreference, readPreferenceTags, {
                maxStalenessSeconds: options.maxStalenessSeconds,
                hedge: options.hedge
            });
        }
        else if (!(readPreference instanceof ReadPreference) && typeof readPreference === 'object') {
            const mode = readPreference.mode || readPreference.preference;
            if (mode && typeof mode === 'string') {
                return new ReadPreference(mode, readPreference.tags ?? readPreferenceTags, {
                    maxStalenessSeconds: readPreference.maxStalenessSeconds,
                    hedge: options.hedge
                });
            }
        }
        if (readPreferenceTags) {
            readPreference.tags = readPreferenceTags;
        }
        return readPreference;
    }
    /**
     * Replaces options.readPreference with a ReadPreference instance
     */
    static translate(options) {
        if (options.readPreference == null)
            return options;
        const r = options.readPreference;
        if (typeof r === 'string') {
            options.readPreference = new ReadPreference(r);
        }
        else if (r && !(r instanceof ReadPreference) && typeof r === 'object') {
            const mode = r.mode || r.preference;
            if (mode && typeof mode === 'string') {
                options.readPreference = new ReadPreference(mode, r.tags, {
                    maxStalenessSeconds: r.maxStalenessSeconds
                });
            }
        }
        else if (!(r instanceof ReadPreference)) {
            throw new error_1.MongoInvalidArgumentError(`Invalid read preference: ${r}`);
        }
        return options;
    }
    /**
     * Validate if a mode is legal
     *
     * @param mode - The string representing the read preference mode.
     */
    static isValid(mode) {
        const VALID_MODES = new Set([
            ReadPreference.PRIMARY,
            ReadPreference.PRIMARY_PREFERRED,
            ReadPreference.SECONDARY,
            ReadPreference.SECONDARY_PREFERRED,
            ReadPreference.NEAREST,
            null
        ]);
        return VALID_MODES.has(mode);
    }
    /**
     * Validate if a mode is legal
     *
     * @param mode - The string representing the read preference mode.
     */
    isValid(mode) {
        return ReadPreference.isValid(typeof mode === 'string' ? mode : this.mode);
    }
    /**
     * Indicates that this readPreference needs the "SecondaryOk" bit when sent over the wire
     * @see https://www.mongodb.com/docs/manual/reference/mongodb-wire-protocol/#op-query
     */
    secondaryOk() {
        const NEEDS_SECONDARYOK = new Set([
            ReadPreference.PRIMARY_PREFERRED,
            ReadPreference.SECONDARY,
            ReadPreference.SECONDARY_PREFERRED,
            ReadPreference.NEAREST
        ]);
        return NEEDS_SECONDARYOK.has(this.mode);
    }
    /**
     * Check if the two ReadPreferences are equivalent
     *
     * @param readPreference - The read preference with which to check equality
     */
    equals(readPreference) {
        return readPreference.mode === this.mode;
    }
    /** Return JSON representation */
    toJSON() {
        const readPreference = { mode: this.mode };
        if (Array.isArray(this.tags))
            readPreference.tags = this.tags;
        if (this.maxStalenessSeconds)
            readPreference.maxStalenessSeconds = this.maxStalenessSeconds;
        if (this.hedge)
            readPreference.hedge = this.hedge;
        return readPreference;
    }
}
exports.ReadPreference = ReadPreference;
ReadPreference.PRIMARY = exports.ReadPreferenceMode.primary;
ReadPreference.PRIMARY_PREFERRED = exports.ReadPreferenceMode.primaryPreferred;
ReadPreference.SECONDARY = exports.ReadPreferenceMode.secondary;
ReadPreference.SECONDARY_PREFERRED = exports.ReadPreferenceMode.secondaryPreferred;
ReadPreference.NEAREST = exports.ReadPreferenceMode.nearest;
ReadPreference.primary = new ReadPreference(exports.ReadPreferenceMode.primary);
ReadPreference.primaryPreferred = new ReadPreference(exports.ReadPreferenceMode.primaryPreferred);
ReadPreference.secondary = new ReadPreference(exports.ReadPreferenceMode.secondary);
ReadPreference.secondaryPreferred = new ReadPreference(exports.ReadPreferenceMode.secondaryPreferred);
ReadPreference.nearest = new ReadPreference(exports.ReadPreferenceMode.nearest);
//# sourceMappingURL=read_preference.js.map