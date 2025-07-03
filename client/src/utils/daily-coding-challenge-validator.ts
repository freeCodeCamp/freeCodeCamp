import Joi from 'joi';

interface ChallengeLanguageData {
  tests: {
    text: string;
    testString: string;
  }[];
  challengeFiles: {
    fileKey: string;
    contents: string;
  }[];
}

export interface ChallengeDataFromDb {
  _id: string;
  challengeNumber: number;
  title: string;
  date: string;
  simpleDate: string;
  description: string;
  instructions?: string;
  javascript: ChallengeLanguageData;
  python: ChallengeLanguageData;
}

const challengeLanguageDataSchema = Joi.object({
  tests: Joi.array()
    .items(
      Joi.object({
        text: Joi.string().required(),
        testString: Joi.string().required()
      })
    )
    .required(),
  challengeFiles: Joi.array()
    .items(
      Joi.object({
        fileKey: Joi.string().required(),
        contents: Joi.string().required()
      })
    )
    .required(),
  disableLoopProtectTests: Joi.boolean().optional()
});

const challengeDataFromDbSchema = Joi.object({
  _id: Joi.string().required(),
  challengeNumber: Joi.number().integer().min(1).required(),
  title: Joi.string().required(),
  date: Joi.string().required(),
  simpleDate: Joi.string().required(),
  description: Joi.string().required(),
  instructions: Joi.string().optional(),
  javascript: challengeLanguageDataSchema.required(),
  python: challengeLanguageDataSchema.required()
});

export const validateDailyCodingChallengeSchema = (
  challenge: ChallengeDataFromDb
) => {
  return challengeDataFromDbSchema.validate(challenge);
};
