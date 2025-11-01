import { describe, it, expect } from 'vitest';
import { getSolutionDisplayType } from './solution-display-type';
import { challengeTypes } from '../../../shared-dist/config/challenge-types';
import type { CompletedChallenge } from '../redux/prop-types';

describe('getSolutionDisplayType - MC/DC Coverage', () => {
  // CT1: Exam download challenge - testa CD1T
  it('should return noSolutionToDisplay for exam download challenge', () => {
    const challenge: CompletedChallenge = {
      id: 'test',
      completedDate: Date.now(),
      challengeType: challengeTypes.examDownload,
      solution: 'https://example.com',
      githubLink: 'https://github.com/user/repo',
      challengeFiles: [],
      examResults: undefined
    };
    
    expect(getSolutionDisplayType(challenge)).toBe('noSolutionToDisplay');
  });

  // CT2: Has exam results - testa CD1F, CD2T
  it('should return showExamResults when examResults is present', () => {
    const challenge: CompletedChallenge = {
      id: 'test',
      completedDate: Date.now(),
  challengeType: challengeTypes.js,
      solution: 'https://example.com',
      githubLink: undefined,
      challengeFiles: [],
      examResults: {
        numberOfCorrectAnswers: 1,
        numberOfQuestionsInExam: 1,
        percentCorrect: 100,
        passingPercent: 50,
        passed: true,
        examTimeInSeconds: 60
      }
    };
    
    expect(getSolutionDisplayType(challenge)).toBe('showExamResults');
  });

  // CT3: Has files, multifile cert project - testa CD1F, CD2F, CD3T, CD4T
  it('should return showMultifileProjectSolution for multifile cert project with files', () => {
    const challenge: CompletedChallenge = {
      id: 'test',
      completedDate: Date.now(),
  challengeType: challengeTypes.multifileCertProject,
  solution: null,
  githubLink: undefined,
  challengeFiles: [{ contents: 'test', ext: 'js', fileKey: 'test', name: 'test.js' }],
  examResults: undefined
    };
    
    expect(getSolutionDisplayType(challenge)).toBe('showMultifileProjectSolution');
  });

  // CT4: Has files, not multifile cert - testa CD1F, CD2F, CD3T, CD4F
  it('should return showUserCode for non-multifile project with files', () => {
    const challenge: CompletedChallenge = {
      id: 'test',
      completedDate: Date.now(),
  challengeType: challengeTypes.js,
  solution: null,
  githubLink: undefined,
  challengeFiles: [{ contents: 'test', ext: 'js', fileKey: 'test', name: 'test.js' }],
  examResults: undefined
    };
    
    expect(getSolutionDisplayType(challenge)).toBe('showUserCode');
  });

  // CT5: No solution - testa CD1F, CD2F, CD3F, CD5T
  it('should return none when no solution is provided', () => {
    const challenge: CompletedChallenge = {
      id: 'test',
      completedDate: Date.now(),
  challengeType: challengeTypes.js,
  solution: null,
  githubLink: 'https://github.com/user/repo',
  challengeFiles: [],
  examResults: undefined
    };
    
    expect(getSolutionDisplayType(challenge)).toBe('none');
  });

  // CT6: Solution without protocol - testa CD1F, CD2F, CD3F, CD5F, CD6T
  it('should return showUserCode for solution without protocol', () => {
    const challenge: CompletedChallenge = {
      id: 'test',
      completedDate: Date.now(),
  challengeType: challengeTypes.js,
  solution: 'var x = 1; console.log(x);',
  githubLink: undefined,
  challengeFiles: [],
  examResults: undefined
    };
    
    expect(getSolutionDisplayType(challenge)).toBe('showUserCode');
  });

  // CT7: Solution with protocol, github with protocol - testa CD1F, CD2F, CD3F, CD5F, CD6F, CD7T
  it('should return showProjectAndGithubLinks when both solution and github have protocols', () => {
    const challenge: CompletedChallenge = {
      id: 'test',
      completedDate: Date.now(),
  challengeType: challengeTypes.js,
  solution: 'https://codepen.io/user/pen/123',
  githubLink: 'https://github.com/user/repo',
  challengeFiles: [],
  examResults: undefined
    };
    
    expect(getSolutionDisplayType(challenge)).toBe('showProjectAndGithubLinks');
  });

  // CT8: Solution with protocol, no github - testa CD1F, CD2F, CD3F, CD5F, CD6F, CD7F
  it('should return showProjectLink when solution has protocol but no github', () => {
    const challenge: CompletedChallenge = {
      id: 'test',
      completedDate: Date.now(),
  challengeType: challengeTypes.js,
  solution: 'https://codepen.io/user/pen/123',
  githubLink: undefined,
  challengeFiles: [],
  examResults: undefined
    };
    
    expect(getSolutionDisplayType(challenge)).toBe('showProjectLink');
  });
});
