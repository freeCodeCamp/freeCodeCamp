---
title: Use jQuery to Modify the Entire Page
---
## Use jQuery to Modify the Entire Page

### Problem Explanation

Add the classes `animated` and `hinge` to your `body` element.

#### Relevant Links:
  - [.addClass()](https://api.jquery.com/addClass/e)

### Solution:
```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
    $("body").addClass("animated hinge");
  });
</script>
```
