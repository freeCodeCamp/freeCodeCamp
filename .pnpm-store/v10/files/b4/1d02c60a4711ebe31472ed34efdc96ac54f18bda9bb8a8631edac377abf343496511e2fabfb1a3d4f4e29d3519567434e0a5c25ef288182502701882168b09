import type { Document } from './bson';
import { MongoInvalidArgumentError } from './error';
import type { TagSet } from './sdam/server_description';
import type { ClientSession } from './sessions';

/** @public */
export type ReadPreferenceLike = ReadPreference | ReadPreferenceMode;

/** @public */
export const ReadPreferenceMode = Object.freeze({
  primary: 'primary',
  primaryPreferred: 'primaryPreferred',
  secondary: 'secondary',
  secondaryPreferred: 'secondaryPreferred',
  nearest: 'nearest'
} as const);

/** @public */
export type ReadPreferenceMode = (typeof ReadPreferenceMode)[keyof typeof ReadPreferenceMode];

/** @public */
export interface HedgeOptions {
  /** Explicitly enable or disable hedged reads. */
  enabled?: boolean;
}

/** @public */
export interface ReadPreferenceOptions {
  /** Max secondary read staleness in seconds, Minimum value is 90 seconds.*/
  maxStalenessSeconds?: number;
  /** Server mode in which the same query is dispatched in parallel to multiple replica set members. */
  hedge?: HedgeOptions;
}

/** @public */
export interface ReadPreferenceLikeOptions extends ReadPreferenceOptions {
  readPreference?:
    | ReadPreferenceLike
    | {
        mode?: ReadPreferenceMode;
        preference?: ReadPreferenceMode;
        tags?: TagSet[];
        maxStalenessSeconds?: number;
      };
}

/** @public */
export interface ReadPreferenceFromOptions extends ReadPreferenceLikeOptions {
  session?: ClientSession;
  readPreferenceTags?: TagSet[];
  hedge?: HedgeOptions;
}

/**
 * The **ReadPreference** class is a class that represents a MongoDB ReadPreference and is
 * used to construct connections.
 * @public
 *
 * @see https://www.mongodb.com/docs/manual/core/read-preference/
 */
export class ReadPreference {
  mode: ReadPreferenceMode;
  tags?: TagSet[];
  hedge?: HedgeOptions;
  maxStalenessSeconds?: number;
  /**
   * @deprecated This will be removed as dead code in the next major version.
   */
  minWireVersion?: number;

  public static PRIMARY = ReadPreferenceMode.primary;
  public static PRIMARY_PREFERRED = ReadPreferenceMode.primaryPreferred;
  public static SECONDARY = ReadPreferenceMode.secondary;
  public static SECONDARY_PREFERRED = ReadPreferenceMode.secondaryPreferred;
  public static NEAREST = ReadPreferenceMode.nearest;

  public static primary = new ReadPreference(ReadPreferenceMode.primary);
  public static primaryPreferred = new ReadPreference(ReadPreferenceMode.primaryPreferred);
  public static secondary = new ReadPreference(ReadPreferenceMode.secondary);
  public static secondaryPreferred = new ReadPreference(ReadPreferenceMode.secondaryPreferred);
  public static nearest = new ReadPreference(ReadPreferenceMode.nearest);

  /**
   * @param mode - A string describing the read preference mode (primary|primaryPreferred|secondary|secondaryPreferred|nearest)
   * @param tags - A tag set used to target reads to members with the specified tag(s). tagSet is not available if using read preference mode primary.
   * @param options - Additional read preference options
   */
  constructor(mode: ReadPreferenceMode, tags?: TagSet[], options?: ReadPreferenceOptions) {
    if (!ReadPreference.isValid(mode)) {
      throw new MongoInvalidArgumentError(`Invalid read preference mode ${JSON.stringify(mode)}`);
    }
    if (options == null && typeof tags === 'object' && !Array.isArray(tags)) {
      options = tags;
      tags = undefined;
    } else if (tags && !Array.isArray(tags)) {
      throw new MongoInvalidArgumentError('ReadPreference tags must be an array');
    }

    this.mode = mode;
    this.tags = tags;
    this.hedge = options?.hedge;
    this.maxStalenessSeconds = undefined;
    this.minWireVersion = undefined;

    options = options ?? {};
    if (options.maxStalenessSeconds != null) {
      if (options.maxStalenessSeconds <= 0) {
        throw new MongoInvalidArgumentError('maxStalenessSeconds must be a positive integer');
      }

      this.maxStalenessSeconds = options.maxStalenessSeconds;

      // NOTE: The minimum required wire version is 5 for this read preference. If the existing
      //       topology has a lower value then a MongoError will be thrown during server selection.
      this.minWireVersion = 5;
    }

    if (this.mode === ReadPreference.PRIMARY) {
      if (this.tags && Array.isArray(this.tags) && this.tags.length > 0) {
        throw new MongoInvalidArgumentError('Primary read preference cannot be combined with tags');
      }

      if (this.maxStalenessSeconds) {
        throw new MongoInvalidArgumentError(
          'Primary read preference cannot be combined with maxStalenessSeconds'
        );
      }

      if (this.hedge) {
        throw new MongoInvalidArgumentError(
          'Primary read preference cannot be combined with hedge'
        );
      }
    }
  }

