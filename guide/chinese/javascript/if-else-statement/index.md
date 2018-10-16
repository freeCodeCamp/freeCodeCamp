---
title: If-Else Statement
localeTitle: If-Else声明
---
## 介绍

`if`指定的条件为`true` ， `if`语句执行语句。如果条件为`false` ，则可以使用`else`语句执行另一个语句。

**注意：** `else`语句是可选的。

```javascript
if (condition) 
    /* do something */ 
 else 
    /* do something else */ 
```

可以链接多个`if...else`语句来创建`else if`子句。这指定了要测试的新条件，并且可以重复测试多个条件，检查直到执行真实语句。

```javascript
if (condition1) 
    /* do something */ 
 else if (condition2) 
    /* do something else */ 
 else if (condition3) 
    /* do something else */ 
 else 
    /* final statement */ 
```

**注意：**如果要在`if` ， `else`或`else if`部分中执行多个语句， `if`语句周围需要花括号：

```javascript
if (condition) { 
    /* do */ 
    /* something */ 
    /* with multiple statements */ 
 } else { 
    /* do something */ 
    /* else */ 
 } 
```

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else) | [MSDN链接](https://msdn.microsoft.com/en-us/library/85yyde5c.aspx)

## 例子

**使用** `if...else` ：

```javascript
    // If x=5 z=7 and q=42. If x is not 5 then z=19. 
    if (x == 5) { 
      z = 7; 
      q = 42 
    else 
      z = 19; 
```

**使用** `else if` ：

```javascript
if (x < 10) 
    return "Small number"; 
 else if (x < 50) 
    return "Medium number"; 
 else if (x < 100) 
    return "Large number"; 
 else { 
    flag = 1; 
    return "Invalid number"; 
 } 

```