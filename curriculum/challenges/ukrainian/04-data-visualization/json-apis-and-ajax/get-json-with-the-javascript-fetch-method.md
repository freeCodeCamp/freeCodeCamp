---
id: 5ccfad82bb2dc6c965a848e5
title: Отримайте JSON за допомогою методу fetch від JavaScript
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

Інший спосіб запросити зовнішні дані — використати метод `fetch()` від JavaScript. Він еквівалентний методу `XMLHttpRequest`, проте синтаксис вважається простішим.

Ось код створення запиту GET до `/json/cats.json`

```js

fetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })

```

Зверніть увагу на кожен фрагмент коду.

Перший рядок здійснює запит. Таким чином `fetch(URL)` робить запит `GET` до конкретної URL-адреси. Метод повертає проміс.

Після повернення промісу, якщо запит був успішним, виконується метод `then`, який приймає відповідь та конвертує її у формат JSON.

Метод `then` також повертає проміс, який обробляється наступним методом `then`. Аргумент в другому `then` — це потрібний об’єкт JSON!

Тепер він обирає елемент, який отримає дані, використовуючи `document.getElementById()`. Потім він змінює HTML елемента через додавання рядка, який створений з об’єкта JSON, поверненого з запиту.

# --instructions--

Оновіть код, щоб створити та надіслати запит `GET` до API freeCodeCamp Cat Photo. Цього разу використайте метод `fetch`, а не `XMLHttpRequest`.

# --hints--


Код має використати отримані дані, щоб замінити внутрішній HTML

```js
const catData = "dummy data";
const ref = fetch;
fetch = () => Promise.resolve({ json: () => catData });
async () => {
  try {
    document.getElementById("getMessage").click();
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
  } catch (error) {
    console.log(error);
  } finally {
    fetch = ref;
    assert.equal(
      document.getElementById("message").textContent,
      JSON.stringify(catData)
    );
  }
};
```


Код має зробити запит `GET` за допомогою `fetch`.

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

Код має використати `then`, щоб конвертувати відповідь в JSON.

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

Код має використати `then`, щоб обробити дані, конвертовані в JSON, іншим `then`.

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

Код має отримати елемент з id `message` та змінити його внутрішній HTML на рядок даних JSON.

```js
assert(
  __helpers.removeWhiteSpace(code).match(
    /document\.getElementById\(('|")message\1\)\.innerHTML=JSON\.stringify\(?\w+\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
      // Add your code below this line


      // Add your code above this line
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
<p id="message" class="box">
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
    document.getElementById('getMessage').onclick= () => {
      fetch('/json/cats.json')
        .then(response => response.json())
        .then(data => {
          document.getElementById('message').innerHTML=JSON.stringify(data);
        })
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
<p id="message" class="box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
