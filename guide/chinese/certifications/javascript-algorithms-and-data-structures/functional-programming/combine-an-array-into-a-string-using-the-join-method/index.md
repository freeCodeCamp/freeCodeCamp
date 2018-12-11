---
title: Combine an Array into a String Using the join Method
localeTitle: 使用join方法将Array组合成String
---
## 使用join方法将Array组合成String

### 问题解释

使用`sentensify`函数内的`join`方法（以及其他方法）从字符串`str`的单词创建一个句子。该函数应返回一个字符串。例如，“我喜欢星球大战”将被转换为“我喜欢星球大战”。对于此挑战，请勿使用`replace`方法。

#### 相关链接：

*   [Array.prototype.join（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [String.prototype.split（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [常用表达](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### HINT1

您可能需要先将字符串转换为数组。

### 提示二

您可能需要使用正则表达式来拆分字符串。

### 解：

```javascript
function sentensify(str) { 
  // Add your code below this line 
  return str.split(/\W/).join(' '); 
  // Add your code above this line 
 } 
 sentensify("May-the-force-be-with-you"); 

```