import envData from '../../../../../config/env.json';

const { forumLocation, homeLocation } = envData;

const { getGuideUrl, removeUrlParameters } = require('./');

const exampleUrls = {
  plainLesson: `${homeLocation}/learn/back-end-development-and-apis/mongodb-and-mongoose/install-and-set-up-mongoose`,
  paramLesson: `${homeLocation}/learn/back-end-development-and-apis/mongodb-and-mongoose/install-and-set-up-mongoose?messages=success%5B0%5D%3Dflash.signin-success`
};

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
  describe('removeUrlParameters', () => {
    it('should not change a url without parameters', () => {
      const value = removeUrlParameters(exampleUrls.plainLesson);
      expect(value).toEqual(exampleUrls.plainLesson);
    });
    it('should remove only url parameters', () => {
      const value = removeUrlParameters(exampleUrls.paramLesson);
      expect(value).toEqual(exampleUrls.plainLesson);
    });
  });
});
