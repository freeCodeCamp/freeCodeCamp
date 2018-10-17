---
title: Click Method
localeTitle: Метод Click
---
# Метод Click

Метод jQuery Click запускает функцию при нажатии элемента. Эта функция известна как «обработчик», потому что она обрабатывает событие click. Функции могут влияют на элемент HTML, привязанный к клику, используя метод jQuery Click, или они могут полностью изменить что-то еще. Наиболее часто используемая форма:

```javascript
$("#clickMe").click(handler) 
```

Метод click использует функцию обработчика в качестве аргумента и выполняет его каждый раз, когда `#clickMe` элемент `#clickMe` . Функция обработчика получает параметр, известный как [eventObject,](http://api.jquery.com/Types/#Event) который может быть полезен для управления действием.

#### Примеры

Этот код показывает предупреждение, когда пользователь нажимает кнопку:

```html

<button id="alert">Click Here</button> 
```

```javascript
$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
```

[jsFiddle](https://jsfiddle.net/pL63cL6m/)

[EventObject](http://api.jquery.com/Types/#Event) имеет некоторые встроенные методы, в том числе `preventDefault()` , который делает именно то, что он говорит, - останавливается событие по умолчанию для элемента. Здесь мы помещаем якорный тег в качестве ссылки:

```html

<a id="myLink" href="www.google.com">Link to Google</a> 
```

```javascript
$("#myLink").click(function (event) { 
  event.preventDefault(); 
 }); 
```

[jsFiddle](https://jsfiddle.net/dy457gbh/)

#### Дополнительные способы воспроизведения с помощью метода click

Функция обработчика также может принимать дополнительные данные в виде объекта:

```javascript
jqueryElement.click(usefulInfo, handler) 
```

Данные могут быть любого типа.

```javascript
$("element").click({firstWord: "Hello", secondWord: "World"}, function(event){ 
    alert(event.data.firstWord); 
    alert(event.data.secondWord); 
 }); 
```

Вызов метода click без функции обработчика запускает событие click:

```javascript
$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
 
 $("#alert").click(); 
```

Теперь, всякий раз, когда страница загружается, событие click будет срабатывать, когда мы вводим или перезагружаем страницу и показываем назначенное предупреждение.

Также вы должны использовать .on ('click', ...) над .click (...), потому что первый может использовать меньше памяти и работать для динамически добавленных элементов.

[jsFiddle](https://jsfiddle.net/gspk6gxt/)

#### Распространенные ошибки

Событие click привязывается только к элементам, находящимся в настоящее время на DOM во время привязки, поэтому любые добавленные впоследствии элементы не будут связаны. Чтобы связать все элементов в DOM, даже если они будут созданы позднее, используйте метод `.on()` .

Например, этот пример метода click:

```javascript
$( "element" ).click(function() { 
  alert("I've been clicked!"); 
 }); 
```

Можно изменить это на примере метода:

```javascript
$( document ).on("click", "element", function() { 
  alert("I've been clicked!"); 
 }); 
```

#### Дополнительная информация:

Для получения дополнительной информации посетите [официальный сайт](https://api.jquery.com/click/#click) .