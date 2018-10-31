---
title: Variadic Functions
localeTitle: 变量函数
---
## 变量函数

可变参数函数是可以使用任意数量的尾随参数调用的函数。

当我们处理网络应用时，这是一个有用的功能。

有时我们不需要将多少元素传递给HTML模板引擎。

以下是有关varidic函数如何工作的基础知识：

```go
package main 
 import "fmt" 
 
 func printFruits(fruits ...string) { 
    for _, fruit := range fruits{ 
        fmt.Println(fruit) 
    } 
 } 
 
 func main() { 
   printFruits("apple", "bannana") 
   printFruits("papaya", "coconut", "pear", "pineapple") 
   berries := []string{"blueberry", "strawberry", "raspberry"} 
   printFruits(berries...) 
 } 
```

首先，在printFruits中，我们用\[... string\]定义了参数个数。

这告诉Go这个函数接受任意数量的字符串参数。

对printFruits的前两次调用显示该函数将打印每个字符串，即使我们传递的是不同数量的参数。

```text
apple 
 bannana 
 ... 
 papaya 
 coconut 
 pear 
 ... 
```

这也适用于切片。

要使用带切片的vardiac函数，我们将训练点添加到调用中。

```go
printFruits(berries...) 
```

```text
blueberry 
 strawberry 
 raspberry 

```