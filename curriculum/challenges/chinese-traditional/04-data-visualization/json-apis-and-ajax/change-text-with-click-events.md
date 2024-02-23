---
id: 587d7fad367417b2b2512be2
title: 通過單擊事件更改文本
challengeType: 6
forumTopicId: 301500
dashedName: change-text-with-click-events
---

# --description--

當點擊事件發生時，你可以使用 JavaScript 更新 HTML 元素。

例如，當用戶點擊 `Get Message` 按鈕時，它將改變 class 爲 `message` 的元素的文本爲 `Here is the message`。

通過在點擊事件內添加以下代碼實現：

```js
document.getElementsByClassName('message')[0].textContent="Here is the message";
```

# --instructions--

在 `onclick` 事件處理器中添加代碼，改變 `message` 元素內的文本爲 `Here is the message`。

# --hints--

應該使用 `document.getElementsByClassName` 方法來選擇 class 爲 `message` 的元素，然後將其 `textContent` 改爲給定文字。

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.textContent\s*?=\s*?('|")Here is the message\2/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
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
