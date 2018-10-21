---
title: Tuples
localeTitle: Tuplas
---
## Tuplas

En Elixir, las tuplas son una estructura de datos que puede contener cualquier valor o mezcla de tipos. Las tuplas se definen con llaves y sus índices comienzan en 0. Como las tuplas se almacenan de forma contigua en la memoria, obtener datos de ellas es una operación muy rápida.

```elixir
iex> tuple = {:atom, "string"} 
 {:atom, "string"} 
 iex> elem(tuple, 0) 
 :atom 
```

## Inmutabilidad

Las tuplas en Elixir son inmutables, por lo que hacer modificaciones devolverá una tupla completamente nueva, guardando el original en la memoria.

```elixir
iex> tuple = {:atom, "string"} 
 {:atom, "string"} 
 iex> put_elem(tuple, 1, true) 
 {:atom, true} 
 iex> tuple 
 {:atom, "string"} 
```

## La coincidencia de patrones

El uso más común de las tuplas en Elixir es como un retorno para una función. Por ejemplo: `{:ok, "Hello World\n"}` Esto es muy útil, ya que permite el uso de la coincidencia de patrones para manejar estas devoluciones.

#### Más información:

*   [elixir-lang.org | recursion](https://elixir-lang.org/getting-started/basic-types.html#tuples)
*   [hexdocs | Enumerar](https://hexdocs.pm/elixir/Tuple.html)