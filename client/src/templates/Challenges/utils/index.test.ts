import { describe, it, expect, vi } from 'vitest';
import i18n from '../../../../i18n/config-for-tests';
import envData from '../../../../config/env.json';
import { getGuideUrl } from './index';

vi.unmock('react-i18next');

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

    it('should include the block title in the search query when block and superBlock are supplied', async () => {
      await i18n.reloadResources('en', 'intro');
      const value = getGuideUrl({
        title: 'Step 19',
        block: 'learn-basic-javascript-by-building-a-role-playing-game',
        superBlock: 'javascript-algorithms-and-data-structures-v8'
      });
      expect(value).toEqual(
        `${forumLocation}/search?q=javascript-algorithms-and-data-structures-v8.blocks.learn-basic-javascript-by-building-a-role-playing-game.title%20-%20Step%2019%20in%3Atitle%20order%3Aviews`
      );
    });
  });
});
