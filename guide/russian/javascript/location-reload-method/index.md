---
title: Location Reload Method
localeTitle: Способ обновления местоположения
---
## Способ обновления местоположения

Метод JavaScript `Location.reload()` предоставляет средства для перезагрузки страницы по текущему URL-адресу.

Синтаксис следующий:

`object.reload(forcedReload);` , где `forceReload` является необязательным параметром.

Чтобы просто перезагрузить страницу, вы можете ввести `window.location` как объект.

Необязательные параметры `force reload` - это логическое значение, которое, если установлено:

*   `True` перезагружает страницу с сервера (например, не сохраняет данные, кэшированные браузером):
```
window.location.reload(true); 
```

*   `False` перезагружает страницу, используя версию страницы, кэшированную браузером.
```
window.location.reload(false); 
```

`False` - это параметр по умолчанию, поэтому, если он оставлен пустым, `object.reload()` перезагружает страницу с помощью кэшированных данных `object.reload(false)` , то есть идентичен методу как `object.reload(false)` .

Чтобы создать эффект предоставляемого браузером «Обновить», вы можете создать HTML-кнопку и выполнить одно из следующих действий:

*   attach `Location.reload()` в HTML-разметку HTML, например:
```
<input type="button" value="Refresh Button" onClick="window.location.reload()"> 
```

*   назначьте нажатие кнопки мыши кнопке с функцией, которая использует метод, где кнопка выглядит аналогично
```
<button type="button" onClick="reloadThePage()">Refresh!</button> 
```

```
<script> 
 function reloadThePage(){ 
    window.location.reload(); 
 } 
 </script> 
```

### Пример:

```javascript
// Reload the current resources from the server 
 window.location.reload(true); 
 
 // Reload the current resources from the browser's cache 
 window.location.reload(); 
```

Это приведет к перезагрузке страницы по текущему URL-адресу с сервера.

#### Дополнительная информация:

*   [MDN](https://developer.mozilla.org/docs/Web/API/Location/reload)
*   [W3 Школы](https://www.w3schools.com/jsref/met_loc_reload.asp)