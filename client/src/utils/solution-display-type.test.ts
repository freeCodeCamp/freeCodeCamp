import {
  bothLinks,
  invalidSolution,
  invalidGithubLink,
  onlyGithubLink,
  onlySolution,
  withChallenges
} from './__fixtures/completed-challenges';
import { getSolutionDisplayType } from './solution-display-type';

describe('getSolutionDisplayType', () => {
  it('should return "none" for missing solutions', () => {
    expect(getSolutionDisplayType(onlyGithubLink)).toBe('none');
  });
  it('should return "none" for invalid solutions', () => {
    expect(getSolutionDisplayType(invalidSolution)).toBe('none');
  });
  it('should return "showFilesSolution" for solutions with files', () => {
    expect(getSolutionDisplayType(withChallenges)).toBe('showFilesSolution');
  });
  it('should return "showProjectLink" for solutions with a single valid url', () => {
    expect.assertions(2);
    expect(getSolutionDisplayType(onlySolution)).toBe('showProjectLink');
    expect(getSolutionDisplayType(invalidGithubLink)).toBe('showProjectLink');
  });
  it('should return "showProjectAndGitHubLinks" for solutions with both links', () => {
    expect(getSolutionDisplayType(bothLinks)).toBe('showProjectAndGitHubLinks');
  });
});
