---
title: Data Types
localeTitle: 数据类型
---
## 数据类型

在Elixir中有五种基本数据类型：整数，浮点数，布尔值，原子和字符串。这些数据类型用于存储值，以便以后在程序中使用。

### 整型

整数是非十进制数。 Elixir内置支持二进制，八进制和十六进制数字作为整数。

```elixir
iex> 1337 
 1337 
```

### 花车

浮点数需要小数，小数点后至少需要一位数。 Floats支持64位双精度和`e`表示exponets。

```elixir
iex> 27e-100 
 27e-100 
```

### 布尔

布尔值是true或false值。在Elixir中，除了`false`和`nil`之外，一切都是真实的。重要的是要注意布尔值是Elxir原子的子类型（您可以检查IEX中的值以便自己查看）。

```elixir
iex> true 
 true 
 iex> false 
 false 
 iex> nil 
 nil 
```

### 原子

原子是一个常量，其值与名称相同。原子通常用于元组内的状态/错误消息，字符串中包含更多信息。

```elixir
iex> {:ok, "Message sent successfully"} 
 {:ok, "Message sent successfully"} 
 iex> {:error, "Message failed to send"} 
 {:error, "Message failed to send"} 
```

### 字符串

字符串是UTF-8编码的并用双引号括起来。

```elixir
iex> "freeCodeCamp" 
 "freeCodeCamp" 
```

字符串也是二进制文件，通过将`<> <<0>>`附加到字符串的末尾，可以在Elixir中看到字符串的二进制表示。字符串可以表示二进制，二进制也可以表示字符串。

```elixir
iex> "freeCodeCamp" <> <<0>> 
 <<102, 114, 101, 101, 67, 111, 100, 101, 67, 97, 109, 112, 0>> 
```

#### 更多信息

*   [Hexdocs Atom](https://hexdocs.pm/elixir/Atom.html)
*   [Hexdocs字符串](https://hexdocs.pm/elixir/String.html)
*   [Hexdocs整数](https://hexdocs.pm/elixir/Integer.html)
*   [Hexdocs Float](https://hexdocs.pm/elixir/Float.html)