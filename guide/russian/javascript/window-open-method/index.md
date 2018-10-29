---
title: Window Open Method
localeTitle: Метод открытия окна
---
## Метод открытия окна

Метод Window `open()` может использоваться для загрузки указанного ресурса в контекст просмотра (окно или вкладку) с указанным именем. Если такое имя не существует, то создается новое окно и ресурс загружается в его контекст.

## Prameters

`url` DOMString, указывающий загружаемый ресурс. Это может быть путь или URL-адрес любого ресурса, который поддерживается браузером.

`windowName` DOMString с указанием имени контекста просмотра (окна или вкладки), в которое будет загружаться контент; если имя не указывает существующий контекст, создается новое окно и дается имя, указанное windowName. Это имя затем может использоваться как цель ссылок и форм, указывая его как целевой атрибут.

`windowFeatures` `optional` DOMString, содержащий список оконных функций, разделенных запятыми, с соответствующими значениями в форме «name = value». Эти функции включают такие параметры, как размер и положение окна по умолчанию и т. Д.

## Синтаксис

```javascript
  var window =  window.open(url, windowName, [windowFeatures]); 
```

## пример

```javascript
var windowObjectReference; 
 var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"; 
 
 function openRequestedPopup() { 
  windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures); 
 } 
```

Если окно с именем уже существует, то strURL загружается в существующее окно. В этом случае возвращаемое значение метода - это существующее окно, а strWindowFeatures игнорируется.

#### Дополнительная информация:

[Документы MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)