---
title: Target Elements by id Using jQuery
---
## Target Elements by id Using jQuery

## Solution 
```javascript
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("fadeOut"); // Target elements with the id "target3" and add the class "fadeOut" to them.
  });
</script>
```
