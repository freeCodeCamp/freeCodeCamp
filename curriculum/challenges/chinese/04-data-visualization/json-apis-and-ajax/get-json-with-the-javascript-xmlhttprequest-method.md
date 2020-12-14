---
id: 587d7fae367417b2b2512be3
challengeType: 6
forumTopicId: 301502
title: 使用 XMLHttpRequest 方法获取 JSON
---

## Description
<section id='description'>
你还可以从外部链接请求数据，这就是 API 发挥作用的地方。
请记住，API（或叫应用程序编程接口）是计算机用来互相通信的工具。你将学习如何通过 AJAX技术 从 API 获得的数据来更新 HTML。
大部分 web APIs 以 JSON 格式传输数据。JSON 是 JavaScript Object Notation 的简写。
JSON 语法与 JavaScript 对象字面符号非常相似，JSON 具有对象属性以及其当前值，夹在<code>{</code> 和 <code>}</code>之间。
这些属性及其值通常称为 "键值对"。
但是，JSON 是由 API 以<code>bytes</code> 形式传输的，你的程序以<code>string</code>接受它。它们能转换成为 JavaScript 对象，但默认情况下它们不是 JavaScript 对象。 <code>JSON.parse</code>方法解析字符串并构造它描述的 JavaScript 对象。
你可以从 freeCodeCamp 的 Cat Photo API 请求 JSON，以下是你可以在点击事件中添加的代码：

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

这里介绍每行代码的作用，JavaScript <code>XMLHttpRequest</code> 对象具有许多用于传输数据的属性和方法。首先，创建一个<code>XMLHttpRequest</code>对象实例，并保存在<code>req</code>变量里 。
接着, <code>open</code> 方法初始化请求 - 此示例从 API 请求数据，因此是个 "GET" 请求。第二个参数 <code>open</code> 是你要从中请求数据的 API 的 URL。第三个参数是一个布尔值， <code>true</code>使其成为异步请求。
该<code>send</code>方法发送请求，最后，<code>onload</code>事件处理程序解析返回的数据并应用该<code>JSON.stringify</code>方法将JavaScript对象转换为字符串，然后将此字符串作为消息文本插入。
</section>

## Instructions
<section id='instructions'>
更新代码以创建并向 freeCodeCamp Cat Photo API 发送 "GET" 请求。然后点击 "Get Message" 按钮，你的 AJAX 函数将使用 API 的原生 JSON 替换 "The message will go here" 的文本。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该创建一个新的<code>XMLHttpRequest</code>。
    testString: assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
  - text: "你的代码应使用该<code>open</code>方法初始化对 freeCodeCamp Cat Photo API 的 'GET' 请求。"
    testString: assert(code.match(/\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g));
  - text: 你的代码应使用该<code>send</code>方法发送请求。
    testString: assert(code.match(/\.send\(\s*\)/g));
  - text: 你的代码应该有一个<code>onload</code>设置为函数的事件处理程序。
    testString: assert(code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g));
  - text: 你的代码应该使用该<code>JSON.parse</code>方法来解析<code>responseText</code>。
    testString: assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
  - text: 你的代码应该用<code>message</code>获取元素，并将其内部 HTML 转换为 JSON 数据字符串。
    testString: assert(code.match(/document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      // 在这行下面添加代码


      // 在这行上面添加代码
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

</div>



</section>

## Solution
<section id='solution'>

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

</section>

