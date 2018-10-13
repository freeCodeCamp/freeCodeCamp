---
title: Lists
localeTitle: Liza
---
## Liza

En Elixir, las listas son estructuras de datos que se componen de valores entre corchetes. Los valores en una lista pueden ser de cualquier tipo.

```elixir
iex> [1, "string", true] 
 [1, "string", true] 
```

## Inmutabilidad

Las estructuras de datos en Elixir son inmutables, por lo que cualquier operación realizada en una Lista devolverá una nueva lista, dejando el original intacto.

```elixir
iex> list = [1, "string", true] 
 [1, "string", true] 
 iex> list ++ [2] 
 [1, "string", true, 2] 
 iex> list 
 [1, "string", true] 
```

## Cabeza y cola

Se puede acceder fácilmente a la cabecera (primer elemento) de una lista y la cola (valores restantes) con los operadores `hd/1` y `tl/1` .

```elixir
iex> list = [1, "string", true] 
 iex> hd(list) 
 1 
 iex> tl(list) 
 ["string", true] 
```

#### Más información:

*   [elixir-lang.org | recursion](https://elixir-lang.org/getting-started/basic-types.html#linked-lists)
*   [hexdocs | Enumerar](https://hexdocs.pm/elixir/List.html)