---
id: bd7158d8c443edefaeb5bdef
title: 时间戳微服务
challengeType: 4
forumTopicId: 301508
dashedName: timestamp-microservice
---

# --description--

构建一个功能类似于此的全栈 JavaScript 应用程序：<a href="https://timestamp-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://timestamp-microservice.freecodecamp.rocks</a>。 在这个项目中，你将使用以下方法之一编写你的代码：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-timestamp/"  target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成你的项目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-timestamp"  target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成你的项目。
-   使用你选择的网站生成器来完成项目。 需要包含我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。 也可以将项目的源码链接提交到 GitHub Link 字段中。

**注意：**时区转换不是本项目的目的，因此假设所有发送的有效日期将使用 `new Date()` 解析为 GMT 日期。

# --hints--

你应该提交自己的项目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/timestamp-microservice\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

一个对 `/api/:date?` 的有效日期的请求应该返回一个 JSON 对象，该对象的 `unix` 键是输入日期的 Unix 时间戳，单位是毫秒（数字类型）。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.unix,
        1482624000000,
        'Should be a valid unix timestamp'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

对具有有效日期的 `/api/:date?` 的请求应返回一个带有 `utc` 键的 JSON 对象，该键是输入日期的字符串，格式为：`Thu, 01 Jan 1970 00:00:00 GMT`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.utc,
        'Sun, 25 Dec 2016 00:00:00 GMT',
        'Should be a valid UTC date string'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

对 `/api/1451001600000` 的请求应该返回 `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/1451001600000').then(
    (data) => {
      assert(
        data.unix === 1451001600000 &&
          data.utc === 'Fri, 25 Dec 2015 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

你的项目可以处理可以通过 `new Date(date_string)` 成功解析的日期。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/05 October 2011, GMT').then(
    (data) => {
      assert(
        data.unix === 1317772800000 &&
          data.utc === 'Wed, 05 Oct 2011 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

如果输入的日期字符串无效，API 将返回一个具有结构 `{ error : "Invalid Date" }` 的对象。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/this-is-not-a-date').then(
    (data) => {
      assert.equal(data.error.toLowerCase(), 'invalid date');
    },
    (xhr) => {
      assert(xhr.responseJSON.error.toLowerCase() === 'invalid date');
    }
  );
```

一个空的日期参数应该返回一个带有 `unix` 键的 JSON 对象中的当前时间。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      assert.approximately(data.unix, now, 20000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

一个空日期参数应返回带有 `utc` 键的 JSON 对象中的当前时间。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      var serverTime = new Date(data.utc).getTime();
      assert.approximately(serverTime, now, 20000);
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
