---
title: HTML DOM querySelectorAll
---

The Document method `querySelectorAll()` returns a static (not live) `NodeList` representing a list of the document's elements that match the specified group of selectors.

**HTML content:**

```html
<div class="class-example">first div</div>
<div class="class-example">second div</div>
<a>element-example</a> 
<a>another-element-example</a> 
```

**JavaScript content:**

```javascript
document.querySelectorAll(".class-example"); // Returns all of the elements with class `class-example`
document.querySelectorAll("a"); // Returns all `a` element 
```

**Note**
`querySelectorAll()` behaves differently than most common JavaScript DOM libraries, which might lead to unexpected results.

Consider this HTML, with its three nested `<div>` blocks.
```html
<div class="outer">
  <div class="select">
    <div class="inner">
    </div>
  </div>
</div>
```
```javascript
var select = document.querySelector('.select');
var inner = select.querySelectorAll('.outer .inner');
inner.length; // 1, not 0!
```

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll' target='_blank' rel='nofollow'>MDN - document.querySelectorAll()</a>
