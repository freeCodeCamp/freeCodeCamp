---
title: Serve an HTML File
localeTitle: Servir um arquivo HTML
---
## Servir um arquivo HTML

Você provavelmente precisa comentar o último desafio. Se você tiver um site e quiser exibir um arquivo index.html, provavelmente desejará colocá-lo em uma pasta pública. Isso é para garantir que o público não veja algo que você não queira, e às vezes ele é chamado de "público" ou "visualizações", mas você pode tecnicamente chamá-lo como quiser.

Para servir um index.html em uma pasta chamada "public" no domínio raiz, você faria assim:

```javascript
  app.get("/", function(req, res) { 
        res.sendFile( __dirname + "/public/index.html"); 
  }); 
```

Nota: \_\_dirname retorna o diretório raiz como uma boa prática para desenvolvedores de nós.

[Ajude nossa comunidade a expandir essas dicas e guias](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-an-html-file/index.md) .