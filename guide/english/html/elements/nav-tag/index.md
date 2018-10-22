---
title: Nav Tag
---
## Nav Tag

The `<nav>` tag is intended for major block of navigation links. NOT all links of a document should be inside a `<nav>` element.

Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.


#### Example
``` html

<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

```

#### More Information:
- <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav' target='_blank' rel='nofollow'>MDN</a>
<div class="links">
  <h1>Links</h1>
  <p>You can also use <nav> element for external links, such as:</p>
  <nav>
    <li><a href="https://github.com/" target="_blank">GitHub</a></li>
  </nav>
  
