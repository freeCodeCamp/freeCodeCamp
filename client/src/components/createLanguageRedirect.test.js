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
    const chineseTraditionalPageURL =
      'https://www.freecodecamp.org/chinese-traditional/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const dothrakiPageURL =
      'https://www.freecodecamp.org/dothraki/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';

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

    it('should redirect to chinese-traditional version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'chinese-traditional'
      });
      expect(receivedPageURL).toBe(chineseTraditionalPageURL);
    });

    it('should redirect to dothraki version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'dothraki'
      });
      expect(receivedPageURL).toBe(dothrakiPageURL);
    });
  });

  describe('settings page', () => {
    const currentPageURL = 'https://www.freecodecamp.org/settings';
    const chinesePageURL = 'https://chinese.freecodecamp.org/settings';
    const espanolPageURL = 'https://www.freecodecamp.org/espanol/settings';
    const chineseTraditionalPageURL =
      'https://www.freecodecamp.org/chinese-traditional/settings';
    const dothrakiPageURL = 'https://www.freecodecamp.org/dothraki/settings';

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

    it('should redirect to chinese-traditional version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'chinese-traditional'
      });
      expect(receivedPageURL).toBe(chineseTraditionalPageURL);
    });

    it('should redirect to dothraki version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'dothraki'
      });
      expect(receivedPageURL).toBe(dothrakiPageURL);
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
    const chineseTraditionalPageURL =
      'https://www.freecodecamp.org/chinese-traditional/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const dothrakiPageURL =
      'https://www.freecodecamp.org/dothraki/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';

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

    it('should redirect to chinese-traditional version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'chinese-traditional'
      });
      expect(receivedPageURL).toBe(chineseTraditionalPageURL);
    });

    it('should redirect to dothraki version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'dothraki'
      });
      expect(receivedPageURL).toBe(dothrakiPageURL);
    });
  });

  describe('settings page', () => {
    const currentPageURL = 'https://chinese.freecodecamp.org/settings';
    const englishPageURL = 'https://www.freecodecamp.org/settings';
    const espanolPageURL = 'https://www.freecodecamp.org/espanol/settings';
    const chineseTraditionalPageURL =
      'https://www.freecodecamp.org/chinese-traditional/settings';
    const dothrakiPageURL = 'https://www.freecodecamp.org/dothraki/settings';

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

    it('should redirect to chinese-traditional version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'chinese-traditional'
      });
      expect(receivedPageURL).toBe(chineseTraditionalPageURL);
    });

    it('should redirect to dothraki version of page', () => {
      const receivedPageURL = createLanguageRedirect({
        ...envVars,
        lang: 'dothraki'
      });
      expect(receivedPageURL).toBe(dothrakiPageURL);
    });
  });
});
