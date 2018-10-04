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
