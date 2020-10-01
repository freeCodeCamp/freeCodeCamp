---
id: 587d7fad367417b2b2512be1
challengeType: 6
forumTopicId: 301503
title: 使用 onclick 属性处理点击事件
---

## Description
<section id='description'>
你希望代码仅在页面完成加载后执行。为此，你可将名为<code>DOMContentLoaded</code>的 JavaScript 事件附加到文档中。以下是实现的代码：

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

你可以在<code>DOMContentLoaded</code>函数内部添加事件处理方法。你可以添加<code>onclick</code>事件处理器，当用户点击 id 为<code>getMessage</code>的元素时会触发事件。添加以下代码：

```js
document.getElementById('getMessage').onclick = function(){};
```

</section>

## Instructions
<section id='instructions'>
在<code>DOMContentLoaded</code>函数内为 id 为<code>getMessage</code>的元素添加一个 click 事件处理器。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该用<code>document.getElementById</code>方法来选择<code>getMessage</code>元素。
    testString: assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
  - text: 你的代码应该添加<code>onclick</code>事件处理器。
    testString: assert(typeof document.getElementById('getMessage').onclick === 'function');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    // 在这行下面添加代码

    // 在这行上面添加代码
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
  document.addEventListener('DOMContentLoaded', function(){
    // Add your code below this line
    document.getElementById('getMessage').onclick = function(){ };
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

