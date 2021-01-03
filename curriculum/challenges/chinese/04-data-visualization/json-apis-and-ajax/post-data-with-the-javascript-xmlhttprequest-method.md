---
id: 587d7faf367417b2b2512be9
title: 使用 XMLHttpRequest 方法发送数据
challengeType: 6
forumTopicId: 301504
---

# --description--

在前面的示例中，你通过外部资源获取数据。此外，你也可以将数据发送到外部资源，只要该资源支持 AJAX 请求并且你知道 URL。

JavaScript 的`XMLHttpRequest`方法也用于将数据发布到服务器，这是个例子：

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

你之前已经见过这些方法。`open` 方法根据给定的外部资源的 URL 初始化一个 POST 请求，参数 `true` 表示请求是异步执行的。 `setRequestHeader` 方法设置了 HTTP 请求标头的值，该标头包含有关发送人和请求的信息。它必须在 `open` 方法之后、`send` 方法之前调用。它的两个参数表示标头的内容类型和标头数据将被设置成什么值。 接下来，`onreadystatechange` 事件监听器监听请求状态的更改。`readyState` 为 4 表示操作完成，`status` 为 201 表示请求成功，此时文档的 HTML 可以更新了。 最后，`send` 方法发送带有 `body` 值的请求，其中 `userName` 的值由用户在 `input` 字段中输入。

# --instructions--

更新代码以创建并发送 "POST" 请求。然后在输入框中输入你的姓名，并点击 "Send Message"。你的 AJAX 函数会用服务器返回的数据替换 "Reply from Server will be here"。修改返回的请求结果，在你的名字前加上 " loves cats"。

# --hints--

你的代码应该创建一个新的 `XMLHttpRequest`。

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

你的代码应该使用 `open` 方法初始化一个发送给服务器的 'POST' 请求。

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

你的代码应该使用 `setRequestHeader` 方法。

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

你的代码应该有一个 `onreadystatechange` 的事件监听器。

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

你的代码应该获取 class 为 `message` 的元素，并将它的 `textContent` 更改为 "`userName` loves cats"。

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

你的代码应该使用 `send` 方法。

```js
assert(code.match(/\.send\(\s*?body\s*?\)/g));
```

# --solutions--

