---
id: 587d8247367417b2b2512c37
title: Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
challengeType: 2
forumTopicId: 301580
dashedName: hide-potentially-dangerous-information-using-helmet-hidepoweredby
---

# --description--

As a reminder, this project is being built upon the following starter project on [Repl.it](https://repl.it/github/freeCodeCamp/boilerplate-infosec), or cloned from [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/).

Hackers can exploit known vulnerabilities in Express/Node if they see that your site is powered by Express. `X-Powered-By: Express` is sent in every request coming from Express by default. Use the `helmet.hidePoweredBy()` middleware to remove the X-Powered-By header.

# --hints--

helmet.hidePoweredBy() middleware should be mounted correctly

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hidePoweredBy');
      assert.notEqual(data.headers['x-powered-by'], 'Express');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
