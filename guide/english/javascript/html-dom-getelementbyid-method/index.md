---
title: HTML DOM getElementById Method
---

The `getElementById()` method returns the element that has the id attribute with the specified value. It takes one argument, which is a case-sensitive string of the id for the element you want.

This method is one of the most common methods in the HTML DOM, and is used almost every time you want to manipulate, or get info from, an element in your document. Here's a simple example of the syntax:

**HTML content:**

```html
<div id="demo"></div>
```

**JavaScript content:**

```javascript
document.getElementById("demo"); // Returns the element with id "demo"
```

If you have more than one element with the same value of `id` (bad practice!), `getElementById` will return the first element found:
```html
<div id="demo">First</div>
<div id="demo">Second</div>
```
```javascript
document.getElementById("demo"); // Returns the element with id "demo" containing 'First'
```

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById' target='_blank' rel='nofollow'>document.getElementById()</a>

#### Alternative solutions:

A commonly-used alternative to `document.getElementById` is using a jQuery selector which you read about more [here](https://github.com/freeCodeCamp/guides/tree/master/src/pages/jquery).
