---
title: Change Text Inside an Element Using jQuery
---
Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.

jQuery has a function called `.html()` that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

Here's how you would rewrite and italicize the text of our heading:

    $("h3").html("<em>jQuery Funhouse</em>");

jQuery also has a similar function called `.text()` that only alters text without adding tags. So when using `.html()` please remember that you will be editing the whole markup and not just the text.