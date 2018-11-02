---
title: Serve Static Assets
localeTitle: Ative os recursos estáticos
---
## Ative os recursos estáticos

Páginas da Web estáticas são bastante simples com expresso. Isso pode ser útil para criar seu próprio site ou blog, etc.

Para veicular uma página da Web estática a partir da pasta "visualizações", você pode usar códigos como:

```javascript
 const express = require("express"); 
 const app = express(); 
 app.use(express.static(__dirname + "/views")); 
```

[Ajude nossa comunidade a expandir essas dicas e guias](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/meet-the-node-console/index.md) .