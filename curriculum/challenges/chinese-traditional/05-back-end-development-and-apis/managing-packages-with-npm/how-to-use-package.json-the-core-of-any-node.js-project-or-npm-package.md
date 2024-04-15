---
id: 587d7fb3367417b2b2512bfb
title: '如何使用 package.json ——所有 Node.js 項目或 npm 包的核心'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

你可以採用下面的任意一種編寫代碼的方式來完成這些挑戰：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成這些挑戰。
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- 使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

`package.json` 文件是所有 Node.js 項目和 npm 包的樞紐， It stores information about your project. 它由單個 JSON 對象組成，並以鍵值對的形式存儲項目信息， There are only two required fields; `name` and `version`, but it’s good practice to provide additional information.

You can create the `package.json` file from the terminal using the `npm init` command. This will run a guided setup. Using `npm init` with the `-y` flag will generate the file without having it ask any questions, `npm init -y`.

如果你查看項目的文件樹，那麼可以在文件樹的最外層找到 `package.json`。 在接下來的幾個挑戰中你將完善這個文件。

在這個文件中最常見的信息之一是 `author` 字段， 它說明了項目的創建者，可以包含一個帶有聯繫人信息或其他信息的字符串或對象。 對於較大的項目，建議使用對象；但是在我們的項目中，一個簡單的字符串就夠了，比如下面的例子：

```json
"author": "Jane Doe",
```

# --instructions--

在 `package.json` 文件中加入你的名字作爲項目的 `author`。

**注意：**你正在寫 JSON，所有的字段名必須用雙引號（"）包裹，也必須用逗號（,）分割。

If you are using Gitpod, make sure the app is running and the preview window is open. Copy the preview window's URL and paste it into the Solution Link input below.

# --hints--

`package.json` 應該有一個有效的 “author” 鍵。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
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
