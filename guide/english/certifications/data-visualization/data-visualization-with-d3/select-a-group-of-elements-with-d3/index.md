---
title: Select a Group of Elements with D3
---
## Select a Group of Elements with D3

### Hint

Use the ``` selectAll() ``` method and chain it with the ``` text() ``` method.

### Solution

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    d3.selectAll("li").text("list item")
  </script>
</body>
```
