---
title: Add Document Elements with D3
---
## Add Document Elements with D3

### Hint

Use the `.select()`, `.append()` and `.text()` methods.

### Solution

<body>
  <script>
    d3.select("body")
    .append("h1")
    .text("Learning D3");
  </script>
</body>
