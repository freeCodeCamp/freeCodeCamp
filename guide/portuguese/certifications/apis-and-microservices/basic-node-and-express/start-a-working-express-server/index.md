---
title: Start a Working Express Server
localeTitle: Inicie um servidor do Working Express
---
## Inicie um servidor do Working Express

Se você tivesse um website em "example.com/" e desejasse veicular uma string como "Hello World" para quem visita o domínio raiz, poderia fazê-lo facilmente usando o nó e / ou express:

```javascript
app.get("/", function(req, res) { 
  res.send("Hello World"); 
 }); 
```

Além disso, com o ES6 + você pode salvar algumas digitações usando "=>" em vez de "function", que se parece com:

```javascript
app.get("/", (req, res) => { 
  res.send("Hello World"); 
 }); 
```

[Ajude nossa comunidade a expandir essas dicas e guias](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/start-a-working-express-server/index.md) .