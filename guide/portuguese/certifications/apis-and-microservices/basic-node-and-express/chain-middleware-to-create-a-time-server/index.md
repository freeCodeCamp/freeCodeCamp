---
title: Chain Middleware to Create a Time Server
localeTitle: Middleware Chain para criar um servidor de horário
---
## Middleware Chain para criar um servidor de horário

Semelhante ao último desafio, mas agora estamos encadeando 2 funções juntas. Parece complicado, mas é apenas javascript.

Em vez de responder com o tempo, também podemos adicionar uma string à solicitação e passá-la para a próxima função. Isso é trivial, mas é um exemplo decente. O código se parece com:

```javascript
app.get("/now", middleware(req, res, next) { 
  req.string = "example"; 
  next(); 
 }, 
  function (req, res) { 
      res.send(req.string); // This will display "example" to the user 
  }); 
```

[Ajude nossa comunidade a expandir essas dicas e guias](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/chain-middleware-to-create-a-time-server/index.md) .