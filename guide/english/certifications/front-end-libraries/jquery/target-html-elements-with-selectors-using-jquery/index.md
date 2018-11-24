---
title: Target HTML Elements with Selectors Using jQuery
---
- JQuery selectors allow you to select and manipulate HTML elements.
- These selectors start with the dollar sign and parentheses: $()
- You can "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more.

## Example
```javascipt
//You can select all <p> elements on a page like this  =  $("p")
  $(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});
```


## Solution
```javascript
<script>
  $(document).ready(function() {
      $("button").addClass("animated bounce"); // We are selecting the button elements and adding "animated bounce" class to them.
  });
</script>
```
