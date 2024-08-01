import { exam } from '../../__mocks__/new-exam';
import { generateExam } from './new-exam';

describe('Exam Environment', () => {
  describe('generateExam()', () => {
    const randomizedExam = generateExam(exam);
  });

  describe('getRandomAnswers()', () => {});
});
