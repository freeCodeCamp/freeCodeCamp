import { readFileSync } from 'fs';
import path, { join } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import yaml from 'js-yaml';
import { MongoClient, ObjectId } from 'mongodb';

import { validateExamSchema } from './exam-schema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
const { MONGOHQ_URL } = process.env;

// Only these will be added to or updated in the database
const examFilenames = [
  'foundational-c-sharp-with-microsoft-certification-exam.yml',
  'example-certification-exam.yml'
];

const client = new MongoClient(MONGOHQ_URL, { useUnifiedTopology: true });

const db = client.db('freecodecamp');
const exams = db.collection('Exam');

function handleError(err, client) {
  if (err) {
    console.error('Oh noes!! Error seeding exams.');
    console.error(err);
    try {
      client.close();
    } catch (e) {
      // no-op
    } finally {
      /* eslint-disable-next-line no-process-exit */
      process.exit(1);
    }
  }
}

const seed = async () => {
  for (const filename of examFilenames) {
    try {
      const examPath = join('./exams', filename);
      const examFile = readFileSync(examPath, { encoding: 'utf-8' });
      const examJson = yaml.load(examFile);
      const validExam = validateExamSchema(examJson);

      if (validExam.error) {
        throw new Error(
          `Invalid exam schema for '${filename}': ${validExam.error.message}`
        );
      }

      examJson._id = new ObjectId(examJson._id);

      // Update existing database object, or create new if it doesn't exist
      await exams.updateOne(
        { _id: examJson._id },
        { $set: examJson },
        { upsert: true }
      );

      console.log(`'${examJson.title}' added to exams database.`);
    } catch (err) {
      handleError(err, client);
    }
  }

  console.log('Finished seeding exams.');
};

seed()
  .then(() => client.close())
  .catch(err => handleError(err, client));
