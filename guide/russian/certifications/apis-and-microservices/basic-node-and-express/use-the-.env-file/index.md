---
title: Use the .env File
localeTitle: Используйте файл .env
---
## Используйте файл .env

Мы можем использовать метод .toUpperCase (), чтобы сделать строку все шапки, такие как:

```javascript
  var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD" 
```

Все, что нам нужно сделать, это проверить, что такое значение переменной среды, которое вы можете сделать следующим образом:

```javascript
   if (process.env.VAR_NAME === "allCaps") { 
    resonse = "Hello World".toUpperCase(); 
   } else { 
    response = "Hello World"; 
   } 
  }); 
```

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-the-.env-file/index.md) .