import { isLanding } from './path-parsers';

const pathnames = {
  english: {
    landing: '/',
    superBlock: '/learn/responsive-web-design',
    challenge:
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
  },
  englishWithYear: {
    landing: '/',
    superBlock: '/learn/2022/responsive-web-design',
    challenge:
      '/learn/2022/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
  },
  espanol: {
    landing: '/espanol',
    superBlock: '/espanol/learn/responsive-web-design',
    challenge:
      '/espanol/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
  },
  espanolWithYear: {
    landing: '/espanol',
    superBlock: '/espanol/learn/2022/responsive-web-design',
    challenge:
      '/espanol/learn/2022/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
  }
};

describe('isLanding', () => {
  it('returns a booleans', () => {
    expect(typeof isLanding('/')).toBe('boolean');
  });
  it('return true for Espanol landing pathname', () => {
    expect(isLanding(pathnames.espanol.landing)).toBe(true);
  });
  it('returns false for Espanol super block pathname', () => {
    expect(isLanding(pathnames.espanol.superBlock)).toBe(false);
  });
  it('returns false for Espanol challenge pathname', () => {
    expect(isLanding(pathnames.espanol.challenge)).toBe(false);
  });
  it('returns true for English landing pathname', () => {
    expect(isLanding(pathnames.english.landing)).toBe(true);
  });
  it('returns false for English super block pathname', () => {
    expect(isLanding(pathnames.english.superBlock)).toBe(false);
  });
  it('returns false for English challenge pathname', () => {
    expect(isLanding(pathnames.english.challenge)).toBe(false);
  });
  it('returns false for English with year challenge pathname', () => {
    expect(isLanding(pathnames.englishWithYear.challenge)).toBe(false);
  });
  it('returns false for Espanol with year challenge pathname', () => {
    expect(isLanding(pathnames.espanolWithYear.challenge)).toBe(false);
  });
});
