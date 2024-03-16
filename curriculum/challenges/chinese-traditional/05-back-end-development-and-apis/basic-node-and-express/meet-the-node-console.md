---
id: 587d7fb0367417b2b2512bed
title: 認識 Node 的控制檯
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

你可以採用下面的任意一種編寫代碼的方式來完成這些挑戰：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成這些挑戰。
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- 使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

在開發過程中，能夠隨時看到代碼的運行結果是非常重要的。

Node 只是一個 JavaScript 環境。 與客戶端 JavaScript 一樣，你可以使用控制檯顯示有用的調試信息。 在你的本地計算機上，你可以在終端中看到控制檯輸出。 On Gitpod, a terminal is open at the bottom of the editor by default.

我們建議在做這些挑戰題時保持終端打開的狀態。 通過閱讀終端的輸出，你可以看到可能發生的任何錯誤。

The server must be restarted after making changes to its files.

You can stop the server from the terminal using `Ctrl + C` and start it using Node directly (`node mainEntryFile.js`) or using a run script in the `package.json` file with `npm run`.

For example, the `"start": "node server.js"` script would be run from the terminal using `npm run start`.

To implement server auto restarting on file save Node provides the `--watch` flag you can add to your start script `"start": "node --watch server.js"` or you can install an npm package like `nodemon`. We will leave this to you as an exercise.

# --instructions--

修改 `myApp.js` 文件，在控制檯打印出 “Hello World”。

# --hints--

控制檯應該輸出 `"Hello World"`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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
