---
title: jQuery Hover Method
---

# jQuery Hover Method
The jquery hover method is a combination of the ```mouseenter``` and ```mouseleave``` events. 
The syntax is this:
```
$(selector).hover(inFunction, outFunction);
```
The first function, inFunction, will run when the ```mouseenter``` event occurs.
The second function is optional, but will run when the ```mouseleave``` event occurs. 
If only one function is specified, the other function will run for both the ```mouseenter``` and ```mouseleave``` events.
Below is a more specific example.

```
$("p").hover(function(){
    $(this).css("background-color", "yellow");
}, function(){
    $(this).css("background-color", "pink");
});
```
So this means that hover on paragraph will change its background color to yellow and the opposite will change back to pink.

### More Information
More information can be found [here].

[here]: https://www.w3schools.com/jquery/event_hover.asp
