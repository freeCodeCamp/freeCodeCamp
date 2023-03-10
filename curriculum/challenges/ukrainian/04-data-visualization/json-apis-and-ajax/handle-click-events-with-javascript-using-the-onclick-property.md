---
id: 587d7fad367417b2b2512be1
title: Обробка кліків за допомогою JavaScript функцією onclick
challengeType: 6
forumTopicId: 301503
dashedName: handle-click-events-with-javascript-using-the-onclick-property
---

# --description--

Вам потрібно, щоб код виконувався лише після завантаження сторінки. Для цього прикріпіть event JavaScript до `DOMContentLoaded` документу. Ось приклад такого коду:

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

Ви можете вставити обробники подій у функцію `DOMContentLoaded`. You can implement an `onclick` event handler which triggers when the user clicks on the `#getMessage` element, by adding the following code:

```js
document.getElementById('getMessage').onclick = function(){};
```

# --instructions--

Додайте обробник подій кліку до функції `DOMContentLoaded` для елементу з id `getMessage`.

# --hints--

Your code should use the `document.getElementById` method to select the element whose id is `getMessage`.

```js
assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
```

Додайте до коду обробник подій `onclick`.

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
