---
title: HTML DOM querySelector()
---

The Document method `querySelector()` returns the `first` Element within the document that matches the specified selector, or group of selectors. If no matches are found,null is returned.

**HTML content:**

```html
<div id="id-example"></div>
<div class="class-example"></div>
<a>element-example</a> 
```

**JavaScript content:**

```javascript
document.querySelector("#id-example"); // Returns the element with id "id-example"
document.querySelector(".class-example"); // Returns the element with class "class-example"
document.querySelector("a"); // Returns the "a" element 
```

Note `querySelector()` returns the first matching element, to return all the matches, use the querySelectorAll() method instead.
```html
<div id="example">First</div>
<div id="example">Second</div>
```
```javascript
document.querySelector("#example"); // Returns only the element containing 'First'
```

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector' target='_blank' rel='nofollow'>MDN - document.querySelector()</a>
