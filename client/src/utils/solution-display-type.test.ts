import { describe, it, expect } from 'vitest';
import {
  bothLinks,
  examDownload,
  examResults,
  examResultsAndDownload,
  invalidGithubLink,
  legacySolution,
  multifilePythonSolution,
  multifileSolution,
  onlyGithubLink,
  onlySolution,
  withChallenges
} from './__fixtures__/completed-challenges';
import { getSolutionDisplayType } from './solution-display-type';

describe('getSolutionDisplayType', () => {
  it('should handle missing solutions', () => {
    expect(getSolutionDisplayType(onlyGithubLink)).toBe('none');
  });
  it('should handle legacy solutions', () => {
    expect(getSolutionDisplayType(legacySolution)).toBe('showUserCode');
  });
  it('should handle solutions with files', () => {
    expect(getSolutionDisplayType(withChallenges)).toBe('showUserCode');
    expect(getSolutionDisplayType(multifileSolution)).toBe(
      'showMultifileProjectSolution'
    );
    expect(getSolutionDisplayType(multifilePythonSolution)).toBe(
      'showUserCode'
    );
  });
  it('should handle solutions with a single valid url', () => {
    expect(getSolutionDisplayType(onlySolution)).toBe('showProjectLink');
    expect(getSolutionDisplayType(invalidGithubLink)).toBe('showProjectLink');
  });
  it('should handle solutions with both links', () => {
    expect(getSolutionDisplayType(bothLinks)).toBe('showProjectAndGithubLinks');
  });
  it('should handle exam results', () => {
    expect(getSolutionDisplayType(examResults)).toBe('showExamResults');
  });
  it('should handle exam download type with no exam results', () => {
    expect(getSolutionDisplayType(examDownload)).toBe('noSolutionToDisplay');
  });
  it('should prioritize exam results over exam download type', () => {
    expect(getSolutionDisplayType(examResultsAndDownload)).toBe(
      'showExamResults'
    );
  });
});
