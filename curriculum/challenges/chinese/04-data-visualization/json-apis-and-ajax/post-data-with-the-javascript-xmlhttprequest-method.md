---
id: 587d7faf367417b2b2512be9
title: 使用 XMLHttpRequest 方法发送数据
challengeType: 6
forumTopicId: 301504
dashedName: post-data-with-the-javascript-xmlhttprequest-method
---

# --description--

在前面的示例中，你通过外部资源获取数据。 此外，你也可以将数据发送到外部资源，只要该资源支持 AJAX 请求并且你知道 URL。

JavaScript 的 `XMLHttpRequest` 方法也用于将数据发布到服务器。 这是一个示例：

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

你之前已经见过这些方法。 在这里，`open` 方法将请求初始化为对外部资源的给定 URL 的 `POST`，并传递 `true` 作为第三个参数——表示以异步方式执行该操作。

`setRequestHeader` 方法设置了 HTTP 请求标头的值，包含有关发送人和请求的信息。 它必须在 `open` 方法之后、`send` 方法之前调用。 这两个参数是标头的名称和要设置为该标头正文的值。

接下来，`onreadystatechange` 事件监听器监听请求状态的更改。 `readyState` 为 `4`，表示操作已完成。`status` 为 `201`，表示请求成功。 因此，文档的 HTML 可以更新。

最后， `send` 方法发送带有 `body` 值的请求。 `body` 包含一个 `userName` 和一个 `suffix` 键。

# --instructions--

更新代码，向 API 端点发送 `POST` 请求。 然后在输入框中输入你的姓名，并点击 `Send Message`。 你的 AJAX 函数会用服务器返回的数据替换 `Reply from Server will be here.`。 修改返回的请求结果，在你的名字后面添加 `loves cats`。

# --hints--

你的代码应该创建一个新的 `XMLHttpRequest`。

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

你的代码应该使用 `open` 方法初始化一个发送给服务器的 `POST` 请求。

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

你的代码应该有一个设置为函数的 `onreadystatechange` 事件处理程序。

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

你的代码应该获取 class 为 `message` 的元素，并将它的 `textContent` 更改为 `userName loves cats`。

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

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line


      // Add your code above this line
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Friends</h1>
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line
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
      // Add your code above this line
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Friends</h1>
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```
