---
title: Target Elements by Class Using jQuery
---
## Target Elements by Class Using jQuery

- You can find elements with the jQuery class selector. // $(.className)
- In this example, It allows you to select elements with the class ".well" 

## Solution
```javascript
<script>
  $(document).ready(function() {
    $(".well").addClass("animated bounce");
    $(".well").addClass("shake");
  });
</script>
```
