---
title: Serve an HTML File
localeTitle: Подавать HTML-файл
---
## Подавать HTML-файл

Вероятно, вам нужно прокомментировать последний вызов. Если у вас есть веб-сайт и вы хотите использовать файл index.html, вы, вероятно, захотите поместить его в общую папку. Это делается для того, чтобы общественность не увидела чего-то, чего вы не хотите, и иногда ее называют «общедоступным» или «мнениями», но вы можете технически назвать ее, как хотите.

Чтобы обслуживать index.html в папке с именем «public» в корневом домене, вы сделаете так:

```javascript
  app.get("/", function(req, res) { 
        res.sendFile( __dirname + "/public/index.html"); 
  }); 
```

Примечание: \_\_dirname возвращает корневую директорию, это лучшая практика для разработчиков узлов.

[Помогите нашему сообществу расширить эти подсказки и руководства](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-an-html-file/index.md) .