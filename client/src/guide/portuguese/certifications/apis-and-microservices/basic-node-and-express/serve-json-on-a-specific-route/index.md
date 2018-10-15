---
title: Serve JSON on a Specific Route
localeTitle: Servir JSON em uma rota específica
---
## Servir JSON em uma rota específica

É bastante simples servir um objeto json com node (na rota '/ json'), se quisermos entregar uma mensagem e dar o valor "Hello World", podemos fazer assim:

```javascript
  app.get("/json", function(req, res) { 
        res.json({"message": "Hello World"}); 
  }); 
```

[Ajude nossa comunidade a expandir essas dicas e guias](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-json-on-a-specific-route/index.md) .