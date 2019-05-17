---
title: Use body-parser to Parse POST Requests
localeTitle: Использовать body-parser для запросов Parse POST
---
## Использовать body-parser для запросов Parse POST

Тело-парсер уже должен быть добавлен в ваш проект, если вы использовали предоставленный шаблон, но если он не должен быть там:

```json
"dependencies": { 
    "body-parser": "^1.4.3", 
    ... 
```

Вам нужно сделать это, чтобы передать промежуточное программное обеспечение в app.use (). Удостоверьтесь, что он дошел до путей, в которых он должен использоваться.

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-body-parser-to-parse-post-requests/index.md) .