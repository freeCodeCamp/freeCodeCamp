/* global expect */

import createExternalRedirect from './createExternalRedirects';

describe('createExternalRedirects', () => {
  describe('english redirects', () => {
    const envVars = {
      clientLocale: 'english'
    };

    const forumURL = 'https://forum.freecodecamp.org/';
    const newsURL = 'https://www.freecodecamp.org/news';

    it('should generate correct forum link', () => {
      const receivedUrl = createExternalRedirect('forum', { ...envVars });
      expect(receivedUrl).toBe(forumURL);
    });

    it('should generate correct news link', () => {
      const receivedUrl = createExternalRedirect('news', { ...envVars });
      expect(receivedUrl).toBe(newsURL);
    });
  });

  describe('chinese redirects', () => {
    const envVars = {
      clientLocale: 'chinese'
    };

    const forumURL = 'https://chinese.freecodecamp.org/forum';
    const newsURL = 'https://chinese.freecodecamp.org/news';

    it('should generate correct forum link', () => {
      const receivedUrl = createExternalRedirect('forum', { ...envVars });
      expect(receivedUrl).toBe(forumURL);
    });

    it('should generate correct news link', () => {
      const receivedUrl = createExternalRedirect('news', { ...envVars });
      expect(receivedUrl).toBe(newsURL);
    });
  });

  describe('spanish redirects', () => {
    const envVars = {
      clientLocale: 'espanol'
    };

    const forumURL = 'https://forum.freecodecamp.org/c/espanol/';
    const newsURL = 'https://www.freecodecamp.org/espanol/news';

    it('should generate correct forum link', () => {
      const receivedUrl = createExternalRedirect('forum', { ...envVars });
      expect(receivedUrl).toBe(forumURL);
    });

    it('should generate correct news link', () => {
      const receivedUrl = createExternalRedirect('news', { ...envVars });
      expect(receivedUrl).toBe(newsURL);
    });
  });

  describe('french redirects', () => {
    const envVars = {
      clientLocale: 'francais'
    };

    const forumURL = 'https://forum.freecodecamp.org/c/francais/';
    const newsURL = 'https://www.freecodecamp.org/francais/news';

    it('should generate correct forum link', () => {
      const receivedUrl = createExternalRedirect('forum', { ...envVars });
      expect(receivedUrl).toBe(forumURL);
    });

    it('should generate correct news link', () => {
      const receivedUrl = createExternalRedirect('news', { ...envVars });
      expect(receivedUrl).toBe(newsURL);
    });
  });

  describe('chinese-traditional redirects', () => {
    const envVars = {
      clientLocale: 'chinese-traditional'
    };

    const forumURL = 'https://chinese.freecodecamp.org/forum';
    const newsURL = 'https://chinese.freecodecamp.org/news';

    it('should generate correct forum link', () => {
      const receivedUrl = createExternalRedirect('forum', { ...envVars });
      expect(receivedUrl).toBe(forumURL);
    });

    it('should generate correct news link', () => {
      const receivedUrl = createExternalRedirect('news', { ...envVars });
      expect(receivedUrl).toBe(newsURL);
    });
  });
});
