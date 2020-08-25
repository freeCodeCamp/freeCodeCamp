---
id: 587d7fad367417b2b2512be1
title: Handle Click Events with JavaScript using the onclick property
challengeType: 6
videoUrl: ''
localeTitle: 使用onclick属性处理使用JavaScript单击事件
---

## Description
<section id="description">您希望代码仅在页面加载完成后执行。为此，您可以将JavaScript事件附加到名为<code>DOMContentLoaded</code>的文档中。这是执行此操作的代码： <blockquote> document.addEventListener（&#39;DOMContentLoaded&#39;，function（）{ <br><br> }）; </blockquote>您可以实现<code>DOMContentLoaded</code>函数内部的事件处理程序。您可以通过添加以下代码来实现<code>onclick</code>事件处理程序，该处理程序在用户单击id为<code>getMessage</code>的元素时触发： <blockquote> 。的document.getElementById（ &#39;的getMessage&#39;）的onclick =函数（）{}; </blockquote></section>

## Instructions
<section id="instructions">在<code>DOMContentLoaded</code>函数内为id为<code>getMessage</code>的元素添加一个click事件处理程序。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>document.getElementById</code>方法来选择<code>getMessage</code>元素。
    testString: assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
  - text: 您的代码应添加<code>onclick</code>事件处理程序。
    testString: assert(typeof document.getElementById('getMessage').onclick === 'function');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    // Add your code below this line


    // Add your code above this line
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
