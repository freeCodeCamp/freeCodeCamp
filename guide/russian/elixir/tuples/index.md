---
title: Tuples
localeTitle: Кортеж
---
## Кортеж

В Elixir кортежи представляют собой структуру данных, которая может содержать любое значение или смесь типов. Кортежи определяются фигурными фигурными скобками, а их индексы начинаются с 0. Поскольку кортежи хранятся смежно в памяти, получение данных из них является очень быстрой операцией.

```elixir
iex> tuple = {:atom, "string"} 
 {:atom, "string"} 
 iex> elem(tuple, 0) 
 :atom 
```

## неизменность

Кортежи в Elixir неизменяемы, поэтому внесение изменений вернет совершенно новый кортеж - сохранение оригинала в памяти.

```elixir
iex> tuple = {:atom, "string"} 
 {:atom, "string"} 
 iex> put_elem(tuple, 1, true) 
 {:atom, true} 
 iex> tuple 
 {:atom, "string"} 
```

## Соответствие шаблону

Наиболее распространенное использование кортежей в Elixir - это возврат функции. Например: `{:ok, "Hello World\n"}` Это очень полезно, так как позволяет использовать Match Matching для обработки этих возвратов.

#### Дополнительная информация:

*   [elixir-lang.org | рекурсия](https://elixir-lang.org/getting-started/basic-types.html#tuples)
*   [hexdocs | Enum](https://hexdocs.pm/elixir/Tuple.html)