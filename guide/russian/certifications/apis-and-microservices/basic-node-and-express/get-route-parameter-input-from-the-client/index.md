---
title: Get Route Parameter Input from the Client
localeTitle: Получить входной параметр маршрута от клиента
---
## Получить входной параметр маршрута от клиента

Если кто-то попросит вас создать GET или POST, вы будете делать app.get (...) или app.post (...) соответственно. Основная структура проблемы:

```javascript
app.get("/:word/echo", function(req, res) { 
  // word = req.params.word; 
  // respond with the json object 
 }); 
```

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/get-route-parameter-input-from-the-client/index.md) .