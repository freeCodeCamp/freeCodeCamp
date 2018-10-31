---
title: HTML Dom Innerhtml Property
---
## HTML Dom Innerhtml Property
The `innerHTML` prop return the HTML content inside a selected element and also let you define a new HTML content.

***GET ELEMENT CONTENT***

```html
<div id="demo">
  <p>Demo</p>
</div>
```

```javascript
var element = document.getElementById("demo");
console.log(element.innerHTML) //logs <p>Demo</p>
```

***SET ELEMENT CONTENT***

```html
<div id="demo"></div>
```

```javascript
var element = document.getElementById("demo");
element.innerHTML = "<div>Demo</div>";
```
The HTML now will be like

```html
<div id="demo">
  <div>Demo</div>
</div>
```

***SECURITY CONSIDERATIONS***

The value that's set to `innerHTML` should come from trusted sources, since Javascript will put anything inside that element and it will be run as plain HTML.

Example:

Setting a "`<script>alert();</script>`" value will cause the Javascript "alert()" function to be fired:

```javascript

var element = document.getElementById("demo");

element.innerHTML = "<script>alert();</script>";
```

This type of attack is called [Cross Site Scripting, or XSS for short](https://en.wikipedia.org/wiki/Cross-site_scripting).

This is one of the most common ways of committing an XSS attack. If you want to learn a little bit more and learn to defend against it, [check out this resource](https://xss-game.appspot.com/)
