---
title: HTML Method
---

# HTML Method
The jQuery `.html()` method gets the content of a HTML element or sets the content of an HTML element. 

## Getting
To return the content of a HTML element, use this syntax:
```javascript
$('selector').html();
```

For example:
```javascript
$('#example').html();
```

## Setting
To set the content of a HTML element, use this syntax:
```javascript
$('selector').html(content);
```

For example:
```javascript
$('p').html('Hello World!');
```

That will set the content of all of the `<p>` elements to Hello World!

## Warning
`.html()` method is used to set the element's content in **HTML** format. This may be dangerous if the content is provided by user. Consider using `.text()` method instead if you need to set non-HTML strings as content.

### More Information

[W3Schools](https://www.w3schools.com/jquery/html_html.asp)
