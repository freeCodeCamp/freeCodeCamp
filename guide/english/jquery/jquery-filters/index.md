---
title: jQuery - Filters
---

# jQuery - Filters


Use jQuery to filter/search for specific elements.

#### jQuery
```html
<script>
```
```javascript
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
```
```html
</script>
```
#### More Information:

For more information, please visit the [w3schools.com](https://www.w3schools.com/jquery/jquery_filters.asp).
