import { Db, ObjectId } from 'mongodb';
import { log } from '../logger';

interface ExamCreatorExam {
  _id: ObjectId;
  config: {
    totalTimeInMS: number;
    totalTimeInS?: number | null;
    retakeTimeInMS: number;
    retakeTimeInS?: number | null;
  };
  version: number;
}

export async function migrate(db: Db) {
  const child = log.child({ collection: 'ExamCreatorExam' });
  child.info('Starting migration for ExamCreatorExam collection');
  const collection = db.collection<ExamCreatorExam>('ExamCreatorExam');

  const query = {
    $or: [
      { 'config.totalTimeInS': { $exists: false } },
      { 'config.retakeTimeInS': { $exists: false } }
    ]
  };

  const cursor = collection.find(query, {
    projection: { _id: 1, config: 1 }
  });

  const updates: {
    _id: ExamCreatorExam['_id'];
    totalTimeInS: number;
    retakeTimeInS: number;
  }[] = [];

  while (await cursor.hasNext()) {
    const doc = await cursor.next();
    if (!doc) break;

    const totalTimeInMS = doc.config.totalTimeInMS;
    const totalTimeInS = Math.round(totalTimeInMS / 1000);

    const retakeTimeInMS = doc.config.retakeTimeInMS;
    const retakeTimeInS = Math.round(retakeTimeInMS / 1000);

    updates.push({ _id: doc._id, totalTimeInS, retakeTimeInS });
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
        'config.totalTimeInS': u.totalTimeInS,
        'config.retakeTimeInS': u.retakeTimeInS,
        version: 2
      }
    });
  }

  const result = await bulk.execute();
  child.info(
    `Bulk update complete. Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`
  );
}
