---
title: jQuery Callback Functions
---

## jQuery Callback Functions

A callback function is executed after the current effect is 100% finished.

JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.

Typical syntax: **$(selector).hide(speed,callback);**

### Example
```javascript
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});
```

### More info
[https://www.w3schools.com/jquery/jquery_callback.asp](https://www.w3schools.com/jquery/jquery_callback.asp)
