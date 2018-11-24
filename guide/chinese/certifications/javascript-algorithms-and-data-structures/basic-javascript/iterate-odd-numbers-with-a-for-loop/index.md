---
title: Iterate Odd Numbers With a For Loop
localeTitle: 使用For循环迭代奇数
---
## 使用For循环迭代奇数

这是一个例子：

```javascript
var ourArray = []; 
 
 for (var i = 0; i < 10; i += 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
```

这是一个解决方案： 字符串后`// Only change code below this line.`我们添加`for`循环。你需要从顶部复制循环：

`javascript for (var i = 0; i < 10; i += 2) { ourArray.push(i); }` 而改变`initialization` `var i = 0`至`var i = 1` ，也需要更改数组名`ourArray`到`myArray` ：

`javascript for (var i = 1; i < 10; i += 2) { myArray.push(i); }`

这是一个完整的解决方案：

\`\`\`的JavaScript var ourArray = \[\];

for（var i = 0; i <10; i + = 2）{ ourArray.push（ⅰ）; }

// 建立 var myArray = \[\];

//只更改此行下方的代码。

for（var i = 1; i <10; i + = 2）{ myArray.push（ⅰ）; } \`\`\`