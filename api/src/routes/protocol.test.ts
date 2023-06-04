import { isPictureWithProtocol } from './settings';

describe('url has protocol', () => {
  test('Valid protocol', () => {
    expect(isPictureWithProtocol('https://www.example.com/')).toEqual(true);
    expect(isPictureWithProtocol('http://www.example.com/')).toEqual(true);
  });

  test('Invalid protocol', () => {
    expect(isPictureWithProtocol('htps://www.example.com/')).toEqual(false);
    expect(isPictureWithProtocol('tp://www.example.com/')).toEqual(false);
    expect(isPictureWithProtocol('www.example.com/')).toEqual(false);
  });
});
