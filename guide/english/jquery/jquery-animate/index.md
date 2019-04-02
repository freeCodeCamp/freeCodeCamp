---
title: jQuery Animate
---
## jQuery Animate
jQuery's animate method makes it easy to create simple animations using only a few lines of code. The basic structure is as following:
```javascript
$(".selector").animate(properties, duration, callbackFunction());
```
For the `properties` argument, you need to pass a javascript object with the CSS properties you want to animate as keys and the values you want to animate to as values.
For the `duration`, you need to input the amount of time in milliseconds the animation should take.
The `callbackFunction()` is executed once the animation has finished.

### Example
A simple example would look like this:
```javascript
$(".awesome-animation").animate({
	opacity: 1,
	bottom: += 15
}, 1000, function() {
	$(".different-element").hide();
});
```

#### More Information:

For more information, please visit the [official website](http://api.jquery.com/animate/) 
