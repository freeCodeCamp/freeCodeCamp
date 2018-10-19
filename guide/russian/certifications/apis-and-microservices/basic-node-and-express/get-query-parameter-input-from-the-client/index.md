---
title: Get Query Parameter Input from the Client
localeTitle: Получить запрос параметров запроса от клиента
---
## Получить запрос параметров запроса от клиента

Учитывая подсказку после заглушки, «/ name? First = И последняя = , «мы можем построить ответ так:

```javascript
 app.get("/name", function(req, res) { 
   var firstName = req.query.first; 
   var lastName = req.query.last; 
   // Send the json object 
 }); 
```

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/get-query-parameter-input-from-the-client/index.md) .