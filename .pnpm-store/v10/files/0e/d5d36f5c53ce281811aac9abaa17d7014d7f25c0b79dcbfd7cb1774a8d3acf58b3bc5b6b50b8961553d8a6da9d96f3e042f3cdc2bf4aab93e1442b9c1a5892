import { type Document } from './bson';
import { MongoDBResponse } from './cmap/wire_protocol/responses';
import { MongoWriteConcernError } from './error';

/** @public */
export type W = number | 'majority';

/** @public */
export interface WriteConcernOptions {
  /** Write Concern as an object */
  writeConcern?: WriteConcern | WriteConcernSettings;
}

/** @public */
export interface WriteConcernSettings {
  /** The write concern */
  w?: W;
  /**
   * The write concern timeout.
   */
  wtimeoutMS?: number;
  /** The journal write concern */
  journal?: boolean;

  // legacy options
  /**
   * The journal write concern.
   * @deprecated Will be removed in the next major version. Please use the journal option.
   */
  j?: boolean;
  /**
   * The write concern timeout.
   */
  wtimeout?: number;
  /**
   * The file sync write concern.
   * @deprecated Will be removed in the next major version. Please use the journal option.
   */
  fsync?: boolean | 1;
}

export const WRITE_CONCERN_KEYS = ['w', 'wtimeout', 'j', 'journal', 'fsync'];

/** The write concern options that decorate the server command. */
interface CommandWriteConcernOptions {
  /** The write concern */
  w?: W;
  /** The journal write concern. */
  j?: boolean;
  /** The write concern timeout. */
  wtimeout?: number;
}

/**
 * A MongoDB WriteConcern, which describes the level of acknowledgement
 * requested from MongoDB for write operations.
 * @public
 *
 * @see https://www.mongodb.com/docs/manual/reference/write-concern/
 */
export class WriteConcern {
  /**
   * Request acknowledgment that the write operation has propagated to a specified number of mongod instances or to mongod instances with specified tags.
   * If w is 0 and is set on a write operation, the server will not send a response.
   */
  readonly w?: W;
  /** Request acknowledgment that the write operation has been written to the on-disk journal */
  readonly journal?: boolean;
  /**
   * Specify a time limit to prevent write operations from blocking indefinitely.
   */
  readonly wtimeoutMS?: number;
  /**
   * Specify a time limit to prevent write operations from blocking indefinitely.
   * @deprecated Will be removed in the next major version. Please use wtimeoutMS.
   */
  wtimeout?: number;
  /**
   * Request acknowledgment that the write operation has been written to the on-disk journal.
   * @deprecated Will be removed in the next major version. Please use journal.
   */
  j?: boolean;
  /**
   * Equivalent to the j option.
   * @deprecated Will be removed in the next major version. Please use journal.
   */
  fsync?: boolean | 1;

  /**
   * Constructs a WriteConcern from the write concern properties.
   * @param w - request acknowledgment that the write operation has propagated to a specified number of mongod instances or to mongod instances with specified tags.
   * @param wtimeoutMS - specify a time limit to prevent write operations from blocking indefinitely
   * @param journal - request acknowledgment that the write operation has been written to the on-disk journal
   * @param fsync - equivalent to the j option. Is deprecated and will be removed in the next major version.
   */
  constructor(w?: W, wtimeoutMS?: number, journal?: boolean, fsync?: boolean | 1) {
    if (w != null) {
      if (!Number.isNaN(Number(w))) {
        this.w = Number(w);
      } else {
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
  static apply(command: Document, writeConcern: WriteConcern): Document {
    const wc: CommandWriteConcernOptions = {};
    // The write concern document sent to the server has w/wtimeout/j fields.
    if (writeConcern.w != null) wc.w = writeConcern.w;
    if (writeConcern.wtimeoutMS != null) wc.wtimeout = writeConcern.wtimeoutMS;
    if (writeConcern.journal != null) wc.j = writeConcern.j;
    command.writeConcern = wc;
    return command;
  }

  /** Construct a WriteConcern given an options object. */
  static fromOptions(
    options?: WriteConcernOptions | WriteConcern | W,
    inherit?: WriteConcernOptions | WriteConcern
  ): WriteConcern | undefined {
    if (options == null) return undefined;
    inherit = inherit ?? {};
    let opts: WriteConcernSettings | WriteConcern | undefined;
    if (typeof options === 'string' || typeof options === 'number') {
      opts = { w: options };
    } else if (options instanceof WriteConcern) {
      opts = options;
    } else {
      opts = options.writeConcern;
    }
    const parentOpts: WriteConcern | WriteConcernSettings | undefined =
      inherit instanceof WriteConcern ? inherit : inherit.writeConcern;

    const mergedOpts = { ...parentOpts, ...opts } as WriteConcernSettings;
    const {
      w = undefined,
      wtimeout = undefined,
      j = undefined,
      fsync = undefined,
      journal = undefined,
      wtimeoutMS = undefined
    } = mergedOpts;
    if (
      w != null ||
      wtimeout != null ||
      wtimeoutMS != null ||
      j != null ||
      journal != null ||
      fsync != null
    ) {
      return new WriteConcern(w, wtimeout ?? wtimeoutMS, j ?? journal, fsync);
    }
    return undefined;
  }
}

/** Called with either a plain object or MongoDBResponse */
export function throwIfWriteConcernError(response: unknown): void {
  if (typeof response === 'object' && response != null) {
    const writeConcernError: object | null =
      MongoDBResponse.is(response) && response.has('writeConcernError')
        ? response.toObject()
        : !MongoDBResponse.is(response) && 'writeConcernError' in response
          ? response
          : null;

    if (writeConcernError != null) {
      throw new MongoWriteConcernError(writeConcernError as any);
    }
  }
}
