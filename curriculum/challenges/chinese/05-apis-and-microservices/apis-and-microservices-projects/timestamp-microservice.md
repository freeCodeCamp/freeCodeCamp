---
id: bd7158d8c443edefaeb5bdef
title: 时间戳
challengeType: 4
forumTopicId: 301508
---

# --description--

构建一个功能类似于 <https://curse-arrow.glitch.me/> 的 JavaScript 全栈应用。

在开发这个项目时，我们推荐你在 [Glitch](https://glitch.com/) 上编码。编码完成之后，你可以把应用主页的链接复制到屏幕的输入框中，测试你的代码是否能通过项目需求。当然你也可以基于其他的平台来完成自己的项目，只要提供一个公开的主页便于我们测试就行。

参考示例：你可以通过 [这个链接](https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-timestamp/) 访问在 Glitch 上的项目，或者从 GitHub 上 clone [这个仓库的代码](https://github.com/freeCodeCamp/boilerplate-project-timestamp/)。如果你使用 Glitch，请记住将项目链接保存到妥当的地方。

# --hints--

当处理一个有效的日期，返回正确的 unix 时间戳。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/timestamp/2016-12-25').then(
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

当处理一个有效的日期， 返回正确的 UTC 字符串。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/timestamp/2016-12-25').then(
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

当处理一个有效的 unix 格式的日期, 返回正确的 unix 时间戳。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/timestamp/1482624000000').then(
    (data) => {
      assert.equal(data.unix, 1482624000000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

这个程序应该返回无效日期的预期错误消息

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/timestamp/this-is-not-a-date').then(
    (data) => {
      assert.equal(data.error.toLowerCase(), 'invalid date');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

当处理一个空的日期参数的时候，返回当前时间的 unix 格式。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/timestamp').then(
    (data) => {
      var now = Date.now();
      assert.approximately(data.unix, now, 20000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

当处理一个空的日期参数的时候，返回当前时间的 UTC 格式。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/timestamp').then(
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

