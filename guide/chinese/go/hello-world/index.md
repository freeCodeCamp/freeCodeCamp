---
title: Hello World in Go
localeTitle: Go中的Hello World
---
要在计算机中安装Go，请从[此处](https://golang.org/dl/)下载其安装程序，然后按照这些[安装说明进行安装](https://golang.org/doc/install) 。

## First Go计划

创建一个名为`main.go`的文件，并在其中添加以下代码： -

```go
package main // Package declaration 
 
 import "fmt" // Importing packages 
 
 // Function declaration 
 func main() { 
    fmt.Println("Hello, World!") 
 } 
```

现在，从终端/命令行运行上述程序。为此，请打开终端/命令行并移至`main.go`所在的目录。首先编译程序并运行`go build main.go`然后运行命令`go run main.go`来运行程序。 您应该看到类似于以下输出的ouptut： -
```
$ go build main.go 
 $ go run main.go 
 Hello, World! 
```

## 分析

### 包裹声明

```go
package main 
```

在go中，每个程序都与“包”或相关程序的集合相关联。一个值得注意的例外是特殊包“main”，它向go complier指示它应该运行以下程序。

### 进口
```
import “fmt” 
```

如果要使用其他包中的函数，则需要导入它们。 go维护者开发了一些软件包（称为“标准库”），可以在https://golang.org/pkg/找到。在这种情况下，我们需要打印语句的“fmt”包（如下所示）。

### 功能声明

```go
func main() { 
 } 
```

功能是任何程序的核心。它们可以有参数和返回值，但`main`函数不会执行这些操作。它充当“入口点”，或者首先运行您的程序。我们希望打印Hello World程序，因此我们希望将代码放在此处。

### 打印声明

```go
fmt.Println("Hello, world!") 
```

Go不需要在行尾添加分号，因为编译器会自动添加分号。包`fmt` （我们在上面导入！）具有`Println`函数，我们使用它调用`.`句法。我们将参数传递给parens之间的函数。在这种情况下，参数是我们要打印的字符串（ `"Hello, world!"` ）。请注意，字符串本身用引号括起来。

既然您已经拥有了必要的工具，那么就去制作自己的Go程序吧！最好的学习方法是尝试。如果您需要帮助，请尝试优秀的文档：https：//golang.org/doc/