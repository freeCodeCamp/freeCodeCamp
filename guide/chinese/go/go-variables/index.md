---
title: Go Variables
localeTitle: 去变量
---
# Go中的变量声明

## 方法1：常规变量声明

常规变量声明通过将标识符与类型和初始值绑定来创建一个或多个变量。如果声明的变量没有类型，则该变量将赋予赋值中相应初始化值的类型。如果定义的变量没有初始值，则将变量初始化[为零值](https://golang.org/ref/spec#The_zero_value) 。

以下示例是go中的所有有效变量声明： “走吧 var x int = 1 var y int var z = 0 var a，b float32 = -1，-2
```
## Method 2: Short Variable Declarations 
 
 Shorthand variable declarations create variables with only an identifier and an initial value. The `var` keyword and types are not needed to declare a variable using shorthand syntax: 
```

走 x：= 1 text，err：= ioutil.ReadAll（读者） \`\`\`

简短变量声明可能仅出现在函数内部。在某些上下文中，例如`if` ， `for`或`switch`语句的初始化程序，它们可用于声明本地临时变量。

#### 更多信息：

*   [围棋之旅](https://tour.golang.org/basics/8)
*   [以身作则](https://gobyexample.com/variables)
*   [Golang Book](https://www.golang-book.com/books/intro/4)
*   [Go编程语言规范](https://golang.org/ref/spec#Variable_declarations)