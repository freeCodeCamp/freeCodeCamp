---
id: 587d7fae367417b2b2512be3
title: Отримання JSON методом JavaScript XMLHttpRequest
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

Ви можете надсилати запит на дані із зовнішніх джерел. Саме тут використовуються API.

Пам'ятайте, що API (або ППІ - прикладний програмний інтерфейс) - це інструменти, що дозволяють комп'ютерам обмінюватись інформацією один з одним. Ви дізнаєтесь, як оновити HTML та дані з API за допомогою технології AJAX.

Більшість веб-API передають дані у форматі JSON. JSON - це JavaScript Object Notation.

Синтаксис JSON схожий на літеральну нотацію об'єкта в JavaScript. У JSON властивості об'єкта та їх поточні значення обрамлені `{` та `}`.

Ці властивості разом зі значеннями часто називаються парами "ключ-значення".

Ваша програма отримає дані JSON через API як `string`, хоча вони надіслані у форматі `bytes`. За замовчуванням дані надсилаються не у форматі JavaScript, проте їх можна конвертувати. Методом `JSON.parse` аналізується рядок та створюється потрібний об'єкт JavaScript.

Запросіть JSON через freeCodeCamp's Cat Photo API. Додайте цей код до кліку для виконання запиту:

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

Зверніть увагу на кожний елемент коду. Об'єкт JavaScript `XMLHttpRequest` має певні властивості та методи для передачі даних. Спочатку створюють об'єкт `XMLHttpRequest` та зберігають у змінній `req`. Потім методом `open` надсилають запит `GET`, адже йде отримання даних з API. URL-адреса API, з якого ви зробили запит даних, є другим аргументом для `open`. Третій аргумент - логічне значення, яке надсилає асинхронний запит за допомогою `true`. Сам запит надсилають методом `send`. Врешті-решт, обробник події `onload` аналізує отримані дані та перетворює об'єкт JavaScript методом `JSON.stringify` у рядок. Далі цей рядок буде вставлено як текст повідомлення.

# --instructions--

Щоб створити та надіслати запит `GET` до freeCodeCamp Cat Photo API, оновіть код. Далі натисніть кнопку `Get Message`. Тест `The message will go here` буде замінено даними з API формату raw JSON за допомогою функції AJAX.

# --hints--

Створіть новий `XMLHttpRequest` у коді.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

Щоб створити запит `GET` для freeCodeCamp Cat Photo API, використайте метод `open`.

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

Щоб відправити запит, використайте метод `send`.

```js
assert(code.match(/\.send\(\s*\)/g));
```

Для того, щоб код працював, вам потрібен сет обробника подій `onload`.

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

Щоб зробити аналіз `responseText`, використайте метод `JSON.parse`.

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

Щоб змінити внутрішній HTML на рядок з даними JSON, використайте у коді елемент класу `message`.

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g
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
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open('GET', '/json/cats.json', true);
      req.send();
      req.onload = () => {
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
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
