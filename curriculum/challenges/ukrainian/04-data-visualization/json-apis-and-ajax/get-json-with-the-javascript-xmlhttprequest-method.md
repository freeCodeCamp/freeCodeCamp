---
id: 587d7fae367417b2b2512be3
title: Отримайте JSON за допомогою методу XMLHttpRequest від JavaScript
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

Ви можете надіслати запит на дані із зовнішніх джерел. Саме тут використовуються API.

Пам’ятайте, що API (прикладний програмний інтерфейс) — це інструменти, які дозволяють комп’ютерам обмінюватись інформацією один з одним. Ви дізнаєтесь, як оновити HTML з даними, отриманими з API, за допомогою технології AJAX.

Більшість веб-API передають дані у форматі JSON. JSON розшифровується як JavaScript Object Notation (з англ. запис об’єктів JavaScript).

Синтаксис JSON дуже схожий до літерального запису об’єкта JavaScript. JSON містить властивості об’єкта та їхні поточні значення в дужках `{` та `}`.

Ці властивості та їхні значення часто називають «парами ключ-значення».

Програма отримує JSON через API як `string`, хоча вони надіслані як `bytes`. Їх можна конвертувати в об’єкти JavaScript, але вони не є об’єктами JavaScript за замовчуванням. Метод `JSON.parse` парсить рядок та створює описаний об’єкт JavaScript.

Ви можете здійснити запит на JSON від API freeCodeCamp Cat Photo. Для цього додайте код в подію натискання:

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

Розглянемо, що виконує кожна частина. Об’єкт `XMLHttpRequest` від JavaScript має декілька властивостей та методів, використаних для передачі даних. Спочатку в змінній `req` створюється та зберігається екземпляр об’єкта `XMLHttpRequest`. Потім метод `open` ініціалізує запит: цей приклад здійснює запит на дані з API, тобто запит `GET`. Другим аргументом для `open` є URL-адреса API, з якого запрошуються дані. Третім аргументом є булеве значення, де `true` робить його асинхронним запитом. Метод `send` надсилає запит. Вкінці обробник події `onload` парсить повернені дані та застосовує метод `JSON.stringify`, щоб конвертувати об’єкт JavaScript в рядок. Далі цей рядок буде вставлено як текст повідомлення.

# --instructions--

Оновіть код, щоб створити та надіслати запит `GET` до API freeCodeCamp Cat Photo. Далі натисніть кнопку `Get Message`. Функція AJAX замінить текст `The message will go here` на необроблений вихідний JSON від API.

# --hints--

Код має створити новий `XMLHttpRequest`.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

Код має використати метод `open`, щоб ініціалізувати запит `GET` до API freeCodeCamp Cat Photo.

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

Код має використати метод `send`, щоб надіслати запит.

```js
assert(code.match(/\.send\(\s*\)/g));
```

Код повинен мати обробник події `onload` зі значенням функції.

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

Код має використати метод `JSON.parse`, щоб парсити `responseText`.

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

Код має отримати елемент з класом `message` та змінити його внутрішній HTML на рядок даних JSON.

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
