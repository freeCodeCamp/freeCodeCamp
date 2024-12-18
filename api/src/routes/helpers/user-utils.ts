import _ from 'lodash';

// user flags that the api-server returns as false if they're missing in the
// user document. Since Prisma returns null for missing fields, we need to
// normalize them to false.
// TODO(Post-MVP): remove this when the database is normalized.
const nullableFlags = [
  'is2018DataVisCert',
  'is2018FullStackCert',
  'isApisMicroservicesCert',
  'isBackEndCert',
  'isCheater',
  'isCollegeAlgebraPyCertV8',
  'isDataAnalysisPyCertV7',
  'isDataVisCert',
  // isDonating doesn't need fixing because it's not nullable
  'isFoundationalCSharpCertV8',
  'isFrontEndCert',
  'isFullStackCert',
  'isFrontEndLibsCert',
  'isHonest',
  'isInfosecCertV7',
  'isInfosecQaCert',
  'isJsAlgoDataStructCert',
  'isJsAlgoDataStructCertV8',
  'isMachineLearningPyCertV7',
  'isQaCertV7',
  'isRelationalDatabaseCertV8',
  'isRespWebDesignCert',
  'isSciCompPyCertV7',
  'isDataAnalysisPyCertV7',
  // isUpcomingPythonCertV8 exists in the db, but is not returned by the api-server
  // TODO(Post-MVP): delete it from the db?
  'keyboardShortcuts'
] as const;

type NullableFlags = (typeof nullableFlags)[number];

/**
 * Splits a user object into two objects: one with nullable flags and one without.
 *
 * @param user - The user object to split.
 * @returns A tuple where the first element is an object with nullable flags and the second element is an object with the remaining properties.
 */
export function splitUser<U extends Record<NullableFlags, unknown>>(
  user: U
): [Pick<U, NullableFlags>, Omit<U, NullableFlags>] {
  return [_.pick(user, nullableFlags), _.omit(user, nullableFlags)];
}
