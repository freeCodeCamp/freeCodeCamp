---
title: Select a Group of Elements with D3
---
# Select a Group of Elements with D3


---
## Hints

### Hint 1

Use the ``` selectAll() ``` method and chain it with the ``` text() ``` method.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

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
</details>
