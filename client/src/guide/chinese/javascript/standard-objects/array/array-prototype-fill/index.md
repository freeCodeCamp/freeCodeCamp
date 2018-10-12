---
title: Array.prototype.fill
localeTitle: Array.prototype.fill
---
## Array.prototype.fill

fill（）方法使用静态值填充数组中的所有元素。

句法：

\`\`\`\`javascript arr.fill（值） arr.fill（值，开始） arr.fill（值，开始，结束）
```
The fill method takes up to three arguments value, start and end. The start and end arguments are optional with default values of 0 and the length of the this object. 
 
 The fill method is a mutable method, it will change this object itself, and return it, not just return a copy of it. 
 
 ## Examples 
```

JavaScript的 \[1,2,3\] .fill（4）; // \[4,4,4\] \[1,2,3\] .fill（4,1​​）; // \[1,4,4\]

var fruits = \[“Grape”，“Pear”，“Apple”，“Strawberry”\]; fruits.fill（“西瓜”，2,4）; //香蕉，梨，西瓜，西瓜 \`\`\`

#### 更多信息：

有关更多信息，请访问[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)