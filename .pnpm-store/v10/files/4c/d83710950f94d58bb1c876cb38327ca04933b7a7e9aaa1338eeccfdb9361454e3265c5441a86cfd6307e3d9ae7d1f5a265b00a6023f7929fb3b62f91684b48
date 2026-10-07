import { type Connection } from '..';
import type { BSONSerializeOptions, Document } from '../bson';
import { MIN_SUPPORTED_RAW_DATA_WIRE_VERSION } from '../cmap/wire_protocol/constants';
import { MongoInvalidArgumentError } from '../error';
import {
  decorateWithExplain,
  Explain,
  type ExplainOptions,
  validateExplainTimeoutOptions
} from '../explain';
import { ReadConcern } from '../read_concern';
import type { ReadPreference } from '../read_preference';
import type { ServerCommandOptions } from '../sdam/server';
import type { ClientSession } from '../sessions';
import { type TimeoutContext } from '../timeout';
import { commandSupportsReadConcern, maxWireVersion, MongoDBNamespace } from '../utils';
import { WriteConcern, type WriteConcernOptions } from '../write_concern';
import type { ReadConcernLike } from './../read_concern';
import { AbstractOperation, Aspect, type OperationOptions } from './operation';

/** @public */
export interface CollationOptions {
  locale: string;
  caseLevel?: boolean;
  caseFirst?: string;
  strength?: number;
  numericOrdering?: boolean;
  alternate?: string;
  maxVariable?: string;
  backwards?: boolean;
  normalization?: boolean;
}

/** @public */
export interface CommandOperationOptions
  extends OperationOptions,
    WriteConcernOptions,
    ExplainOptions {
  /** Specify a read concern and level for the collection. (only MongoDB 3.2 or higher supported) */
  readConcern?: ReadConcernLike;
  /** Collation */
  collation?: CollationOptions;
  /**
   * maxTimeMS is a server-side time limit in milliseconds for processing an operation.
   */
  maxTimeMS?: number;
  /**
   * Comment to apply to the operation.
   *
   * In server versions pre-4.4, 'comment' must be string.  A server
   * error will be thrown if any other type is provided.
   *
   * In server versions 4.4 and above, 'comment' can be any valid BSON type.
   */
  comment?: unknown;
  /**
   * @deprecated
   * This option is deprecated and will be removed in a future release as it is not used
   * in the driver. Use MongoClientOptions or connection string parameters instead.
   * */
  retryWrites?: boolean;

  // Admin command overrides.
  dbName?: string;
  authdb?: string;
  /**
   * @deprecated
   * This option is deprecated and will be removed in an upcoming major version.
   */
  noResponse?: boolean;

  /**
   * Used when the command needs to grant access to the underlying namespaces for time series collections.
   * Only available on server versions 8.2 and above and is not meant for public use.
   * @internal
   * @sinceServerVersion 8.2
   **/
  rawData?: boolean;
}

/** @internal */
export interface OperationParent {
  s: { namespace: MongoDBNamespace };
  readConcern?: ReadConcern;
  writeConcern?: WriteConcern;
  readPreference?: ReadPreference;
  bsonOptions?: BSONSerializeOptions;
  timeoutMS?: number;
}

/** @internal */
export abstract class CommandOperation<T> extends AbstractOperation<T> {
  override options: CommandOperationOptions;
  readConcern?: ReadConcern;
  writeConcern?: WriteConcern;
  explain?: Explain;

  constructor(parent?: OperationParent, options?: CommandOperationOptions) {
    super(options);
    this.options = options ?? {};

    // NOTE: this was explicitly added for the add/remove user operations, it's likely
    //       something we'd want to reconsider. Perhaps those commands can use `Admin`
    //       as a parent?
    const dbNameOverride = options?.dbName || options?.authdb;
    if (dbNameOverride) {
      this.ns = new MongoDBNamespace(dbNameOverride, '$cmd');
    } else {
      this.ns = parent
        ? parent.s.namespace.withCollection('$cmd')
        : new MongoDBNamespace('admin', '$cmd');
    }

    this.readConcern = ReadConcern.fromOptions(options);
    this.writeConcern = WriteConcern.fromOptions(options);

    if (this.hasAspect(Aspect.EXPLAINABLE)) {
      this.explain = Explain.fromOptions(options);
      if (this.explain) validateExplainTimeoutOptions(this.options, this.explain);
    } else if (options?.explain != null) {
      throw new MongoInvalidArgumentError(`Option "explain" is not supported on this command`);
    }
  }

  override get canRetryWrite(): boolean {
    if (this.hasAspect(Aspect.EXPLAINABLE)) {
      return this.explain == null;
    }
    return super.canRetryWrite;
  }

  abstract buildCommandDocument(connection: Connection, session?: ClientSession): Document;

  override buildOptions(timeoutContext: TimeoutContext): ServerCommandOptions {
    return {
      ...this.options,
      ...this.bsonOptions,
      timeoutContext,
      readPreference: this.readPreference,
      session: this.session
    };
  }

  override buildCommand(connection: Connection, session?: ClientSession): Document {
    const command = this.buildCommandDocument(connection, session);

    const inTransaction = this.session && this.session.inTransaction();

    if (this.readConcern && commandSupportsReadConcern(command) && !inTransaction) {
      Object.assign(command, { readConcern: this.readConcern });
    }

    if (this.writeConcern && this.hasAspect(Aspect.WRITE_OPERATION) && !inTransaction) {
      WriteConcern.apply(command, this.writeConcern);
    }

    if (
      this.options.collation &&
      typeof this.options.collation === 'object' &&
      !this.hasAspect(Aspect.SKIP_COLLATION)
    ) {
      Object.assign(command, { collation: this.options.collation });
    }

    if (typeof this.options.maxTimeMS === 'number') {
      command.maxTimeMS = this.options.maxTimeMS;
    }

    if (
      this.options.rawData != null &&
      this.hasAspect(Aspect.SUPPORTS_RAW_DATA) &&
      maxWireVersion(connection) >= MIN_SUPPORTED_RAW_DATA_WIRE_VERSION
    ) {
      command.rawData = this.options.rawData;
    }

    if (this.hasAspect(Aspect.EXPLAINABLE) && this.explain) {
      return decorateWithExplain(command, this.explain);
    }

    return command;
  }
}
