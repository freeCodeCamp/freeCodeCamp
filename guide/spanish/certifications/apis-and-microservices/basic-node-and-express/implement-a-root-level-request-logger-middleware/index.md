---
title: Implement a Root-Level Request Logger Middleware
localeTitle: Implementar un middleware de registrador de solicitudes de nivel raíz
---
## Implementar un middleware de registrador de solicitudes de nivel raíz

Es más fácil escribir este desafío en la parte superior (ya hay un talón para él). Esto se debe a que el middleware debe colocarse en la función de llamadas para las que desea que se utilice.

Para configurar su propio middleware puede hacerlo así:

```javascript
app.use(function middleware(req, res, next) { 
  // Do something 
  // Call the next function in line: 
  next(); 
 }); 
```

Si tiene problemas para formatear la cadena correctamente, una forma de hacerlo es la siguiente:

```javascript
  var string = req.method + ' ' + req.path + ' - ' + req.ip; 
```

[Ayude a nuestra comunidad a expandir estos consejos y guías](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/implement-a-root-level-request-logger-middleware/index.md) .