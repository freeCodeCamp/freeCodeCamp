---
id: 587d7fb2367417b2b2512bf6
title: 从客户端获取查询参数输入
challengeType: 2
forumTopicId: 301512
---

# --description--

从客户端获取输入的另一种常见方式是使用查询字符串对路由路径中的数据进行编码。查询字符串使用标记 (?) 分隔，并且包含一对`field=value`。每一对键值使用符号 (&) 分隔。Express 能够从查询字符串中分析这些数据，并且把它放到`req.query`对象中。有些字符不能在出现在 URL 中，它们在发送前必须以[不同的格式](https://en.wikipedia.org/wiki/Percent-encoding)进行编码。如果你使用来自 JavaScript 的 API，你可以使用特定的方法来编码/解码这些字符。

<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

构建一个 API ，使用路由挂载`GET /name`。使用一个 JSON 文件来响应，它的结构是这样的：`{ name: 'firstname lastname'}`。名字和姓氏参数应该编码在查询参数中，举个例子：`?first=firstname&last=lastname`.

提示: 在下面的练习中，我们将从相同的`/name`路由路径中 POST 请求接收数据。如果你愿意，你可以使用`app.route(path).get(handler).post(handler)`这中写法，此语法允许你在同一路径路由上链接不同的 HTTP 动词处理函数。可以节省一点打字时间，并且可以让代码看起来更清晰。

# --hints--

测试 1：你的 API 应该使用正确的名称来响应

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?first=Mick&last=Jagger').then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

测试 2：你的 API 应该使用正确的名称来响应

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?last=Richards&first=Keith').then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

