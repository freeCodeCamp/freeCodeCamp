---
id: 587d7fb0367417b2b2512bed
title: 认识 Node 的控制台
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

你可以采用下面的任意一种编写代码的方式来完成这些挑战：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成这些挑战。
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- 使用你选择的网站生成器来完成项目。 需要包含我们 GitHub 仓库的所有文件。

在开发过程中，能够随时看到代码的运行结果是非常重要的。

Node 只是一个 JavaScript 环境。 与客户端 JavaScript 一样，你可以使用控制台显示有用的调试信息。 在你的本地计算机上，你可以在终端中看到控制台输出。 On Gitpod, a terminal is open at the bottom of the editor by default.

我们建议在做这些挑战题时保持终端打开的状态。 通过阅读终端的输出，你可以看到可能发生的任何错误。

The server must be restarted after making changes to its files.

You can stop the server from the terminal using `Ctrl + C` and start it using Node directly (`node mainEntryFile.js`) or using a run script in the `package.json` file with `npm run`.

For example, the `"start": "node server.js"` script would be run from the terminal using `npm run start`.

To implement server auto restarting on file save Node provides the `--watch` flag you can add to your start script `"start": "node --watch server.js"` or you can install an npm package like `nodemon`. We will leave this to you as an exercise.

# --instructions--

修改 `myApp.js` 文件，在控制台打印出 “Hello World”。

# --hints--

控制台应该输出 `"Hello World"`。

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
