---
id: 587d7fad367417b2b2512be2
title: Change Text with click Events
challengeType: 6
videoUrl: ''
localeTitle: 单击“事件”更改文本
---

## Description
<section id="description">当click事件发生时，您可以使用JavaScript来更新HTML元素。例如，当用户单击“获取消息”按钮时，它会使用类<code>message</code>更改元素的文本，使其<code>message</code> “此消息是”。这可以通过在click事件中添加以下代码来实现： <code>document.getElementsByClassName(&#39;message&#39;)[0].textContent=&quot;Here is the message&quot;;</code> </section>

## Instructions
<section id="instructions">在<code>onclick</code>事件处理程序中添加代码，以更改<code>message</code>元素内的文本，说“这是消息”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>document.getElementsByClassName</code>方法选择具有类<code>message</code>的元素，并将其<code>textContent</code>设置为给定的字符串。
    testString: assert(code.match(/document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.textContent\s*?=\s*?('|")Here is the message\2/g));

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
