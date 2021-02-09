---
id: 587d8247367417b2b2512c36
title: Install and Require Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

As a reminder, this project is being built upon the following starter project on [Repl.it](https://repl.it/github/freeCodeCamp/boilerplate-infosec), or cloned from [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/).

Helmet helps you secure your Express apps by setting various HTTP headers.

# --instructions--

All your code for these lessons goes in the `myApp.js` file between the lines of code we have started you off with. Do not change or delete the code we have added for you.

Install Helmet version `3.21.3`, then require it. You can install a specific version of a package with `npm install --save-exact package@version`, or by adding it to your `package.json` directly.

# --hints--

`helmet` version `3.21.3` should be in `package.json`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      const packJson = JSON.parse(data);
      const helmet = packJson.dependencies.helmet;
      assert(helmet === '3.21.3' || helmet === '^3.21.3');
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
