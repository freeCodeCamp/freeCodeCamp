---
title: Lists
---
## Lists

In Elixir, lists are data structures comprised of values within square brackets. The values in a list can be any type.
```elixir
iex> [1, "string", true]
[1, "string", true]
```

## Immutability

Data structures in Elixir are immutable, so any operations performed on a List will return a new list, leaving the original intact.
```elixir
iex> list = [1, "string", true]
[1, "string", true]
iex> list ++ [2]
[1, "string", true, 2]
iex> list
[1, "string", true]
```

## Heads and Tails

The head (first element) of a list and the tail (remaining values) can easily accessed with the `hd/1` and `tl/1` operators.
```elixir
iex> list = [1, "string", true]
iex> hd(list)
1
iex> tl(list)
["string", true]
```

#### More Information:
* [elixir-lang.org | recursion](https://elixir-lang.org/getting-started/basic-types.html#linked-lists)
* [hexdocs | Enum](https://hexdocs.pm/elixir/List.html)