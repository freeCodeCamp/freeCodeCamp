import type { ChallengeMeta } from '../redux/prop-types';
import { isBrowser } from '../../utils';

export const PRE_AUTH_STATE_STORAGE_KEY = 'fcc:pre-auth-redirect';
export const PRE_AUTH_STATE_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

type ChallengeSnapshot = Partial<
  Pick<
    ChallengeMeta,
    | 'id'
    | 'title'
    | 'block'
    | 'superBlock'
    | 'challengeType'
    | 'nextChallengePath'
    | 'prevChallengePath'
  >
>;

export interface PreAuthContext {
  reason?: string;
  challenge?: ChallengeSnapshot;
}

interface StoredLocation {
  href: string;
  pathname: string;
  search: string;
  hash: string;
}

export interface PreAuthState {
  timestamp: number;
  location: StoredLocation;
  context?: PreAuthContext;
}

const sanitizeChallengeSnapshot = (
  challenge?: ChallengeMeta | ChallengeSnapshot
): ChallengeSnapshot | undefined => {
  if (!challenge?.id) return undefined;
  const {
    id,
    title,
    block,
    superBlock,
    challengeType,
    nextChallengePath,
    prevChallengePath
  } = challenge;

  return {
    id,
    title,
    block,
    superBlock,
    challengeType,
    nextChallengePath,
    prevChallengePath
  };
};

const hasContextData = (context?: PreAuthContext): boolean =>
  !!(context?.reason || context?.challenge);

export const capturePreAuthState = (context?: PreAuthContext): void => {
  if (!isBrowser()) return;

  try {
    const { href, pathname, search, hash } = window.location;
    const sanitizedContext = context
      ? {
          ...context,
          challenge: sanitizeChallengeSnapshot(context.challenge)
        }
      : undefined;

    const payload: PreAuthState = {
      timestamp: Date.now(),
      location: {
        href,
        pathname,
        search,
        hash
      },
      context: hasContextData(sanitizedContext) ? sanitizedContext : undefined
    };

    window.localStorage?.setItem(
      PRE_AUTH_STATE_STORAGE_KEY,
      JSON.stringify(payload)
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('Unable to capture pre-auth state', error);
  }
};

const readStoredState = (): PreAuthState | null => {
  if (!isBrowser()) return null;
  const raw = window.localStorage?.getItem(PRE_AUTH_STATE_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as PreAuthState;
    if (typeof parsed.timestamp !== 'number') {
      window.localStorage?.removeItem(PRE_AUTH_STATE_STORAGE_KEY);
      return null;
    }

    if (Date.now() - parsed.timestamp > PRE_AUTH_STATE_TTL_MS) {
      window.localStorage?.removeItem(PRE_AUTH_STATE_STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch {
    window.localStorage?.removeItem(PRE_AUTH_STATE_STORAGE_KEY);
    return null;
  }
};

export const consumePreAuthState = (): PreAuthState | null => {
  if (!isBrowser()) return null;
  const state = readStoredState();
  window.localStorage?.removeItem(PRE_AUTH_STATE_STORAGE_KEY);
  return state;
};

export const peekPreAuthState = (): PreAuthState | null => {
  return readStoredState();
};

export const buildPathFromLocation = (state?: PreAuthState): string | null => {
  if (!state?.location?.pathname) return null;
  const { pathname, search, hash } = state.location;
  return `${pathname}${search || ''}${hash || ''}`;
};

