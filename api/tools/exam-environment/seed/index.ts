import { PrismaClient } from '@prisma/client';
import * as mocks from '../../../__mocks__/exam-environment-exam';
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

  await prisma.examEnvironmentExamAttempt.deleteMany({});
  await prisma.examEnvironmentGeneratedExam.deleteMany({});
  await prisma.examEnvironmentExam.deleteMany({});

  await prisma.examEnvironmentExam.create({ data: mocks.exam });
  await prisma.examEnvironmentGeneratedExam.create({
    data: mocks.generatedExam
  });
}

void main();
