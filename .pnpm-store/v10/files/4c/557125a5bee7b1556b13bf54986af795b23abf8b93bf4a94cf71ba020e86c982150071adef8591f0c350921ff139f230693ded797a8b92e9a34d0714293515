import { BSON, type BSONSerializeOptions, type Document } from '../../bson';
import { DocumentSequence } from '../../cmap/commands';
import { MongoAPIError, MongoInvalidArgumentError } from '../../error';
import { type PkFactory } from '../../mongo_client';
import type { Filter, OptionalId, UpdateFilter, WithoutId } from '../../mongo_types';
import { formatSort, type SortForCmd } from '../../sort';
import { DEFAULT_PK_FACTORY, hasAtomicOperators } from '../../utils';
import { type CollationOptions } from '../command';
import { type Hint } from '../operation';
import type {
  AnyClientBulkWriteModel,
  ClientBulkWriteOptions,
  ClientDeleteManyModel,
  ClientDeleteOneModel,
  ClientInsertOneModel,
  ClientReplaceOneModel,
  ClientUpdateManyModel,
  ClientUpdateOneModel
} from './common';

/** @internal */
export interface ClientBulkWriteCommand {
  bulkWrite: 1;
  errorsOnly: boolean;
  ordered: boolean;
  ops: DocumentSequence;
  nsInfo: DocumentSequence;
  bypassDocumentValidation?: boolean;
  let?: Document;
  comment?: any;
}

/**
 * The bytes overhead for the extra fields added post command generation.
 */
const MESSAGE_OVERHEAD_BYTES = 1000;

/** @internal */
export class ClientBulkWriteCommandBuilder {
  models: ReadonlyArray<AnyClientBulkWriteModel<Document>>;
  options: ClientBulkWriteOptions;
  pkFactory: PkFactory;
  /** The current index in the models array that is being processed. */
  currentModelIndex: number;
  /** The model index that the builder was on when it finished the previous batch. Used for resets when retrying. */
  previousModelIndex: number;
  /** The last array of operations that were created. Used by the results merger for indexing results. */
  lastOperations: Document[];
  /** Returns true if the current batch being created has no multi-updates. */
  isBatchRetryable: boolean;

  /**
   * Create the command builder.
   * @param models - The client write models.
   */
  constructor(
    models: ReadonlyArray<AnyClientBulkWriteModel<Document>>,
    options: ClientBulkWriteOptions,
    pkFactory?: PkFactory
  ) {
    this.models = models;
    this.options = options;
    this.pkFactory = pkFactory ?? DEFAULT_PK_FACTORY;
    this.currentModelIndex = 0;
    this.previousModelIndex = 0;
    this.lastOperations = [];
    this.isBatchRetryable = true;
  }

  /**
   * Gets the errorsOnly value for the command, which is the inverse of the
   * user provided verboseResults option. Defaults to true.
   */
  get errorsOnly(): boolean {
    if ('verboseResults' in this.options) {
      return !this.options.verboseResults;
    }
    return true;
  }

  /**
   * Determines if there is another batch to process.
   * @returns True if not all batches have been built.
   */
  hasNextBatch(): boolean {
    return this.currentModelIndex < this.models.length;
  }

  /**
   * When we need to retry a command we need to set the current
   * model index back to its previous value.
   */
  resetBatch(): boolean {
    this.currentModelIndex = this.previousModelIndex;
    return true;
  }

