---
title: Lists
localeTitle: 清单
---
## 清单

在Elixir中，列表是由方括号内的值组成的数据结构。列表中的值可以是任何类型。

```elixir
iex> [1, "string", true] 
 [1, "string", true] 
```

## 不变性

Elixir中的数据结构是不可变的，因此在List上执行的任何操作都将返回一个新列表，保留原始列表。

```elixir
iex> list = [1, "string", true] 
 [1, "string", true] 
 iex> list ++ [2] 
 [1, "string", true, 2] 
 iex> list 
 [1, "string", true] 
```

## 头和尾

可以使用`hd/1`和`tl/1`运算符轻松访问列表的头部（第一个元素）和尾部（剩余值）。

```elixir
iex> list = [1, "string", true] 
 iex> hd(list) 
 1 
 iex> tl(list) 
 ["string", true] 
```

#### 更多信息：

*   [elixir-lang.org |递归](https://elixir-lang.org/getting-started/basic-types.html#linked-lists)
*   [hexdocs |枚举](https://hexdocs.pm/elixir/List.html)