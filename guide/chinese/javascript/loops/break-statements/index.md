---
title: Break Statement
localeTitle: 休息声明
---
## 介绍

**break**语句终止当前循环， `switch`或`label`语句，并将程序控制转移到终止语句后面的语句。
```
break; 
```

如果在带标签的语句中使用**break**语句，则语法如下：
```
break labelName; 
```

## 例子

以下函数有一个**break**语句，当**i**为3时终止`while`循环，然后返回值**3 \* x** 。
```
function testBreak(x) { 
  var i = 0; 
 
  while (i < 6) { 
    if (i == 3) { 
      break; 
    } 
    i += 1; 
  } 
 
  return i * x; 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/C7VM/0)

在以下示例中，计数器设置为从1到99计数;但是， **break**语句在14次计数后终止循环。
```
for (var i = 1; i < 100; i++) { 
  if (i == 15) { 
    break; 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/C7VO/0)

## 其他资源：

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) | [MSDN链接](https://msdn.microsoft.com/en-us/library/3fhdxafb.aspx)