import { type Connection } from '..';
import type { Document } from '../bson';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import type { Collection } from '../collection';
import { MongoCompatibilityError, MongoInvalidArgumentError } from '../error';
import { ReadPreference } from '../read_preference';
import type { ClientSession } from '../sessions';
import { formatSort, type Sort, type SortForCmd } from '../sort';
import { decorateWithCollation, hasAtomicOperators, maxWireVersion } from '../utils';
import { type WriteConcern, type WriteConcernSettings } from '../write_concern';
import { CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects } from './operation';

/** @public */
export const ReturnDocument = Object.freeze({
  BEFORE: 'before',
  AFTER: 'after'
} as const);

/** @public */
export type ReturnDocument = (typeof ReturnDocument)[keyof typeof ReturnDocument];

/** @public */
export interface FindOneAndDeleteOptions extends CommandOperationOptions {
  /** An optional hint for query optimization. See the {@link https://www.mongodb.com/docs/manual/reference/command/update/#update-command-hint|update command} reference for more information.*/
  hint?: Document;
  /** Limits the fields to return for all matching documents. */
  projection?: Document;
  /** Determines which document the operation modifies if the query selects multiple documents. */
  sort?: Sort;
  /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
  let?: Document;
  /**
   * Return the ModifyResult instead of the modified document. Defaults to false
   */
  includeResultMetadata?: boolean;
}

/** @public */
export interface FindOneAndReplaceOptions extends CommandOperationOptions {
  /** Allow driver to bypass schema validation. */
  bypassDocumentValidation?: boolean;
  /** An optional hint for query optimization. See the {@link https://www.mongodb.com/docs/manual/reference/command/update/#update-command-hint|update command} reference for more information.*/
  hint?: Document;
  /** Limits the fields to return for all matching documents. */
  projection?: Document;
  /** When set to 'after', returns the updated document rather than the original. The default is 'before'.  */
  returnDocument?: ReturnDocument;
  /** Determines which document the operation modifies if the query selects multiple documents. */
  sort?: Sort;
  /** Upsert the document if it does not exist. */
  upsert?: boolean;
  /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
  let?: Document;
  /**
   * Return the ModifyResult instead of the modified document. Defaults to false
   */
  includeResultMetadata?: boolean;
}

/** @public */
export interface FindOneAndUpdateOptions extends CommandOperationOptions {
  /** Optional list of array filters referenced in filtered positional operators */
  arrayFilters?: Document[];
  /** Allow driver to bypass schema validation. */
  bypassDocumentValidation?: boolean;
  /** An optional hint for query optimization. See the {@link https://www.mongodb.com/docs/manual/reference/command/update/#update-command-hint|update command} reference for more information.*/
  hint?: Document;
  /** Limits the fields to return for all matching documents. */
  projection?: Document;
  /** When set to 'after', returns the updated document rather than the original. The default is 'before'.  */
  returnDocument?: ReturnDocument;
  /** Determines which document the operation modifies if the query selects multiple documents. */
  sort?: Sort;
  /** Upsert the document if it does not exist. */
  upsert?: boolean;
  /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
  let?: Document;
  /**
   * Return the ModifyResult instead of the modified document. Defaults to false
   */
  includeResultMetadata?: boolean;
}

/** @internal */
interface FindAndModifyCmdBase {
  remove: boolean;
  new: boolean;
  upsert: boolean;
  update?: Document;
  sort?: SortForCmd;
  fields?: Document;
  bypassDocumentValidation?: boolean;
  arrayFilters?: Document[];
  maxTimeMS?: number;
  let?: Document;
  writeConcern?: WriteConcern | WriteConcernSettings;
  /**
   * Comment to apply to the operation.
   *
   * In server versions pre-4.4, 'comment' must be string.  A server
   * error will be thrown if any other type is provided.
   *
   * In server versions 4.4 and above, 'comment' can be any valid BSON type.
   */
  comment?: unknown;
}

function configureFindAndModifyCmdBaseUpdateOpts(
  cmdBase: FindAndModifyCmdBase,
  options: FindOneAndReplaceOptions | FindOneAndUpdateOptions
): FindAndModifyCmdBase {
  cmdBase.new = options.returnDocument === ReturnDocument.AFTER;
  cmdBase.upsert = options.upsert === true;

  if (options.bypassDocumentValidation === true) {
    cmdBase.bypassDocumentValidation = options.bypassDocumentValidation;
  }
  return cmdBase;
}

