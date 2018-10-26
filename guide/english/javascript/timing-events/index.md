---
title: Timing Events
---
## Timing Events

Programmers use timing events to delay the execution of code or to repeat code at a specified interval.

There are two native functions in the JavaScript library used to accomplish these tasks: `setTimeout()` and `setInterval()`.

You use `setTimeout()` to delay the execution of the passed function by a specified amount of time.  There are two parameters that you pass to `setTimeout()`: the function you want to call, and the amount of time in milliseconds.  (There is 1000 milliseconds(ms) in 1 second.  Ex: 5000 ms = 5 seconds.) `setTimeout()` will execute one time after the specified time has elapsed.

`setTimeout()` example:

```javascript
var timeoutID;

function delayTimer() {
  timeoutID = setTimeout(delayedFunction, 3000);
}

function delayedFunction() {
  alert(“Three seconds have elapsed.”);
}
```

When the delayTimer function is called it will run setTimeout.  After 3 seconds pass, it will execute delayedFunction which will send an alert.

Use `setInterval()` to specify a function to repeat with a time delay between execuions.  Again, two parameters are passed to `setInterval()`:  the function you want to call, and the amount of time in milliseconds.  `setInterval()` will continue to execute until it is cleared.

`setInterval()` example:

```javascript
var intervalID;

function repeatEverySecond() {
  intervalID = setInterval(sendMessage, 1000);
}

function sendMessage() {
  console.log(“One second elapsed.”);
}
```
When your code calls the function repeatEverySecond it will run setInterval.  setInterval will run the function sendMessage every 1000 milliseconds.

There are also corresponding native functions to stop the timing events: `clearTimeout()` and `clearInterval()`.

You may have noticed that each timer function is saved to a variable.  When the set function runs it is assigned a number which is saved to this variable.  This generated number is unique for each instance of timers.  This assigned number is also how timers are identified to be stopped.  For this reason, you must always set your timer to a variable.

For clarity of your code, you should always match `clearTimeout()` to `setTimeout()` and `clearInterval()` to `setInterval()`.

To stop a timer, call the corresponding clear function and pass it the timer ID variable that matches the timer you wish to stop.
The syntax for `clearInterval()` and `clearTimeout()` are the same.

Example:

```javascript
var timeoutID;

function delayTimer() {
  timeoutID = setTimeout(delayedFunction, 3000);
}

function delayedFunction() {
  alert(“Three seconds have elapsed.”);
}

function clearAlert() {
  clearTimeout(timeoutID);
}
```
