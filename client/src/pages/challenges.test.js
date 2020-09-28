/* global expect */
import { toLearnPath } from './challenges';

describe('toLearnPath', () => {
  it('should return a string', () => {
    expect(typeof toLearnPath({})).toBe('string');
  });
  it('should include /learn', () => {
    expect(toLearnPath({})).toMatch(/\/learn/);
  });
  it('should include superBlock after learn', () => {
    expect(toLearnPath({ superBlock: 'testSuper' })).toBe('/learn/testSuper');
  });
  it('should include superBlock, then block after learn', () => {
    expect(toLearnPath({ superBlock: 'testSuper', block: 'testBlock' })).toBe(
      '/learn/testSuper/testBlock'
    );
  });
  it('should include superBlock, block, then challenge after learn', () => {
    expect(
      toLearnPath({
        superBlock: 'testSuper',
        block: 'testBlock',
        challenge: 'testChallenge'
      })
    ).toBe('/learn/testSuper/testBlock/testChallenge');
  });
});
