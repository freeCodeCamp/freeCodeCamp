---
title: Typecasting
localeTitle: 铸字
---## 铸字

将一种数据类型转换为另一种数据类型称为类型转换。以来 Java是一种面向对象的编程语言，支持**继承**和**多态** ，超类引用变量很容易指向subClass对象。

当我们将一种数据类型的值分配给另一种数据类型时，这两种类型可能彼此不兼容。如果数据类型兼容，那么JVM将自动执行称为自动类型转换的转换，如果不兼容，则需要显式转换或转换它们。

### 类型转换

Java，类型转换分为两种类型。

**_1.隐式类型转换_** 这里，当两种类型兼容时，会发生自动类型转换 目标类型大于源类型。 例如。 \`\`\`java int i = 100; 长l = i; //不需要显式类型转换 float f = l; //不需要显式类型转换
```
***2.  Explicit Typecasting*** 
 When we assign a larger type value to a variable of smaller type, then we need to perform explicit type casting. 
 eg. 
```

java的 双d = 100.04; long l =（long）d; //需要显式类型转换 int i =（int）l; //需要显式类型转换 \`\`\`

#### 更多信息：

*   [Oracle Java Docs：Typecasting](https://docs.oracle.com/javase/specs/jls/se7/html/jls-5.html)