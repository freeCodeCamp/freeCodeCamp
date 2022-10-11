---
id: 587d8247367417b2b2512c36
title: 安裝和引入 Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

你可以採用下面的任意一種編寫代碼的方式來完成這些挑戰：

- 克隆 [這個 GitHub 倉庫](https://github.com/freeCodeCamp/boilerplate-infosec/) 並在本地完成這些挑戰。
- 使用[我們在 Repl.it 上的初始化項目](https://replit.com/github/freeCodeCamp/boilerplate-infosec)來完成這些挑戰。
- 使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

完成本項目後，請將一個正常運行的 demo（項目演示）託管在可以公開訪問的平臺。 然後在 `Solution Link` 字段中提交它的 URL。

Helmet 通過設置各種 HTTP 頭來保護你的 Express 應用程序。

# --instructions--

你在這些課程中寫的所有代碼都在 `myApp.js` 文件中，在初始代碼之間。 不要改變或刪除我們爲你添加的代碼。

安裝 Helmet 的 `3.21.3` 版本，然後引入它。 你可以用 `npm install --save-exact package@version` 來安裝一個特定版本的軟件包，或者直接將其添加到你的 `package.json` 中。

# --hints--

`helmet` 版本 `3.21.3` 應該在 `package.json` 中。

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
