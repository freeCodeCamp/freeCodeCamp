import { incrementSessionCompletedChallenges } from './session-storage';
const key = 'session-completed-challenges';
describe('challenge session storage', () => {
  it('should increment the challenge number after completion', () => {
    incrementSessionCompletedChallenges();

    const value = sessionStorage.getItem(key);

    expect(value).toBe('1');

    sessionStorage.removeItem(key);
  });
});
