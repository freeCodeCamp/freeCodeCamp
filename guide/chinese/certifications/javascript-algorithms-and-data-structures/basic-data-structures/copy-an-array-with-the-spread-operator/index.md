---
title: Copy an Array with the Spread Operator
localeTitle: 使用Spread Operator复制数组
---
## 使用Spread Operator复制数组

*   示例中的最后一个提示告诉您使用最近学习的方法。
*   spread运算符将所有元素复制到一个新的空对象中。

\`\`\`的JavaScript while（num> = 1）{ newArr = \[... arr\] num--; }
```
- The code above will copy all of the elements into `newArr` but will also reinitialise `newArr` with every new iteration of the while loop. 
 - A new variable should first be initialised using the spread operator - `let obj = [...arr];` - then this variable should be added to the `newArr` for every iteration of the while loop. 
 
 ## Solution: 
```

JavaScript的 function copyMachine（arr，num）{ 让newArr = \[\]; while（num> = 1）{ //更改此行下方的代码 newArr.push（\[... ARR\]）; //更改此行以上的代码 num--; } 返回newArr; }

//在此处更改代码以测试不同的情况： console.log（copyMachine（\[true，false，true\]，2））; \`\`\`