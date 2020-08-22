---
id: 587d7fae367417b2b2512be3
title: Get JSON with the JavaScript XMLHttpRequest Method
challengeType: 6
videoUrl: ''
localeTitle: 使用JavaScript XMLHttpRequest方法获取JSON
---

## Description
<section id="description">您还可以从外部源请求数据。这就是API发挥作用的地方。请记住，API（或应用程序编程接口）是计算机用来相互通信的工具。您将学习如何使用我们从API获得的数据使用称为AJAX的技术更新HTML。大多数Web API以称为JSON的格式传输数据。 JSON代表JavaScript Object Notation。 JSON语法看起来与JavaScript对象文字表示法非常相似。 JSON具有对象属性及其当前值，夹在<code>{</code>和<code>}</code> 。这些属性及其值通常称为“键值对”。但是，API传输的JSON以<code>bytes</code>形式发送，应用程序将其作为<code>string</code>接收。这些可以转换为JavaScript对象，但默认情况下它们不是JavaScript对象。 <code>JSON.parse</code>方法解析字符串并构造它描述的JavaScript对象。您可以从freeCodeCamp的Cat Photo API请求JSON。以下是您可以在点击事件中添加的代码： <blockquote> req = new XMLHttpRequest（）; <br> req.open（ “GET”， &#39;/ JSON / cats.json&#39;，TRUE）; <br> req.send（）; <br> req.onload =函数（）{ <br> JSON = JSON.parse（req.responseText）; <br> document.getElementsByClassName（ &#39;信息&#39;）[0] = .innerHTML JSON.stringify（JSON）; <br> }; </blockquote>这是对每件作品的评论。 JavaScript <code>XMLHttpRequest</code>对象具有许多用于传输数据的属性和方法。首先，创建<code>XMLHttpRequest</code>对象的实例并将其保存在<code>req</code>变量中。接下来， <code>open</code>方法初始化一个请求 - 这个例子是从API请求数据，因此是一个“GET”请求。 <code>open</code>的第二个参数是您从中请求数据的API的URL。第三个参数是布尔值，其中<code>true</code>使其成为异步请求。 <code>send</code>方法发送请求。最后， <code>onload</code>事件处理程序解析返回的数据并应用<code>JSON.stringify</code>方法将JavaScript对象转换为字符串。然后将此字符串作为消息文本插入。 </section>

## Instructions
<section id="instructions">更新代码以创建并向freeCodeCamp Cat Photo API发送“GET”请求。然后单击“获取消息”按钮。您的AJAX函数将使用API​​的原始JSON输出替换“消息将在此处”文本。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该创建一个新的<code>XMLHttpRequest</code> 。
    testString: assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
  - text: 您的代码应该使用<code>open</code>方法初始化对freeCodeCamp Cat Photo API的“GET”请求。
    testString: assert(code.match(/\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g));
  - text: 您的代码应使用<code>send</code>方法发送请求。
    testString: assert(code.match(/\.send\(\s*\)/g));
  - text: 您的代码应该有一个设置为函数的<code>onload</code>事件处理程序。
    testString: assert(code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g));
  - text: 您的代码应该使用<code>JSON.parse</code>方法来解析<code>responseText</code> 。
    testString: assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
  - text: 您的代码应该获取带有类<code>message</code>的元素，并将其内部HTML更改为JSON数据字符串。
    testString: assert(code.match(/document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
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
<p class="message">
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

```js
// solution required
```

/section>
