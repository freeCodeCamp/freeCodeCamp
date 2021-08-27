---
id: 587d824a367417b2b2512c45
title: 匿名留言板
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

构建一个功能上与此相似的全栈式 JavaScript 应用程序：<https://anonymous-message-board.freecodecamp.rocks/>。

在这个项目中，你将使用以下方法之一编写你的代码：

-   克隆[这个 GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-messageboard/) 并在本地完成你的项目。
-   使用 [我们的 Replit 启动项目](https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard)来完成你的项目。
-   使用一个你喜欢的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

完成本项目后，请将一个正常运行的 demo（项目演示）托管在可以公开访问的平台。 然后将 URL 提交到 `Solution Link` 中。 此外，还可以将项目的源码提交到 `GitHub Link` 中。

# --instructions--

1.  当准备写测试和数据库连接字符串时，设置`NODE_ENV`为不带引号的变量（在`.env`文件中）。
2.  建议在 `routes/api.js` 中创建控制器/处理器并处理路由。
3.  你将在 `server.js` 中添加任何安全功能。

在 `tests/2_functional-tests.js` 中编写下以下测试：

-   创建一个新的主题：发送 POST 请求到 `/api/threads/{board}`。
-   查看最近的 10 个主题，每个主题有 3 个回复：发送 GET 请求到 `/api/threads/{board}`
-   使用错误密码删除主题：使用错误的`delete_password`向`/api/threads/{board}`发出DELETE请求
-   用正确的密码删除一个主题：向`/api/threads/{board}`发出DELETE请求，并提供有效的`delete_password`。
-   报告一个主题：发送 PUT 请求到 `/api/threads/{board}`。
-   创建一个新的回复：发送 POST 请求到 `/api/replies/{board}`。
-   查看一个带有所有回复的主题：发送 GET 请求到`/api/replies/{board}`。
-   使用错误密码删除一个回复：使用无效的`delete_password`向`/api/replies/{board}`发出DELETE请求。
-   使用正确密码删除一个回复：使用有效的`delete_password`向`/api/replies/{board}`发出DELETE请求。
-   报告一个回复：发送 PUT 请求到 `/api/replies/{board}`。

# --hints--

提交自己的项目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

只允许你的网站在你自己的页面上以 iFrame 方式加载。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

不允许 DNS 预取。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

只允许你的网站为你自己的页面发送 referrer 请求头。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

你可以向 `/api/threads/{board}` 发送一个 POST 请求，其中包括 `text` 和 `delete_password` 的表单数据。 保存的数据库记录将至少有 `_id`、`text`、`created_on`(date & time)、`bumped_on`(date & time, starts same as `created_on`)、`reported`（布尔值）、`delete_password`、& `replies`（数组）。

```js
async (getUserInput) => {
  const date = new Date();
  const text = `fcc_test_${date}`;
  const deletePassword = 'delete_me';
  const data = { text, delete_password: deletePassword };
  const url = getUserInput('url');
  const res = await fetch(url + '/api/threads/fcc_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    const checkData = await fetch(url + '/api/threads/fcc_test');
    const parsed = await checkData.json();
    try {
      assert.equal(parsed[0].text, text);
      assert.isNotNull(parsed[0]._id);
      assert.equal(new Date(parsed[0].created_on).toDateString(), date.toDateString());
      assert.equal(parsed[0].bumped_on, parsed[0].created_on);
      assert.isArray(parsed[0].replies);
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

你可以向 `/api/replies/{board}` 发送一个 POST 请求，其中包括字段 `text`、`delete_password` & `thread_id`。 这将更新 `bumped_on` 日期到评论日期。 在主题的 `replies` 数组中，将保存一个对象，至少有 `_id`、`text`、`created_on`、`delete_password`、& `reported` 这些属性。

```js

```

你可以向 `/api/threads/{board}` 发送一个 GET 请求。 返回的将是一个数组，包括论坛上最近的 10 个被回复的主题，及每个主题最新的 3 个回帖。 `reported` 和 `delete_password` 字段将不会被发送到客户端。

```js

```

你可以向 `/api/replies/{board}?thread_id={thread_id}` 发送一个 GET 请求。 返回的将是带有所有的回复的整个主题，不包括与之前测试相同的客户端字段。

```js

```

你可以向 `/api/threads/{board}` 发送一个 DELETE 请求，并传递 `thread_id` & `delete_password` 来删除该线程。 返回的将是字符串 `incorrect password` 或 `success`。

```js

```

你可以向 `/api/replies/{board}` 发送一个 DELETE 请求，并传递 `thread_id`、`reply_id`、& `delete_password`。 返回的将是字符串 `incorrect password` 或 `success`。 成功后，`reply_id` 的文本将更改为 `[deleted]`。

```js

```

你可以向 `/api/threads/{board}` 发送一个 PUT 请求，并传递 `thread_id`。 返回的将是字符串 `success`。 `thread_id` 回复的 `reported` 值将改为 `true`。

```js

```

你可以通过向 `/api/replies/{board}` 发送 PUT 请求并传递 `thread_id` & `reply_id`。 返回的将是字符串 `success`。 `reply_id` 的 `reported` 值将被改变为 `true`。

```js

```

所有 10 项功能测试都已完成并通过。

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
