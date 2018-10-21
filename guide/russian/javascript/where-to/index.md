---
title: Where to
localeTitle: Куда
---
## Куда

JavaScript - это язык программирования HTML и Интернета. В HTML JavaScript должен быть вставлен в `<script>` контейнера `<script>` .

### пример

```html

<script> 
  window.alert("This JavaScript Works!"); 
 </script> 
```

Кроме того, помните, что вы можете поместить любое количество тегов `<script>` в HTML-документ.

### Куда идет `<script>` ?

Тег `<script>` можно поместить в `<head>` или `<body>` .

### JavaScript в `<head>`

В этом примере JavaScript помещается в раздел `<head>` документа. Создается функция **onClicked** , которая вызывается при нажатии кнопки.

```html

<!DOCTYPE html> 
 <html> 
 <head> 
 <script> 
 function onClicked() { 
    window.alert("Hi, there!"); 
 } 
 </script> 
 </head> 
 
 <body> 
 
 <h1>JavaScript Testing</h1> 
 <button type="button" onclick="onClicked()">Try it</button> 
 
 </body> 
 </html> 
```

### JavaScript в `<body>`

Здесь JavaScript размещен в , Функция **onClicked** создается и запускается при нажатии кнопки.

```html

<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>JavaScript Testing</h1> 
 <button type="button" id="buttonClicked">Try it</button> 
 
 <script> 
 document.getElementById("buttonClicked").onclick = onClicked; 
 
 function onClicked() { 
    window.alert("Hi, there!"); 
 } 
 </script> 
 
 </body> 
 </html> 
```

### Внешние скрипты

Скрипты также можно размещать во внешних файлах. Давайте создадим файл **script.js** .

##### script.js

```javascript
window.alert("Hi!"); 
```

Этот скрипт может быть включен в HTML-документ так:

```html

<!DOCTYPE html> 
 <html> 
 <body> 
 
 <script src="script.js"></script> 
 
 </body> 
 </html> 
```

_Привет!_ все равно будет отображаться при отображении страницы. Помните, что вам не нужно включать теги `<script>` в файлы JavaScript (файлы с расширением **.js** ).

#### Дополнительная информация:

Yahoo рекомендует размещать скрипты внизу. Это уточняется [здесь](https://developer.yahoo.com/performance/rules.html#js_bottom) , с этой рекомендацией.