import { describe, it, expect, vi } from 'vitest';
import type { TFunction } from 'i18next';

vi.mock('i18next', () => ({
  default: {
    t: ((key: string) => key) as unknown as TFunction
  }
}));
import envData from '../../../../config/env.json';
import { getGuideUrl } from './index';

const { forumLocation } = envData;

describe('index', () => {
  describe('getGuideUrl', () => {
    it('should use forum topic url when forumTopicId is supplied', () => {
      const value = getGuideUrl({
        forumTopicId: 12345,
        title: 'a sample title'
      });
      expect(value).toEqual(`${forumLocation}/t/12345`);
    });

    it('should use search endpoint when no forumTopicId is supplied', () => {
      const value = getGuideUrl({
        title: '& a sample title?'
      });
      expect(value).toEqual(
        `${forumLocation}/search?q=%26%20a%20sample%20title%3F%20in%3Atitle%20order%3Aviews`
      );
    });

    it('should include block and superBlock translation in search endpoint', () => {
      const value = getGuideUrl({
        title: 'Step 19',
        block: 'shortest-path-algorithm',
        superBlock: 'python-v9'
      });
      expect(value).toEqual(
        `${forumLocation}/search?q=intro%3Apython-v9.blocks.shortest-path-algorithm.title%20-%20Step%2019%20in%3Atitle%20order%3Aviews`
      );
    });
  });
});
