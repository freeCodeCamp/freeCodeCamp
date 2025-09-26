import { Db, ObjectId } from 'mongodb';
import { log } from '../logger';

interface ExamEnvironmentChallenge {
  _id: ObjectId;
  version?: number;
}

export async function migrate(db: Db) {
  const child = log.child({ collection: 'ExamEnvironmentChallenge' });
  child.info('Starting migration for ExamEnvironmentChallenge collection');
  const collection = db.collection<ExamEnvironmentChallenge>(
    'ExamEnvironmentChallenge'
  );

  const query = {
    version: { $exists: false }
  };

  const cursor = collection.find(query, {
    projection: { _id: 1 }
  });

  const updates: {
    _id: ExamEnvironmentChallenge['_id'];
    version: number;
  }[] = [];

  while (await cursor.hasNext()) {
    const doc = await cursor.next();
    if (!doc) break;

    updates.push({ _id: doc._id, version: 1 });
  }

  child.info(`Found ${updates.length} docs to migrate.`);

  if (!updates.length) {
    return;
  }

  // Perform updates in bulk for efficiency
  const bulk = collection.initializeUnorderedBulkOp();
  for (const u of updates) {
    bulk.find({ _id: u._id, ...query }).updateOne({
      $set: {
        version: u.version
      }
    });
  }

  const result = await bulk.execute();
  child.info(
    `Bulk update complete. Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`
  );
}
