---
id: 5ccfad82bb2dc6c965a848e5
title: 使用 JavaScript 的 fetch 方法获取 JSON
challengeType: 6
forumTopicId: 301501
---

# --description--

请求外部数据的另一个方法是使用 JavaScript 的 `fetch()` 方法。它的作用和 XMLHttpRequest 一致，但是语法更易理解。

下面是使用 GET 请求 `/json/cats.json` 数据的例子。

```js

fetch('/json/cats.json')
	.then(response => response.json())
	.then(data => {
		document.getElementById('message').innerHTML = JSON.stringify(data);
	})

```

逐行解释一下代码。

第一行是发起请求。也就是说，`fetch(URL)` 向指定的 URL 发起 GET 请求。方法返回一个 Promise。

当 Promise 返回后，如果请求成功，会执行 `then` 方法，该方法把响应转换为 JSON 格式。

`then` 方法返回的也是 Promise，会被下一个 `then` 方法捕获。第二个 `then` 方法传入的参数就是最终的 JSON 对象。

接着，使用 `document.getElementById()` 选择将要接收数据的元素。然后插入请求返回的 JSON 对象创建的字符串修改元素的 HTML 代码。

# --instructions--

更新代码，创建一个 "GET" 请求向 freeCodeCamp Cat Photo API 请求数据。这次使用 `fetch` 方法而不是 `XMLHttpRequest`。

# --hints--

应该使用 `fetch` 来发起 GET 请求。

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

应该在 `then` 里面将响应转换为 JSON。

```js
assert(
  code.match(
    /\.then\s*\(\s*(response|\(\s*response\s*\))\s*=>\s*response\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

应该使用另一个 `then` 接收 `then` 转换的 JSON。

```js
assert(code.match(/\.then\s*\(\s*(data|\(\s*data\s*\))\s*=>\s*{[^}]*}\s*\)/g));
```

代码应该选择 id 为 `message` 的元素然后把它的内部 HTML 改成 JSON data 的字符串。

```js
assert(
  code.match(
    /document\s*\.getElementById\s*\(\s*('|")message\1\s*\)\s*\.innerHTML\s*=\s*JSON\s*\.\s*stringify\s*\(\s*data\s*\)/g
  )
);
```

# --solutions--

