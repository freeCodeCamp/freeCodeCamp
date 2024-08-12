/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import {
  GeneratedExam,
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

type QuestionSetT = NewExam['question_types'][number]['questions'][number] & {
  tags: NewQuestion['tags'];
  question_type: NewQuestionType;
};

/**
 * Generates an exam for the user, based on the exam configuration.
 */
export function generateExam(exam: NewExam): Omit<GeneratedExam, 'id'> {
  // 1. Select questions based on tag config
  // 2. Get all questions based on question_type config

  // `tags` is added to keep track of how many questions of each tag are in the set.
  const questionSet: Set<QuestionSetT> = new Set();
  const allQuestions = exam.question_types.flatMap(qt =>
    qt.questions.map(q => ({ ...q, question_type: qt.type }))
  );
  const randomizedQuestions = shuffleArray(allQuestions);

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
        ...question,
        answers: answers
      };
      questionSet.add(generatedQuestion);
    }
  }

  // Ensure question_type config is fulfilled.
  for (const questionTypeConfig of exam.config.question_types) {
    // Determine how many questions of type are already fulfilled.
    let numberOfQuestionsNeeded = questionTypeConfig.number_of_questions;
    for (const q of questionSet) {
      if (q.question_type === questionTypeConfig.type) {
        numberOfQuestionsNeeded -= 1;
      }
    }

    for (let i = 0; i < numberOfQuestionsNeeded; i++) {
      const question = randomizedQuestions.splice(
        randomizedQuestions.findIndex(
          q => q.question_type === questionTypeConfig.type
        ),
        1
      )[0];

      if (!question) {
        throw new Error(
          `Invalid Exam Configuration for ${exam.id}. Not enough questions for question type ${questionTypeConfig.type}.`
        );
      }

      const answers = getRandomAnswers(question, exam);

      const generatedQuestion = {
        ...question,
        answers: answers
      };
      questionSet.add(generatedQuestion);
    }
  }

  // Remove tags, deprecated, and is_correct from questions.
  const questions = Array.from(questionSet).map(q => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const answers = q.answers.map(a => a.id);

    return {
      id: q.id,
      question_type: q.question_type,
      answers
    };
  });

  const question_types = exam.question_types.map(qt => {
    const questionsForType = questions.filter(q => q.question_type === qt.type);

    const qs = questionsForType.map(q => {
      return {
        id: q.id,
        answers: q.answers
      };
    });

    return {
      id: qt.id,
      questions: qs
    };
  });

  return {
    exam_id: exam.id,
    question_types
  };
}

/**
 * Gets random answers for a question.
 */
export function getRandomAnswers(question: QuestionSetT, exam: NewExam) {
  const questionConfig = exam.config.question_types.find(
    c => question.question_type === c.type
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
  EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN_CREATED,
  EXAM_ENVIRONMENT_GENERATED_EXAM_FOUND
}

export type UserExam = Omit<NewExam, 'question_types' | 'config' | 'id'> & {
  config: Omit<NewExam['config'], 'tags' | 'question_types'>;
  question_types: (Omit<QuestionType, 'questions'> & {
    questions: (Omit<NewQuestion, 'answers' | 'tags'> & {
      answers: Omit<NewAnswer, 'is_correct'>[];
    })[];
  })[];
} & { generated_exam_id: string; exam_id: string };

/**
 * Takes the generated exam and the original exam, and creates the user-facing exam.
 */
export function createUserExam(
  generatedExam: GeneratedExam,
  exam: NewExam
): UserExam {
  // Map generated exam to user exam (a.k.a. public exam information for user)
  const userQuestionTypes = generatedExam.question_types.map(qt => {
    // Get matching question from `exam`, but remove `is_correct` from `exam.questions[].answers[]`
    const matchingQuestionType = exam.question_types.find(
      eqt => eqt.id === qt.id
    );
    if (!matchingQuestionType) {
      throw new Error('Unreachable. Matching question type should exist.');
    }

    const { questions } = matchingQuestionType;

    const userQuestions = questions.map(q => {
      const matchingQuestion = matchingQuestionType.questions.find(
        eq => eq.id === q.id
      );
      if (!matchingQuestion) {
        throw new Error('Unreachable. Matching question should exist.');
      }

      // Remove `is_correct` from question answers
      const answers = matchingQuestion.answers.map(a => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { is_correct, ...answer } = a;
        return answer;
      });

      return {
        id: matchingQuestion.id,
        audio: matchingQuestion.audio,
        text: matchingQuestion.text,
        deprecated: matchingQuestion.deprecated,
        answers
      };
    });

    const userQuestionType = {
      type: matchingQuestionType.type,
      questions: userQuestions,
      id: matchingQuestionType.id,
      text: matchingQuestionType.text
    };
    return userQuestionType;
  });

  const config = {
    total_time: exam.config.total_time
  };

  const userExam: UserExam = {
    exam_id: exam.id,
    name: exam.name,
    generated_exam_id: generatedExam.id,
    accessibility_note: exam.accessibility_note,
    config,
    question_types: userQuestionTypes
  };

  return userExam;
}
