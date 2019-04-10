---
title: HTTP
localeTitle: HTTP
---
## HTTP

Node.js имеет набор встроенных модулей, которые вы можете использовать без дальнейшей установки. Аналогично, **HTTP-модуль** содержит набор функций, необходимых для передачи данных по протоколу гипертекстовой передачи (HTTP).

Модуль HTTP может создавать HTTP-сервер, который слушает порты сервера и возвращает ответ клиенту.

Чтобы включить модуль, используйте функцию `require()` с именем модуля.

```javascript
const http = require('http');
```

## Node.js как веб-сервер

Метод `createServer()` используется для создания HTTP-сервера. Первый аргумент метода `res.writeHead()` - это код состояния, `200` означает, что все в порядке, второй аргумент - это объект, содержащий заголовки ответов.

```javascript
const http = require('http');

 //create a server object:
 http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
 }).listen(8000); //the server object listens on port 8000

 console.log("Server is listening on port no : 8000");
```

### Шаги для выполнения:

*   У вас должен быть установлен Node.js на вашем компьютере.
*   Создайте файл _app.js_ и вставьте вышеуказанный код.
*   Теперь откройте консоль в рабочем каталоге и выполните командный `node app.js`
*   Откройте браузер и введите `http://localhost:8000`

_Примечание._ Чтобы закрыть сервер, нажмите `ctrl + C` в консоли для пользователей Windows.

## Ресурсы

*   [API Node.js](https://nodejs.org/api/http.html#http_http)
*   [W3 Школы](https://www.w3schools.com/nodejs/nodejs_http.asp)