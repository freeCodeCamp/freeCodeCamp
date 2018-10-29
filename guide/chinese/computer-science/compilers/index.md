---
title: Compilers
localeTitle: 编译器
---
## 编译器

### 程序设计

从本质上讲，准系统计算机（也称为存储程序计算机）只不过是一台知道如何读取固定指令集中写入的步骤并执行相同步骤的机器。计算机理解的指令集非常具体。这也称为机器语言（ **操作码** ）。机器语言通常称为二进制代码。

人类使用**程序**与计算机交互。程序只是提供给计算机的一系列操作码以及执行操作码所必需的数据。

例如，
```
ADD 10, 20  // ADD is the Opcode 
            // and 10, 20 are the two operands(data) 
            // needed for the ADD instruction to be executed successfully 
```

人类开发解决复杂问题的方案。看一下简单的操作码是多么简单，如果我们尝试单独使用操作码开发程序，那么调试起来会非常麻烦和困难。为了解决这个问题，开发了高级语言，如C / C ++，Python，Java，Javascript等。

现在，高级语言不适合计算机执行。因此，需要一种能够消化高级语言程序并将它们转换成适合于由计算机执行的机器语言指令的翻译器。

#### \[人们\] - > \[高级语言程序\] - > \[翻译\] - > \[机器语言\] - > \[计算机\]

**编译器**是一种翻译程序，它将高级语言翻译成二进制代码，这只不过是1和0。运行源代码时，编译器首先转换所有代码，然后生成二进制代码。然后计算机获取二进制代码并运行它。

如果源代码中存在错误，编译器将检测并标记它们。这将停止编译过程。一旦修复了所有错误，编译器就会转换代码并生成可执行程序。

## 编译器的一部分

大多数编译器分为三个主要阶段：解析，转换和代码生成

1.  _解析_是将原始代码转换为更抽象的代码表示。
2.  _转换_采用这种抽象表示和操作来执行编译器想要的任何操作。
3.  _代码生成_采用_代码_的变换表示并将其转换为新代码。

#### 解析

解析通常分为两个阶段： **词法分析**和**句法分析** 。

_词法分析_采用原始代码并通过称为标记器（或词法分析器）的东西将它分成这些称为标记的东西。
```
Tokens are an array of tiny little objects that describe an isolated piece of the syntax. 
 They could be numbers, labels, punctuation, operators, etc. 
```

_语法分析_获取标记并将它们重新格式化为描述语法各部分的表示形式 和他们彼此的关系。这称为中间表示或抽象语法树。
```
An Abstract Syntax Tree, or AST for short, is a deeply nested object. 
 It represents code in a way that is both easy to work with and tells us a lot of information. 
```

#### 转型

编译器的下一个阶段是转换。同样，这只是从最后一步获取AST并对其进行更改。 它可以用同一种语言操作AST，也可以将其翻译成全新的语言。

#### 代码生成

编译器的最后阶段是代码生成。有时编译器会做与转换重叠的事情，但是大多数代码生成只需要AST并将其转换为二进制代码。

所有编译器都需要执行这些步骤。大多数现代编译器还执行其他步骤，例如检查类型错误和优化生成的编译代码。

#### 更多信息：

[Matt Adesanya的“A Gentler Programming to Programming”](https://medium.freecodecamp.org/a-gentler-introduction-to-programming-707453a79ee8)涵盖了编译器与解释器以及其他基本编程概念。