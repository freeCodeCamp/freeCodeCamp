---
title: Onload Event
localeTitle: Событие onload
---
## Событие onload

`onload` используется для выполнения функции JavaScript сразу после загрузки страницы.

### Пример:

```javascript
<body onload="myFunction()"> 
 
 <script> 
  function myFunction() { 
    alert('Page finished loading'); 
  } 
 </script> 
```

В приведенном выше примере, как только загрузится веб-страница, вызывается функция `myFunction` , отображающая оповещение пользователя о `Page finished loading` .

событие `onload` чаще всего используется в элементе `<body>` для выполнения сценария. Если он прикреплен к `<body>` , сценарий будет запускаться после полной загрузки всей страницы (изображения, файлы сценариев, файлы CSS и т. Д.).

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)

#### Другие источники

[jQuery .on () Присоединение обработчика событий](https://api.jquery.com/on/) [Переполнение стека: window.onload и document.onload](https://stackoverflow.com/questions/588040/window-onload-vs-document-onload)