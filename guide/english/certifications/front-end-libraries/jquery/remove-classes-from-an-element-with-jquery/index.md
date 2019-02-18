---
title: Remove Classes from an Element with jQuery
---
## Remove Classes from an Element with jQuery

## Solution
```javascript
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");  //Target elements with the "button" tag and remove the class btn-default.
  });
</script>
```
