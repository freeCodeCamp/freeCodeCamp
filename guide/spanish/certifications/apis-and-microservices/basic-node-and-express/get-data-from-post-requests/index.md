---
title: Get Data from POST Requests
localeTitle: Obtener datos de solicitudes POST
---
## Obtener datos de solicitudes POST

Al igual que al usar req.query, podemos hacer req.body para obtener nuestros datos. Este desafío es muy similar a "Obtener entrada de parámetros de consulta del cliente".

Para obtener datos de una solicitud de publicación, un formato general es:

```javascript
app.post(PATH, function(req, res) { 
  // Handle the data in the request 
 }); 
```

[Ayude a nuestra comunidad a expandir estos consejos y guías](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-body-parser-to-parse-post-requests/index.md) .