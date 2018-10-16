---
title: Implement a Root-Level Request Logger Middleware
localeTitle: Implementar um middleware de logger de solicitação de nível raiz
---
## Implementar um middleware de logger de solicitação de nível raiz

É mais fácil escrever este desafio no topo (já existe um esboço para ele). Isso ocorre porque o middleware deve ser colocado para as chamadas de função que você deseja que sejam usadas.

Para configurar seu próprio middleware, você pode fazer assim:

```javascript
app.use(function middleware(req, res, next) { 
  // Do something 
  // Call the next function in line: 
  next(); 
 }); 
```

Se você tiver problemas ao formatar a string corretamente, uma maneira de fazê-lo será:

```javascript
  var string = req.method + ' ' + req.path + ' - ' + req.ip; 
```

[Ajude nossa comunidade a expandir essas dicas e guias](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/implement-a-root-level-request-logger-middleware/index.md) .