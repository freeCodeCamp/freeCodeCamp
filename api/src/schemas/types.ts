import { Type } from '@fastify/type-provider-typebox';

export const generic500 = Type.Object({
  message: Type.Literal(
    'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
  ),
  type: Type.Literal('danger')
});

export const isCertMap = Type.Object({
  isRespWebDesignCert: Type.Boolean(),
  isJsAlgoDataStructCert: Type.Boolean(),
  isFrontEndLibsCert: Type.Boolean(),
  is2018DataVisCert: Type.Boolean(),
  isApisMicroservicesCert: Type.Boolean(),
  isInfosecQaCert: Type.Boolean(),
  isQaCertV7: Type.Boolean(),
  isInfosecCertV7: Type.Boolean(),
  isFrontEndCert: Type.Boolean(),
  isBackEndCert: Type.Boolean(),
  isDataVisCert: Type.Boolean(),
  isFullStackCert: Type.Boolean(),
  isSciCompPyCertV7: Type.Boolean(),
  isDataAnalysisPyCertV7: Type.Boolean(),
  isMachineLearningPyCertV7: Type.Boolean(),
  isRelationalDatabaseCertV8: Type.Boolean(),
  isCollegeAlgebraPyCertV8: Type.Boolean(),
  isFoundationalCSharpCertV8: Type.Boolean()
});

export const file = Type.Object({
  contents: Type.String(),
  key: Type.String(),
  ext: Type.String(),
  name: Type.String(),
  history: Type.Array(Type.String())
});

export const saveChallengeBody = Type.Object({
  id: Type.String({
    format: 'objectid',
    maxLength: 24,
    minLength: 24
  }),
  files: Type.Array(file)
});

export const examResults = Type.Object({
  numberOfCorrectAnswers: Type.Number(),
  numberOfQuestionsInExam: Type.Number(),
  percentCorrect: Type.Number(),
  passingPercent: Type.Number(),
  passed: Type.Boolean(),
  examTimeInSeconds: Type.Number()
});

export const surveyTitles = Type.Union([
  Type.Literal('Foundational C# with Microsoft Survey')
]);
