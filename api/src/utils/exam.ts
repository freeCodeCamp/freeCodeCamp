import { Exam, Question } from '@prisma/client';
import { shuffleArray } from './../../../shared/utils/shuffle-array';
import { UserExam, GeneratedExam } from './exam-types';

/**
 * Remove objects from array with deprecated: true.
 *
 * @param arr An array.
 * @returns The array without objects that have deprecated: true.
 */
function filterDeprecated<T extends { deprecated: boolean | null }>(
  arr: T[]
): T[] {
  return arr.filter(i => !i.deprecated);
}

function getRandomElement<T>(arr: T[]): T {
  const id: number = Math.floor(Math.random() * arr.length);
  return arr[id] as T;
}

/**
 * Generates a random exam.
 *
 * @param examJson Exam from the database converted to JSON.
 * @returns An array of randomized questions for the exam.
 */
export function generateRandomExam(examJson: Exam): GeneratedExam {
  const { numberOfQuestionsInExam, questions } = examJson;
  const numberOfAnswersPerQuestion = 5;

  const availableQuestions = shuffleArray(filterDeprecated(questions));
  const examQuestions = availableQuestions.slice(0, numberOfQuestionsInExam);

  const randomizedExam: GeneratedExam = examQuestions.map(
    (question: Question) => {
      const availableCorrectAnswers = filterDeprecated(question.correctAnswers);
      const availableWrongAnswers = shuffleArray(
        filterDeprecated(question.wrongAnswers)
      );
      const correctAnswer = getRandomElement(availableCorrectAnswers);
      const answers = shuffleArray([
        correctAnswer,
        ...availableWrongAnswers.slice(0, numberOfAnswersPerQuestion - 1)
      ]).map(({ id, answer }) => ({ id, answer }));
      return {
        id: question.id,
        question: question.question,
        answers
      };
    }
  );

  return randomizedExam;
}

/**
 * Evaluates a user completed exam.
 *
 * @param userExam User completed exam.
 * @param originalExam Exam from the database converted to JSON.
 * @returns An object of the exam results.
 */
export function createExamResults(userExam: UserExam, originalExam: Exam) {
  const { userExamQuestions, examTimeInSeconds } = userExam;
  const {
    questions: originalQuestions,
    numberOfQuestionsInExam,
    passingPercent
  } = originalExam;

  const numberOfCorrectAnswers = userExamQuestions.reduce(
    (count, userQuestion) => {
      const originalQuestion = originalQuestions.find(
        examQuestion => examQuestion.id === userQuestion.id
      );

      if (!originalQuestion) {
        throw new Error('An error occurred. Could not find exam question.');
      }

      const isCorrect = originalQuestion.correctAnswers.find(
        examAnswer => examAnswer.id === userQuestion.answer.id
      );
      return isCorrect ? count + 1 : count;
    },
    0
  );

  // Percent rounded to one decimal place
  const percent = (numberOfCorrectAnswers / numberOfQuestionsInExam) * 100;
  const percentCorrect = Math.round(percent * 10) / 10;
  const passed = percentCorrect >= passingPercent;

  return {
    numberOfCorrectAnswers,
    numberOfQuestionsInExam,
    percentCorrect,
    passingPercent,
    passed,
    examTimeInSeconds
  };
}
