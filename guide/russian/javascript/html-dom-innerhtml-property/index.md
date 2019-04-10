---
title: HTML Dom Innerhtml Property
localeTitle: Свойство HTML Dom Innerhtml
---
## Свойство HTML Dom Innerhtml

Внутренняя поддержка `innerHTML` возвращает содержимое HTML внутри выбранного элемента, а также позволяет вам определять новый HTML-контент.

**_СОДЕРЖАНИЕ_**

```html

<div id="demo"> 
  <p>Demo</p> 
 </div> 
```

```javascript
var element = document.getElementById("demo"); 
 console.log(element.innerHTML) //logs <p>Demo</p> 
```

**_СОДЕРЖАНИЕ ЭЛЕМЕНТА_**

```html

<div id="demo"></div> 
```

```javascript
var element = document.getElementById("demo"); 
 element.innerHTML = "<div>Demo</div>"; 
```

HTML теперь будет как

```html

<div id="demo"> 
  <div>Demo</div> 
 </div> 
```

**_ОБСУЖДЕНИЕ БЕЗОПАСНОСТИ_**

Значение, установленное для `innerHTML` должно поступать из надежных источников, поскольку Javascript будет помещать что-либо внутри этого элемента, и он будет запущен как простой HTML.

Пример:

Установка значения « `<script>alert();</script>` » приведет к запуску функции «alert ()» Javascript:

```javascript
var element = document.getElementById("demo"); 
 
 element.innerHTML = "<script>alert();</script>"; 
```

Этот тип атаки называется [Cross Site Scripting, или XSS для краткости](https://en.wikipedia.org/wiki/Cross-site_scripting) .

Это один из наиболее распространенных способов совершения атаки XSS. Если вы хотите узнать немного больше и научиться защищаться от него, [ознакомьтесь с этим ресурсом](https://xss-game.appspot.com/)