---
id: 587d7fae367417b2b2512be5
title: Конвертуйте дані JSON в HTML
challengeType: 6
forumTopicId: 16807
dashedName: convert-json-data-to-html
---

# --description--

Ви отримуєте дані з JSON API, а отже можете представити їх в HTML.

Ви можете використати цикл `forEach`, щоб перебрати дані, оскільки об’єкти фотографій котів знаходяться в масиві. Як тільки ви потрапляєте на кожен предмет, ви можете змінити елементи HTML.

Спочатку оголосіть змінну html за допомогою `let html = "";`.

Потім перегляньте JSON, додавши HTML до змінної, що огортає назви ключів у тегах `strong`, після яких йде значення. Відтворення відбувається після завершення циклу.

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

**Примітка:** у цьому завданні потрібно додати нові елементи HTML на сторінку, тому не можна використовувати `textContent`. Натомість використайте `innerHTML`, що може зробити сайт вразливим до міжсайтового скриптингу.

# --instructions--

Додайте метод `forEach`, щоб перебрати дані JSON та створіть елементи HTML, щоб зобразити їх.

Ось декілька прикладів JSON:

```json
[
  {
    "id":0,
      "imageLink":"https://cdn.freecodecamp.org/curriculum/legacy-json-apis-ajax/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
```

# --hints--

Код має зберігати дані в змінній `html`

```js
assert(__helpers.removeWhiteSpace(code).match(/html(\+=|=html\+)/g))
```

Код має використати метод `forEach`, щоб перебрати дані JSON з API.

```js
assert(code.match(/json\.forEach/g));
```

Назви ключів мають знаходитись в тегах `strong`.

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
