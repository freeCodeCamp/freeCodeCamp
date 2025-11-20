import { describe, expect, it } from 'vitest';
import { challengeTypes } from '../../../shared-dist/config/challenge-types';
import { isProjectBased } from './curriculum-layout';

describe('isProjectBased logic', () => {
  it('deve identificar um FrontEndProject como projeto', () => {
    expect(isProjectBased(challengeTypes.frontEndProject)).toBe(true);
  });

  it('deve identificar um Lab comum como projeto', () => {
    expect(isProjectBased(challengeTypes.lab)).toBe(true);
  });

  it('deve identificar um Colab como projeto (Fix #63939)', () => {
    expect(isProjectBased(challengeTypes.colab)).toBe(true);
  });
});
