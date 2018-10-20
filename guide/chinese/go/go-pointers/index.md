---
title: Go Pointers
localeTitle: 去指针
---
## 去指针

这是一个存根。 [帮助我们的社区扩展它](https://github.com/freecodecamp/guides/tree/master/src/pages/go/go-pointers/index.md) 。

[这种快速风格指南有助于确保您的拉取请求被接受](https://github.com/freecodecamp/guides/blob/master/README.md) 。

指针

Go有指针。指针保存值的内存地址。

类型\* T是指向T值的指针。它的零值是零。

var p \* int

＆运算符生成指向其操作数的指针。

我：= 42 p =＆i

\*运算符表示指针的基础值。

fmt.Println（\* p）//通过指针p读取i \* p = 21 //通过指针p设置i

这被称为“解除引用”或“间接”。

与C不同，Go没有指针算术。

#### 更多信息：

*   [围棋之旅](https://tour.golang.org/moretypes/1)
*   [以身作则](https://gobyexample.com/pointers)
*   [Golang Book](https://www.golang-book.com/books/intro/8)
*   [Go编程语言规范](https://golang.org/ref/spec#Address_operators)