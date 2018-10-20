---
title: Input Checked Attribute
---
## Input Checked Attribute

The checked attribute is a boolean attribute.

When present, it specifies that an <input> element should be pre-selected (checked) when the page loads.

The checked attribute can be used with <input type="checkbox"> and <input type="radio">.

The checked attribute can also be set after the page load, through JavaScript.

## Take a look at the following example:
```html
<form action="/action_page.php">
  <input type="checkbox" name="vehicle" value="Bike"> I have a bike<br>
  <input type="checkbox" name="vehicle" value="Car" checked> I have a car<br>
  <input type="submit" value="Submit">
</form>
```

In the example above when the web page is loaded by default the first checkbox will come automatically selected due to the checked attribute.
