/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import {
  GeneratedExam,
  GeneratedQuestion,
  NewAnswer,
  NewExam,
  NewQuestion,
  NewQuestionType,
  QuestionType,
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
  const questionSet: Set<
    GeneratedQuestion & {
      tags: NewQuestion['tags'];
      question_type: NewQuestionType;
    }
  > = new Set();
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

      const answers = getRandomAnswers(question, exam);

      const generatedQuestion = {
        id: question.id,
        answers: answers.map(a => a.id),
        question_type: question.question_type,
        tags: question.tags
      };
      questionSet.add(generatedQuestion);
    }
  }

  // Ensure question_type config is fulfilled.
  for (const questionConfig of exam.config.question_types) {
    // Determine how many questions of type are already fulfilled.
    let numberOfQuestionsNeeded = questionConfig.number_of_questions;
    for (const q of questionSet) {
      if (q.question_type === questionConfig.question_type) {
        numberOfQuestionsNeeded -= 1;
      }
    }

    for (let i = 0; i < numberOfQuestionsNeeded; i++) {
      const question = randomizedQuestions.splice(
        randomizedQuestions.findIndex(
          q => q.question_type === questionConfig.question_type
        ),
        1
      )[0];

      if (!question) {
        throw new Error(
          `Invalid Exam Configuration for ${exam.id}. Not enough questions for question type ${questionConfig.question_type}.`
        );
      }

      const answers = getRandomAnswers(question, exam);

      const generatedQuestion = {
        id: question.id,
        answers: answers.map(a => a.id),
        question_type: question.question_type,
        tags: question.tags
      };
      questionSet.add(generatedQuestion);
    }
  }

  // Add random questions until number of questions for an exam is reached.
  for (let i = 0; i < exam.config.total_questions - questionSet.size; i++) {
    const question = randomizedQuestions.pop();
    if (!question) {
      throw new Error(
        `Invalid Exam Configuration for ${exam.id}. Not enough questions.`
      );
    }

    const answers = getRandomAnswers(question, exam);

    const generatedQuestion = {
      id: question.id,
      answers: answers.map(a => a.id),
      question_type: question.question_type,
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
 * Gets random answers for a question.
 */
export function getRandomAnswers(question: NewQuestion, exam: NewExam) {
  const questionConfig = exam.config.question_types.find(
    c => question.question_type === c.question_type
  );
  if (!questionConfig) {
    throw new Error(
      `Invalid Exam Configuration for ${exam.id}. Question Type ${question.question_type} not found.`
    );
  }

  const { number_of_correct_answers, number_of_incorrect_answers } =
    questionConfig;
  const randomAnswers = shuffleArray(question.answers);
  const incorrectAnswers = randomAnswers
    .filter(a => !a.is_correct)
    .splice(0, number_of_incorrect_answers);
  const correctAnswers = randomAnswers
    .filter(a => a.is_correct)
    .splice(0, number_of_correct_answers);

  if (!incorrectAnswers || !correctAnswers) {
    throw new Error(
      `Question ${question.id} does not have enough correct/incorrect answers.`
    );
  }

  const answers = incorrectAnswers.concat(correctAnswers);
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

export type UserExam = Omit<NewExam, 'question_types' | 'config' | 'id'> & {
  config: Omit<NewExam['config'], 'tags' | 'question_types'>;
  question_types: (Omit<QuestionType, 'questions'> & {
    questions: (Omit<NewQuestion, 'answers' | 'tags'> & {
      answers: Omit<NewAnswer, 'is_correct'>[];
    })[];
  })[];
} & { generated_exam_id: string; attempt_id: string; exam_id: string };
