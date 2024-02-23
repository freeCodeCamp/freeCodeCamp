import createLanguageRedirect from './create-language-redirect';

describe('createLanguageRedirect for clientLocale === english', () => {
  const envVars = {
    clientLocale: 'english'
  };

  describe('challenge page', () => {
    const currentPageURL =
      'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const chinesePageURL =
      'https://www.freecodecamp.org/chinese/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const espanolPageURL =
      'https://www.freecodecamp.org/espanol/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const chineseTraditionalPageURL =
      'https://www.freecodecamp.org/chinese-traditional/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
    const dothrakiPageURL =
      'https://www.freecodecamp.org/dothraki/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';

    const originalLocation = window.location;

    beforeEach(() => {
      Object.defineProperty(window, 'location', {
        writable: true,
        value: new URL(currentPageURL)
      });
    });

    afterEach(() => {
      window.location = originalLocation;
    });

    [
      { lang: 'english', url: currentPageURL },
      { lang: 'chinese', url: chinesePageURL },
      { lang: 'espanol', url: espanolPageURL },
      { lang: 'chinese-traditional', url: chineseTraditionalPageURL },
      { lang: 'dothraki', url: dothrakiPageURL }
    ].forEach(({ lang, url }) => {
      it(
        lang === 'english'
          ? `should redirect to same version of page for lang == english`
          : `should redirect to ${lang} version of page`,
        () => {
          const receivedPageURL = createLanguageRedirect({
            ...envVars,
            lang
          });
          expect(receivedPageURL).toBe(url);
        }
      );
    });
  });

  describe('settings page', () => {
    const currentPageURL = 'https://www.freecodecamp.org/settings';
    const chinesePageURL = 'https://www.freecodecamp.org/chinese/settings';
    const espanolPageURL = 'https://www.freecodecamp.org/espanol/settings';
    const chineseTraditionalPageURL =
      'https://www.freecodecamp.org/chinese-traditional/settings';
    const dothrakiPageURL = 'https://www.freecodecamp.org/dothraki/settings';

    const originalLocation = window.location;

    beforeEach(() => {
      Object.defineProperty(window, 'location', {
        writable: true,
        value: new URL(currentPageURL)
      });
    });

    afterEach(() => {
      window.location = originalLocation;
    });

    [
      { lang: 'english', url: currentPageURL },
      { lang: 'chinese', url: chinesePageURL },
      { lang: 'espanol', url: espanolPageURL },
      { lang: 'chinese-traditional', url: chineseTraditionalPageURL },
      { lang: 'dothraki', url: dothrakiPageURL }
    ].forEach(({ lang, url }) => {
      it(
        lang === 'english'
          ? `should redirect to same version of page for lang == english`
          : `should redirect to ${lang} version of page`,
        () => {
          const receivedPageURL = createLanguageRedirect({
            ...envVars,
            lang
          });
          expect(receivedPageURL).toBe(url);
        }
      );
    });
  });
});

describe('createLanguageRedirect for clientLocale === chinese', () => {
  const envVars = {
    clientLocale: 'chinese'
  };

  describe('challenge page', () => {
    const currentPageURL =
      'https://www.freecodecamp.org/chinese/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element';
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
      Object.defineProperty(window, 'location', {
        writable: true,
        value: new URL(currentPageURL)
      });
    });

    afterEach(() => {
      window.location = originalLocation;
    });

    [
      { lang: 'chinese', url: currentPageURL },
      { lang: 'english', url: englishPageURL },
      { lang: 'espanol', url: espanolPageURL },
      { lang: 'chinese-traditional', url: chineseTraditionalPageURL },
      { lang: 'dothraki', url: dothrakiPageURL }
    ].forEach(({ lang, url }) => {
      it(
        lang === 'chinese'
          ? `should redirect to same version of page for lang == chinese`
          : `should redirect to ${lang} version of page`,
        () => {
          const receivedPageURL = createLanguageRedirect({
            ...envVars,
            lang
          });
          expect(receivedPageURL).toBe(url);
        }
      );
    });
  });

  describe('settings page', () => {
    const currentPageURL = 'https://www.freecodecamp.org/chinese/settings';
    const englishPageURL = 'https://www.freecodecamp.org/settings';
    const espanolPageURL = 'https://www.freecodecamp.org/espanol/settings';
    const chineseTraditionalPageURL =
      'https://www.freecodecamp.org/chinese-traditional/settings';
    const dothrakiPageURL = 'https://www.freecodecamp.org/dothraki/settings';

    const originalLocation = window.location;

    beforeEach(() => {
      Object.defineProperty(window, 'location', {
        writable: true,
        value: new URL(currentPageURL)
      });
    });

    afterEach(() => {
      window.location = originalLocation;
    });

    [
      { lang: 'chinese', url: currentPageURL },
      { lang: 'english', url: englishPageURL },
      { lang: 'espanol', url: espanolPageURL },
      { lang: 'chinese-traditional', url: chineseTraditionalPageURL },
      { lang: 'dothraki', url: dothrakiPageURL }
    ].forEach(({ lang, url }) => {
      it(
        lang === 'chinese'
          ? `should redirect to same version of page for lang == chinese`
          : `should redirect to ${lang} version of page`,
        () => {
          const receivedPageURL = createLanguageRedirect({
            ...envVars,
            lang
          });
          expect(receivedPageURL).toBe(url);
        }
      );
    });
  });
});
