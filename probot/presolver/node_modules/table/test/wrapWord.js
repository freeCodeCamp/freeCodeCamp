import {
    expect
} from 'chai';
import wrapWord from './../src/wrapWord';

describe('wrapWord', () => {
  it('wraps a string at a nearest whitespace', () => {
    expect(wrapWord('aaa bbb', 5)).to.deep.equal(['aaa', 'bbb']);
    expect(wrapWord('a a a bbb', 5)).to.deep.equal(['a a a', 'bbb']);
  });
  context('a single word is longer than chunk size', () => {
    it('cuts the word', () => {
      expect(wrapWord('aaaaa', 2)).to.deep.equal(['aa', 'aa', 'a']);
    });
  });
  context('a long word with a special character', () => {
    it('cuts the word at the special character', () => {
      expect(wrapWord('aaa\\bbb', 5)).to.deep.equal(['aaa\\', 'bbb']);
      expect(wrapWord('aaa/bbb', 5)).to.deep.equal(['aaa/', 'bbb']);
      expect(wrapWord('aaa_bbb', 5)).to.deep.equal(['aaa_', 'bbb']);
      expect(wrapWord('aaa-bbb', 5)).to.deep.equal(['aaa-', 'bbb']);
      expect(wrapWord('aaa.bbb', 5)).to.deep.equal(['aaa.', 'bbb']);
      expect(wrapWord('aaa,bbb', 5)).to.deep.equal(['aaa,', 'bbb']);
      expect(wrapWord('aaa;bbb', 5)).to.deep.equal(['aaa;', 'bbb']);
    });
  });
  context('a special character after the length of a container', () => {
    it('does not include special character', () => {
      expect(wrapWord('aa-bbbbb-cccc', 5)).to.deep.equal(['aa-', 'bbbbb', '-cccc']);
    });
  });
});
