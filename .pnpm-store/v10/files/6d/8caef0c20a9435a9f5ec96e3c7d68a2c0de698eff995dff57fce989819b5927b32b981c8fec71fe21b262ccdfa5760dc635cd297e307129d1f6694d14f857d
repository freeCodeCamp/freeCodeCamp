import { type Connection } from '..';
import type { Document } from '../bson';
import {
  MIN_SUPPORTED_QE_SERVER_VERSION,
  MIN_SUPPORTED_QE_WIRE_VERSION
} from '../cmap/wire_protocol/constants';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import { Collection } from '../collection';
import type { Db } from '../db';
import { MongoCompatibilityError } from '../error';
import type { PkFactory } from '../mongo_client';
import type { ClientSession } from '../sessions';
import { TimeoutContext } from '../timeout';
import { maxWireVersion } from '../utils';
import { CommandOperation, type CommandOperationOptions } from './command';
import { executeOperation } from './execute_operation';
import { CreateIndexesOperation } from './indexes';
import { Aspect, defineAspects } from './operation';

const ILLEGAL_COMMAND_FIELDS = new Set([
  'w',
  'wtimeout',
  'timeoutMS',
  'j',
  'fsync',
  'autoIndexId',
  'pkFactory',
  'raw',
  'readPreference',
  'session',
  'readConcern',
  'writeConcern',
  'raw',
  'fieldsAsRaw',
  'useBigInt64',
  'promoteLongs',
  'promoteValues',
  'promoteBuffers',
  'bsonRegExp',
  'serializeFunctions',
  'ignoreUndefined',
  'enableUtf8Validation'
]);

/** @public
 * Configuration options for timeseries collections
 * @see https://www.mongodb.com/docs/manual/core/timeseries-collections/
 */
export interface TimeSeriesCollectionOptions extends Document {
  timeField: string;
  metaField?: string;
  granularity?: 'seconds' | 'minutes' | 'hours' | string;
  bucketMaxSpanSeconds?: number;
  bucketRoundingSeconds?: number;
}

/** @public
 * Configuration options for clustered collections
 * @see https://www.mongodb.com/docs/manual/core/clustered-collections/
 */
export interface ClusteredCollectionOptions extends Document {
  name?: string;
  key: Document;
  unique: boolean;
}

/** @public */
export interface CreateCollectionOptions extends Omit<CommandOperationOptions, 'rawData'> {
  /** Create a capped collection */
  capped?: boolean;
  /** @deprecated Create an index on the _id field of the document. This option is deprecated in MongoDB 3.2+ and will be removed once no longer supported by the server. */
  autoIndexId?: boolean;
  /** The size of the capped collection in bytes */
  size?: number;
  /** The maximum number of documents in the capped collection */
  max?: number;
  /** Available for the MMAPv1 storage engine only to set the usePowerOf2Sizes and the noPadding flag */
  flags?: number;
  /** Allows users to specify configuration to the storage engine on a per-collection basis when creating a collection */
  storageEngine?: Document;
  /** Allows users to specify validation rules or expressions for the collection. For more information, see Document Validation */
  validator?: Document;
  /** Determines how strictly MongoDB applies the validation rules to existing documents during an update */
  validationLevel?: string;
  /** Determines whether to error on invalid documents or just warn about the violations but allow invalid documents to be inserted */
  validationAction?: string;
  /** Allows users to specify a default configuration for indexes when creating a collection */
  indexOptionDefaults?: Document;
  /** The name of the source collection or view from which to create the view. The name is not the full namespace of the collection or view (i.e., does not include the database name and implies the same database as the view to create) */
  viewOn?: string;
  /** An array that consists of the aggregation pipeline stage. Creates the view by applying the specified pipeline to the viewOn collection or view */
  pipeline?: Document[];
  /** A primary key factory function for generation of custom _id keys. */
  pkFactory?: PkFactory;
  /** A document specifying configuration options for timeseries collections. */
  timeseries?: TimeSeriesCollectionOptions;
  /** A document specifying configuration options for clustered collections. For MongoDB 5.3 and above. */
  clusteredIndex?: ClusteredCollectionOptions;
  /** The number of seconds after which a document in a timeseries or clustered collection expires. */
  expireAfterSeconds?: number;
  /** @experimental */
  encryptedFields?: Document;
  /**
   * If set, enables pre-update and post-update document events to be included for any
   * change streams that listen on this collection.
   */
  changeStreamPreAndPostImages?: { enabled: boolean };
}

