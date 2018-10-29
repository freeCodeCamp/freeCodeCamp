---
title: Switch in Go
localeTitle: 切换到Go
---# 切换到Go

Go的switch语句是`if`的替代语句。它使用以下语法：

```go
fruit := "apple" 
 switch fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
```

该程序的输出将是`Red and round.` 。

首先，我们将变量`fruit`声明为`apple` 。然后我们使用`fruit`变量作为条件表达式。 Go将`fruit`的价值与提供的`cases`进行比较：

*   水果==“香蕉”（假）
*   水果==“苹果”（true）

注意`lemon`没有经过测试。评估返回true后，不再尝试任何案例。

与`if` ，您可以在switch的条件表达式中声明临时变量：

```go
switch fruit := "apple"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
```

变量`fruit`不会在switch语句之外访问。

## 默认和其他情况

### 默认

`default`关键字是没有其他情况返回true时的后备情况：

```go
switch fruit := "grape"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
    default: 
        fmt.Printf("New fruit: %s!", fruit) 
 } 
```

这个节目的输出将是`New fruit: grape!` 。

### 不同值的相同操作

以逗号分隔的值列表，用于将条件表达式值与相同的操作进行比较。

```go
switch fruit := "lemon"; fruit { 
    case "banana", "lemon": 
        fmt.Printf("Yellow fruit.") 
    default: 
        fmt.Printf("This fruit is a color different than yellow.") 
 } 
```

产量： `Yellow fruit.` 。

### 没有表达

没有表达式的`switch true`意味着`switch true` 。这是else-if链的替代版本。

```go
fruit := "banana" 
 switch { 
    case fruit == "banana": 
        fmt.Printf("Yellow and long.") 
    default: 
        fmt.Printf("This is not a banana.") 
 } 
```

这会计算`true == (fruit == "banana")` ，simpleiefied to `true == true` ，返回true。

### 打破

您可以在switch语句中中断代码以跳过任何更多代码。

```go
appleColor := "green" 
 switch fruit := "apple"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        if appleColor == "green" { 
            fmt.Printf("This apple is green!") 
            break 
        } 
        fmt.Printf("This apple is tasty!") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
```

输出： `This apple is green!` 。

### 下通

跳到下一个案例，其条件是否为真。

```go
switch fruit := "banana"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
        fallthrough 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
```

输出： `Yellow and long.`和`Red and round.` 。