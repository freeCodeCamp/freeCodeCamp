---
title: Go Functions
localeTitle: 去功能
---
## 去功能

函数是在调用任务时执行任务的代码块，这样函数的名称就可以识别它并用于调用函数。

函数的声明以关键字`func`开头，后跟函数的名称，然后是函数的参数，最后是返回的值类型。声明将函数名称绑定到函数。请记住，类型位于参数和返回值中的变量名之后。函数声明的示例如下

```go
func add(a int, b int) int 
```

函数可以有0个或多个参数，具体取决于其所需的功能

```go
func zero() int { /* Function Definition */ } 
 func increment(x int) int { /* Function Definition */ } 
 func add(x, y int) int { /* Function Definition */ } 
```

Go支持返回多个值。下面的函数返回2个值：2个参数的总和，以及第一个和第二个参数之间的差异

```go
func addAndSubtract(x, y int) (int, int) { 
  return x + y, x - y 
 } 
 
 addAndSubtract(7, 4) // Returns 11, 3 
```

Go还支持命名返回的值

```go
func mulitplyByThreeAndDivideByFive(x int) (product int, quotient int) { 
    product = x * 3 
    quotient = x / 5 
    return 
 } 
 
 mulitplyByThreeAndDivideByFive(20) // Returns 60, 4 
```

#### 更多信息：

*   [围棋之旅](https://tour.golang.org/basics/4)
*   [以身作则](https://gobyexample.com/functions)
*   [Golang Book](https://www.golang-book.com/books/intro/7)
*   [Go编程语言规范](https://golang.org/ref/spec#Function_declarations)