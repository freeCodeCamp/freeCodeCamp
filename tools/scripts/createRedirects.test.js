/* global describe expect */

const { createRedirects } = require('./createRedirects');

const testLocations = {
  api: 'https://api.example.com',
  home: 'https://home.example.com',
  forum: 'https://forum.example.com',
  forumProxy: 'https://proxy.example.com'
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
    const homePlaceholderRE = /#\{\{HOME\}\}/;
    const forumPlacehilderRE = /#\{\{FORUM\}\}/;
    const forumProxyPlaceholderRE = /#\{\{FORUM_PROXY\}\}/;
    const redirects = createRedirects(testLocations);

    const hasApiPlaceholder = apiPlaceholderRE.test(redirects);
    const hasHomePlaceholder = homePlaceholderRE.test(redirects);
    const hasForumPlaceholder = forumPlacehilderRE.test(redirects);
    const hasForumProxyPlaceholder = forumProxyPlaceholderRE.test(redirects);

    expect(hasApiPlaceholder).toBe(false);
    expect(hasHomePlaceholder).toBe(false);
    expect(hasForumPlaceholder).toBe(false);
    expect(hasForumProxyPlaceholder).toBe(false);

    const { api, home, forum, forumProxy } = testLocations;
    expect(redirects.includes(`${api}/internal/:splat`)).toBe(true);
    expect(
      redirects.includes(
        `${home}/forum/t/free-code-camp-privacy-policy/19545 301`
      )
    ).toBe(true);
    expect(redirects.includes(`${forum} 301`)).toBe(true);
    expect(redirects.includes(`${forumProxy} 200`)).toBe(true);
  });

  it('throws when any location is missing', () => {
    expect.assertions(4);

    const api = 'api';
    const home = 'home';
    const forum = 'forum';
    const forumProxy = 'forumProxy';

    const noApi = { forum, home, forumProxy };
    const noHome = { api, forum, forumProxy };
    const noForum = { api, home, forumProxy };
    const noProxy = { api, home, forum };

    expect(() => createRedirects(noApi)).toThrow();
    expect(() => createRedirects(noHome)).toThrow();
    expect(() => createRedirects(noForum)).toThrow();
    expect(() => createRedirects(noProxy)).toThrow();
  });

  it('matches the snapshot', () =>
    expect(createRedirects(testLocations)).toMatchSnapshot());
});
