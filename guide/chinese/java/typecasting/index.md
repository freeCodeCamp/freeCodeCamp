---
title: Typecasting
localeTitle: 类型转换
---
## 类型转换

将一种数据类型转换为另一种数据类型称为类型转换。由于Java是一种面向对象的编程语言并且支持**继承**和**多态** ，超类的引用变量很容易传递给子类对象。

当我们将一种数据类型的赋予另一种数据类型时，这两种类型可能彼此不兼容。如果数据类型兼容，那么JVM将自动执行转换，如果不兼容，则需要强制转换。

### 类型转换

Java，类型转换分为两种类型。

**_1.隐式类型转换_** 两种类型兼容时会发生自动类型转换如果目标类型大于源类型（或者比原类型更精确）。 例如。 \`\`\`java int i = 100; long l = i; //不需要显式类型转换 float f = l; //不需要显式类型转换
```
***2.  Explicit Typecasting*** 
 When we assign a larger type value to a variable of smaller type, then we need to perform explicit type casting. 
 eg. 
```
**2.强制类型转换** 如果我们想将精确度更高的变量赋值给精确度更低的类型， 那么我们需要进行强制转换。

java的 double d = 100.04; long l =（long）d; //需要强制类型转换 int i =（int）l; //需要强制类型转换 \`\`\`

#### 更多信息：

*   [Oracle Java Docs：Typecasting](https://docs.oracle.com/javase/specs/jls/se7/html/jls-5.html)
