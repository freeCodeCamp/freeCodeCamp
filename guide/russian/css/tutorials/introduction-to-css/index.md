---
title: Introduction to CSS
localeTitle: Введение в CSS
---
## Введение в CSS

### Что такое CSS?

Каскадные таблицы стилей (CSS) описывают, как должен отображаться html на странице.

Прежде чем разработчики CSS будут применять стили с использованием атрибутов или специальных тегов на каждом узле страницы. Это сделало разметку повторяющейся и подверженной ошибкам.

CSS позволяет селекторам описывать, как должна выглядеть каждая часть соответствующего содержимого.

```CSS
body { 
    font-size: 15px; 
 } 
 
 a { 
    color: rebeccapurple; 
    text-decoration: underline; 
 } 
```

### Использование CSS

**Внешние таблицы стилей** позволяют многим страницам использовать одни и те же стили.

```HTML
<link href="styles.css" rel="stylesheet" type="text/css"> 
```

**Внутренние таблицы стилей** применяют CSS ко всем соответствующим тегам на странице.

```HTML
<style> 
    h1 { 
        font-family: sans-serif; 
        margin-bottom: 1.5em; 
    } 
 </style> 
```

**Встроенные CSS** применяют стили к одному тегу.

```HTML
<img src="..." style="border: 1px solid red;" /> 
```

#### Дополнительная информация:

*   [W3Schools](https://www.w3schools.com/css/css_intro.asp)
*   [CSS-Tricks Альманах](https://css-tricks.com/almanac/)
*   [Sitepoint](https://www.sitepoint.com/html-css/?ref_source=github)