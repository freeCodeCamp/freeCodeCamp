---
title: AJAX
localeTitle: AJAX
---
## AJAX

**AJAX** означает **асинхронный JavaScript и XML** . Это не язык программирования. Это технология для разработки лучших, быстрых и интерактивных веб-приложений с использованием HTML, CSS, JavaScript и XML.

1.  HTML: язык гипертекстовой разметки (HTML) используется для определения структуры веб-приложения.
2.  CSS: Каскадная таблица стилей (CSS) используется для обеспечения внешнего вида и стиля веб-приложения.
3.  JavaScript: JavaScript используется для создания интерактивного, интересного и удобного веб-приложения.
4.  XML: расширяемый язык разметки (XML) - это формат для хранения и переноса данных с веб-сервера.

#### В чем смысл асинхронного в AJAX?

Асинхронный означает, что веб-приложение может отправлять и получать данные с веб-сервера без обновления страницы. Этот фоновый процесс отправки и получения данных с сервера наряду с обновлением различных разделов веб-страницы определяет асинхронное свойство / функцию AJAX.

#### Как работает **AJAX** ?

AJAX использует встроенный **объект XMLHttpRequest браузера** для запроса данных с веб-сервера и **HTML DOM** для отображения или использования данных.

**Объект XMLHttpRequest** : это API в форме объекта, методы которого помогают в передаче данных между веб-браузером и веб-сервером.

**HTML DOM** : при загрузке веб-страницы браузер создает объектную модель документа на странице.

![](https://cdn-media-1.freecodecamp.org/imgr/pfC7QFH.png "Как работает AJAX")

**Создайте объект XMLHttpRequest:**

```javascript
var xhttp = new XMLHttpRequest(); 
```

**Свойства объекта XMLHttpRequest:**

`readystate` является свойством объекта XMLHttpRequest, который содержит статус XMLHttpRequest.

*   0: запрос не инициализирован
*   1: установлено соединение с сервером
*   2: получен запрос
*   3: запрос обработки
*   4: запрос завершен, и ответ готов

`onreadystatechange` является свойством объекта XMLHttpRequest, который определяет функцию, вызываемую при изменении свойства readyState.  

`status` является свойством объекта XMLHttpRequest, который возвращает номер статуса запроса

*   200: «ОК»
*   403: «Запрещено»
*   404 Не Найдено"

**Методы объекта XMLHttpRequest:** Чтобы отправить запрос на веб-сервер, мы используем методы open () и send () объекта XMLHttpRequest.

```javascript
xhttp.open("GET", "content.txt", true); 
 xhttp.send(); 
```

**Создайте функцию changeContent (), используя JavaScript:**

```javascript
function changeContent() { 
  var xhttp = new XMLHttpRequest(); 
  xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
     document.getElementById("foo").innerHTML = this.responseText; 
    } 
  }; 
  xhttp.open("GET", "content.txt", true); 
  xhttp.send(); 
 } 
```

**Пример AJAX для изменения содержимого веб-страницы:**

```HTML
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <div id="foo"> 
 <h2>The XMLHttpRequest Object</h2> 
 <button type="button" onclick="changeContent()">Change Content</button> 
 </div> 
 
 <script> 
 function changeContent() { 
  var xhttp = new XMLHttpRequest(); 
  xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
      document.getElementById("foo").innerHTML = 
      this.responseText; 
    } 
  }; 
  xhttp.open("GET", "content.txt", true); 
  xhttp.send(); 
 } 
 </script> 
 
 </body> 
 </html> 
```

Файл `content.txt` должен присутствовать в корневом каталоге веб-приложения.

### источники

*   [W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp)
*   [Веб-документы MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

### Другие источники

*   [W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp)
*   [Веб-документы MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)