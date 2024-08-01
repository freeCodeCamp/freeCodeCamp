import { NewExam } from '@prisma/client';

export const examId = '647e22d18acb466c97ccbef8';

export const dialogues = [];

export const questions = [];

export const config = {
  total_time: 100,
  total_questions: 10,
  tags: [],
  question_types: [],
  dialogues: {
    number_of_multiple_choice_questions: 3
  }
};

export const exam: NewExam = {
  id: examId,
  name: 'Test Exam',
  accessibility_note: '',
  config,
  dialogues,
  questions
};
