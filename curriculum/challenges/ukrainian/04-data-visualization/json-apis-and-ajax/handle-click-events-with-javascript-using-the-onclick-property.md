---
id: 587d7fad367417b2b2512be1
title: Обробіть події натискання з JavaScript, використовуючи властивість onclick
challengeType: 6
forumTopicId: 301503
dashedName: handle-click-events-with-javascript-using-the-onclick-property
---

# --description--

Код має виконуватись лише тоді, коли сторінка повністю завантажиться. Для цього можна прикріпити подію JavaScript до документа під назвою `DOMContentLoaded`. Ось приклад такого коду:

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

Ви можете імплементувати обробники подій, які будуть всередині функції `DOMContentLoaded`. Ви можете імплементувати обробник подій `onclick`, який запускається, коли користувач натискає на елемент `#getMessage`, за допомогою цього коду:

```js
document.getElementById('getMessage').onclick = function(){};
```

# --instructions--

Додайте обробник натискання всередині функції `DOMContentLoaded` для елемента з id зі значенням `getMessage`.

# --hints--

Код має використати метод `document.getElementById`, щоб вибрати елемент з id зі значенням `getMessage`.

```js
assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
```

Код має додати обробник подій `onclick`.

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
