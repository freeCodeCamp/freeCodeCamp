---
id: 587d7fad367417b2b2512be2
challengeType: 6
forumTopicId: 301500
title: 通过单击事件更改文本
---

## Description
<section id='description'>
当点击事件发生时，你可以使用 JavaScript 更新 HTML 元素。
例如，当用户点击 "Get Message" 按钮时，它将改变类名<code>message</code>元素的文本为 "Here is the message"。
通过在点击事件内添加以下代码实现：
<code>document.getElementsByClassName('message')[0].textContent="Here is the message";</code>
</section>

## Instructions
<section id='instructions'>
在<code>onclick</code>事件处理器中添加代码，改变<code>message</code>元素内的文字为 "Here is the message"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该使用<code>document.getElementsByClassName</code>方法来选择类名为<code>message</code>的元素，然后将其<code>innerHTML</code>改为给定文字。
    testString: assert(code.match(/document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.textContent\s*?=\s*?('|")Here is the message\2/g));

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
    }
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
      // Add your code below this line
      document.getElementsByClassName('message')[0].textContent = "Here is the message";
      // Add your code above this line
    }
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

</section>

