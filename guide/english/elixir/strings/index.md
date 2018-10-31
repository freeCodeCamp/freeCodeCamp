---
title: Strings
---
## Strings

Strings in Elixir are wrapped with double-quotes, while Character Lists are single-quoted. They are UTF-8 encoded binaries.
```elixir
iex> "Hello world!"
"Hello world!"
```

String Interpolation is possible in Elixir with an octothorp followed by curly braces.
```elixir
iex> variable = "world!"
"world!"
iex> "Hello #{variable}"
"Hello world!"
```

The String module contains many helpful built in functions based on the Unicode standard.
```elixir
iex> example = "string"
"string"
iex> String.capitalize(example)
"String"
iex> String.duplicate(example, 2)
"stringstring"
```

#### More Information:
* [elixir-lang.org | recursion](https://elixir-lang.org/getting-started/basic-types.html#strings)
* [hexdocs | Enum](https://hexdocs.pm/elixir/String.html)
