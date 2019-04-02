---
title: Timing Events
localeTitle: 时间事件
---
## 时间事件

程序员使用定时事件来延迟代码的执行或以指定的间隔重复代码。

JavaScript库中有两个用于完成这些任务的本机函数： `setTimeout()`和`setInterval()` 。

使用`setTimeout()`将传递函数的执行延迟指定的时间。您传递给`setTimeout()`参数有两个：您要调用的函数，以及以毫秒为单位的时间量。 （1秒内有1000毫秒（ms）。例如：5000毫秒= 5秒。） `setTimeout()`将在指定时间过后执行一次。

`setTimeout()`示例：

```javascript
var timeoutID; 
 
 function delayTimer() { 
  timeoutID = setTimeout(delayedFunction, 3000); 
 } 
 
 function delayedFunction() { 
  alert(“Three seconds have elapsed.”); 
 } 
```

当调用delayTimer函数时，它将运行setTimeout。经过3秒后，它将执行delayedFunction，它将发送警报。

使用`setInterval()`指定要在执行之间的时间延迟重复的函数。同样，两个参数传递给`setInterval()` ：您要调用的函数，以及以毫秒为单位的时间量。 `setInterval()`将继续执行，直到它被清除。

`setInterval()`示例：

```javascript
var intervalID; 
 
 function repeatEverySecond() { 
  intervalID = setInterval(sendMessage, 1000); 
 } 
 
 function sendMessage() { 
  console.log(“One second elapsed.”); 
 } 
```

当您的代码调用函数repeatEverySecond时，它将运行setInterval。 setInterval将每1000毫秒运行一次sendMessage函数。

还有相应的本机函数来停止计时事件： `clearTimeout()`和`clearInterval()` 。

您可能已经注意到每个计时器功能都保存到变量中。当set函数运行时，会为其分配一个保存到此变量的数字。生成的数字对于每个计时器实例都是唯一的。该分配的号码也是识别定时器停止的方式。因此，您必须始终将计时器设置为变量。

为了清楚你的代码，你应该总是将`clearTimeout()`与`setTimeout()`和`clearInterval()`匹配到`setInterval()` 。

要停止计时器，请调用相应的清除功能，并将与您要停止的计时器匹配的计时器ID变量传递给它。 `clearInterval()`和`clearTimeout()`的语法是相同的。

例：

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