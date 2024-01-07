---
id: 587d7fae367417b2b2512be3
title: 使用 XMLHttpRequest 方法获取 JSON
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

你还可以从外部来源请求数据。 这就是 API 发挥作用的地方。

请记住，API（或叫应用程序编程接口）是计算机用来互相通信的工具。 你将学习如何通过 AJAX技术 从 API 获得的数据来更新 HTML。

大部分 web APIs 以 JSON 格式传输数据。 JSON 是 JavaScript Object Notation 的简写。

JSON 语法与 JavaScript 对象字面符号非常相似。 JSON 具有对象属性以及其当前值，夹在 `{` 和 `}`之间。

这些属性及其值通常称为 "键值对"。

但是，JSON 是由 API 以`bytes` 形式传输的，你的程序以`string`接受它。 它们能转换成为 JavaScript 对象，但默认情况下它们不是 JavaScript 对象。 `JSON.parse`方法解析字符串并构造它描述的 JavaScript 对象。

你可以从 freeCodeCamp 的 Cat Photo API 请求 JSON。 以下是你可以在点击事件中添加的代码：

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

这里介绍每行代码的作用。 JavaScript `XMLHttpRequest` 对象具有许多用于传输数据的属性和方法。 首先，创建一个`XMLHttpRequest`对象实例，并保存在`req`变量里 。 然后，`open` 方法初始化一个请求——这个例子是从 API 请求数据，因此它是一个 `GET` 请求。 第二个参数 `open` 是你要从中请求数据的 API 的 URL。 第三个参数是一个布尔值， `true` 使其成为异步请求。 `send` 方法发送请求。 最后，`onload` 事件处理程序解析返回的数据并应用该 `JSON.stringify` 方法将JavaScript对象转换为字符串， 然后将此字符串作为消息文本插入。

# --instructions--

更新代码，创建并向 freeCodeCamp Cat Photo API 发送 `GET` 请求。 然后单击 `Get Message` 按钮。 AJAX 函数将使用 API​​ 的原始 JSON 输出替换文本 `The message will go here`。

# --hints--

应该创建一个新的 `XMLHttpRequest`。

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

应该使用该 `open` 方法初始化对 freeCodeCamp Cat Photo API 的 `GET` 请求。

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

应使用该 `send` 方法发送请求。

```js
assert(code.match(/\.send\(\s*\)/g));
```

应该有一个 `onload` 设置为函数的事件处理程序。

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

应该使用该 `JSON.parse` 方法来解析 `responseText`。

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

应该使用 `message` 获取元素，并将其内部 HTML 转换为 JSON 数据字符串。

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
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

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open('GET', '/json/cats.json', true);
      req.send();
      req.onload = () => {
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
      };
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

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
