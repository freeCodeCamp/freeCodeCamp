import assert from 'node:assert';
import { MongoClient, type Document } from 'mongodb';
import { migrations } from '../../../shared/migrations';

const {
  MONGO_URL,
  DATBASE_NAME,
  SOURCE_COLLECTION,
  DESTINATION_COLLECTION,
  BATCH_SIZE = 1,
  _LOG_FILE = 'normalizer.log'
} = process.env;

assert(MONGO_URL, 'MONGO_URL is required');
assert(DATBASE_NAME, 'DATBASE_NAME is required');
assert(SOURCE_COLLECTION, 'SOURCE_COLLECTION is required');
assert(DESTINATION_COLLECTION, 'DESTINATION_COLLECTION is required');
assert(Number(BATCH_SIZE), 'BATCH_SIZE must be a non-zero number');
assert(Number.isInteger(Number(BATCH_SIZE)), 'BATCH_SIZE must be an integer');

async function main() {
  const versions = migrations.map(({ version }) => version);

  const client = new MongoClient(MONGO_URL);

  const db = client.db(DATBASE_NAME);
  const sourceCollection = db.collection(SOURCE_COLLECTION);
  const destinationCollection = db.collection(DESTINATION_COLLECTION);

  try {
    await client.connect();
    // Confirm connection to database is successful
    await client.db(DATBASE_NAME).command({ ping: 1 });

    const batch = [];

    for (const version of versions) {
      const cursor = sourceCollection.find({
        $or: [{ version: { $lt: version } }, { version: undefined }]
      });

      for await (const document of cursor) {
        const updatedDocument = migrateDocument(document);
        batch.push({
          updateOne: {
            filter: { _id: updatedDocument['_id'] },
            update: updatedDocument,
            upsert: true
          }
        });

        if (batch.length >= Number(BATCH_SIZE)) {
          await destinationCollection.bulkWrite(batch);
          batch.splice(0);
        }
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Graceful exit
    await client.close();
  }
}

function migrateDocument(document: Document) {
  const startingVersion = document['version'] || 0;

  let updatedDocument = document;
  for (const migration of migrations) {
    if (migration.version <= startingVersion) {
      continue;
    }

    updatedDocument = migration.migrator(updatedDocument);
    updatedDocument['version'] = migration.version;
  }

  return updatedDocument;
}
