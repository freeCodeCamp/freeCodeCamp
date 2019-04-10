---
title: Enumerables
---
## Enumerables (Enum)

In object oriented programming languages, you'll use a "loop" to perform the same action over and over on a piece of data, in Elixir since variables are immutable its not possible to create a tradational loop, instead Elixir and other functional programming languages rely on recursion. With recursion you'll run the same action over each item in a list without the need to mutate a variable. The Enum library built in Elixir makes this easy.

## Example
Using `Enum.map` you can run an anonymous function (function that's not inside a module) passing over each item in a list. This accomplishes the same task as a tradational loop without needing to mutate an accumulator variable.
```elixir
iex> Enum.map([1, 2, 3], fn(x) -> x * 2 end)
[2, 4, 6]
```

## Methods in the Enum Module
The Enum module has over 70 different functions to use on Enumerables, listing them all here would take up a few pages. Instead let's look at the most commonly used functions in the Enum Module.

### Enum.map
`Enum.map` runs an anonymous or captured function over a list.
```elixir
iex> Enum.map([5, 10, 15, 20], fn(x) -> x * 2 end)
[10, 20, 30, 40]
```

#### More Information:
* [elixir-lang.org | recursion](https://elixir-lang.org/getting-started/enumerables-and-streams.html)
* [hexdocs | Enum](https://hexdocs.pm/elixir/Enum.html)
