---
title: Serve Static Assets
localeTitle: Подавать статические активы
---
## Подавать статические активы

Статические веб-страницы довольно просты с экспрессом. Это может быть полезно для создания собственного веб-сайта или блога портфолио и т. Д.

Чтобы обслуживать статическую веб-страницу из папки «views», вы можете использовать код, например:

```javascript
 const express = require("express"); 
 const app = express(); 
 app.use(express.static(__dirname + "/views")); 
```

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/meet-the-node-console/index.md) .