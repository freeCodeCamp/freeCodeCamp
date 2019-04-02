---
title: Lists
localeTitle: Listas
---
## Listas

No Elixir, as listas são estruturas de dados compostas de valores entre colchetes. Os valores em uma lista podem ser de qualquer tipo.

```elixir
iex> [1, "string", true] 
 [1, "string", true] 
```

## Imutabilidade

As estruturas de dados no Elixir são imutáveis, portanto, quaisquer operações executadas em uma Lista retornarão uma nova lista, deixando o original intacto.

```elixir
iex> list = [1, "string", true] 
 [1, "string", true] 
 iex> list ++ [2] 
 [1, "string", true, 2] 
 iex> list 
 [1, "string", true] 
```

## Cabeças e caudas

A cabeça (primeiro elemento) de uma lista e a cauda (valores restantes) podem ser facilmente acessados ​​com os operadores `hd/1` e `tl/1` .

```elixir
iex> list = [1, "string", true] 
 iex> hd(list) 
 1 
 iex> tl(list) 
 ["string", true] 
```

#### Mais Informações:

*   [elixir-lang.org | recursão](https://elixir-lang.org/getting-started/basic-types.html#linked-lists)
*   [hexdocs | Enum](https://hexdocs.pm/elixir/List.html)