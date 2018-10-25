---
title: Window setInterval Method
---
## Window setInterval Method

The `setInterval()` method calls a function or evaluates an expression at specified intervals (in milliseconds). 

```js
    setInterval(function(){ alert("Hello"); }, 3000); 
```

The `setInterval()` method will continue calling the function until `clearInterval()` is called, or the window is closed.

The `setInterval()` method can pass additional parameters to the function, as shown in the example below.

```js
    setInterval(function, milliseconds, parameter1, parameter2, parameter3); 
```

The ID value returned by `setInterval()` is used as the parameter for the `clearInterval()` method.

Tips: 
* 1000 ms = 1 second.
* To execute a function only once, after a specified number of milliseconds, use the `setTimeout()` method.

#### More Information:

Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval' target='_blank' rel='nofollow'>MDN</a> 

JavaScript setInterval() Function Examples: <a href='https://www.sitepoint.com/setinterval-example/' target='_blank' rel='nofollow'>Sitepoint</a>

and some more examples: <a href='https://www.w3schools.com/jsref/met_win_setinterval.asp' target='_blank' rel='nofollow'>w3schools</a>
