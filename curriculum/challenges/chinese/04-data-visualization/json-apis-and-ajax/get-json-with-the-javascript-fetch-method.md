---
id: 5ccfad82bb2dc6c965a848e5
title: 使用 JavaScript 的 fetch 方法获取 JSON
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

请求外部数据的另一个方法是使用 JavaScript 的 `fetch()` 方法。 它的作用和 `XMLHttpRequest` 一样，但是它的语法更容易理解。

下面是使用 GET 请求 `/json/cats.json` 数据的例子。

```js

fetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })

```

逐行解释一下代码。

第一行是发起请求。 `fetch(URL)` 向指定的 URL 发起 `GET` 请求。 这个方法返回一个 Promise。

当 Promise 返回后，如果请求成功，会执行 `then` 方法，该方法把响应转换为 JSON 格式。

`then` 方法返回的也是 Promise，会被下一个 `then` 方法捕获。 第二个 `then` 方法传入的参数就是最终的 JSON 对象。

接着，使用 `document.getElementById()` 选择将要接收数据的元素。 然后插入请求返回的 JSON 对象创建的字符串修改元素的 HTML 代码。

# --instructions--

更新代码，创建并向 freeCodeCamp Cat Photo API 发送 `GET` 请求。 这次使用 `fetch` 方法而不是 `XMLHttpRequest`。

# --hints--


你的代码应该使用获取的数据来替换内部 HTML。

```js
const catData = "dummy data";
const ref = fetch;
fetch = () => Promise.resolve({ json: () => catData });
async () => {
  try {
    document.getElementById("getMessage").click();
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
  } catch (error) {
    console.log(error);
  } finally {
    fetch = ref;
    assert.equal(
      document.getElementById("message").textContent,
      JSON.stringify(catData)
    );
  }
};
```


你的代码应该使用 `fetch` 发起 `GET` 请求。

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

你的代码应该使用 `then` 来转换对 JSON 的响应。

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

你的代码应该使用 `then` 来处理由另一个 `then` 转换为 JSON 的数据。

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

你的代码应该选择 id 为 `message` 的元素，然后把它的内部 HTML 改成 JSON 数据的字符串。

```js
assert(
  __helpers.removeWhiteSpace(code).match(
    /document\.getElementById\(('|")message\1\)\.innerHTML=JSON\.stringify\(?\w+\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
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
<p id="message" class="box">
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
    document.getElementById('getMessage').onclick= () => {
      fetch('/json/cats.json')
        .then(response => response.json())
        .then(data => {
          document.getElementById('message').innerHTML=JSON.stringify(data);
        })
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
<p id="message" class="box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
