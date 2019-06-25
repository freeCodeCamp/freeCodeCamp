---
title: Use the .env File
localeTitle: Usa el archivo .env
---
## Usa el archivo .env

Podemos usar el método .toUpperCase () para hacer una cadena con mayúsculas, como:

```javascript
  var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD" 
```

Todo lo que tenemos que hacer ahora es verificar cuál es el valor de la variable de entorno, lo que puede hacer como:

```javascript
   if (process.env.VAR_NAME === "allCaps") { 
    resonse = "Hello World".toUpperCase(); 
   } else { 
    response = "Hello World"; 
   } 
  }); 
```

[Ayude a nuestra comunidad a expandir estos consejos y guías](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-the-.env-file/index.md) .