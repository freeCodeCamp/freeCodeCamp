/* global describe expect it */

const { createRedirects } = require('./create-redirects');

const testLocations = {
  api: 'https://api.example.com',
  newsProxy: 'https://news.example.com',
  forumProxy: 'https://forum.example.com',
  donate: 'https://donate.example.com'
};

describe('createRedirects', () => {
  it('is a function', () => {
    expect(typeof createRedirects).toEqual('function');
  });

  it('returns a string', () => {
    expect(typeof createRedirects(testLocations)).toEqual('string');
  });

  it('replaces instances of `#{{...}}` with the locations provided', () => {
    expect.assertions(8);

    const apiPlaceholderRE = /#\{\{API\}\}/;
    const newsPlaceholderRE = /#\{\{NEWS\}\}/;
    const forumPlaceholderRE = /#\{\{FORUM\}\}/;
    const donatePlaceholderRE = /#\{\{DONATE\}\}/;
    const redirects = createRedirects(testLocations);

    const hasApiPlaceholder = apiPlaceholderRE.test(redirects);
    const hasNewsPlaceholder = newsPlaceholderRE.test(redirects);
    const hasForumPlaceholder = forumPlaceholderRE.test(redirects);
    const hasDonatePlaceholder = donatePlaceholderRE.test(redirects);

    expect(hasApiPlaceholder).toBe(false);
    expect(hasNewsPlaceholder).toBe(false);
    expect(hasForumPlaceholder).toBe(false);
    expect(hasDonatePlaceholder).toBe(false);

    const { api, forumProxy, newsProxy, donate } = testLocations;
    expect(redirects.includes(`${api}/internal/:splat`)).toBe(true);
    expect(redirects.includes(`${forumProxy}`)).toBe(true);
    expect(redirects.includes(`${newsProxy}`)).toBe(true);
    expect(redirects.includes(`${donate}`)).toBe(true);
  });

  it('throws when any location is missing', () => {
    expect.assertions(4);

    const api = 'api';
    const newsProxy = 'newsProxy';
    const forumProxy = 'forumProxy';
    const donate = 'donate';

    const noApi = { forumProxy, newsProxy };
    const noNews = { api, forumProxy };
    const noForum = { api, newsProxy };
    const noDonate = { api, donate };

    expect(() => createRedirects(noApi)).toThrow();
    expect(() => createRedirects(noNews)).toThrow();
    expect(() => createRedirects(noForum)).toThrow();
    expect(() => createRedirects(noDonate)).toThrow();
  });

  it('matches the snapshot', () =>
    expect(createRedirects(testLocations)).toMatchSnapshot());
});
