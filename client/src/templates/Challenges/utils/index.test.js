/* global expect */

import { forumLocation } from '../../../../../config/env.json';

const { getGuideUrl } = require('./');

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
  });
});
