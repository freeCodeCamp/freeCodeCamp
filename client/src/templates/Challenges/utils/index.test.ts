import { describe, it, expect } from 'vitest';
import envData from '../../../../config/env.json';
import { getGuideUrl } from './index';

const { forumLocation } = envData;

describe('index', () => {
  describe('getGuideUrl', () => {
    it('should use forum topic url when forumTopicId is supplied', () => {
      const value = getGuideUrl({
        forumTopicId: 12345
      });
      expect(value).toEqual(`${forumLocation}/t/12345`);
    });

    it('should return an empty string when no forumTopicId is supplied', () => {
      const value = getGuideUrl({});
      expect(value).toEqual('');
    });
  });
});
