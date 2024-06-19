import { isProfane } from 'no-profanity';

import { blocklistedUsernames } from '../../../../shared/config/constants';

/**
 * Checks if a username is restricted (i.e. It's profane or reserved).
 * @param username - The username to check.
 * @returns True if the username is restricted, false otherwise.
 */
export const isRestricted = (username: string): boolean => {
  return isProfane(username) || blocklistedUsernames.includes(username);
};
