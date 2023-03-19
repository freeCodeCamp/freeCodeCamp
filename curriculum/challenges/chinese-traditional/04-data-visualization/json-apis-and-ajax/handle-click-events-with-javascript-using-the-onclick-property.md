---
id: 587d7fad367417b2b2512be1
title: 使用 onclick 屬性處理點擊事件
challengeType: 6
forumTopicId: 301503
dashedName: handle-click-events-with-javascript-using-the-onclick-property
---

# --description--

你希望代碼僅在頁面完成加載後執行。 爲此，你可將名爲`DOMContentLoaded`的 JavaScript 事件附加到文檔中。 以下是實現的代碼：

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

你可以在`DOMContentLoaded`函數內部添加事件處理方法。 你可以通過添加以下代碼來添加 `onclick` 事件處理器，當用戶點擊 id 爲`#getMessage` 的元素時會觸發事件：

```js
document.getElementById('getMessage').onclick = function(){};
```

# --instructions--

在`DOMContentLoaded`函數內爲 id 爲`getMessage`的元素添加一個 click 事件處理器。

# --hints--

你的代碼應該用 `document.getElementById` 方法來選擇 id 爲 `getMessage` 的元素。

```js
assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
```

你的代碼應該添加`onclick`事件處理器。

```js
assert(typeof document.getElementById('getMessage').onclick === 'function');
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
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
