---
title: Get Query Parameter Input from the Client
localeTitle: Obtener entrada de parámetros de consulta del cliente
---
## Obtener entrada de parámetros de consulta del cliente

Dada la sugerencia después del código auxiliar, "/ name? First = & last = , "podemos construir la respuesta de esta manera:

```javascript
 app.get("/name", function(req, res) { 
   var firstName = req.query.first; 
   var lastName = req.query.last; 
   // Send the json object 
 }); 
```

[Ayude a nuestra comunidad a expandir estos consejos y guías](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/get-query-parameter-input-from-the-client/index.md) .