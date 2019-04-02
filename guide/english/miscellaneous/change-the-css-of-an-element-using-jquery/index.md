---
title: Change the CSS of an Element Using jQuery
---
We can also change the CSS of an HTML element directly with jQuery.

Query has a function called `.css()` that allows you to change the CSS of an element.

    <script>
      $(document).ready(function() {
        $("#target1").css("color", "red");

      });
    </script>