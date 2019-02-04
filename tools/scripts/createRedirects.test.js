/* global describe expect it */

const { createRedirects } = require('./createRedirects');

const testLocations = {
  api: 'https://api.example.com',
  home: 'https://home.example.com',
  forum: 'https://forum.example.com',
};

describe('createRedirects', () => {
  it('is a function', () => {
    expect(typeof createRedirects).toEqual('function');
  });

  it('returns a string', () => {
    expect(typeof createRedirects(testLocations)).toEqual('string');
  });

  it('replaces instances of `#{{...}}` with the locations provided', () => {
    expect.assertions(7);

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

    const { api, home, forum } = testLocations;
    expect(redirects.includes(`${api}/internal/:splat`)).toBe(true);
    expect(
      redirects.includes(
        `${home}/forum/t/free-code-camp-privacy-policy/19545 301`
      )
    ).toBe(true);
    expect(redirects.includes(`${forum}`)).toBe(true);
  });

  it('throws when any location is missing', () => {
    expect.assertions(3);

    const api = 'api';
    const home = 'home';
    const forum = 'forum';

    const noApi = { forum, home };
    const noHome = { api, forum };
    const noForum = { api, home };

    expect(() => createRedirects(noApi)).toThrow();
    expect(() => createRedirects(noHome)).toThrow();
    expect(() => createRedirects(noForum)).toThrow();
  });

  it('matches the snapshot', () =>
    expect(createRedirects(testLocations)).toMatchSnapshot());
});
