---
title: jQuery - Get and Set CSS Classes
---

## jQuery Manipulating CSS

Here are the following methods that manipulates css in jQuery:

`addClass()` - Adds one or more classes to the selected elements

`removeClass()` - Removes one or more classes from the selected elements

`toggleClass()` - Toggles between adding/removing classes from the selected elements


### Examples 

## jQuery addClass() Method

This example shows how to add classes using `addClass()` method:
```javascript
$("button").click(function(){
    $("p, span, a").addClass("text-danger");
    $("div").addClass("container");
});
```
You can also specify multiple class in specific selector:
```javascript
$("button").click(function(){
    $("p").addClass("text-red text-center");
});
```

## jQuery removeClass() Method

This example shows how to remove classes using `removeClass()` method:
```javascript
$("button").click(function(){
    $("p, span, a").removeClass("text-danger");
});
```

## jQuery toggleClass() Method

This method toggles between adding/removing classes from the selected elements:
```javascript
$("button").click(function(){
    $("h1, h2, p").toggleClass("blue");
});
```
### More Information

https://www.w3schools.com/jquery/jquery_css_classes.asp
