---
title: Java Virtual Machine
localeTitle: Java虚拟机
---
# Java虚拟机（JVM）

Java属于称为[**Compiled Languages的**](https://en.wikipedia.org/wiki/Compiled_language)一系列[**语言**](https://en.wikipedia.org/wiki/Compiled_language) 。用这种语言编写的任何代码都需要转换（编译）为中间形式，然后主机平台（运行代码的OS /平台）可以理解这种形式。

对于Java，此中间形式称为**字节码** ，然后由称为Java虚拟机（JVM）的运行时解释。将[**JVM**](https://docs.oracle.com/javase/specs/jvms/se7/html/)视为一个能够完成运行Java代码的艰苦工作的软件。它负责内存分配，线程管理，垃圾收集等等。除了Java之外，它还支持（读取：能够运行）用Groovy，Scala等语言编写的代码。

在Java中，代码被编写并保存为`.java`文件。编译器（javac）对java文件进行操作，并生成等效的字节码（ `.class` ）文件。 `java`命令现在可以执行存储在`.class`文件中的字节码。稍后会详细介绍。

以下部分描述了Java中编码的一些基本构建块。