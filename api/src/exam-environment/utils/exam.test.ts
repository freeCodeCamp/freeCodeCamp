import { exam } from '../../../__mocks__/env-exam';
import { generateExam } from './exam';

describe('Exam Environment', () => {
  xdescribe('checkAttemptAgainstGeneratedExam()', () => {});
  xdescribe('checkPrequisites()', () => {});
  xdescribe('constructUserExam()', () => {});

  describe('generateExam()', () => {
    it('should generate a randomized exam without throwing', () => {
      const randomizedExam = generateExam(exam);
      console.log(JSON.stringify(randomizedExam, null, 2));
    });

    it('should generate an exam matching with the correct number of question sets', () => {
      const generatedExam = generateExam(exam);

      // { [type]: numberOfType }
      // E.g. { MultipleChoice: 2, Dialogue: 1 }
      const generatedNumberOfSets = generatedExam.questionSets.reduce(
        (acc, curr) => {
          const eqs = exam.questionSets.find(eqs => eqs.id === curr.id);

          if (!eqs) {
            throw new Error('Generated question set not found in exam config');
          }

          return {
            ...acc,
            [eqs.type]: (acc[eqs.type] || 0) + 1
          };
        },
        {} as Record<string, number>
      );

      const configNumberOfSets = exam.config.questionSets.reduce(
        (acc, curr) => {
          return {
            ...acc,
            [curr.type]: (acc[curr.type] || 0) + curr.numberOfSet
          };
        },
        {} as Record<string, number>
      );

      expect(generatedNumberOfSets).toEqual(configNumberOfSets);
    });

    it('should not generate any deprecated questions', () => {
      const generatedExam = generateExam(exam);

      const allQuestions = exam.questionSets.flatMap(qs => qs.questions);

      const deprecatedQuestions = generatedExam.questionSets
        .flatMap(qs => qs.questions)
        .filter(q => {
          const eq = allQuestions.find(eq => eq.id === q.id);
          if (!eq) {
            throw new Error('Generated question not found in exam');
          }
          return eq.deprecated;
        });

      expect(deprecatedQuestions).toHaveLength(0);
    });
  });

  xdescribe('getRandomAnswers()', () => {});
  xdescribe('validateAttempt()', () => {});
});
