---
title: Serve JSON on a Specific Route
localeTitle: Servir JSON en una ruta específica
---
## Servir JSON en una ruta específica

Es bastante simple servir un objeto json con nodo (en la ruta '/ json'), si queremos enviar un mensaje y darle el valor "Hola mundo", podemos hacerlo así:

```javascript
  app.get("/json", function(req, res) { 
        res.json({"message": "Hello World"}); 
  }); 
```

[Ayude a nuestra comunidad a expandir estos consejos y guías](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-json-on-a-specific-route/index.md) .