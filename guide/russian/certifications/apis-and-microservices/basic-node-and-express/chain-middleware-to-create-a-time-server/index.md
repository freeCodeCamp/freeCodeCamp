---
title: Chain Middleware to Create a Time Server
localeTitle: Сетевое ПО Chain для создания сервера времени
---
## Сетевое ПО Chain для создания сервера времени

Подобно последнему вызову, но теперь мы объединяем две функции вместе. Это кажется сложным, но это просто javascript.

Вместо ответа со временем мы можем также добавить строку к запросу и передать ее следующей функции. Это тривиально, но это делает достойный пример. Код выглядит так:

```javascript
app.get("/now", middleware(req, res, next) { 
  req.string = "example"; 
  next(); 
 }, 
  function (req, res) { 
      res.send(req.string); // This will display "example" to the user 
  }); 
```

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/chain-middleware-to-create-a-time-server/index.md) .