/* @internal */
const INVALID_QE_VERSION =
  'Driver support of Queryable Encryption is incompatible with server. Upgrade server to use Queryable Encryption.';

/** @internal */
export class CreateCollectionOperation extends CommandOperation<Collection> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: CreateCollectionOptions;
  db: Db;
  name: string;

  constructor(db: Db, name: string, options: CreateCollectionOptions = {}) {
    super(db, options);

    this.options = options;
    this.db = db;
    this.name = name;
  }

  override get commandName() {
    return 'create' as const;
  }

  override buildCommandDocument(_connection: Connection, _session?: ClientSession): Document {
    const isOptionValid = ([k, v]: [k: string, v: unknown]) =>
      v != null && typeof v !== 'function' && !ILLEGAL_COMMAND_FIELDS.has(k);
    return {
      create: this.name,
      ...Object.fromEntries(Object.entries(this.options).filter(isOptionValid))
    };
  }

  override handleOk(
    _response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): Collection<Document> {
    return new Collection(this.db, this.name, this.options);
  }
}

export async function createCollections<TSchema extends Document>(
  db: Db,
  name: string,
  options: CreateCollectionOptions
): Promise<Collection<TSchema>> {
  const timeoutContext = TimeoutContext.create({
    session: options.session,
    serverSelectionTimeoutMS: db.client.s.options.serverSelectionTimeoutMS,
    waitQueueTimeoutMS: db.client.s.options.waitQueueTimeoutMS,
    timeoutMS: options.timeoutMS
  });

  const encryptedFields: Document | undefined =
    options.encryptedFields ??
    db.client.s.options.autoEncryption?.encryptedFieldsMap?.[`${db.databaseName}.${name}`];

  if (encryptedFields) {
    class CreateSupportingFLEv2CollectionOperation extends CreateCollectionOperation {
      override buildCommandDocument(connection: Connection, session?: ClientSession): Document {
        if (
          !connection.description.loadBalanced &&
          maxWireVersion(connection) < MIN_SUPPORTED_QE_WIRE_VERSION
        ) {
          throw new MongoCompatibilityError(
            `${INVALID_QE_VERSION} The minimum server version required is ${MIN_SUPPORTED_QE_SERVER_VERSION}`
          );
        }

        return super.buildCommandDocument(connection, session);
      }
    }

    // Create auxilliary collections for queryable encryption support.
    const escCollection = encryptedFields.escCollection ?? `enxcol_.${name}.esc`;
    const ecocCollection = encryptedFields.ecocCollection ?? `enxcol_.${name}.ecoc`;

    for (const collectionName of [escCollection, ecocCollection]) {
      const createOp = new CreateSupportingFLEv2CollectionOperation(db, collectionName, {
        clusteredIndex: {
          key: { _id: 1 },
          unique: true
        },
        session: options.session
      });
      await executeOperation(db.client, createOp, timeoutContext);
    }

    if (!options.encryptedFields) {
      options = { ...options, encryptedFields };
    }
  }

  const coll = await executeOperation(
    db.client,
    new CreateCollectionOperation(db, name, options),
    timeoutContext
  );

  if (encryptedFields) {
    // Create the required index for queryable encryption support.
    const createIndexOp = CreateIndexesOperation.fromIndexSpecification(
      db,
      name,
      { __safeContent__: 1 },
      { session: options.session }
    );
    await executeOperation(db.client, createIndexOp, timeoutContext);
  }

  return coll as unknown as Collection<TSchema>;
}

defineAspects(CreateCollectionOperation, [Aspect.WRITE_OPERATION]);
