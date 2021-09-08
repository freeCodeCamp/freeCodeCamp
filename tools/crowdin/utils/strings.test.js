const rewire = require('rewire');

const strings = rewire('./strings');
const isCode = strings.__get__('isCode');
const isTitle = strings.__get__('isTitle');
const shouldHide = strings.__get__('shouldHide');
// @ponicode
describe('isCode', () => {
  test('0', () => {
    let result = isCode('/pre/code');
    expect(result).toBe(true);
  });

  test('1', () => {
    let result = isCode();
    expect(result).toBe(false);
  });

  test('2', () => {
    let result = isCode('');
    expect(result).toBe(false);
  });

  test('3', () => {
    let result = isCode('../system/unload');
    expect(result).toBe(false);
  });

  test('4', () => {
    let result = isCode('//pre/code');
    expect(result).toBe(true);
  });

  test('5', () => {
    let result = isCode('code');
    expect(result).toBe(false);
  });
});

// @ponicode
describe('isTitle', () => {
  test('0', () => {
    let result = isTitle('title');
    expect(result).toBe(true);
  });

  test('1', () => {
    let result = isTitle('<?xml version="1.0" ?>\n<a b="c"/>\ntitle');
    expect(result).toBe(true);
  });

  test('2', () => {
    let result = isTitle('title<?xml version="1.0" ?><a b="c"/>');
    expect(result).toBe(false);
  });

  test('3', () => {
    let result = isTitle('title!');
    expect(result).toBe(false);
  });

  test('4', () => {
    let callFunction = () => {
      isTitle();
    };

    expect(callFunction).toThrow(
      "Cannot read property 'endsWith' of undefined"
    );
  });
});

// @ponicode
describe('shouldHide', () => {
  test('0', () => {
    let result = shouldHide('title', 'context', 'challengeTitle', 'file.yml');
    expect(result).toBe(true);
  });

  test('1', () => {
    let callFunction = () => {
      shouldHide();
    };

    expect(callFunction).toThrow(
      "Cannot read property 'endsWith' of undefined"
    );
  });

  test('2', () => {
    let result = shouldHide('title', 'context', 'challengeTitle', 'file.txt');
    expect(result).toBe(false);
  });
});
