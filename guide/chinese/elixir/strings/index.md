---
title: Strings
localeTitle: 字符串
---
## 字符串

Elixir中的字符串用双引号括起来，而字符列表是单引号。它们是UTF-8编码的二进制文件。

```elixir
iex> "Hello world!" 
 "Hello world!" 
```

字符串插值可以在Elixir中使用octothorp，然后是花括号。

```elixir
iex> variable = "world!" 
 "world!" 
 iex> "Hello #{variable}" 
 "Hello world!" 
```

String模块包含许多基于Unicode标准的有用内置函数。

```elixir
iex> example = "string" 
 "string" 
 iex> String.capitalize(example) 
 "String" 
 iex> String.duplicate(example, 2) 
 "stringstring" 
```

#### 更多信息：

*   [elixir-lang.org |递归](https://elixir-lang.org/getting-started/basic-types.html#strings)
*   [hexdocs |枚举](https://hexdocs.pm/elixir/String.html)