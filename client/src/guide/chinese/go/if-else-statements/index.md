---
title: if else Statements
localeTitle: 如果是其他声明
---## 介绍

`if`指定的条件为**true** ， `if`语句执行语句。如果条件为**false** ，则可以使用`else`语句执行另一个语句。

**注意：** `else`语句是可选的。

```Go
  x := 7 
  if x%2 == 0 { 
    // This statement is executed if x is even 
  } else { 
    // This statement is executed if x is odd 
  } 
```

可以嵌套多个`if...else`语句来创建`else if`子句。

```go
  x := 7 
  if x == 2 { 
    // this statement is executed if x is 2 
  } else if x == 4 { 
    // this statement is executed if x is 4 
  } else if x == 7 { 
    // this statement is executed if x is 7 
  } else { 
    // this statement is executed if none of the aboves is true 
  } 
```

在Go中，您可以在`if`条件之前加上语句。然后，包含的变量定义对完整的`if`块有效。

```go
  if x := 3; x == 2 { 
    // this statement is executed if x is 2 
  } else if x == 3 { 
    // this statement is executed if x is 3 
  } else { 
    // this statement is executed if none of the aboves is true 
  } 

```