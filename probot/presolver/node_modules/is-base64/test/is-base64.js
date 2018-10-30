var test = require('tape');
var isBase64 = require('../is-base64');

test('isBase64', function (t) {
  t.plan(19);

  var pngString = 'iVBORw0KGgoAAAANSUhEUgAABQAAAALQAQMAAAD1s08VAAAAA1BMVEX/AAAZ4gk3AAAAh0lEQVR42u3BMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GsTfAAGc95RKAAAAAElFTkSuQmCC';
  var pngStringWithMime = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAALQAQMAAAD1s08VAAAAA1BMVEX/AAAZ4gk3AAAAh0lEQVR42u3BMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GsTfAAGc95RKAAAAAElFTkSuQmCC';
  var jpgString = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k='
  var jpgStringWithMime = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k=';

  // Test agains real images
  t.equal(isBase64(pngString), true);
  t.equal(isBase64(pngStringWithMime), true);
  t.equal(isBase64(jpgString), true);
  t.equal(isBase64(jpgStringWithMime), true);

  // helper for creating fake valid mime strings
  const createMimeString = (mime) => `data:${mime};base64,${pngString}`;

  // Random complex mime types taken from:
  // http://www.freeformatter.com/mime-types-list.html
  t.equal(isBase64(createMimeString('application/vnd.apple.installer+xml')), true);
  t.equal(isBase64(createMimeString('image/svg+xml')), true);
  t.equal(isBase64(createMimeString('application/set-payment-initiation')), true);
  t.equal(isBase64(createMimeString('image/vnd.adobe.photoshop')), true);

  t.equal(isBase64('1342234'), false);
  t.equal(isBase64('afQ$%rfew'), false);
  t.equal(isBase64('dfasdfr342'), false);
  t.equal(isBase64('uuLMhh'), false);
  t.equal(isBase64('uuLMhh', {paddingRequired: false}), true);
  t.equal(isBase64('uuLMhh', {paddingRequired: true}), false);
  t.equal(isBase64('uuLMhh=='), true);
  t.equal(isBase64('uuLMhh==', {paddingRequired: false}), true);
  t.equal(isBase64('uuLMhh==', {paddingRequired: true}), true);
  t.equal(isBase64(''), true);
  t.equal(isBase64('', {allowBlank: false}), false);
});
