import { describe, expect, test } from 'vitest';

import { getResumeData } from './get-resume-data';

const challengeNodes = [
  {
    challenge: {
      id: 'a',
      superBlock: 'javascript',
      fields: { slug: '/learn/javascript/first-block/step-1' }
    }
  },
  {
    challenge: {
      id: 'b',
      superBlock: 'javascript',
      fields: { slug: '/learn/javascript/first-block/step-2' }
    }
  },
  {
    challenge: {
      id: 'c',
      superBlock: 'python',
      fields: { slug: '/learn/python/other-block/step-1' }
    }
  }
];

describe('getResumeData', () => {
  test('returns curriculum metadata and course progress', () => {
    expect(
      getResumeData(
        '/learn/javascript/first-block/step-2?messages=success',
        challengeNodes,
        [{ id: 'a' }, { id: 'c' }]
      )
    ).toEqual({
      progress: 50,
      superBlock: 'javascript'
    });
  });

  test('does not count duplicate or other-course completions', () => {
    expect(
      getResumeData('/learn/javascript/first-block/step-2/', challengeNodes, [
        { id: 'a' },
        { id: 'a' },
        { id: 'c' }
      ])?.progress
    ).toBe(50);
  });

  test('returns null when the resume challenge is not in the curriculum', () => {
    expect(getResumeData('/learn/unknown', challengeNodes, [])).toBeNull();
  });

  test('returns null for a malformed resume URL', () => {
    expect(getResumeData('https://[invalid', challengeNodes, [])).toBeNull();
  });
});
