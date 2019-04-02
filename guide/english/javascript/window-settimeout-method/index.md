---
title: Window setTimeout Method
---
## Window setTimeout Method

The `setTimeout()` method calls a function or evaluates an expression after a specified number of milliseconds.

Tips:

* 1000 ms = 1 second.
* The function is only executed once. If you need to repeat execution, use the `setInterval()` method.
* Use the `clearTimeout()` method to prevent the function from running.

The syntax of the `setTimout()` method is as follows:

```js
setTimeout(function, milliseconds, param1, param2, ...);
```

For example:

```js
setTimeout(function(){ alert("Hello"); }, 3000);
```

A very important thing about `setTimeout()` is that it will be executed asynchronously. Let's take an example:

```js
console.log("A");
setTimeout(function(){ console.log("B"); }, 0);
console.log("C");
// The order in the console will be
// A
// C
// B
```

**Not as exepected! But we specify only 0 seconds!!!**
To solve this problem and make sure that our code will execute synchronously we have just to nest the last console in the function

```js
console.log("A");
setTimeout(function() {
    console.log("B");
    console.log("C");
}, 0);
// The order in the console will be
// A
// B
// C
```

#### More Information:

Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout' target='_blank' rel='nofollow'>MDN</a>

More examples of setTimeout function: <a href='https://www.w3schools.com/jsref/met_win_settimeout.asp' target='_blank' rel='nofollow'>w3schools</a>

To understand what really happen under the hood just watch this awesome video
<a href='https://www.youtube.com/watch?v=8aGhZQkoFbQ' target='_blank' rel='nofollow'>Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014</a>
