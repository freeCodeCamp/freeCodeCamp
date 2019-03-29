---
title: Exceptions in Java
localeTitle: Java中的例外情况
---
## 什么是例外？

异常是一个不需要的或意外的事件，它发生在程序执行期间，即在运行时，会破坏程序指令的正常流程。

## 错误与异常

错误：错误表示合理的应用程序不应该尝试捕获的严重问题。 例外：异常表示合理的应用程序可能尝试捕获的条件。

## 异常层次结构

所有异常和错误类型都是Throwable类的子类，它是层次结构的基类。一个分支以Exception为首。此类用于用户程序应捕获的异常条件。 NullPointerException是此类异常的示例。另一个分支，Java运行时系统（JVM）使用Error来指示与运行时环境本身（JRE）有关的错误。 StackOverflowError是此类错误的一个示例。

## 如何使用try-catch子句
```
try { 
 // block of code to monitor for errors 
 // the code you think can raise an exception 
 } 
 catch (ExceptionType1 exOb) { 
 // exception handler for ExceptionType1 
 } 
 catch (ExceptionType2 exOb) { 
 // exception handler for ExceptionType2 
 } 
 // optional 
 finally { 
 // block of code to be executed after try block ends 
 } 

```