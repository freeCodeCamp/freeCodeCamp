import { isURL } from './settings';

describe('url has protocol', () => {
  test('Valid protocol', () => {
    expect(isURL('https://www.example.com/')).toEqual(true);
    expect(isURL('http://www.example.com/')).toEqual(true);
  });

  test('Invalid protocol', () => {
    expect(isURL('htps://www.example.com/')).toEqual(false);
    expect(isURL('tp://www.example.com/')).toEqual(false);
    expect(isURL('www.example.com/')).toEqual(false);
  });
});
