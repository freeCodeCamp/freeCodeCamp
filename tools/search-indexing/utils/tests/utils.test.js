/* global expect */
const _ = require('lodash');

const { stripURLs, stripHTML } = require('../');

describe('utils', () => {
  describe('stripURLs', () => {
    it('should return a string', () => {
      const value = stripURLs('some string');

      expect(_.isString(value)).toBe(true);
    });

    it('should remove a url from the input', () => {
      const value = stripURLs('https://freecodecamp.org/en/challenges');
      expect(value).toEqual('');
    });

    it('should leave non-urls intact', () => {
      const value = stripURLs(
        'Some text before https://freecodecamp.org/en/challenges some text ' +
          'after'
      );
      const expected = 'Some text before some text after';
      expect(value).toEqual(expected);
    });

    it('should preserve punctuation, but remove new line chars', () => {
      const value = stripURLs(
        "http://search.freecodecamp.org\nI'm inclined to say, is just amazing!"
      );
      const expected = "I'm inclined to say, is just amazing!";
      expect(value).toEqual(expected);
    });

    it('should remove urls from a block of text', () => {
      const value = stripURLs(
        'Learn how Symbols work in JavaScript ES6!\n\nCode:\n� ' +
          'http://codepen.io/beaucarnes/pen/ZLQEWx?editors=0011\n\nMore ' +
          'info:\n� http://www.2ality.com/2014/12/es6-symbols.html\n� ' +
          'http://exploringjs.com/es6/ch_symbols.html\n\nBeau Carnes on ' +
          'Twitter: https://twitter.com/carnesbeau\n\n⭐JavaScript Playlists⭐' +
          '\n▶JavaScript Basics: https://www.youtube.com/playlist?list=' +
          'PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5\n▶ES6: https://www.youtube.com' +
          '/playlist?list=PLWKjhJtqVAbljtmmeS0c-CEl2LdE-eR_F\n▶Design ' +
          'Patterns: https://www.youtube.com/playlist?list=PLWKjhJtqVAbnZtkA' +
          'I3BqcYxKnfWn_C704\n▶Data Structures and Algorithms: https://www.' +
          'youtube.com/playlist?list=PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ\n▶' +
          'Clean Code: https://www.youtube.com/playlist?list=PLWKjhJtqVAbkK2' +
          "4EaPurzMq0-kw5U9pJh\n\n-\nWe're busy people who learn to code, " +
          'then practice by building projects for nonprofits. Learn ' +
          'Full-stack JavaScript, build a portfolio, and get great ' +
          'references with our open source community.\n\nJoin our community ' +
          'at https://freecodecamp.com\nFollow us on twitter: ' +
          'https://twitter.com/freecodecamp\nLike us on Facebook: https://' +
          'www.facebook.com/freecodecamp\nFollow Quincy on Quora: https://' +
          'www.quora.com/Quincy-Larson'
      );
      const expected =
        'Learn how Symbols work in JavaScript ES6! Code: � ' +
        'More info: � � Beau Carnes on Twitter: ⭐JavaScript Playlists⭐ ▶' +
        'JavaScript Basics: ▶ES6: ▶Design Patterns: ▶Data Structures and ' +
        "Algorithms: ▶Clean Code: - We're busy people who learn to code, " +
        'then practice by building projects for nonprofits. Learn Full-stack ' +
        'JavaScript, build a portfolio, and get great references with our ' +
        'open source community. Join our community at Follow us on twitter: ' +
        'Like us on Facebook: Follow Quincy on Quora:';
      expect(value).toEqual(expected);
    });
  });

  describe('stripHTML', () => {
    it('should remove simple html tags from a block of text', () => {
      const value = stripHTML(
        "Now we've proven that every HTML page has a <code>body</code> " +
          'element, and that its <code>body</code> element can also be ' +
          'styled with CSS.Remember, you can style your <code>body</code> ' +
          'element just like any other HTML element, and all your other ' +
          "elements will inherit your <code>body</code> element's styles." +
          'First, create a <code>h1</code> element with the text <code>' +
          "Hello World</code>Then, let's give all elements on your page the " +
          'color of <code>green</code> by adding <code>color: green;</code> ' +
          'to...'
      );
      const expected =
        "Now we've proven that every HTML page has a body " +
        'element, and that its body element can also be styled with CSS.' +
        'Remember, you can style your body element just like any other HTML ' +
        'element, and all your other elements will inherit your body ' +
        "element's styles.First, create a h1 element with the text Hello " +
        "WorldThen, let's give all elements on your page the color of green " +
        'by adding color: green; to...';
      expect(value).toEqual(expected);
    });

    it('should remove escaped tags from a block of text', () => {
      const value = stripHTML(
        'You can add images to your website by using the <code>img</code> ' +
          "element, and point to a specific image's URL using the " +
          '<code>src</code> attribute.An example of this would be:<code>' +
          '&#60img src="https://www.your-image-source.com/your-image.jpg"' +
          '&#62</code>All <code>img</code> elements <strong>must</strong> ' +
          'have an <code>alt</code> attribute. The text inside an ' +
          '<code>alt</code> attribute is used for screen readers to improve ' +
          "accessibility and is displayed if the image fails to load.Let's " +
          'add an <code>alt</code> attribute to our <code>img</code> example ' +
          'above:<code>&#60img src="https://www.your-image-source.com/your-' +
          'image.jpg" alt="Author standing on a beach with two thumbs up. ' +
          '"&#62</code>Note that in most cases, <code>img</code> elements ' +
          'are self-closing.Try it with this image:<code>https://bit.ly/fcc-' +
          'relaxing-cat</code>'
      );
      // the best I could do here is allow things like
      // image:https://bit.ly/fcc-relaxing-cat
      // trying to strip this further could invalidate other entries
      const expected =
        'You can add images to your website by using the img ' +
        "element, and point to a specific image's URL using the src " +
        'attribute.An example of this would be:All img elements must have ' +
        'an alt attribute. The text inside an alt attribute is used for ' +
        'screen readers to improve accessibility and is displayed if the ' +
        "image fails to load.Let's add an alt attribute to our img example " +
        'above:Note that in most cases, img elements are self-closing.Try ' +
        'it with this image:https://bit.ly/fcc-relaxing-cat';
      expect(value).toEqual(expected);
    });
  });
});
