---
title: Loops
localeTitle: 循环
---
# 对于Go中的循环

Go只`for`循环。基本`for`循环有三个组件分隔`;` -

*   **init**语句：在第一次迭代之前执行
    
*   **条件**表达式：在每次迭代之前计算
    
*   **post**语句：在每次迭代结束时执行
    

**init**语句通常是一个简短的变量声明。在那里声明的变量只在`for`语句的范围内可见。一旦布尔条件求值为false，循环就会停止迭代。

`for`循环的一个例子如下 -

**放弃**

```go
package main 
 
 import "fmt" 
 
 func main() { 
    sum := 0 
    for i := 0; i <= 10; i++ { 
        sum += i 
    } 
    fmt.Println("The sum of first 10 natural numbers is", sum) 
 } 
```

运行上述程序会产生类似于以下输出的输出 - \`\`\`  
$ go run for.go 前10个自然数之和为55
```
You can use `continue` and `break` to adjust the loops flow 
```

走 //此代码打印最多5个奇数 对于n：= 0; n <= 10; n ++ { 如果n％2 == 0 { //如果数字甚至跳到下一个n 继续 } fmt.Println（n）的 //如果数字是5，则退出循环 如果n == 5 { 打破 } }
```
If you want to create an infinite loop just use `for { }` 
```

走 for { // Whill循环直到条件破坏循环 break //退出循环 }
```
## Replacement for while-loop 
 To simulate while-loop of other languages, you can simply exclude the **init** and **post** statement: 
```

走 func main（）{ num：= 1 for num <= 1000 { num \* = 2 } fmt.Println（“1000以上2的最小功率”，num） } \`\`\`