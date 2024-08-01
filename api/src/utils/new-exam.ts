/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import {
  GeneratedExam,
  GeneratedQuestion,
  NewAnswer,
  NewExam,
  NewQuestion,
  user
} from '@prisma/client';

/**
 * Checks if all exam prerequisites have been met by the user.
 *
 * TODO: This will be done by getting the challenges required from the curriculum.
 */
export function checkPrerequisites(_user: user, _prerequisites: unknown) {
  return true;
}

/**
 * Generates an exam for the user, based on the exam configuration.
 */
export function generateExam(exam: NewExam): Omit<GeneratedExam, 'id'> {
  // `tags` is added to keep track of how many questions of each tag are in the set.
  const questionSet: Set<GeneratedQuestion & { tags: NewQuestion['tags'] }> =
    new Set();
  const randomizedQuestions = shuffleArray(exam.questions);

  // Sort tag config by number of tags in descending order.
  const sortedTags = exam.config.tags.sort(
    (a, b) => b.set.length - a.set.length
  );

  for (const tag of sortedTags) {
    // Check if tag is partially fulfilled by existing questions in set.
    // - If tag is subset of existing questions tag set, only add more questions if needed.
    let numberOfQuestionsNeeded = tag.number_of_questions;
    for (const q of questionSet) {
      if (tag.set.every(t => q.tags.some(qt => qt === t))) {
        numberOfQuestionsNeeded -= 1;
      }
    }
    // Push number_of_questions random questions.
    for (let i = 0; i < numberOfQuestionsNeeded; i++) {
      // Find question with at least all tags in the set.
      const question = randomizedQuestions.splice(
        randomizedQuestions.findIndex(q =>
          tag.set.every(t => q.tags.some(qt => qt === t))
        ),
        1
      )[0];

      if (!question) {
        throw new Error(
          `Invalid Exam Configuration for ${exam.id}. Not enough questions for tag ${tag.set.toString()}.`
        );
      }

      const answers = getRandomAnswers(question);

      const generatedQuestion = {
        id: question.id,
        answers: answers.map(a => a.id),
        tags: question.tags
      };
      questionSet.add(generatedQuestion);
    }
  }

  // Add random questions until number of questions for an exam is reached.
  for (let i = 0; i < exam.config.total_questions - questionSet.size; i++) {
    const question = randomizedQuestions.splice(
      Math.floor(Math.random() * randomizedQuestions.length),
      1
    )[0];
    if (!question) {
      throw new Error(
        `Invalid Exam Configuration for ${exam.id}. Not enough questions.`
      );
    }

    const answers = getRandomAnswers(question);

    const generatedQuestion = {
      id: question.id,
      answers: answers.map(a => a.id),
      tags: question.tags
    };
    questionSet.add(generatedQuestion);
  }

  // Remove tags
  const questions = Array.from(questionSet).map(q => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { tags, ...question } = q;
    return question;
  });

  return {
    exam_id: exam.id,
    questions
  };
}

/**
 * Gets random answers for a question, ensuring at least one is correct, and at least one is incorrect with a total of 4.
 */
export function getRandomAnswers(question: NewQuestion) {
  const randomAnswers = shuffleArray(question.answers);
  const firstCorrect = randomAnswers.splice(
    randomAnswers.findIndex(a => a.is_correct),
    1
  )[0];
  const firstIncorrect = randomAnswers.splice(
    randomAnswers.findIndex(a => !a.is_correct),
    1
  )[0];
  if (!firstCorrect || !firstIncorrect) {
    throw new Error(
      `Question ${question.id} does not have enough correct/incorrect answers.`
    );
  }
  const answers = [firstCorrect, firstIncorrect].concat(
    randomAnswers.slice(0, 2)
  );
  return answers;
}

/* eslint-disable jsdoc/require-description-complete-sentence */
/**
 * Shuffles an array using the Fisher-Yates algorithm.
 *
 * https://bost.ocks.org/mike/shuffle/
 */
function shuffleArray<T>(array: Array<T>) {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m]!;
    array[m] = array[i]!;
    array[i] = t;
  }

  return array;
}
/* eslint-enable jsdoc/require-description-complete-sentence */

export enum CODE {
  ENOENT_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN,
  EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN,
  EINVAL_EXAM_ENVIRONMENT_PREREQUISITES,
  ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM,
  ERR_EXAM_ENVIRONMENT_CREATE_EXAM_ATTEMPT,
  ERR_EXAM_ENVIRONMENT,
  EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN_VERIFIED,
  EXAM_ENVIRONMENT_EXAM_GENERATED,
  EXAM_ENVIRONMENT_EXAM_ATTEMPT_SUBMITTED,
  EXAM_ENVIRONMENT_SCREENSHOT_STORED,
  EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN_CREATED
}

export type UserExam = Omit<NewExam, 'questions'> & {
  questions: (Omit<NewQuestion, 'answers'> & {
    answers: Omit<NewAnswer, 'is_correct'>[];
  })[];
} & { generated_exam_id: string };
