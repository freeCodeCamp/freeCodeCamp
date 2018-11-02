---
title: Enumerables
localeTitle: Enumerables
---
## Enumerables (Enum)

En los lenguajes de programación orientados a objetos, utilizará un "bucle" para realizar la misma acción una y otra vez en un dato, en Elixir, ya que las variables son inmutables, no es posible crear un bucle comercial, en lugar de Elixir y otros lenguajes de programación funcionales. confiar en la recursion Con la recursión, ejecutará la misma acción sobre cada elemento de una lista sin necesidad de mutar una variable. La biblioteca Enum construida en Elixir lo hace fácil.

## Ejemplo

Usando `Enum.map` puede ejecutar una función anónima (función que no está dentro de un módulo) pasando sobre cada elemento en una lista. Esto realiza la misma tarea que un bucle tradicional sin necesidad de mutar una variable del acumulador.

```elixir
iex> Enum.map([1, 2, 3], fn(x) -> x * 2 end) 
 [2, 4, 6] 
```

## Métodos en el módulo Enum

El módulo Enum tiene más de 70 funciones diferentes para usar en Enumerables, enumerarlas todas aquí ocuparía algunas páginas. En su lugar, veamos las funciones más utilizadas en el módulo Enum.

### Enum.map

`Enum.map` ejecuta una función anónima o capturada sobre una lista.

```elixir
iex> Enum.map([5, 10, 15, 20], fn(x) -> x * 2 end) 
 [10, 20, 30, 40] 
```

#### Más información:

*   [elixir-lang.org | recursion](https://elixir-lang.org/getting-started/enumerables-and-streams.html)
*   [hexdocs | Enumerar](https://hexdocs.pm/elixir/Enum.html)