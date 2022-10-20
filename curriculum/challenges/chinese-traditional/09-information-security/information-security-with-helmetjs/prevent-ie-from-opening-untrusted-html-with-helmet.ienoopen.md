---
id: 587d8248367417b2b2512c3b
title: 使用 helment.ieNoOpen() 防止 IE 打開不受信任的 HTML
challengeType: 2
forumTopicId: 301584
dashedName: prevent-ie-from-opening-untrusted-html-with-helmet-ienoopen
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

有些網站會下載不安全的 HTML 文件。 某些版本的 IE 默認情況下還會在你網站的作用域下打開這些 HTML 文件。 換句話說，這些不安全的 HTML 頁面可以在你的網站做惡意行爲。 我們可以通過中間件來設置 header 中的 X-Download-Options 字段，讓它的值爲 noopen。 這樣就可以防止 IE 在不信任的網站下執行下載的文件。

# --instructions--

應正確加載 `helmet.ieNoOpen()` 中間件

# --hints--

helmet.ieNoOpen() 中間件應正確安裝。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'ienoopen');
      assert.equal(data.headers['x-download-options'], 'noopen');
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
