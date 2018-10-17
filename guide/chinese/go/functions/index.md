---
title: Go Functions
localeTitle: 去功能
---
## 去功能

函数接受任何类型的零个或多个参数，对它们执行某些逻辑并可能返回一个或多个值。 Golang的函数语法是：

```go
func sum(parameter1 int64, parameter2 int64) int64 { 
  return parameter1+parameter2 
 } 
```

这里，函数的名称是`add` 。它采用`int64`类型的参数， `parameter1`和`parameter2` 并返回另一个int64，这两个参数的总和。

### 返回

`return`后，函数退出而不执行更多代码。

```go
func sum(parameter1 int64, parameter2 int64) int64 { 
  return parameter1+parameter2 
  // Unreachable code 
  fmt.Printf("Don't print me") 
 } 
```

### 调用一个函数

上面的函数将被调用如下：

```go
sum(4, 5) 
```

该表达式的值为9。

### 省略参数类型

如果两个或更多个连续参数是相同类型，则可以仅说明一次。

```go
function foo(x, y, z int64, name string) { 
  fmt.Printf("%d %d %d %s", x, y, z, name) 
 } 
```

这里`x` ， `y`和`z`的类型是`int64` ， `name`是一个字符串。

### 返回多个值

函数可以返回零个或多个值。 要什么都不返回，省略返回类型：

```go
function helloWorld() { 
  fmt.Printf("Hello world!") 
 } 
```

要返回一个值，请指定其类型：

```go
function getHelloWorld() string { 
  return "Hello world!" 
 } 
```

要返回多个值，请指定其类型，包装在`()`并用逗号分隔：

```go
function getHelloWorldAndBestLanguage() (string, string) { 
  return "Hello world!", "Golang" 
 } 
```

要接收这些值，只需声明用逗号分隔的变量，如下所示：

```go
helloWorld, bestLanguage := getHelloWorldAndBestLanguage() 
 // helloWorld == "Hello world!" 
 // bestLanguage == "Golang" 
```

### 裸体回报

您可以命名返回类型，以便不需要将变量传递给return语句：

```go
func duplicate(s string) (first, second string) { 
  first = s 
  last = s 
    return 
 } 
 
 func main() { 
    fmt.Println(split("Hello world!")) // ("Hello world!", "Hello world!") 
 } 
```

#### 更多信息：

https://tour.golang.org/basics/4