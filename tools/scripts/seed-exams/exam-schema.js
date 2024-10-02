import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

Joi.objectId = JoiObjectId(Joi);

const nanoIdRE = new RegExp('[a-z0-9]{10}');

const PrerequisitesJoi = Joi.object().keys({
  id: Joi.objectId().required(),
  title: Joi.string()
});

const AnswerJoi = Joi.object().keys({
  id: Joi.string().regex(nanoIdRE).required(),
  deprecated: Joi.bool(),
  answer: Joi.string().required()
});

const QuestionJoi = Joi.object().keys({
  id: Joi.string().regex(nanoIdRE).required(),
  question: Joi.string().required(),
  deprecated: Joi.bool(),
  wrongAnswers: Joi.array()
    .items(AnswerJoi)
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
    .items(AnswerJoi)
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

const schema = Joi.object().keys({
  // TODO: make sure _id and title match what's in the challenge markdown file
  _id: Joi.objectId().required(),
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
  prerequisites: Joi.array().items(PrerequisitesJoi),
  questions: Joi.array().items(QuestionJoi).min(1).required()
});

export const validateExamSchema = exam => {
  return schema.validate(exam);
};
