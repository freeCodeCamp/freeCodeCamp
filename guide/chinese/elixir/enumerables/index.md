---
title: Enumerables
localeTitle: 枚举
---
## 可枚举（枚举）

在面向对象的编程语言中，你将使用“循环”在Elixir上对一段数据执行相同的操作，因为变量是不可变的，它不可能创建一个传统循环，而是Elixir和其他函数式编程语言依靠递归。使用递归，您将对列表中的每个项目执行相同的操作，而无需变更变量。 Elixir内置的Enum库使这很容易。

## 例

使用`Enum.map`您可以运行匿名函数（不在模块内部的函数）传递列表中的每个项目。这完成了与传统循环相同的任务，而无需改变累加器变量。

```elixir
iex> Enum.map([1, 2, 3], fn(x) -> x * 2 end) 
 [2, 4, 6] 
```

## 枚举模块中的方法

Enum模块有超过70种不同的功能可用于Enumerables，在这里列出它们将需要几页。相反，让我们看一下Enum模块中最常用的功能。

### Enum.map

`Enum.map`在列表上运行匿名或捕获的函数。

```elixir
iex> Enum.map([5, 10, 15, 20], fn(x) -> x * 2 end) 
 [10, 20, 30, 40] 
```

#### 更多信息：

*   [elixir-lang.org |递归](https://elixir-lang.org/getting-started/enumerables-and-streams.html)
*   [hexdocs |枚举](https://hexdocs.pm/elixir/Enum.html)