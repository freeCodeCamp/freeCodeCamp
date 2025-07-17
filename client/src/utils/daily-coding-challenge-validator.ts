import Joi from 'joi';

interface DailyCodingChallengeLanguageFromDb {
  tests: {
    text: string;
    testString: string;
  }[];
  challengeFiles: {
    fileKey: string;
    contents: string;
  }[];
}

export interface DailyCodingChallengeFromDb {
  id: string;
  challengeNumber: number;
  title: string;
  date: string;
  description: string;
  javascript: DailyCodingChallengeLanguageFromDb;
  python: DailyCodingChallengeLanguageFromDb;
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
  id: Joi.string().required(),
  challengeNumber: Joi.number().integer().min(1).required(),
  title: Joi.string().required(),
  date: Joi.string().required(),
  description: Joi.string().required(),
  javascript: challengeLanguageDataSchema.required(),
  python: challengeLanguageDataSchema.required()
});

export const validateDailyCodingChallengeSchema = (
  challenge: DailyCodingChallengeFromDb
) => {
  return challengeDataFromDbSchema.validate(challenge);
};
