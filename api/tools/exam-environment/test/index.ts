//! Check the records on the database matches the Prisma schema
//!
//! This script should be run, before any deployments with Exam schema changes.
//! WARNING: This script queries every single record in the `Env<>` collections.
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { MONGOHQ_URL } from '../../../src/utils/env';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: MONGOHQ_URL
    }
  }
});

async function main() {
  await prisma.$connect();
  try {
    const examEnvironmentExam = await prisma.examEnvironmentExam.findMany();
    const examEnvironmentGeneratedExam =
      await prisma.examEnvironmentGeneratedExam.findMany();
    const examEnvironmentExamAttempt =
      await prisma.examEnvironmentExamAttempt.findMany();

    console.log('Number of exams:', examEnvironmentExam.length);
    console.log(
      'Number of generated exams:',
      examEnvironmentGeneratedExam.length
    );
    console.log('Number of exam attempts:', examEnvironmentExamAttempt.length);
    // NOTE: This is not strictly true. E.g. If a `Boolean` becomes an `Int`, Prisma converts it instead of throwing.
    console.log('\nSUCCESS! The database schema matches the Prisma schema.');
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      console.log(error.message);
      console.info('\nCHECK DATABASE SCHEMA!');
    }
  }
}

void main();
