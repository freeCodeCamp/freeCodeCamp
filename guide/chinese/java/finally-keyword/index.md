---
title: Finally
localeTitle: 最后
---
## 最后

当try块退出时，finally块总是执行。这确保即使发生意外异常也会执行finally块。但最终不仅仅是异常处理有用 - 它允许程序员避免因返回，继续或中断而意外绕过清理代码。将清理代码放在finally块中总是一种很好的做法，即使没有预期的例外情况也是如此。

**_例：_**

```java
try { 
   // Normal execution path 
   throw new EmptyStackException(); 
 } catch (ExampleException ee) { 
   //  deal with the ExampleException 
 } finally { 
   // This optional section is executed upon termination of any of the try or catch blocks above, 
   //  except when System.exit() is called in "try" or "catch" blocks; 
 } 

```