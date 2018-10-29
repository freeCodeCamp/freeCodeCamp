---
title: Get Data from POST Requests
localeTitle: Получить данные из запросов POST
---
## Получить данные из запросов POST

Точно так же, как с помощью req.query, мы можем сделать req.body, чтобы получить наши данные. Эта проблема очень похожа на «Получить запрос параметров запроса от клиента».

Для получения данных из почтового запроса общий формат:

```javascript
app.post(PATH, function(req, res) { 
  // Handle the data in the request 
 }); 
```

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-body-parser-to-parse-post-requests/index.md) .