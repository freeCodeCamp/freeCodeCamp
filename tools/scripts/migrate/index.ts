import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '../../../.env');
const { error } = config({ path: envPath });

if (error) {
  console.warn(`
  ----------------------------------------------------
  Warning: .env file not found.
  ----------------------------------------------------
  Please copy sample.env to .env

  You can ignore this warning if using a different way
  to setup this environment.
  ----------------------------------------------------
  `);
}

import { migrate as migrateExamCreatorUser } from './collections/exam-creator-user';
import { migrate as migrateExamCreatorExam } from './collections/exam-creator-exam';
import { migrate as migrateExamEnvironmentExam } from './collections/exam-environment-exam';
import { migrate as migrateExamEnvironmentChallenge } from './collections/exam-environment-challenge';
import { migrate as migrateExamEnvironmentExamAttempt } from './collections/exam-environment-exam-attempt';

import { log } from './logger';

const { MONGOHQ_URL } = process.env;
if (!MONGOHQ_URL) {
  console.error('MONGOHQ_URL env var is required. Aborting.');
  process.exit(1);
}

async function main() {
  const client = new MongoClient(MONGOHQ_URL as string);
  try {
    await client.db('admin').command({ ping: 1 });
    log.info('Connected to MongoDB');
    const db = client.db('freecodecamp');
    await Promise.all([
      migrateExamCreatorUser(db),
      migrateExamCreatorExam(db),
      migrateExamEnvironmentExam(db),
      migrateExamEnvironmentChallenge(db),
      migrateExamEnvironmentExamAttempt(db)
    ]);
    log.info('Migration completed successfully.');
  } catch (err) {
    log.error('Migration failed:', err);
    process.exitCode = 1;
  } finally {
    await client.close();
  }
}

main().catch(console.error);
