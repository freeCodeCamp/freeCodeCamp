---
id: 587d7faf367417b2b2512be9
title: Опублікуйте дані за допомогою методу XMLHttpRequest від JavaScript
challengeType: 6
forumTopicId: 301504
dashedName: post-data-with-the-javascript-xmlhttprequest-method
---

# --description--

У попередніх прикладах ви отримували дані від зовнішнього джерела. Проте дані можна і надсилати до зовнішнього джерела, якщо воно підтримує запити AJAX та ви знаєте URL-адресу.

Метод `XMLHttpRequest` від JavaScript використовують, щоб надіслати дані на сервер. Наприклад:

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

Вам вже зустрічались ці методи. У прикладі метод `open` ініціалізує запит як `POST` до заданої URL-адреси зовнішнього джерела та передає `true` як третій параметр (вказуючи, що операцію потрібно виконати асинхронно).

Метод `setRequestHeader` встановлює значення заголовка запиту HTTP, в якому присутня інформація про відправника та сам запит. Його потрібно викликати після методу `open`, але перед методом `send`. Два параметри — це назва заголовка і значення, встановлене як тіло цього заголовка.

Потім слухач події `onreadystatechange` обробляє зміну в стані запиту. `readyState` зі значенням `4` означає, що операцію завершено, а `status` зі значенням `201` означає, що запит виконано успішно. Тому HTML документа можна оновити.

Вкінці метод `send` надсилає запит зі значенням `body`. `body` складається з `userName` та ключа `suffix`.

# --instructions--

Оновіть код, щоб він здійснив запит `POST` до кінцевої точки API. Потім напишіть своє ім’я у полі введення та натисніть `Send Message`. Функція AJAX має замінити `Reply from Server will be here.` на дані з сервера. Відформатуйте відповідь так, щоб показувалося ваше ім’я з текстом `loves cats`.

# --hints--

Код має створити новий `XMLHttpRequest`.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

Код має використати метод `open`, щоб ініціалізувати запит `POST` до сервера.

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

Код має використати метод `setRequestHeader`.

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

Код повинен мати обробник події `onreadystatechange` зі значенням функції.

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

Код має отримати елемент з класом `message` та змінити його `textContent` на `userName loves cats`

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

Код має використати метод `send`.

```js
assert(code.match(/\.send\(\s*?body\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
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

<h1>Cat Friends</h1>
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201){
          const serverResponse = JSON.parse(xhr.response);
          document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
       }
     };
     const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
     xhr.send(body);
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

<h1>Cat Friends</h1>
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```
