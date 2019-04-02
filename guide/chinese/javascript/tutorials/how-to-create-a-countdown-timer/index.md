---
title: How to Create a Countdown Timer
localeTitle: 如何创建倒数计时器
---
## 如何创建倒数计时器

### 创建

首先构建countdownTimer函数。

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

### 执行

现在，为了启动计时器，我们提供了`startCountdown()`其中一个数值作为参数，表示倒计时的秒数。

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

### 实例

[Codepen - 倒数计时器](https://codepen.io/rdev-rocks/pen/jLogxY?editors=0012)

### 更多资源

使用的方法：

*   [的setInterval（）](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
*   [clearInterval（）](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)