  // Support the deprecated `preference` property introduced in the porcelain layer
  get preference(): ReadPreferenceMode {
    return this.mode;
  }

  static fromString(mode: string): ReadPreference {
    return new ReadPreference(mode as ReadPreferenceMode);
  }

  /**
   * Construct a ReadPreference given an options object.
   *
   * @param options - The options object from which to extract the read preference.
   */
  static fromOptions(options?: ReadPreferenceFromOptions): ReadPreference | undefined {
    if (!options) return;
    const readPreference =
      options.readPreference ?? options.session?.transaction.options.readPreference;
    const readPreferenceTags = options.readPreferenceTags;

    if (readPreference == null) {
      return;
    }

    if (typeof readPreference === 'string') {
      return new ReadPreference(readPreference, readPreferenceTags, {
        maxStalenessSeconds: options.maxStalenessSeconds,
        hedge: options.hedge
      });
    } else if (!(readPreference instanceof ReadPreference) && typeof readPreference === 'object') {
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

    return readPreference as ReadPreference;
  }

  /**
   * Replaces options.readPreference with a ReadPreference instance
   */
  static translate(options: ReadPreferenceLikeOptions): ReadPreferenceLikeOptions {
    if (options.readPreference == null) return options;
    const r = options.readPreference;

    if (typeof r === 'string') {
      options.readPreference = new ReadPreference(r);
    } else if (r && !(r instanceof ReadPreference) && typeof r === 'object') {
      const mode = r.mode || r.preference;
      if (mode && typeof mode === 'string') {
        options.readPreference = new ReadPreference(mode, r.tags, {
          maxStalenessSeconds: r.maxStalenessSeconds
        });
      }
    } else if (!(r instanceof ReadPreference)) {
      throw new MongoInvalidArgumentError(`Invalid read preference: ${r}`);
    }

    return options;
  }

  /**
   * Validate if a mode is legal
   *
   * @param mode - The string representing the read preference mode.
   */
  static isValid(mode: string): boolean {
    const VALID_MODES = new Set([
      ReadPreference.PRIMARY,
      ReadPreference.PRIMARY_PREFERRED,
      ReadPreference.SECONDARY,
      ReadPreference.SECONDARY_PREFERRED,
      ReadPreference.NEAREST,
      null
    ]);

    return VALID_MODES.has(mode as ReadPreferenceMode);
  }

  /**
   * Validate if a mode is legal
   *
   * @param mode - The string representing the read preference mode.
   */
  isValid(mode?: string): boolean {
    return ReadPreference.isValid(typeof mode === 'string' ? mode : this.mode);
  }

  /**
   * Indicates that this readPreference needs the "SecondaryOk" bit when sent over the wire
   * @see https://www.mongodb.com/docs/manual/reference/mongodb-wire-protocol/#op-query
   */
  secondaryOk(): boolean {
    const NEEDS_SECONDARYOK = new Set<string>([
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
  equals(readPreference: ReadPreference): boolean {
    return readPreference.mode === this.mode;
  }

  /** Return JSON representation */
  toJSON(): Document {
    const readPreference = { mode: this.mode } as Document;
    if (Array.isArray(this.tags)) readPreference.tags = this.tags;
    if (this.maxStalenessSeconds) readPreference.maxStalenessSeconds = this.maxStalenessSeconds;
    if (this.hedge) readPreference.hedge = this.hedge;
    return readPreference;
  }
}
