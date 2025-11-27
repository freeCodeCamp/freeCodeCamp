/* This module's job is to parse the database output and prepare it for
serialization */
import type {
  ProfileUI,
  CompletedChallenge,
  ExamResults,
  Survey,
  Prisma
} from '@prisma/client';
import { pickBy, mapValues } from 'lodash-es';

type NullToUndefined<T> = T extends null ? undefined : T;
type NullToFalse<T> = T extends null ? false : T;

type NoNullProperties<T> = {
  [P in keyof T]: NullToUndefined<T[P]>;
};

type DefaultToFalse<T> = {
  [P in keyof T]: NullToFalse<T[P]>;
};

/**
 * Converts a Twitter handle or URL to a URL.
 *
 * @param handleOrUrl Twitter handle or URL.
 * @returns Twitter URL.
 */
export const normalizeTwitter = (
  handleOrUrl: string | null
): string | undefined => {
  if (!handleOrUrl) return undefined;

  let url;
  try {
    new URL(handleOrUrl);
  } catch {
    url = `https://twitter.com/${handleOrUrl.replace(/^@/, '')}`;
  }
  return url ?? handleOrUrl;
};

/**
 * Converts a Bluesky handle or URL to a URL.
 *
 * @param handleOrUrl Bluesky handle or URL.
 * @returns Bluesky URL.
 */
export const normalizeBluesky = (
  handleOrUrl: string | null
): string | undefined => {
  if (!handleOrUrl) return undefined;

  let url;
  try {
    new URL(handleOrUrl);
  } catch {
    url = `https://bsky.app/profile/${handleOrUrl.replace(/^@/, '')}`;
  }
  return url ?? handleOrUrl;
};

/**
 * Normalizes a date value to a timestamp number.
 *
 * @param date An object with a $date string or a number.
 * @returns The date as a timestamp number.
 */
export const normalizeDate = (date?: Prisma.JsonValue): number => {
  if (typeof date === 'number') {
    return date;
  } else if (
    date &&
    typeof date === 'object' &&
    '$date' in date &&
    typeof date.$date === 'string'
  ) {
    return new Date(date.$date).getTime();
  } else if (typeof date === 'string') {
    const parsed = Number(date);
    if (!isNaN(parsed)) {
      // Number() handles invalid strings e.g. '2023-10-01T00:00:00Z'
      // parseInt() handles floats
      return parseInt(String(parsed));
    }
  }

  throw Error('Unexpected date value: ' + JSON.stringify(date));
};

/**
 * Normalizes a challenge type value to a number.
 *
 * @param challengeType A JSON value that can be a number, string, or null.
 * @returns The challenge type as a number or null.
 */
export const normalizeChallengeType = (
  challengeType?: Prisma.JsonValue
): number | null => {
  if (typeof challengeType === 'number') {
    return challengeType;
  } else if (typeof challengeType === 'string') {
    const parsed = parseInt(challengeType, 10);
    if (isNaN(parsed)) {
      throw Error(
        'Unexpected challengeType value: ' + JSON.stringify(challengeType)
      );
    }
    return parsed;
  } else if (challengeType === null) {
    return null;
  } else {
    throw Error(
      'Unexpected challengeType value: ' + JSON.stringify(challengeType)
    );
  }
};

/**
 * Ensure that the user's profile UI settings are valid.
 *
 * @param maybeProfileUI A null or the user's profile UI settings.
 * @returns The input with nulls removed or a default value if there is no input.
 */
export const normalizeProfileUI = (
  maybeProfileUI: ProfileUI | null
): NoNullProperties<ProfileUI> => {
  return maybeProfileUI
    ? removeNulls(maybeProfileUI)
    : {
        isLocked: true,
        showAbout: false,
        showCerts: false,
        showDonation: false,
        showHeatMap: false,
        showLocation: false,
        showName: false,
        showPoints: false,
        showPortfolio: false,
        showTimeLine: false
      };
};

/**
 * Remove all the null properties from an object.
 *
 * @param obj Any object.
 * @returns The input with nulls removed.
 */
export const removeNulls = <T extends Record<string, unknown>>(
  obj: T
): NoNullProperties<T> =>
  pickBy(obj, value => value !== null) as NoNullProperties<T>;

type NormalizedFile = {
  contents: string;
  ext: string;
  key: string;
  name: string;
  path?: string;
};

export type NormalizedChallenge = {
  challengeType?: number;
  completedDate: number;
  files: NormalizedFile[];
  githubLink?: string;
  id: string;
  isManuallyApproved?: boolean;
  solution?: string;
  examResults?: ExamResults;
};

/**
 * Remove all the null properties from a CompletedChallenge array.
 *
 * @param completedChallenges The CompletedChallenge array.
 * @returns The input with nulls removed.
 */
export const normalizeChallenges = (
  completedChallenges: CompletedChallenge[]
): NormalizedChallenge[] => {
  const fixedDateAndType = completedChallenges.map(challenge => {
    const { completedDate, challengeType, ...rest } = challenge;
    return {
      ...rest,
      completedDate: normalizeDate(completedDate),
      challengeType: normalizeChallengeType(challengeType)
    };
  });

  const noNullProps = fixedDateAndType.map(challenge => removeNulls(challenge));
  // files.path is optional
  const noNullPath = noNullProps.map(challenge => {
    const { files, ...rest } = challenge;
    const noNullFiles = files?.map(file => removeNulls(file));

    return { ...rest, files: noNullFiles };
  });

  return noNullPath;
};

type NormalizedSurvey = {
  title: string;
  responses: {
    question: string;
    response: string;
  }[];
};

/**
 * Remove the extra properties from the SurveyResults array.
 *
 * @param surveyResults The SurveyResults array.
 * @returns The input without the id and userid.
 */
export const normalizeSurveys = (
  surveyResults: Survey[]
): NormalizedSurvey[] => {
  return surveyResults.map(survey => {
    const { title, responses } = survey;
    return { title, responses };
  });
};

/**
 * Replace null flags with false.
 * @param flags Object with nullable boolean flags.
 * @returns Same object with boolean flags, defaulting to false.
 */
export const normalizeFlags = <T extends Record<string, boolean | null>>(
  flags: T
): DefaultToFalse<T> =>
  mapValues(flags, flag => flag ?? false) as DefaultToFalse<T>;
