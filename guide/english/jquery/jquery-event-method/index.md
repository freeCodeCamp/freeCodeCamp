---
title: jquery Event Method
---
## jquery Event Method

These methods are used to register behaviors to take effect when the user interacts with the browser, and to further manipulate those registered behaviors. Some examples of this would be when a user clicks on a button or moves their mouse. When these events are triggered, a custom function can be called to do whatever you want.

Most DOM events have an equivalent jQuery method, such as `.click()`, `.focus()`, etc.

An example of assigning an event to an element:

```js
$("button").click(function() {
    alert("You clicked me!");
});
```
In this example, an alert box appears once any button on the page is clicked.

The most commonly used jQuery event method is `$(document).ready()`. This allows the user to execute a function when the document is fully loaded.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://api.jquery.com/category/events/
