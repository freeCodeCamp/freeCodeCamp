---
title: If in Go
localeTitle: 如果在Go
---
# 如果在Go

Go的`if`语句就像`for`循环一样;表达式不必被括号括起来 `(` `)`但是大括号`{` `}`是必需的。

```go
func sqrt(x float64) string { 
    if x < 0 { 
        return sqrt(-x) + "i" 
    } 
    return fmt.Sprint(math.Sqrt(x)) 
 } 
```

像`for`中， `if`语句可以用很短的语句中的条件之前执行启动。

声明声明的变量仅在范围内，直到`if`结束。

```go
func pow(x, n, lim float64) float64 { 
    if v := math.Pow(x, n); v < lim { 
        return v 
    } 
    return lim 
 } 
```

## 如果是，否则

在`if` short语句中声明的变量也可以在任何`else`块中使用。

```go
package main 
 
 import ( 
    "fmt" 
    "math" 
 ) 
 
 func pow(x, n, lim float64) float64 { 
    if v := math.Pow(x, n); v < lim { 
        return v 
    } else { 
        fmt.Printf("%g >= %g\n", v, lim) 
    } 
    // can't use v here, though 
    return lim 
 } 
 
 func main() { 
    fmt.Println( 
        pow(3, 2, 10), 
        pow(3, 3, 20), 
    ) 
 } 
```

运行上述程序会产生类似于以下输出的输出 - `$ go run if.go 27 >= 20 9 20`