/** @internal */
export class FindAndModifyOperation extends CommandOperation<Document> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: FindOneAndReplaceOptions | FindOneAndUpdateOptions | FindOneAndDeleteOptions;
  collection: Collection;
  query: Document;
  doc?: Document;

  constructor(
    collection: Collection,
    query: Document,
    options: FindOneAndReplaceOptions | FindOneAndUpdateOptions | FindOneAndDeleteOptions
  ) {
    super(collection, options);
    this.options = options;
    // force primary read preference
    this.readPreference = ReadPreference.primary;

    this.collection = collection;
    this.query = query;
  }

  override get commandName() {
    return 'findAndModify' as const;
  }

  override buildCommandDocument(
    connection: Connection,
    _session?: ClientSession
  ): Document & FindAndModifyCmdBase {
    const options = this.options;
    const command: Document & FindAndModifyCmdBase = {
      findAndModify: this.collection.collectionName,
      query: this.query,
      remove: false,
      new: false,
      upsert: false
    };

    options.includeResultMetadata ??= false;

    const sort = formatSort(options.sort);
    if (sort) {
      command.sort = sort;
    }

    if (options.projection) {
      command.fields = options.projection;
    }

    if (options.maxTimeMS) {
      command.maxTimeMS = options.maxTimeMS;
    }

    // Decorate the findAndModify command with the write Concern
    if (options.writeConcern) {
      command.writeConcern = options.writeConcern;
    }

    if (options.let) {
      command.let = options.let;
    }

    // we check for undefined specifically here to allow falsy values
    // eslint-disable-next-line no-restricted-syntax
    if (options.comment !== undefined) {
      command.comment = options.comment;
    }

    decorateWithCollation(command, options);

    if (options.hint) {
      const unacknowledgedWrite = this.writeConcern?.w === 0;
      if (unacknowledgedWrite && maxWireVersion(connection) < 9) {
        throw new MongoCompatibilityError(
          'hint for the findAndModify command is only supported on MongoDB 4.4+'
        );
      }

      command.hint = options.hint;
    }

    return command;
  }

  override handleOk(response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>): Document {
    const result = super.handleOk(response);
    return this.options.includeResultMetadata ? result : (result.value ?? null);
  }
}

/** @internal */
export class FindOneAndDeleteOperation extends FindAndModifyOperation {
  constructor(collection: Collection, filter: Document, options: FindOneAndDeleteOptions) {
    // Basic validation
    if (filter == null || typeof filter !== 'object') {
      throw new MongoInvalidArgumentError('Argument "filter" must be an object');
    }

    super(collection, filter, options);
  }

  override buildCommandDocument(
    connection: Connection,
    session?: ClientSession
  ): Document & FindAndModifyCmdBase {
    const document = super.buildCommandDocument(connection, session);
    document.remove = true;
    return document;
  }
}

/** @internal */
export class FindOneAndReplaceOperation extends FindAndModifyOperation {
  private replacement: Document;
  constructor(
    collection: Collection,
    filter: Document,
    replacement: Document,
    options: FindOneAndReplaceOptions
  ) {
    if (filter == null || typeof filter !== 'object') {
      throw new MongoInvalidArgumentError('Argument "filter" must be an object');
    }

    if (replacement == null || typeof replacement !== 'object') {
      throw new MongoInvalidArgumentError('Argument "replacement" must be an object');
    }

    if (hasAtomicOperators(replacement)) {
      throw new MongoInvalidArgumentError('Replacement document must not contain atomic operators');
    }

    super(collection, filter, options);
    this.replacement = replacement;
  }

  override buildCommandDocument(
    connection: Connection,
    session?: ClientSession
  ): Document & FindAndModifyCmdBase {
    const document = super.buildCommandDocument(connection, session);
    document.update = this.replacement;
    configureFindAndModifyCmdBaseUpdateOpts(document, this.options);
    return document;
  }
}

/** @internal */
export class FindOneAndUpdateOperation extends FindAndModifyOperation {
  override options: FindOneAndUpdateOptions;

  private update: Document;
  constructor(
    collection: Collection,
    filter: Document,
    update: Document,
    options: FindOneAndUpdateOptions
  ) {
    if (filter == null || typeof filter !== 'object') {
      throw new MongoInvalidArgumentError('Argument "filter" must be an object');
    }

    if (update == null || typeof update !== 'object') {
      throw new MongoInvalidArgumentError('Argument "update" must be an object');
    }

    if (!hasAtomicOperators(update, options)) {
      throw new MongoInvalidArgumentError('Update document requires atomic operators');
    }

    super(collection, filter, options);
    this.update = update;
    this.options = options;
  }

  override buildCommandDocument(
    connection: Connection,
    session?: ClientSession
  ): Document & FindAndModifyCmdBase {
    const document = super.buildCommandDocument(connection, session);
    document.update = this.update;
    configureFindAndModifyCmdBaseUpdateOpts(document, this.options);

    if (this.options.arrayFilters) {
      document.arrayFilters = this.options.arrayFilters;
    }

    return document;
  }
}

defineAspects(FindAndModifyOperation, [
  Aspect.WRITE_OPERATION,
  Aspect.RETRYABLE,
  Aspect.EXPLAINABLE,
  Aspect.SUPPORTS_RAW_DATA
]);
