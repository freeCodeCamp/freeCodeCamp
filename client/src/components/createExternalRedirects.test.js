/* global expect */

import createExternalRedirect from './createExternalRedirects';

describe('createExternalRedirects', () => {
  describe('english redirects', () => {
    const envVars = {
      clientLocale: 'english'
    };

    const englishForumUrl = 'https://forum.freecodecamp.org/';
    const englishNewsUrl = 'https://www.freecodecamp.org/news';

    it('should generate correct forum link', () => {
      const receivedUrl = createExternalRedirect('forum', { ...envVars });
      expect(receivedUrl).toBe(englishForumUrl);
    });

    it('should generate correct news link', () => {
      const receivedUrl = createExternalRedirect('news', { ...envVars });
      expect(receivedUrl).toBe(englishNewsUrl);
    });
  });

  describe('chinese redirects', () => {
    const envVars = {
      clientLocale: 'chinese'
    };

    const englishForumUrl = 'https://chinese.freecodecamp.org/forum';
    const englishNewsUrl = 'https://chinese.freecodecamp.org/news';

    it('should generate correct forum link', () => {
      const receivedUrl = createExternalRedirect('forum', { ...envVars });
      expect(receivedUrl).toBe(englishForumUrl);
    });

    it('should generate correct news link', () => {
      const receivedUrl = createExternalRedirect('news', { ...envVars });
      expect(receivedUrl).toBe(englishNewsUrl);
    });
  });

  describe('spanish redirects', () => {
    const envVars = {
      clientLocale: 'espanol'
    };

    const englishForumUrl = 'https://forum.freecodecamp.org/c/espanol/';
    const englishNewsUrl = 'https://www.freecodecamp.org/espanol/news';

    it('should generate correct forum link', () => {
      const receivedUrl = createExternalRedirect('forum', { ...envVars });
      expect(receivedUrl).toBe(englishForumUrl);
    });

    it('should generate correct news link', () => {
      const receivedUrl = createExternalRedirect('news', { ...envVars });
      expect(receivedUrl).toBe(englishNewsUrl);
    });
  });

  describe('french redirects', () => {
    const envVars = {
      clientLocale: 'francais'
    };

    const englishForumUrl = 'https://forum.freecodecamp.org/c/francais/';
    const englishNewsUrl = 'https://www.freecodecamp.org/francais/news';

    it('should generate correct forum link', () => {
      const receivedUrl = createExternalRedirect('forum', { ...envVars });
      expect(receivedUrl).toBe(englishForumUrl);
    });

    it('should generate correct news link', () => {
      const receivedUrl = createExternalRedirect('news', { ...envVars });
      expect(receivedUrl).toBe(englishNewsUrl);
    });
  });
});
