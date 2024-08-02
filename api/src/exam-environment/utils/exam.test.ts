import { exam } from '../../../__mocks__/new-exam';
import { generateExam } from './exam';

describe('Exam Environment', () => {
  describe('generateExam()', () => {
    const _randomizedExam = generateExam(exam);
  });

  describe('getRandomAnswers()', () => {});
});
