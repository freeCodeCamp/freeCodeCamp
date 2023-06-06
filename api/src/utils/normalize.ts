/* This module's job is to parse the database output and prepare it for
serialization */
import { ProfileUI, CompletedChallenge } from '@prisma/client';
import _ from 'lodash';

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
): Partial<ProfileUI> => {
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

// eslint-disable-next-line @typescript-eslint/ban-types
export const removeNulls = <T extends object>(obj: T): Partial<T> =>
  _.pickBy(obj, value => value !== null);

// TODO: add the boundary type. I'm not doing it yet, because I suspect that the
// type will need to change.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const normalizeChallenges = (
  completedChallenges: CompletedChallenge[]
) => {
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
