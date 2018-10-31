---
title: Continue Statement
localeTitle: 继续声明
---
## 介绍

**continue**语句终止当前或标记循环的当前迭代中的语句的执行，并继续执行下一次迭代的循环。
```
continue; 
```

如果在带标签的语句中使用**continue**语句，则语法如下：
```
continue labelName; 
```

与**break**语句相反， **continue**不会完全终止循环的执行;代替：

*   在`while`循环中，它会跳回到条件。
*   在`for`循环中，它跳转到更新表达式。

## 例子

以下示例显示了一个`while`循环，该循环具有一个**continue**语句，该语句在**i的**值为3时执行。因此， **n**取值为1,3,7和12。
```
var i = 0; 
 var n = 0; 
 
 while (i < 5) { 
  i++; 
 
  if (i === 3) { 
    continue; 
  } 
 
  n += i; 
  console.log (n); 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/C7hx/0)

在下面的示例中，循环从1到9迭代。由于将**continue**语句与表达式`(i < 5)`一起使用，因此跳过了**continue**和`for` body结尾之间的语句。
```
for (var i = 1; i < 10; i++) { 
    if (i < 5) { 
        continue; 
    } 
    console.log (i); 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/C7hs/0)

## 其他资源

*   [MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
*   [MSDN链接](https://msdn.microsoft.com/en-us/library/8de3fkc8.aspx)