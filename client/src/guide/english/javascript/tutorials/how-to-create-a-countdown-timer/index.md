---
title: How to Create a Countdown Timer
---
## How to Create a Countdown Timer

### Creation
Start by building the countdownTimer function.

```javascript
function startCountdown(seconds){
  var counter = seconds;

  var interval = setInterval(() => {
    console.log(counter);
    counter--;
    

    if(counter < 0 ){
      
      // The code here will run when
      // the timer has reached zero.
      
      clearInterval(interval);
      console.log('Ding!');
    };
  }, 1000);
};
```

### Execution
Now to start the timer we provide `startCountdown()` with a number value as an argument which represents the seconds to countdown.

```javascript
  startCountdown(10);
  // Console Output // 
  // 10
  // 9
  // 8
  // 7
  // 6
  // 5
  // 4
  // 3
  // 2
  // 1
  // 0 
  // Ding!
```

### Live Example
<a href='https://codepen.io/rdev-rocks/pen/jLogxY?editors=0012' target='_blank' rel='nofollow'>Codepen - Countdown Timer</a>

### More Resources
Methods used:
* <a href='https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval' target='_blank' rel='nofollow'>setInterval()</a>
* <a href='https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval' target='_blank' rel='nofollow'>clearInterval()</a>

