---
id: 587d7faf367417b2b2512be9
title: Надсилання даних методом JavaScript XMLHttpRequest
challengeType: 6
forumTopicId: 301504
dashedName: post-data-with-the-javascript-xmlhttprequest-method
---

# --description--

У попередніх прикладах, ви отримували дані із зовнішнього ресурсу. Проте ви також можете надсилати дані на зовнішній ресурс, допоки він підтримує запити AJAX та вам відома URL-адреса.

Метод JavaScript's `XMLHttpRequest` використовують для надсилання даних на сервер. Наприклад:

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

Вам вже зустрічались ці методи. Ось метод `open`, який надсилає запит `POST` на URL-адресу зовнішнього ресурсу та робить його асинхронним за допомогою булевого `true`. Метод `setRequestHeader` встановлює значення заголовка запиту HTTP, в якому присутня інформація про відправника та сам запит. Використовуйте цей метод після `open`, але перед `send`. Два параметри - це назва заголовка і значення, що задається як тіло цього заголовка. Далі, за допомогою слухача подій `onreadystatechange`, змінюється стан запиту. `readyState` з `4` означає завершення операції, а `status` з `201` - успішно виконаний запит. HTML документа можна оновити. І нарешті, метод `send` надсилає запит для значення `body`. Ключ `userName` надає користувач у полі `input`.

# --instructions--

Оновіть код, щоб надіслати запит `POST` до кінцевої точки API. Потім напишіть своє ім'я у полі вводу та натисніть кнопку `Send Message`. Функція AJAX замінить `Reply from Server will be here.` даними із сервера. Додайте до вашого імені у полі вводу текст `loves cats`.

# --hints--

Створіть новий `XMLHttpRequest` у коді.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

Щоб створити запит `POST` на сервер, використайте метод `open`.

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

Використовуйте метод `setRequestHeader` у коді.

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

Для того, щоб код працював, вам потрібен сет обробника подій `onreadystatechange`.

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

У коді має бути елемент `message`, текст якого зміниться з `textContent` на `userName loves cats`

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

Використовуйте метод `send` у вашому коді.

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
