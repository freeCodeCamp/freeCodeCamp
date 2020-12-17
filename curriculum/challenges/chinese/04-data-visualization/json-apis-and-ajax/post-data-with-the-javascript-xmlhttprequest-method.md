---
id: 587d7faf367417b2b2512be9
title: 使用 XMLHttpRequest 方法发送数据
challengeType: 6
forumTopicId: 301504
---

# --description--

在前面的示例中，你在外部资源获取数据，你也可以将数据发送到外部资源，只要该资源支持 AJAX 请求并且你知道 URL。

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

你在之前见过其中几种方法。这里`open`方法将请求初始化为对外部资源的给定 URL 的 "POST"，并使用`true`布尔值使其异步。 `setRequestHeader`方法设置HTTP请求标头的值，该标头包含有关发送人和请求的信息。它必须在`open`方法之后调用，但在`send`方法之前调用。这两个参数是标题的名称和要设置为该标题正文的值。 接下来，`onreadystatechange`事件侦听器处理请求状态的更改。`readyState`为 4 表示操作完成，`status`200表示操作成功。文档的HTML可以更新。 最后，该`send`方法发送带有`userName`值的请求，该值由用户在`input`字段中给出。

# --instructions--

更新代码以创建并发送 "POST" 请求。然后在输入框中输入你的姓名，你的 AJAX 函数会用服务器返回的数据替换 "Reply from Server will be here"。在这种情况下，你的名字附加 " loves cats"。

# --hints--

你的代码应该创建一个新的`XMLHttpRequest`。

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

你的代码应该使用该`open`方法初始化到服务器的 'POST' 请求。

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

你的代码应该使用该`setRequestHeader`方法。

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

你的代码应该有一个`onreadystatechange`设置为函数的事件处理程序。

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

你的代码应该使用类获取元素`message`并将其内部HTML更改为`responseText`。

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

你的代码应该使用该`send`方法。

```js
assert(code.match(/\.send\(\s*?body\s*?\)/g));
```

# --solutions--

