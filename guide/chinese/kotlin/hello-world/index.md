---
title: Hello World in Kotlin
localeTitle: Kotlin的Hello World
---
Hello World程序是一个非常简单的程序，它输出字符串“Hello World！”。它通常用于显示编程语言的基本语法。

在本教程中，我们将分析用Kotlin编写的Hello World程序的语法。

如果您还没有安装Kotlin，请查看本教程：https：//guide.freecodecamp.org/kotlin

## 你好世界计划

```kotlin
// This is a simple Hello World program written in Kotlin 
 
 fun main(args : Array<String>) { 
    println("Hello, World!") 
 } 
```

正如您所料，当您运行此程序时，输出应为“Hello，World！”。

## 句法

### 注释
```
// This is a simple Hello World program written in Kotlin 
```

注释是由开发人员编写的文本，其目的是使代码更容易被其他开发人员理解。 在Kotlin中，注释可以是单行注释（使用//）或多行注释（使用/ \*\* /）。
```
// Single line comment 
 
 /* This is a 
 Multi-line comment 
 */ 
```

### 主功能

```kotlin
fun main(args : Array<String>) {...} 
```

main函数是一个强制函数，它告诉编译器它应该从哪里开始执行我们的代码。它将一个字符串数组作为参数，并返回类型Unit，它对应于Java等语言中的`void`类型。 正如我们所看到的，函数是使用关键字`fun` ，其主体应该用花括号括起来。

没有显式声明的返回类型的函数将返回`Unit`类型，因此，上面的代码相当于

```kotlin
fun main(args : Array<String>): Unit {...} 
```

### 打印声明

println函数将字符串作为参数并将其打印到屏幕上。在这种情况下，我们打印字符串“Hello，World！”。请注意，字符串文字使用双引号`"String"` 。

如果您想了解更多关于Kotlin语法的知识并开始撰写精彩的程序，您应该查看非常棒的Kotlin官方文档：https：//kotlinlang.org/docs/reference/

希望你喜欢这个教程， 干杯