/* global expect */

import createLanguageRedirect from './createLanguageRedirect';

describe('createLanguageRedirect for clientLocale === english', () => {
  const envVars = {
    clientLocale: 'english'
  };

  describe('challenge page', () => {
    const currentPageURL =
      'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const chinesePageURL =
      'https://chinese.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const espanolPageURL =
      'https://www.freecodecamp.org/espanol/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const francaisPageURL =
      'https://www.freecodecamp.org/francais/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';

    const originalLocation = window.location;

    beforeEach(() => {
      delete window.location;
      window.location = new URL(currentPageURL);
    });

    afterEach(() => {
      window.location = originalLocation;
    });

    it('should redirect to same version of page for lang == english', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'english'
      });
      expect(receivedPageURL).toBe(currentPageURL);
    });

    it('should redirect to chinese version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'chinese'
      });
      expect(receivedPageURL).toBe(chinesePageURL);
    });

    it('should redirect to espanol version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'espanol'
      });
      expect(receivedPageURL).toBe(espanolPageURL);
    });

    it('should redirect to francais version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'francais'
      });
      expect(receivedPageURL).toBe(francaisPageURL);
    });

    it('should not replace the second espanol', () => {
      delete window.location;
      window.location = new URL(singleEspanolURL);
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'espanol'
      });
      expect(receivedPageURL).toBe(doubleEspanolURL);
    });
  });

  describe('settings page', () => {
    const currentPageURL = 'https://www.freecodecamp.org/settings';
    const chinesePageURL = 'https://chinese.freecodecamp.org/settings';
    const espanolPageURL = 'https://www.freecodecamp.org/espanol/settings';
    const francaisPageURL = 'https://www.freecodecamp.org/francais/settings';

    const originalLocation = window.location;

    beforeEach(() => {
      delete window.location;
      window.location = new URL(currentPageURL);
    });

    afterEach(() => {
      window.location = originalLocation;
    });

    it('should redirect to same version of page for lang == english', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'english'
      });
      expect(receivedPageURL).toBe(currentPageURL);
    });

    it('should redirect to chinese version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'chinese'
      });
      expect(receivedPageURL).toBe(chinesePageURL);
    });

    it('should redirect to espanol version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'espanol'
      });
      expect(receivedPageURL).toBe(espanolPageURL);
    });

    it('should redirect to francais version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'francais'
      });
      expect(receivedPageURL).toBe(francaisPageURL);
    });
  });
});

describe('createLanguageRedirect for clientLocale === chinese', () => {
  const envVars = {
    clientLocale: 'chinese'
  };

  describe('challenge page', () => {
    const currentPageURL =
      'https://chinese.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const englishPageURL =
      'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const espanolPageURL =
      'https://www.freecodecamp.org/espanol/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const francaisPageURL =
      'https://www.freecodecamp.org/francais/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';

    const originalLocation = window.location;

    beforeEach(() => {
      delete window.location;
      window.location = new URL(currentPageURL);
    });

    afterEach(() => {
      window.location = originalLocation;
    });

    it('should redirect to same version of page for lang == chinese', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'chinese'
      });
      expect(receivedPageURL).toBe(currentPageURL);
    });

    it('should redirect to english version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'english'
      });
      expect(receivedPageURL).toBe(englishPageURL);
    });

    it('should redirect to espanol version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'espanol'
      });
      expect(receivedPageURL).toBe(espanolPageURL);
    });

    it('should redirect to francais version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'francais'
      });
      expect(receivedPageURL).toBe(francaisPageURL);
    });
  });

  describe('settings page', () => {
    const currentPageURL = 'https://chinese.freecodecamp.org/settings';
    const englishPageURL = 'https://www.freecodecamp.org/settings';
    const espanolPageURL = 'https://www.freecodecamp.org/espanol/settings';
    const francaisPageURL = 'https://www.freecodecamp.org/francais/settings';

    const originalLocation = window.location;

    beforeEach(() => {
      delete window.location;
      window.location = new URL(currentPageURL);
    });

    afterEach(() => {
      window.location = originalLocation;
    });

    it('should redirect to same version of page for lang == chinese', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'chinese'
      });
      expect(receivedPageURL).toBe(currentPageURL);
    });

    it('should redirect to english version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'english'
      });
      expect(receivedPageURL).toBe(englishPageURL);
    });

    it('should redirect to espanol version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'espanol'
      });
      expect(receivedPageURL).toBe(espanolPageURL);
    });

    it('should redirect to francais version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'francais'
      });
      expect(receivedPageURL).toBe(francaisPageURL);
    });
  });
});
