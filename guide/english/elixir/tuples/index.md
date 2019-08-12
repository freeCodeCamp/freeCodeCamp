---
title: Tuples
---
## Tuples

In Elixir, tuples are a data-structure that can hold any value or mixture of types. Tuples are defined by curly braces, and their indexes start from 0. Because tuples are stored contiguously in memory, getting data from them is a very quick operation.
```elixir
iex> tuple = {:atom, "string"}
{:atom, "string"}
iex> elem(tuple, 0)
:atom
```

## Immutability

Tuples in Elixir are an immutable, so making modifications will return an entirely new tuple - saving the original in memory. 
```elixir
iex> tuple = {:atom, "string"}
{:atom, "string"}
iex> put_elem(tuple, 1, true)
{:atom, true}
iex> tuple
{:atom, "string"}
```

## Pattern Matching

The most common use of tuples in Elixir is as a return for a function. For example: `{:ok, "Hello World\n"}`
This is very helpful, as it enables the use of Pattern Matching to handle these returns.

#### More Information:
* [elixir-lang.org | recursion](https://elixir-lang.org/getting-started/basic-types.html#tuples)
* [hexdocs | Enum](https://hexdocs.pm/elixir/Tuple.html)
