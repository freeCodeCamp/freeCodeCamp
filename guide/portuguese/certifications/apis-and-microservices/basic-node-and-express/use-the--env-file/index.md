---
title: Use the .env File
localeTitle: Use o arquivo .env
---
## Use o arquivo .env

Podemos usar o método .toUpperCase () para fazer uma string toda em maiúsculas, como:

```javascript
  var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD" 
```

Tudo o que precisamos fazer agora é verificar qual é o valor da variável de ambiente, como você pode fazer:

```javascript
   if (process.env.VAR_NAME === "allCaps") { 
    resonse = "Hello World".toUpperCase(); 
   } else { 
    response = "Hello World"; 
   } 
  }); 
```

[Ajude nossa comunidade a expandir essas dicas e guias](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-the-.env-file/index.md) .