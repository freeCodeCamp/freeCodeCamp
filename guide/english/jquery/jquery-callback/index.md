---
title: jQuery Callback Functions
---

## jQuery Callback Functions

JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.

To prevent this, you can create a callback function.

A callback function is executed after the current effect is finished.

Typical syntax: `$(selector).hide(speed,callback);`

#### Examples

The example below has a callback parameter that is a function that will be executed after the hide effect is completed:

```javascript
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});
```
The example below has no callback parameter, and the alert box will be displayed before the hide effect is completed:

```javascript
$("button").click(function(){
    $("p").hide(1000);
    alert("The paragraph is now hidden");
});
```

### More Information:
https://www.w3schools.com/jquery/jquery_callback.asp
