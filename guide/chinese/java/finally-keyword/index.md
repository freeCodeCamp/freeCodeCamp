---
title: Finally
localeTitle: 最后
---
## 最后

当try块退出时，finally块总是执行。这确保即使发生意外异常也会执行finally块。但最终不仅仅是异常处理有用 - 它允许程序员避免因返回，继续或中断而意外绕过清理代码。将清理代码放在finally块中总是一种很好的做法，即使没有预期的例外情况也是如此。

**_例：_**

```java
try { 
   // 正常代码执行
   throw new EmptyStackException(); 
 } catch (ExampleException ee) { 
   //  对 ExampleException 进行处理
 } finally { 
   // 这块不是必须有的，在以上try或catch执行完最后就会执行, 
   //  除非在"try" 或 "catch" 块有 System.exit(); 
 } 

```
