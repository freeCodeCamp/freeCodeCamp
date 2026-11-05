import { describe, expect, it } from 'vitest';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { getChallengeTypeChoices } from './new-challenge-prompts.js';

describe('getChallengeTypeChoices', () => {
  it('excludes quiz, exam, examDownload and invalid', () => {
    const values = getChallengeTypeChoices().map(({ value }) => value);

    for (const excluded of [
      challengeTypes.quiz,
      challengeTypes.exam,
      challengeTypes.examDownload,
      challengeTypes.invalid
    ]) {
      expect(values).not.toContain(excluded.toString());
    }
  });

  it('still offers the regular challenge types', () => {
    const values = getChallengeTypeChoices().map(({ value }) => value);

    for (const offered of [
      challengeTypes.html,
      challengeTypes.js,
      challengeTypes.modern,
      challengeTypes.step,
      challengeTypes.lab
    ]) {
      expect(values).toContain(offered.toString());
    }
  });
});
