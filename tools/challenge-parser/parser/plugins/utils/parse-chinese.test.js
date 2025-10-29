import { describe, it, expect } from 'vitest';
import { parseChinesePattern } from './parse-chinese';

describe('parseChinesePattern', () => {
  it('should parse Chinese text with hanzi and pinyin', () => {
    const result = parseChinesePattern('你好 (nǐ hǎo)');
    expect(result).toEqual({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });

  it('should handle text without spaces before parentheses', () => {
    const result = parseChinesePattern('你好(nǐ hǎo)');
    expect(result).toEqual({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });

  it('should handle text with multiple spaces', () => {
    const result = parseChinesePattern('你好   (nǐ hǎo)');
    expect(result).toEqual({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });

  it('should return null for text without parentheses', () => {
    const result = parseChinesePattern('你好');
    expect(result).toBeNull();
  });

  it('should return null for text with only opening parenthesis', () => {
    const result = parseChinesePattern('你好 (nǐ hǎo');
    expect(result).toBeNull();
  });

  it('should return null for empty string', () => {
    const result = parseChinesePattern('');
    expect(result).toBeNull();
  });
});
