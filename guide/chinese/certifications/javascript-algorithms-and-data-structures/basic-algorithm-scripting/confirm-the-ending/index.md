---
title: Confirm the Ending
localeTitle: 确认结束
---
## 确认结束

# 🌻中间代码解决方案：

（声明方法）

```javascript
function confirmEnding(str, target) { 
  // "Never give up and good luck will find you." 
  // -- Falcor 
 
  return str.slice(str.length - target.length) === target; 
 } 
 
 confirmEnding("He has to give me a new name", "name"); 
```

#### 🚀 [运行代码](https://repl.it/repls/SardonicRoundAfkgaming)

# 代码说明：

*   首先我们使用`slice`方法复制字符串。
*   为了使`str`的最后一个字符等于`target`的长度，我们使用`slice`方法。
*   `slice`方法内的第一个参数是起始索引，第二个参数是结束索引。
*   例如`str.slice(10, 17)`会返回`give me` 。
*   在这种情况下，我们只包含一个参数，它将复制起始索引中的所有内容。
*   我们减去`str`的长度和`target`的长度，这样，我们将得到相当于`target`长度的最后剩余字符。
*   最后，我们将切片的返回结果与`target`进行比较，并检查它们是否具有相同的字符。

### 相关链接

*   [String.prototype.slice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)