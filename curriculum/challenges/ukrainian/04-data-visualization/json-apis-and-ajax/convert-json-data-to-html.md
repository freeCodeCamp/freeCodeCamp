---
id: 587d7fae367417b2b2512be5
title: Перетворення даних JSON у HTML
challengeType: 6
forumTopicId: 16807
dashedName: convert-json-data-to-html
---

# --description--

Дані, отримані з JSON API, ви можете відобразити у форматі HTML.

Використайте метод `forEach` для повторного перегляду даних, оскільки фото котів зберігаються в масиві. Ви можете змінити елементи HTML кожного об'єкта.

Спершу, створіть змінну html `let html = "";`.

Потім додайте HTML до змінної, яку повинні обрамляти ключові назви у `strong` теґах, а далі має йти значення. Так буде задано цикл даним JSON. Після завершення циклу - відтворіть його.

Ось приклад такого коду:

```js
let html = "";
json.forEach(function(val) {
  const keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
```

**Примітка:** Для цього завдання вам потрібно додати на сторінку новий елемент HTML, але не використовуйте `textContent`. Натомість використайте `innerHTML`. Проте сайт може стати вразливим до атак міжсайтового скриптингу.

# --instructions--

Методом `forEach` додайте цикл даних JSON та створіть елементи HTML для їх відображення.

Ось декілька прикладів JSON:

```json
[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
```

# --hints--

Ваш код повинен зберігати дані змінної `html`

```js
assert(__helpers.removeWhiteSpace(code).match(/html(\+=|=html\+)/g))
```

У коді потрібно використати метод `forEach` для додавання циклу даних JSON з API.

```js
assert(code.match(/json\.forEach/g));
```

У вашому коді назви ключів мають бути обрамлені у `strong` теґи.

```js
assert(code.match(/<strong>.+<\/strong>/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line


        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
      };
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
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line
        json.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div class = 'cat'>";
          keys.forEach(function(key) {
          html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        });
        html += "</div><br>";
        });
        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
      };
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
