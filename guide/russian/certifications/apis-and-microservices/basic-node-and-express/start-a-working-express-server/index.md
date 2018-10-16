---
title: Start a Working Express Server
localeTitle: Запуск рабочего сервера Express
---
## Запуск рабочего сервера Express

Если у вас есть веб-сайт на example.com/, и вы хотите использовать строку, такую ​​как «Hello World», любому, кто посещает корневой домен, вы можете сделать это легко с помощью узла и / или выражения:

```javascript
app.get("/", function(req, res) { 
  res.send("Hello World"); 
 }); 
```

Кроме того, с ES6 + вы можете сохранить некоторую типизацию, используя «=>» вместо «function», которая выглядит так:

```javascript
app.get("/", (req, res) => { 
  res.send("Hello World"); 
 }); 
```

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/start-a-working-express-server/index.md) .