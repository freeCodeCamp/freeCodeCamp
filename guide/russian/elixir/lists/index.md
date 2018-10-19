---
title: Lists
localeTitle: Списки
---
## Списки

В Elixir перечислены структуры данных, состоящие из значений в квадратных скобках. Значения в списке могут быть любого типа.

```elixir
iex> [1, "string", true] 
 [1, "string", true] 
```

## неизменность

Структуры данных в Elixir являются неизменяемыми, поэтому любые операции, выполняемые в List, возвращают новый список, оставляя исходное неповрежденным.

```elixir
iex> list = [1, "string", true] 
 [1, "string", true] 
 iex> list ++ [2] 
 [1, "string", true, 2] 
 iex> list 
 [1, "string", true] 
```

## Головы и хвосты

Головку (первый элемент) списка и хвост (оставшиеся значения) можно легко получить с помощью операторов `hd/1` и `tl/1` .

```elixir
iex> list = [1, "string", true] 
 iex> hd(list) 
 1 
 iex> tl(list) 
 ["string", true] 
```

#### Дополнительная информация:

*   [elixir-lang.org | рекурсия](https://elixir-lang.org/getting-started/basic-types.html#linked-lists)
*   [hexdocs | Enum](https://hexdocs.pm/elixir/List.html)