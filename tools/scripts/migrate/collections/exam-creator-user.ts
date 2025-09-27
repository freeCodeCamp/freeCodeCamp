import { Db, ObjectId } from 'mongodb';
import { log } from '../logger';

interface ExamCreatorUser {
  _id: ObjectId;
  settings?: ExamCreatorUserSettings;
  version: number;
}

interface ExamCreatorUserSettings {
  databaseEnvironment: 'production' | 'staging';
}

export async function migrate(db: Db) {
  const child = log.child({ collection: 'ExamCreatorUser' });
  child.info('Starting migration for ExamCreatorUser collection');
  const collection = db.collection<ExamCreatorUser>('ExamCreatorUser');

  const query = {
    $or: [{ settings: { $exists: false } }, { version: { $exists: false } }]
  };

  const cursor = collection.find(query, {
    projection: { _id: 1, settings: 1 }
  });

  const updates: {
    _id: ExamCreatorUser['_id'];
    settings: ExamCreatorUserSettings;
  }[] = [];

  while (await cursor.hasNext()) {
    const doc = await cursor.next();
    if (!doc) break;

    const settings: ExamCreatorUserSettings = {
      databaseEnvironment: doc.settings?.databaseEnvironment || 'production'
    };

    updates.push({ _id: doc._id, settings });
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
        settings: u.settings,
        version: 1
      }
    });
  }

  const result = await bulk.execute();
  child.info(
    `Bulk update complete. Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`
  );
}
