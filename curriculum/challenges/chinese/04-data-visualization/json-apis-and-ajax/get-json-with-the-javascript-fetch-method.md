---
id: 5ccfad82bb2dc6c965a848e5
challengeType: 6
forumTopicId: 301501
title: 使用 JavaScript 的 fetch 方法获取 JSON
---

## Description
<section id='description'>
请求外部数据的另一个方法是使用 JavaScript 的 <code>fetch()</code> 方法。它的作用和 XMLHttpRequest 一致，但是语法更易理解。
下面是使用 GET 请求 <code>/json/cats.json</code> 数据的例子。

```js

fetch('/json/cats.json')
	.then(response => response.json())
	.then(data => {
		document.getElementById('message').innerHTML = JSON.stringify(data);
	})

```
逐行解释一下代码。

第一行是发起请求。也就是说，<code>fetch(URL)</code> 向指定的 URL 发起 GET 请求。方法返回一个 Promise。

当 Promise 返回后，如果请求成功，会执行 <code>then</code> 方法，该方法把响应转换为 JSON 格式。

<code>then</code> 方法返回的也是 Promise，会被下一个 <code>then</code> 方法捕获。第二个 <code>then</code> 方法传入的参数就是最终的 JSON 对象。

接着，使用 <code>document.getElementById()</code> 选择将要接收数据的元素。然后插入请求返回的 JSON 对象创建的字符串修改元素的 HTML 代码。
</section>

## Instructions
<section id='instructions'>
更新代码，创建一个 "GET" 请求向 freeCodeCamp Cat Photo API 请求数据。这次使用 <code>fetch</code> 方法而不是 <code>XMLHttpRequest</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该使用 <code>fetch</code> 来发起 GET 请求。
    testString: assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
  - text: 应该在 <code>then</code> 里面将响应转换为 JSON。
    testString: assert(code.match(/\.then\s*\(\s*(response|\(\s*response\s*\))\s*=>\s*response\s*\.json\s*\(\s*\)\s*\)/g))
  - text: 应该使用另一个 <code>then</code> 接收 <code>then</code> 转换的 JSON。
    testString: assert(code.match(/\.then\s*\(\s*(data|\(\s*data\s*\))\s*=>\s*{[^}]*}\s*\)/g))
  - text: 代码应该选择 id 为 <code>message</code> 的元素然后把它的内部 HTML 改成 JSON data 的字符串。
    testString: assert(code.match(/document\s*\.getElementById\s*\(\s*('|")message\1\s*\)\s*\.innerHTML\s*=\s*JSON\s*\.\s*stringify\s*\(\s*data\s*\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

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

</section>