  /**
   * Build a single batch of a client bulk write command.
   * @param maxMessageSizeBytes - The max message size in bytes.
   * @param maxWriteBatchSize - The max write batch size.
   * @returns The client bulk write command.
   */
  buildBatch(
    maxMessageSizeBytes: number,
    maxWriteBatchSize: number,
    maxBsonObjectSize: number
  ): ClientBulkWriteCommand {
    // We start by assuming the batch has no multi-updates, so it is retryable
    // until we find them.
    this.isBatchRetryable = true;
    let commandLength = 0;
    let currentNamespaceIndex = 0;
    const command: ClientBulkWriteCommand = this.baseCommand();
    const namespaces = new Map<string, number>();
    // In the case of retries we need to mark where we started this batch.
    this.previousModelIndex = this.currentModelIndex;

    while (this.currentModelIndex < this.models.length) {
      const model = this.models[this.currentModelIndex];
      const ns = model.namespace;
      const nsIndex = namespaces.get(ns);

      // Multi updates are not retryable.
      if (model.name === 'deleteMany' || model.name === 'updateMany') {
        this.isBatchRetryable = false;
      }

      if (nsIndex != null) {
        // Build the operation and serialize it to get the bytes buffer.
        const operation = buildOperation(model, nsIndex, this.pkFactory, this.options);
        let operationBuffer;
        try {
          operationBuffer = BSON.serialize(operation);
        } catch (cause) {
          throw new MongoInvalidArgumentError(`Could not serialize operation to BSON`, { cause });
        }

        validateBufferSize('ops', operationBuffer, maxBsonObjectSize);

        // Check if the operation buffer can fit in the command. If it can,
        // then add the operation to the document sequence and increment the
        // current length as long as the ops don't exceed the maxWriteBatchSize.
        if (
          commandLength + operationBuffer.length < maxMessageSizeBytes &&
          command.ops.documents.length < maxWriteBatchSize
        ) {
          // Pushing to the ops document sequence returns the total byte length of the document sequence.
          commandLength = MESSAGE_OVERHEAD_BYTES + command.ops.push(operation, operationBuffer);
          // Increment the builder's current model index.
          this.currentModelIndex++;
        } else {
          // The operation cannot fit in the current command and will need to
          // go in the next batch. Exit the loop.
          break;
        }
      } else {
        // The namespace is not already in the nsInfo so we will set it in the map, and
        // construct our nsInfo and ops documents and buffers.
        namespaces.set(ns, currentNamespaceIndex);
        const nsInfo = { ns: ns };
        const operation = buildOperation(
          model,
          currentNamespaceIndex,
          this.pkFactory,
          this.options
        );
        let nsInfoBuffer;
        let operationBuffer;
        try {
          nsInfoBuffer = BSON.serialize(nsInfo);
          operationBuffer = BSON.serialize(operation);
        } catch (cause) {
          throw new MongoInvalidArgumentError(`Could not serialize ns info to BSON`, { cause });
        }

        validateBufferSize('nsInfo', nsInfoBuffer, maxBsonObjectSize);
        validateBufferSize('ops', operationBuffer, maxBsonObjectSize);

        // Check if the operation and nsInfo buffers can fit in the command. If they
        // can, then add the operation and nsInfo to their respective document
        // sequences and increment the current length as long as the ops don't exceed
        // the maxWriteBatchSize.
        if (
          commandLength + nsInfoBuffer.length + operationBuffer.length < maxMessageSizeBytes &&
          command.ops.documents.length < maxWriteBatchSize
        ) {
          // Pushing to the ops document sequence returns the total byte length of the document sequence.
          commandLength =
            MESSAGE_OVERHEAD_BYTES +
            command.nsInfo.push(nsInfo, nsInfoBuffer) +
            command.ops.push(operation, operationBuffer);
          // We've added a new namespace, increment the namespace index.
          currentNamespaceIndex++;
          // Increment the builder's current model index.
          this.currentModelIndex++;
        } else {
          // The operation cannot fit in the current command and will need to
          // go in the next batch. Exit the loop.
          break;
        }
      }
    }
    // Set the last operations and return the command.
    this.lastOperations = command.ops.documents;
    return command;
  }

  private baseCommand(): ClientBulkWriteCommand {
    const command: ClientBulkWriteCommand = {
      bulkWrite: 1,
      errorsOnly: this.errorsOnly,
      ordered: this.options.ordered ?? true,
      ops: new DocumentSequence('ops'),
      nsInfo: new DocumentSequence('nsInfo')
    };
    // Add bypassDocumentValidation if it was present in the options.
    if (this.options.bypassDocumentValidation != null) {
      command.bypassDocumentValidation = this.options.bypassDocumentValidation;
    }
    // Add let if it was present in the options.
    if (this.options.let) {
      command.let = this.options.let;
    }

    // we check for undefined specifically here to allow falsy values
    // eslint-disable-next-line no-restricted-syntax
    if (this.options.comment !== undefined) {
      command.comment = this.options.comment;
    }

    return command;
  }
}

function validateBufferSize(name: string, buffer: Uint8Array, maxBsonObjectSize: number) {
  if (buffer.length > maxBsonObjectSize) {
    throw new MongoInvalidArgumentError(
      `Client bulk write operation ${name} of length ${buffer.length} exceeds the max bson object size of ${maxBsonObjectSize}`
    );
  }
}

/** @internal */
interface ClientInsertOperation {
  insert: number;
  document: OptionalId<Document>;
}

/**
 * Build the insert one operation.
 * @param model - The insert one model.
 * @param index - The namespace index.
 * @returns the operation.
 */
export const buildInsertOneOperation = (
  model: ClientInsertOneModel<Document>,
  index: number,
  pkFactory: PkFactory
): ClientInsertOperation => {
  const document: ClientInsertOperation = {
    insert: index,
    document: model.document
  };
  document.document._id = model.document._id ?? pkFactory.createPk();
  return document;
};

/** @internal */
export interface ClientDeleteOperation {
  delete: number;
  multi: boolean;
  filter: Filter<Document>;
  hint?: Hint;
  collation?: CollationOptions;
}

/**
 * Build the delete one operation.
 * @param model - The insert many model.
 * @param index - The namespace index.
 * @returns the operation.
 */
export const buildDeleteOneOperation = (
  model: ClientDeleteOneModel<Document>,
  index: number
): Document => {
  return createDeleteOperation(model, index, false);
};

/**
 * Build the delete many operation.
 * @param model - The delete many model.
 * @param index - The namespace index.
 * @returns the operation.
 */
