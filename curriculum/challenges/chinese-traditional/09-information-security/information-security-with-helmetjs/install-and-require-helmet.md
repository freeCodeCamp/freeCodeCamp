---
id: 587d8247367417b2b2512c36
title: 安裝和引入 Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

你可以採用下面的任意一種編寫代碼的方式來完成這些挑戰：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成這些挑戰。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成這些挑戰。
- 使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

If you use Replit, follow these steps to set up the project:

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field.

Helmet helps you secure your Express apps by setting various HTTP headers.

# --instructions--

All your code for these lessons goes in the `myApp.js` file between the lines of code we have started you off with. Do not change or delete the code we have added for you.

Helmet version `3.21.3` has already been installed, so require it as `helmet` in `myApp.js`.

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
