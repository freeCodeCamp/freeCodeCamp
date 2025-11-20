import { describe, expect, it } from 'vitest';
import { challengeTypes } from '../../../shared-dist/config/challenge-types';
import { isProjectBased } from './curriculum-layout';

describe('isProjectBased logic', () => {
  it('should identify a FrontEndProject as a project', () => {
    expect(isProjectBased(challengeTypes.frontEndProject)).toBe(true);
  });

  it('should identify a Lab challenge as a project', () => {
    expect(isProjectBased(challengeTypes.lab)).toBe(true);
  });

  it('should identify a Colab challenge as a project', () => {
    expect(isProjectBased(challengeTypes.colab)).toBe(true);
  });
});
