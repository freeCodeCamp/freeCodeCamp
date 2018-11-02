---
title: Strings
localeTitle: Струны
---
## Струны

Строки в Elixir обернуты двойными кавычками, а списки символов - одиночными. Это кодированные кодировки UTF-8.

```elixir
iex> "Hello world!" 
 "Hello world!" 
```

Строка Интерполяция возможна в Эликсире с октоторпом, за которым следуют фигурные скобки.

```elixir
iex> variable = "world!" 
 "world!" 
 iex> "Hello #{variable}" 
 "Hello world!" 
```

Модуль String содержит множество полезных встроенных функций, основанных на стандарте Unicode.

```elixir
iex> example = "string" 
 "string" 
 iex> String.capitalize(example) 
 "String" 
 iex> String.duplicate(example, 2) 
 "stringstring" 
```

#### Дополнительная информация:

*   [elixir-lang.org | рекурсия](https://elixir-lang.org/getting-started/basic-types.html#strings)
*   [hexdocs | Enum](https://hexdocs.pm/elixir/String.html)