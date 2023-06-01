import { ProfileUI } from '@prisma/client';
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
