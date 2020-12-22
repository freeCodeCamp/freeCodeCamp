---
id: 587d7fb2367417b2b2512bf8
title: 从 POST 请求中获取数据
challengeType: 2
forumTopicId: 301511
---

# --description--

在路径`/name`处挂载一个 POST 处理方法。和前面一样。我们已经在 html 首页准备了一份表格。它将提交与练习 10 相同的数据（查询字符串）。如果 body-parser 正确配置好了，你就可以在`req.body`对象中找到请求的参数。来看看一个常规的请求 /library 例子：

<blockquote>route: POST '/library'<br>urlencoded_body: userId=546&#x26;bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote>

和前面一样响应一个 JSON 对象`{name: 'firstname lastname'}`。你可以使用首页应用提供的 html 表单，来测试你的 API 是否正常工作。

提示: 除了 GET 和 POST，还有其他几种 http 方法。按照惯例，http 动词之间有对应关系，它们分别对应你在服务端执行的某种操作，传统的对应关系：

POST (有时候是 PUT) - 使用请求发送信息，以创建新资源，

GET - 读取已存在的资源，不用修改它，

PUT 或者 PATCH (有时候是 POST) - 发送数据，以更新资源，

DELETE => 删除一个资源。

还有一些其他方法，常用于与服务进行交互。除了 GET 之外，上面列出的所有方法都可以负载数据（换言之，数据都能在请求体中找到）。也可以使用 body-parser 来正常工作。

# --hints--

测试 1：你的 API 应该使用正确的名称来响应

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/name', { first: 'Mick', last: 'Jagger' }).then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "POST /name" route does not behave as expected'
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
  $.post(getUserInput('url') + '/name', {
    first: 'Keith',
    last: 'Richards'
  }).then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "POST /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

