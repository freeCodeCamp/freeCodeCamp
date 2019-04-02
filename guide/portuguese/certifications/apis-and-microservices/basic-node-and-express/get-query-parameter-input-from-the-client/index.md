---
title: Get Query Parameter Input from the Client
localeTitle: Obter entrada de parâmetro de consulta do cliente
---
## Obter entrada de parâmetro de consulta do cliente

Dada a dica após o stub, "/ name? First = & last = "podemos construir a resposta da seguinte forma:

```javascript
 app.get("/name", function(req, res) { 
   var firstName = req.query.first; 
   var lastName = req.query.last; 
   // Send the json object 
 }); 
```

[Ajude nossa comunidade a expandir essas dicas e guias](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/get-query-parameter-input-from-the-client/index.md) .