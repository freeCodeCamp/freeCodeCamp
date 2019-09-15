/* global expect */
import { HtmlValidator } from './html';

const testDom = `
      <style>
      h1 {
        color: red;
        color: blue;
        /* color: orange; */
      }

      .bold-text {
        font-size: bolder;
      }

      #hero img {
        width: 100vw;
        height: 80vh;
      }

      </style>

      <header>
        <h1>Hello World</h1>
        <h2>CatPhotoApp</h2>
        <div id='hero'>
          <img src='hero-splash.png'/>
        </div>
      </header>
      <main>
        <p>
          <span class='bold-text'>Some bold text</span>
          . A bunch more text

        <!-- This is a comment -->
        </p>
      </main>`;

describe('HtmlValidator', () => {
  describe('html validation utilities', () => {
    it('validates if an element exists in the DOM under test', () => {
      expect.assertions(6);
      const validator = new HtmlValidator(testDom);

      expect(validator.domNodeExists('.bold-text')).toBe(true);
      expect(validator.domNodeExists('#hero')).toBe(true);
      expect(validator.domNodeExists('header #hero')).toBe(true);
      expect(validator.domNodeExists('header > #hero')).toBe(true);
      expect(validator.domNodeExists('.not-here')).toBe(false);
      expect(validator.domNodeExists('#not-here')).toBe(false);
    });

    it('validates if an element has text', () => {
      expect.assertions(5);
      const validator = new HtmlValidator(testDom);

      expect(validator.elementHasText('main > p', 'more text')).toBe(true);
      expect(validator.elementHasText('main > p', 'MORE text')).toBe(true);
      expect(validator.elementHasText('main > p', 'Some bold text')).toBe(true);

      expect(validator.elementHasText('main > p', 'Not here')).toBe(false);
      expect(validator.elementHasText('main > p', 'a comment')).toBe(false);
    });

    it('validates DOM comments', () => {
      const validator = new HtmlValidator(testDom);
      const noCommentValidator = new HtmlValidator('<h1>Hello, World!</h1>');
      expect(validator.domHasComments()).toBe(true);
      expect(noCommentValidator.domHasComments()).toBe(false);
    });

    it('validates comment text', () => {
      const validator = new HtmlValidator(testDom);

      expect(validator.domCommentsHasText('This is a comment')).toBe(true);
      expect(validator.domCommentsHasText('Nope')).toBe(false);
    });
  });

  describe('css validation utilities', () => {
    it('verifies a css rule exists for a selector', () => {
      const validator = new HtmlValidator(testDom);
      const css = validator.getCssValidator();

      expect(css.hasRuleForSelector('h1')).toBe(true);
      expect(css.hasRuleForSelector('section')).toBe(false);
    });

    it('verified declared properties on a selector', () => {
      const validator = new HtmlValidator(testDom);
      const css = validator.getCssValidator();

      expect(css.selectorHasProperty('h1', ['color', 'red'])).toBe(false);
      expect(css.selectorHasProperty('h1', ['color', 'blue'])).toBe(true);
      expect(css.selectorHasProperty('h1', ['color', 'orange'])).toBe(false);

      expect(
        css.selectorHasProperty(
          '#hero img',
          ['width', '100vw'],
          ['height', '80vh']
        )
      ).toBe(true);

      expect(
        css.selectorHasProperty(
          '#hero img',
          ['width', '100vw'],
          ['height', '80vh'],
          ['opacity', '0.2']
        )
      ).toBe(false);

      expect(
        css.selectorHasProperty('.bold-text', ['font-size', 'bolder'])
      ).toBe(true);
    });
  });
});
