import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getContentConfig, getLanguageConfig } from './file-handler';

vi.mock('fs', () => ({ existsSync: vi.fn(() => true) }));

describe('file-handler', () => {
  describe('getContentConfig', () => {
    it('returns expected directory structure for English', () => {
      const result = getContentConfig('english');
      expect(result).toHaveProperty('contentDir');
      expect(result).toHaveProperty('i18nContentDir');
      expect(result).toHaveProperty('blockContentDir');
      expect(result).toHaveProperty('dictionariesDir');
    });

    it('accepts custom baseDir and i18nBaseDir overrides', () => {
      const result = getContentConfig('english', {
        baseDir: '/custom/base',
        i18nBaseDir: '/custom/i18n'
      });
      expect(result.contentDir).toContain('/custom/base');
    });
  });

  describe('getLanguageConfig', () => {
    it('returns the same directory structure as getContentConfig for same inputs', () => {
      const contentResult = getContentConfig('english');
      const languageResult = getLanguageConfig('english');
      expect(contentResult).toEqual(languageResult);
    });

    it('returns expected directory structure for non-English language', () => {
      const result = getLanguageConfig('portuguese');
      expect(result).toHaveProperty('i18nContentDir');
      expect(result.i18nContentDir).toContain('portuguese');
    });
  });
});
