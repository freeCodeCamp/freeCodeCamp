---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2
forumTopicId: 301576
dashedName: disable-client-side-caching-with-helmet-nocache
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

If you are releasing an update for your website, and you want the users to always download the newer version, you can (try to) disable caching on client’s browser. It can be useful in development too. Caching has performance benefits, which you will lose, so only use this option when there is a real need.

# --instructions--

Use the `helmet.noCache()` method on your server.

# --hints--

helmet.noCache() middleware should be mounted correctly

```js
const response = await fetch(code + '/_api/app-info');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.include(data.appStack, 'nocache');
assert.equal(
  data.headers['cache-control'],
  'no-store, no-cache, must-revalidate, proxy-revalidate'
);
```

