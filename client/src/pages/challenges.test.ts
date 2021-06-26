// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * TODO:
 * Passing incomplete objects here is causing TS to be angry.
 * We should either make the expected properties optional, or reevaluate
 * these tests.
 */
import toLearnPath from '../utils/to-learn-path';
import { withPrefix } from 'gatsby';

describe('toLearnPath', () => {
  it('should return a string', () => {
    expect(typeof toLearnPath({})).toBe('string');
  });
  it('should include /learn', () => {
    expect(toLearnPath({})).toMatch(withPrefix('/learn'));
  });
  it('should include superBlock after learn', () => {
    expect(toLearnPath({ superBlock: 'testSuper' })).toBe(
      withPrefix('/learn/testSuper')
    );
  });
  it('should include superBlock, then block after learn', () => {
    expect(toLearnPath({ superBlock: 'testSuper', block: 'testBlock' })).toBe(
      withPrefix('/learn/testSuper/testBlock')
    );
  });
  it('should include superBlock, block, then challenge after learn', () => {
    expect(
      toLearnPath({
        superBlock: 'testSuper',
        block: 'testBlock',
        challenge: 'testChallenge'
      })
    ).toBe(withPrefix('/learn/testSuper/testBlock/testChallenge'));
  });
});
