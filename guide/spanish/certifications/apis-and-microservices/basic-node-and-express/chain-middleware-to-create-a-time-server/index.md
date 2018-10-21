---
title: Chain Middleware to Create a Time Server
localeTitle: Cadena de middleware para crear un servidor de tiempo
---
## Cadena de middleware para crear un servidor de tiempo

Similar al último desafío, pero ahora estamos encadenando 2 funciones. Parece complicado, pero es solo javascript.

En lugar de responder con el tiempo, también podemos agregar una cadena a la solicitud y pasarla a la siguiente función. Esto es trivial, pero es un buen ejemplo. El código se ve como:

```javascript
app.get("/now", middleware(req, res, next) { 
  req.string = "example"; 
  next(); 
 }, 
  function (req, res) { 
      res.send(req.string); // This will display "example" to the user 
  }); 
```

[Ayude a nuestra comunidad a expandir estos consejos y guías](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/chain-middleware-to-create-a-time-server/index.md) .