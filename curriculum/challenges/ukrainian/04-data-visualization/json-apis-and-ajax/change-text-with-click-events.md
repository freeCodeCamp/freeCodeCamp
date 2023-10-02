---
id: 587d7fad367417b2b2512be2
title: Змініть текст за допомогою подій натискання
challengeType: 6
forumTopicId: 301500
dashedName: change-text-with-click-events
---

# --description--

Коли відбувається подія натискання, ви можете використати JavaScript, щоб оновити елемент HTML.

Наприклад, якщо користувач натисне кнопку `Get Message`, то вона змінить текст елемента з класом `message` на `Here is the message`.

Для цього додайте такий код в межах події натискання:

```js
document.getElementsByClassName('message')[0].textContent="Here is the message";
```

# --instructions--

Додайте код всередині обробника події `onclick`, щоб змінити текст всередині елемента `message` на `Here is the message`.

# --hints--

Код має використати метод `document.getElementsByClassName`, щоб вибрати елемент з класом `message` та встановити його `textContent` на наданий рядок.

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
