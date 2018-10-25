---
title: Serve an HTML File
localeTitle: Servir un archivo HTML
---
## Servir un archivo HTML

Probablemente necesites comentar el último desafío. Si tiene un sitio web y desea servir un archivo index.html, probablemente quiera colocarlo en una carpeta pública. Esto es para asegurar que el público no vea algo que usted no quiere, y a veces se denomina "público" o "vistas", pero técnicamente puede llamarlo como desee.

Para servir un index.html en una carpeta llamada "pública" en el dominio raíz, lo harías así:

```javascript
  app.get("/", function(req, res) { 
        res.sendFile( __dirname + "/public/index.html"); 
  }); 
```

Nota: \_\_dirname devuelve el directorio raíz es una buena práctica para los desarrolladores de nodos.

[Ayude a nuestra comunidad a expandir estos consejos y guías](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-an-html-file/index.md) .