---
title: Tuples
localeTitle: Tuplas
---
## Tuplas

No Elixir, as tuplas são uma estrutura de dados que pode conter qualquer valor ou mistura de tipos. Tuplas são definidas por chaves, e seus índices começam em 0. Como as tuplas são armazenadas contiguamente na memória, obter dados delas é uma operação muito rápida.

```elixir
iex> tuple = {:atom, "string"} 
 {:atom, "string"} 
 iex> elem(tuple, 0) 
 :atom 
```

## Imutabilidade

As tuplas no Elixir são imutáveis, portanto, fazer modificações retornará uma tupla inteiramente nova - salvando o original na memória.

```elixir
iex> tuple = {:atom, "string"} 
 {:atom, "string"} 
 iex> put_elem(tuple, 1, true) 
 {:atom, true} 
 iex> tuple 
 {:atom, "string"} 
```

## Correspondência de Padrões

O uso mais comum de tuplas no Elixir é como um retorno para uma função. Por exemplo: `{:ok, "Hello World\n"}` Isso é muito útil, pois permite o uso de Correspondência de Padrões para lidar com esses retornos.

#### Mais Informações:

*   [elixir-lang.org | recursão](https://elixir-lang.org/getting-started/basic-types.html#tuples)
*   [hexdocs | Enum](https://hexdocs.pm/elixir/Tuple.html)