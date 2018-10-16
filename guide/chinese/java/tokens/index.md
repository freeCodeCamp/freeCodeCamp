---
title: tokens
localeTitle: 令牌
---
# Java中的标记

这些是程序的基本构建块或程序的最小单元。 Java支持五种类型的令牌：

## 1.关键词

这些是在编译器中具有预定义定义的单词，不能用作标识符的名称。在Java中有51个关键字和2个保留字。

## 2.标识符

这些是给予程序的不同组件的各种名称。这些包括变量，方法，类等的名称。它们不能以数字开头，但可以包含数字，字母，下划线，货币符号。

## 3.文学

这些提供了一种在程序中表达特定值的方法。这些是以下类型：

### 数字文字

这些在Java中有三种类型。

*   ####整数文字
*   ####浮点文字
*   ####字符文字

### 布尔文字

这些有两种类型

*   \#### true
*   \#### false

### 字符串文字

## 4.运营商

这些是用于执行某些操作的特殊符号类型。例如+， - ，\*，/，％

## 5.分离器

这些包括选项卡，输入，空格键。

##### 现在让我们考虑一个程序

```java
       //Printing Hello World 
 
 public class Hello 
 
 { 
 
 public static void main(String args[]) 
 
 { 
 
 System.out.println(“Hello World”); 
 
 } 
 
 } 
```

源代码包含标记，例如_public_ ， _class_ ， _Hello_ ，{， _public_ ， _static_ ， _void_ ， _main_ ，（， _String_ ，\[\]， _args_ ，{， _System_ ， _out_ ， _println_ ，（， _“Hello World”_ ，}，}生成的标记·编译成Java字节码，能够在解释的java环境中运行。令牌对于编译器检测错误很有用。当令牌没有按特定顺序排列时，编译器会生成错误消息。