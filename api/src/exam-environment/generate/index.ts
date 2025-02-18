import { PrismaClient } from '@prisma/client';
import { generateExam } from '../utils/exam';
import { MONGOHQ_URL } from '../../utils/env';

const args = process.argv.slice(2);
const ENV_EXAM_ID = args[0];
const NUMBER_OF_EXAMS_TO_GENERATE = Number(args[1]);

if (!ENV_EXAM_ID) {
  throw Error('First argument must be the EnvExam _id');
}
if (!NUMBER_OF_EXAMS_TO_GENERATE) {
  throw Error('Second argument must be an unsigned integer');
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: MONGOHQ_URL
    }
  }
});

/// TODO:
/// 1. Deprecate all previous generated exams for a given exam id?
async function main() {
  console.info('Connecting to cluster...');
  await prisma.$connect();
  console.info('Connected.');

  const exam = await prisma.envExam.findUnique({
    where: {
      id: ENV_EXAM_ID
    }
  });

  if (!exam) {
    throw Error(`No exam with id "${ENV_EXAM_ID}" found.`);
  }

  let numberOfExamsGenerated = 0;

  console.info(
    `Exam with _id ${ENV_EXAM_ID} found. Generating ${NUMBER_OF_EXAMS_TO_GENERATE} exams...`
  );
  while (numberOfExamsGenerated < NUMBER_OF_EXAMS_TO_GENERATE) {
    try {
      const generatedExam = generateExam(exam);
      await prisma.envGeneratedExam.create({
        data: generatedExam
      });
      numberOfExamsGenerated++;
      console.info(`Generated ${numberOfExamsGenerated} exams`);
    } catch (e) {
      console.log(e);
    }
  }
  console.log(`Finished generating exams.`);
}

void main();
