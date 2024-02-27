import { Answer, Exam, Question, ExamResults } from '@prisma/client';
import Joi from 'joi';
import { GeneratedExam, UserExam } from './exam-types';

const nanoIdRE = new RegExp('[a-z0-9]{10}');
const objectIdRE = new RegExp('^[0-9a-fA-F]{24}$');

// Exam from database schema
const DbPrerequisitesJoi = Joi.object().keys({
  id: Joi.string().regex(objectIdRE).required(),
  title: Joi.string()
});

const DbAnswerJoi = Joi.object().keys({
  id: Joi.string().regex(nanoIdRE).required(),
  deprecated: Joi.bool().allow(null),
  answer: Joi.string().required()
});

const DbQuestionJoi = Joi.object().keys({
  id: Joi.string().regex(nanoIdRE).required(),
  question: Joi.string().required(),
  deprecated: Joi.bool().allow(null),
  wrongAnswers: Joi.array()
    .items(DbAnswerJoi)
    .required()
    .custom((value: Answer[], helpers) => {
      const nonDeprecatedCount = value.reduce(
        (count: number, answer: Answer) =>
          answer.deprecated ? count : count + 1,
        0
      );
      const minimumAnswers = 4;

      if (nonDeprecatedCount < minimumAnswers) {
        return helpers.message({
          en: `'wrongAnswers' must have at least ${minimumAnswers} non-deprecated answers.`
        });
      }

      return value;
    }),
  correctAnswers: Joi.array()
    .items(DbAnswerJoi)
    .required()
    .custom((value: Answer[], helpers) => {
      const nonDeprecatedCount = value.reduce(
        (count: number, answer: Answer) =>
          answer.deprecated ? count : count + 1,
        0
      );
      const minimumAnswers = 1;

      if (nonDeprecatedCount < minimumAnswers) {
        return helpers.message({
          en: `'correctAnswers' must have at least ${minimumAnswers} non-deprecated answer.`
        });
      }

      return value;
    })
});

const examFromDbSchema = Joi.object().keys({
  // TODO: make sure _id and title match what's in the challenge markdown file
  id: Joi.string().regex(objectIdRE).required(),
  title: Joi.string().required(),
  numberOfQuestionsInExam: Joi.number()
    .min(1)
    .max(
      Joi.ref('questions', {
        adjust: (questions: Question[]) => {
          const nonDeprecatedCount = questions.reduce(
            (count: number, question: Question) =>
              question.deprecated ? count : count + 1,
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

/**
 * Function to validate the exam data from the database.
 *
 * @param examFromDb The exam object from the database.
 * @returns JOI Validation object.
 */
export const validateExamFromDbSchema = (examFromDb: Exam) => {
  return examFromDbSchema.validate(examFromDb);
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

/**
 * Function to validate a generated exam.
 *
 * @param exam The exam that was generated.
 * @param numberOfQuestionsInExam The number of questions in the exam.
 * @returns JOI Validation object.
 */
export const validateGeneratedExamSchema = (
  exam: GeneratedExam,
  numberOfQuestionsInExam: number
) => {
  if (exam.length !== numberOfQuestionsInExam) {
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

/**
 * Function to validate a user completed exam.
 *
 * @param exam The exam the camper completed.
 * @param numberOfQuestionsInExam The number of questions in the exam.
 * @returns JOI Validation object.
 */
export const validateUserCompletedExamSchema = (
  exam: UserExam,
  numberOfQuestionsInExam: number
) => {
  // TODO: Validate that the properties exist
  if (exam.userExamQuestions.length !== numberOfQuestionsInExam) {
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

/**
 * Function to validate generated exam results after a camper submits their exam.
 *
 * @param examResults The exam results that were generated.
 * @returns JOI Validation object.
 */
export const validateExamResultsSchema = (examResults: ExamResults) => {
  return examResultsSchema.validate(examResults);
};
