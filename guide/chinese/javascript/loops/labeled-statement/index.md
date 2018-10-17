---
title: Labeled Statement
localeTitle: 标签声明
---
## 标签声明

**Labeled语句**与`break`和`continue`语句一起使用，用于标识`break`和`continue`语句适用的语句。

### 句法

\`\`\`\`javascript 标签： 声明
```
### Usage 
 Without the use of a `labeled` statement the `break` statement can only break out of a loop or a `switch` statement. Using a `labeled` statement allows `break` to jump out of any code block. 
 #### Example 
```

JavaScript的 foo：{ console.log（“This prints：”）; 打破foo; console.log（“这将永远不会打印。”）; } console.log（“因为执行跳转到这里！”） / \*输出 这打印： 因为执行跳到这里！ \* /
```
When used with a `continue` statement the `labeled` statement allows you to skip a loop iteration, the advantage comes from being able to jump out from an inner loop to an outer one when you have nested loop statements. Without the use of a `labeled` statement you could only jump out of the existing loop iteration to the `next iteration of the same loop.` 
 #### Example 
```

JavaScript的 //没有标记语句，当j == i时，内部循环跳转到下一次迭代 功能测试（） { for（var i = 0; i <3; i ++）{ console.log（“i =”+ i）; for（var j = 0; j <3; j ++）{ if（j === i）{ 继续; } console.log（“j =”+ j）; } } }

/ \*输出 i = 0（注意缺少j = 0） J = 1 J = 2 I = 1 j = 0（注意缺少j = 1） J = 2 I = 2 J = 0 j = 1（注意缺少j = 2） \* /

//使用带标签的语句我们可以跳转到外部（i）循环 功能测试（） { outer：for（var i = 0; i <3; i ++）{ console.log（“i =”+ i）; for（var j = 0; j <3; j ++）{ if（j === i）{ 继续外 } console.log（“j =”+ j）; } } }

/ \* i = 0（j仅在小于i时记录） I = 1 J = 0 I = 2 J = 0 J = 1 \* / \`\`\`

### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)