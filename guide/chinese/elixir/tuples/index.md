---
title: Tuples
localeTitle: 元组
---
## 元组

在Elixir中，元组是一种数据结构，可以保存任何值或混合类型。元组由花括号定义，它们的索引从0开始。因为元组在内存中连续存储，所以从它们获取数据是一个非常快速的操作。

```elixir
iex> tuple = {:atom, "string"} 
 {:atom, "string"} 
 iex> elem(tuple, 0) 
 :atom 
```

## 不变性

Elixir中的元组是不可变的，因此进行修改将返回一个全新的元组 - 将原始内容保存在内存中。

```elixir
iex> tuple = {:atom, "string"} 
 {:atom, "string"} 
 iex> put_elem(tuple, 1, true) 
 {:atom, true} 
 iex> tuple 
 {:atom, "string"} 
```

## 模式匹配

Elixir中元组的最常见用法是作为函数的返回。例如： `{:ok, "Hello World\n"}` 这是非常有用的，因为它允许使用模式匹配来处理这些返回。

#### 更多信息：

*   [elixir-lang.org |递归](https://elixir-lang.org/getting-started/basic-types.html#tuples)
*   [hexdocs |枚举](https://hexdocs.pm/elixir/Tuple.html)