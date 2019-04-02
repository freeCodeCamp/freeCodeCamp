---
title: Serve Static Assets
localeTitle: Servir activos estáticos
---
## Servir activos estáticos

Las páginas web estáticas son bastante simples con Express. Esto podría ser útil para crear su propio sitio web o blog de cartera, etc.

Para servir una página web estática desde la carpeta "vistas" puede usar código como:

```javascript
 const express = require("express"); 
 const app = express(); 
 app.use(express.static(__dirname + "/views")); 
```

[Ayude a nuestra comunidad a expandir estos consejos y guías](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/meet-the-node-console/index.md) .