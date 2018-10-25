---
title: Output 
localeTitle: 产量
---
## 产量

您可以通过控制台输出数据的最常用方法有4种。这些将在您的开发过程的大部分时间使用。

#### `console.log`

它是输出数据的最常用和最常用的方式。通常的做法是在语句之​​间插入其中的几个来理解数据的流动和处理方式。此外，您可以在devtools中使用`debugger`或断点来执行相同操作，而不会污染您的代码。

```javascript
var numbers  = [ 1, 2, 3, 4, 5, 6, 7]; 
 numbers.forEach(function(number){ 
  console.log(number + ' is divisible by 2', number%2 == 0); 
 }); 
```

#### `console.warn`

正如您所猜测的那样，它用于显示警告，并且它的典型黄色区别于错误红色和`console.log` 。

```javascript
function isAdult(age){ 
  if(Number(age) < 18){ 
    console.warn('You are not an adult'); 
    return false; 
   } 
   return true; 
 } 
```

#### `console.error`

您可以猜测，这是在抛出异常或在代码中出错时使用的。为您提供红色错误消息以快速引起注意。

#### `console.table`

假设你有一个json对象中的项目或电影列表，并且你想以表格格式检查出来，那么`console.table`是你最好的选择。它会自动检测数据中的行和列标题。

_尝试在控制台中运行以下代码_

```javascript
var data = { 
  "colors": [ 
    { 
      "color": "black", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,255,255,1], 
      "hex": "#000" 
    }, 
    { 
      "color": "white", 
      "category": "value", 
      "rgba": [0,0,0,1], 
      "hex": "#FFF" 
    }, 
    { 
      "color": "red", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,0,0,1], 
      "hex": "#FF0" 
    }, 
    { 
      "color": "blue", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [0,0,255,1], 
      "hex": "#00F" 
    }, 
    { 
      "color": "yellow", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,255,0,1], 
      "hex": "#FF0" 
    }, 
    { 
      "color": "green", 
      "category": "hue", 
      "type": "secondary", 
      "rgba": [0,255,0,1], 
      "hex": "#0F0" 
 
    }, 
  ] 
 } 
 
 console.table(data.colors); 
```

此外，您可以控制和过滤您希望在控制台中看到的输出类型。

1.  所有
2.  详细
3.  警告
4.  错误

#### 更多信息：

*   [Google完整引用控制台对象](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)
*   [控制台MDN](https://developer.mozilla.org/en-US/docs/Web/API/Console)