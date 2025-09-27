import { Db, ObjectId } from 'mongodb';
import { log } from '../logger';

interface ExamEnvironmentExamAttempt {
  _id: ObjectId;
  questionSets: ExamEnvironmentQuestionSetAttempt[];
  startTimeInMS: number;
  startTime?: Date;
  version: number;
}

interface ExamEnvironmentQuestionSetAttempt {
  id: ObjectId;
  questions: ExamEnvironmentMultipleChoiceQuestionAttempt[];
}

interface ExamEnvironmentMultipleChoiceQuestionAttempt {
  id: ObjectId;
  submissionTimeInMS: number;
  submissionTime?: Date;
}

export async function migrate(db: Db) {
  const child = log.child({ collection: 'ExamEnvironmentExamAttempt' });
  child.info('Starting migration for ExamEnvironmentExamAttempt collection');
  const collection = db.collection<ExamEnvironmentExamAttempt>(
    'ExamEnvironmentExamAttempt'
  );

  const query = {
    $and: [
      { startTime: { $exists: false } },
      { 'questionSets.questions.submissionTime': { $exists: false } }
    ]
  };

  const cursor = collection.find(query, {
    projection: { _id: 1, questionSets: 1, startTimeInMS: 1 }
  });

  const updates: {
    _id: ExamEnvironmentExamAttempt['_id'];
    questionSets: ExamEnvironmentQuestionSetAttempt[];
    startTime: Date;
  }[] = [];

  while (await cursor.hasNext()) {
    const doc = await cursor.next();
    if (!doc) break;

    const startTime = new Date(doc.startTimeInMS);

    for (const qs of doc.questionSets) {
      for (const q of qs.questions) {
        q.submissionTime = new Date(q.submissionTimeInMS);
      }
    }

    updates.push({ _id: doc._id, startTime, questionSets: doc.questionSets });
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
        questionSets: u.questionSets,
        startTime: u.startTime,
        version: 2
      }
    });
  }

  const result = await bulk.execute();
  child.info(
    `Bulk update complete. Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`
  );
}
