/* This module's job is to parse the database output and prepare it for
serialization */
import { ProfileUI, CompletedChallenge } from '@prisma/client';
import _ from 'lodash';

type NullToUndefined<T> = T extends null ? undefined : T;

type NoNullProperties<T> = {
  [P in keyof T]: NullToUndefined<T[P]>;
};

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

export const removeNulls = <T extends Record<string, unknown>>(
  obj: T
): NoNullProperties<T> =>
  _.pickBy(obj, value => value !== null) as NoNullProperties<T>;

type NormalizedFile = {
  contents: string;
  ext: string;
  key: string;
  name: string;
  path?: string;
};

type NormalizedChallenge = {
  challengeType?: number;
  completedDate: number;
  files: NormalizedFile[];
  githubLink?: string;
  id: string;
  isManuallyApproved?: boolean;
  solution?: string;
};

export const normalizeChallenges = (
  completedChallenges: CompletedChallenge[]
): NormalizedChallenge[] => {
  const noNullProps = completedChallenges.map(challenge =>
    removeNulls(challenge)
  );
  // files.path is optional
  const noNullPath = noNullProps.map(challenge => {
    const { files, ...rest } = challenge;
    const noNullFiles = files?.map(file => removeNulls(file));

    return { ...rest, files: noNullFiles };
  });

  return noNullPath;
};