export const buildDeleteManyOperation = (
  model: ClientDeleteManyModel<Document>,
  index: number
): Document => {
  return createDeleteOperation(model, index, true);
};

/**
 * Creates a delete operation based on the parameters.
 */
function createDeleteOperation(
  model: ClientDeleteOneModel<Document> | ClientDeleteManyModel<Document>,
  index: number,
  multi: boolean
): ClientDeleteOperation {
  const document: ClientDeleteOperation = {
    delete: index,
    multi: multi,
    filter: model.filter
  };
  if (model.hint) {
    document.hint = model.hint;
  }
  if (model.collation) {
    document.collation = model.collation;
  }
  return document;
}

/** @internal */
export interface ClientUpdateOperation {
  update: number;
  multi: boolean;
  filter: Filter<Document>;
  updateMods: UpdateFilter<Document> | Document[];
  hint?: Hint;
  upsert?: boolean;
  arrayFilters?: Document[];
  collation?: CollationOptions;
  sort?: SortForCmd;
}

/**
 * Build the update one operation.
 * @param model - The update one model.
 * @param index - The namespace index.
 * @returns the operation.
 */
export const buildUpdateOneOperation = (
  model: ClientUpdateOneModel<Document>,
  index: number,
  options: BSONSerializeOptions
): ClientUpdateOperation => {
  return createUpdateOperation(model, index, false, options);
};

/**
 * Build the update many operation.
 * @param model - The update many model.
 * @param index - The namespace index.
 * @returns the operation.
 */
export const buildUpdateManyOperation = (
  model: ClientUpdateManyModel<Document>,
  index: number,
  options: BSONSerializeOptions
): ClientUpdateOperation => {
  return createUpdateOperation(model, index, true, options);
};

/**
 * Validate the update document.
 * @param update - The update document.
 */
function validateUpdate(update: Document, options: BSONSerializeOptions) {
  if (!hasAtomicOperators(update, options)) {
    throw new MongoAPIError(
      'Client bulk write update models must only contain atomic modifiers (start with $) and must not be empty.'
    );
  }
}

/**
 * Creates a delete operation based on the parameters.
 */
function createUpdateOperation(
  model: ClientUpdateOneModel<Document> | ClientUpdateManyModel<Document>,
  index: number,
  multi: boolean,
  options: BSONSerializeOptions
): ClientUpdateOperation {
  // Update documents provided in UpdateOne and UpdateMany write models are
  // required only to contain atomic modifiers (i.e. keys that start with "$").
  // Drivers MUST throw an error if an update document is empty or if the
  // document's first key does not start with "$".
  validateUpdate(model.update, options);
  const document: ClientUpdateOperation = {
    update: index,
    multi: multi,
    filter: model.filter,
    updateMods: model.update
  };
  if (model.hint) {
    document.hint = model.hint;
  }
  if (model.upsert) {
    document.upsert = model.upsert;
  }
  if (model.arrayFilters) {
    document.arrayFilters = model.arrayFilters;
  }
  if (model.collation) {
    document.collation = model.collation;
  }
  if (!multi && 'sort' in model && model.sort != null) {
    document.sort = formatSort(model.sort);
  }
  return document;
}

/** @internal */
export interface ClientReplaceOneOperation {
  update: number;
  multi: boolean;
  filter: Filter<Document>;
  updateMods: WithoutId<Document>;
  hint?: Hint;
  upsert?: boolean;
  collation?: CollationOptions;
  sort?: SortForCmd;
}

/**
 * Build the replace one operation.
 * @param model - The replace one model.
 * @param index - The namespace index.
 * @returns the operation.
 */
export const buildReplaceOneOperation = (
  model: ClientReplaceOneModel<Document>,
  index: number
): ClientReplaceOneOperation => {
  if (hasAtomicOperators(model.replacement)) {
    throw new MongoAPIError(
      'Client bulk write replace models must not contain atomic modifiers (start with $) and must not be empty.'
    );
  }

  const document: ClientReplaceOneOperation = {
    update: index,
    multi: false,
    filter: model.filter,
    updateMods: model.replacement
  };
  if (model.hint) {
    document.hint = model.hint;
  }
  if (model.upsert) {
    document.upsert = model.upsert;
  }
  if (model.collation) {
    document.collation = model.collation;
  }
  if (model.sort != null) {
    document.sort = formatSort(model.sort);
  }
  return document;
};

/** @internal */
export function buildOperation(
  model: AnyClientBulkWriteModel<Document>,
  index: number,
  pkFactory: PkFactory,
  options: BSONSerializeOptions
): Document {
  switch (model.name) {
    case 'insertOne':
      return buildInsertOneOperation(model, index, pkFactory);
    case 'deleteOne':
      return buildDeleteOneOperation(model, index);
    case 'deleteMany':
      return buildDeleteManyOperation(model, index);
    case 'updateOne':
      return buildUpdateOneOperation(model, index, options);
    case 'updateMany':
      return buildUpdateManyOperation(model, index, options);
    case 'replaceOne':
      return buildReplaceOneOperation(model, index);
  }
}
