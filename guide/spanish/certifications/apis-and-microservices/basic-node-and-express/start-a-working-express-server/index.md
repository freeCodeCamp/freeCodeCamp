---
title: Start a Working Express Server
localeTitle: Iniciar un servidor Express de trabajo
---
## Iniciar un servidor Express de trabajo

Si tuvieras un sitio web en "example.com/" y quisieras servir una cadena como "Hello World" a quienquiera que visite el dominio raíz, podrías hacerlo fácilmente usando node y / o express:

```javascript
app.get("/", function(req, res) { 
  res.send("Hello World"); 
 }); 
```

Además, con ES6 + puedes guardar algo de escritura usando "=>" en lugar de "function", que se ve así:

```javascript
app.get("/", (req, res) => { 
  res.send("Hello World"); 
 }); 
```

[Ayude a nuestra comunidad a expandir estos consejos y guías](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/start-a-working-express-server/index.md) .