---
title: Onclick Event
localeTitle: Событие Onclick
---
## Событие Onclick

Событие `onclick` в JavaScript позволяет программисту выполнять функцию при нажатии элемента.

### пример

```javascript
<button onclick="myFunction()">Click me</button> 
 
 <script> 
  function myFunction() { 
    alert('Button was clicked!'); 
  } 
 </script> 
```

В простом примере выше, когда пользователь нажимает на кнопку, они будут видеть предупреждение в своем браузере, на котором `Button was clicked!` ,

### Добавление `onclick` динамически

Событие `onclick` также может быть программно добавлено к любому элементу, используя следующий код в следующем примере:

```javascript
<p id="foo">click on this element.</p> 
 
 <script> 
  var p = document.getElementById("foo"); // Find the paragraph element in the page 
  p.onclick = showAlert; // Add onclick function to element 
 
  function showAlert(event) { 
    alert("onclick Event triggered!"); 
  } 
 </script> 
```

### Заметка

Важно отметить, что с помощью onclick мы можем добавить только одну функцию прослушивателя. Если вы хотите добавить больше, просто используйте addEventListener (), что является предпочтительным способом добавления слушателей событий.

В приведенном выше примере, когда пользователь нажимает на элемент `paragraph` в `html` , он увидит предупреждение, отображающее `onclick Event triggered` .

### Предотвращение действия по умолчанию

Однако , если мы придаем `onclick` для ссылки (HTML это тег) мы могли бы предотвратить действие по умолчанию произойдет: `a`

```javascript
<a href="https://guide.freecodecamp.org" onclick="myAlert()">Guides</a> 
 
 <script> 
  function myAlert(event) { 
    event.preventDefault(); 
    alert("Link was clicked but page was not open"); 
  } 
 </script> 
```

В приведенном выше примере мы предотвратить поведение по умолчанию `a` (открытие ссылки) элемента с помощью `event.preventDefault()` внутри нашей `onclick` функции обратного вызова.

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)

#### Другие источники

[jQuery .on () Присоединение обработчика событий](https://api.jquery.com/on/)