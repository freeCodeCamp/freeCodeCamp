import { PrismaClient } from '@prisma/client';
import * as mocks from '../../../__mocks__/exam-environment-exam.js';
import { MONGOHQ_URL } from '../../../src/utils/env.js';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: MONGOHQ_URL
    }
  }
});

async function main() {
  await prisma.$connect();

  await prisma.examEnvironmentExamAttempt.deleteMany({});
  await prisma.examEnvironmentGeneratedExam.deleteMany({});
  await prisma.examEnvironmentExam.deleteMany({});
  await prisma.examEnvironmentChallenge.deleteMany({});

  await prisma.examEnvironmentExam.create({ data: mocks.exam });
  await prisma.examEnvironmentGeneratedExam.create({
    data: mocks.generatedExam
  });
  await prisma.examEnvironmentExamAttempt.create({ data: mocks.examAttempt });

  await prisma.examEnvironmentChallenge.create({
    data: mocks.examEnvironmentChallenge
  });
}

void main();
