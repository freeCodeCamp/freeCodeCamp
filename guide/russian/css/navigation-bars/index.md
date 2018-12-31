---
title: Navigation Bars
localeTitle: Навигационные бары
---
## Навигационные бары

Навигационные панели - очень важный элемент для любого веб-сайта. Они обеспечивают основной способ навигации, предоставляя основной список ссылок на пользователя. Существует множество способов создания панели навигации. Самый простой способ создать панель навигации - использовать неупорядоченный список и стилизовать его с помощью CSS.

Базы навигации в основном состоят из списков `<ul>` которые расположены горизонтально и стильно.

При стилизации навигационных полос обычно удаляется дополнительный интервал, создаваемый тегами `<ul>` и `<li>` а также автоматически вставленные маркеры:

```css
   list-style-type: none; 
   margin: 0px; 
   padding: 0px; 
```

**Пример:**

В любой навигации есть две части: HTML и CSS. Это просто быстрый пример.

```html

<nav class="myNav">                                 <!-- Any element can be used here --> 
    <ul> 
        <li><a href="index.html">Home</a></li> 
        <li><a href="about.html">About</a></li> 
        <li><a href="contact.html">Contact</a></li> 
    </ul> 
 </nav> 
```

```css
/* Define the main Navigation block */ 
 .myNav { 
    display: block; 
    height: 50px; 
    line-height: 50px; 
    background-color: #333; 
 } 
 /* Remove bullets, margin and padding */ 
 .myNav ul { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
 } 
 .myNav li { 
    float: left; 
    /* Or you can use display: inline; */ 
 } 
 /* Define the block styling for the links */ 
 .myNav li a { 
    display: inline-block; 
    text-align: center; 
    padding: 14px 16px; 
 } 
 /* This is optional, however if you want to display the active link differently apply a background to it */ 
 .myNav li a.active { 
    background-color: #3786E1; 
 } 
```

#### Дополнительная информация:

Дополнительные примеры навигации: [W3Schools](https://www.w3schools.com/css/css_navbar.asp)