---
title: Finally
localeTitle: в заключение
---
## в конце концов

Блок finally всегда выполняется, когда блок try завершается. Это гарантирует, что блок finally будет выполнен, даже если произойдет непредвиденное исключение. Но, наконец, полезно не только для обработки исключений - это позволяет программисту избежать случайного обхода кода очистки путем возврата, продолжения или разрыва. Включение кода очистки в блок finally всегда является хорошей практикой, даже если не ожидается никаких исключений.

**_Пример:_**

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