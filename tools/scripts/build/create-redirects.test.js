/* global describe expect it */

const { createRedirects } = require('./create-redirects');

const testLocations = {
  api: 'https://api.example.com',
  news: 'https://news.example.com',
  forum: 'https://forum.example.com'
};

describe('createRedirects', () => {
  it('is a function', () => {
    expect(typeof createRedirects).toEqual('function');
  });

  it('returns a string', () => {
    expect(typeof createRedirects(testLocations)).toEqual('string');
  });

  it('replaces instances of `#{{...}}` with the locations provided', () => {
    expect.assertions(5);

    const apiPlaceholderRE = /#\{\{API\}\}/;
    const newsPlaceholderRE = /#\{\{NEWS\}\}/;
    const forumPlaceholderRE = /#\{\{FORUM\}\}/;
    const redirects = createRedirects(testLocations);

    const hasApiPlaceholder = apiPlaceholderRE.test(redirects);
    const hasNewsPlaceholder = newsPlaceholderRE.test(redirects);
    const hasForumPlaceholder = forumPlaceholderRE.test(redirects);

    expect(hasApiPlaceholder).toBe(false);
    expect(hasNewsPlaceholder).toBe(false);
    expect(hasForumPlaceholder).toBe(false);

    const { api, forum } = testLocations;
    expect(redirects.includes(`${api}/internal/:splat`)).toBe(true);
    expect(redirects.includes(`${forum}`)).toBe(true);
  });

  it('throws when any location is missing', () => {
    expect.assertions(3);

    const api = 'api';
    const news = 'news';
    const forum = 'forum';

    const noApi = { forum, news };
    const noNews = { api, forum };
    const noForum = { api, news };

    expect(() => createRedirects(noApi)).toThrow();
    expect(() => createRedirects(noNews)).toThrow();
    expect(() => createRedirects(noForum)).toThrow();
  });

  it('matches the snapshot', () =>
    expect(createRedirects(testLocations)).toMatchSnapshot());
});
