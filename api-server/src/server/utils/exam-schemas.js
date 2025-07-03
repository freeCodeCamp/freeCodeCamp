import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

Joi.objectId = JoiObjectId(Joi);

const nanoIdRE = new RegExp('[a-z0-9]{10}');

// Exam from database schema
const DbPrerequisitesJoi = Joi.object().keys({
  id: Joi.objectId().required(),
  title: Joi.string()
});

const DbAnswerJoi = Joi.object().keys({
  id: Joi.string().regex(nanoIdRE).required(),
  deprecated: Joi.bool(),
  answer: Joi.string().required()
});

const DbQuestionJoi = Joi.object().keys({
  id: Joi.string().regex(nanoIdRE).required(),
  question: Joi.string().required(),
  deprecated: Joi.bool(),
  wrongAnswers: Joi.array()
    .items(DbAnswerJoi)
    .required()
    .custom((value, helpers) => {
      const nonDeprecatedCount = value.reduce(
        (count, answer) => (answer.deprecated ? count : count + 1),
        0
      );
      const minimumAnswers = 4;

      if (nonDeprecatedCount < minimumAnswers) {
        return helpers.message(
          `'wrongAnswers' must have at least ${minimumAnswers} non-deprecated answers.`
        );
      }

      return value;
    }),
  correctAnswers: Joi.array()
    .items(DbAnswerJoi)
    .required()
    .custom((value, helpers) => {
      const nonDeprecatedCount = value.reduce(
        (count, answer) => (answer.deprecated ? count : count + 1),
        0
      );
      const minimumAnswers = 1;

      if (nonDeprecatedCount < minimumAnswers) {
        return helpers.message(
          `'correctAnswers' must have at least ${minimumAnswers} non-deprecated answer.`
        );
      }

      return value;
    })
});

const examFromDbSchema = Joi.object().keys({
  // TODO: make sure _id and title match what's in the challenge markdown file
  id: Joi.objectId().required(),
  title: Joi.string().required(),
  numberOfQuestionsInExam: Joi.number()
    .min(1)
    .max(
      Joi.ref('questions', {
        adjust: questions => {
          const nonDeprecatedCount = questions.reduce(
            (count, question) => (question.deprecated ? count : count + 1),
            0
          );
          return nonDeprecatedCount;
        }
      })
    )
    .required(),
  passingPercent: Joi.number().min(0).max(100).required(),
  prerequisites: Joi.array().items(DbPrerequisitesJoi),
  questions: Joi.array().items(DbQuestionJoi).min(1).required()
});

export const validateExamFromDbSchema = exam => {
  return examFromDbSchema.validate(exam);
};

// Generated Exam Schema
const GeneratedAnswerJoi = Joi.object().keys({
  id: Joi.string().regex(nanoIdRE).required(),
  answer: Joi.string().required()
});

const GeneratedQuestionJoi = Joi.object().keys({
  id: Joi.string().regex(nanoIdRE).required(),
  question: Joi.string().required(),
  answers: Joi.array().items(GeneratedAnswerJoi).min(5).required()
});

const generatedExamSchema = Joi.array()
  .items(GeneratedQuestionJoi)
  .min(1)
  .required();

export const validateGeneratedExamSchema = (exam, numberOfQuestionsInExam) => {
  if (!exam.length === numberOfQuestionsInExam) {
    throw new Error(
      'The number of exam questions generated does not match the number of questions required.'
    );
  }

  return generatedExamSchema.validate(exam);
};

// User Completed Exam Schema
const UserCompletedQuestionJoi = Joi.object().keys({
  id: Joi.string().regex(nanoIdRE).required(),
  question: Joi.string().required(),
  answer: Joi.object().keys({
    id: Joi.string().regex(nanoIdRE).required(),
    answer: Joi.string().required()
  })
});

const userCompletedExamSchema = Joi.object().keys({
  userExamQuestions: Joi.array()
    .items(UserCompletedQuestionJoi)
    .min(1)
    .required(),
  examTimeInSeconds: Joi.number().min(0)
});

export const validateUserCompletedExamSchema = (
  exam,
  numberOfQuestionsInExam
) => {
  // TODO: Validate that the properties exist
  if (!exam.length === numberOfQuestionsInExam) {
    throw new Error(
      'The number of exam questions answered does not match the number of questions required.'
    );
  }

  return userCompletedExamSchema.validate(exam);
};

// Exam Results Schema
const examResultsSchema = Joi.object().keys({
  numberOfCorrectAnswers: Joi.number().min(0),
  numberOfQuestionsInExam: Joi.number().min(0),
  percentCorrect: Joi.number().min(0),
  passingPercent: Joi.number().min(0).max(100),
  passed: Joi.bool(),
  examTimeInSeconds: Joi.number().min(0)
});

export const validateExamResultsSchema = examResults => {
  return examResultsSchema.validate(examResults);
};
