import { isChallenge, isLanding } from './path-parsers';

const pathnames = {
  english: {
    landing: '/',
    superBlock: '/learn/responsive-web-design',
    challenge:
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
  },
  espanol: {
    landing: '/espanol',
    superBlock: '/espanol/learn/responsive-web-design',
    challenge:
      '/espanol/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
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
});

describe('isChallenge', () => {
  it('returns a boolean', () => {
    expect(typeof isChallenge('/')).toBe('boolean');
  });
  it('returns false for Espanol landing pathname', () => {
    expect(isChallenge(pathnames.espanol.landing)).toBe(false);
  });
  it('returns false for Espanol super block pathname', () => {
    expect(isChallenge(pathnames.espanol.superBlock)).toBe(false);
  });
  it('returns true for Espanol challenge pathname', () => {
    expect(isChallenge(pathnames.espanol.challenge)).toBe(true);
  });
  it('returns false for English landing pathname', () => {
    expect(isChallenge(pathnames.english.landing)).toBe(false);
  });
  it('returns false for English super block pathname', () => {
    expect(isChallenge(pathnames.english.superBlock)).toBe(false);
  });
  it('returns true for English challenge pathname', () => {
    expect(isChallenge(pathnames.english.challenge)).toBe(true);
  });
});
