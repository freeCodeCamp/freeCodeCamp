---
title: instanceof Operator
localeTitle: instanceof运算符
---
# `instanceof`运算符

`instanceof`运算符允许您检查`IS A`关系的有效性。如果在任何时候，我们不确定这一点，并且我们想在运行时验证这一点，我们可以执行以下操作：

```java
//assuming vehicle is an instance of Class `Car` the expression inside the 'if' will  return true 
 if(vehicle instanceof Car){ 
    //do something if vehicle is a Car 
 } 
```

**注意** ：如果将instanceof运算符应用于具有null值的任何变量，则返回false。