---
title: Serve JSON on a Specific Route
localeTitle: Служить JSON на определенном маршруте
---
## Служить JSON на определенном маршруте

Довольно просто обслуживать объект json с узлом (по маршруту «/ json»), если мы хотим доставить сообщение и дать ему значение «Hello World», мы можем сделать это следующим образом:

```javascript
  app.get("/json", function(req, res) { 
        res.json({"message": "Hello World"}); 
  }); 
```

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-json-on-a-specific-route/index.md) .