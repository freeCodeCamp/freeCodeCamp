---
title: Strings
localeTitle: Cordas
---
## Cordas

Strings in Elixir são empacotadas com aspas duplas, enquanto as Listas de Caracteres são citadas com uma só letra. Eles são binários codificados em UTF-8.

```elixir
iex> "Hello world!" 
 "Hello world!" 
```

A interpolação de strings é possível em Elixir com um octothorp seguido por chaves.

```elixir
iex> variable = "world!" 
 "world!" 
 iex> "Hello #{variable}" 
 "Hello world!" 
```

O módulo String contém muitas funções embutidas úteis baseadas no padrão Unicode.

```elixir
iex> example = "string" 
 "string" 
 iex> String.capitalize(example) 
 "String" 
 iex> String.duplicate(example, 2) 
 "stringstring" 
```

#### Mais Informações:

*   [elixir-lang.org | recursão](https://elixir-lang.org/getting-started/basic-types.html#strings)
*   [hexdocs | Enum](https://hexdocs.pm/elixir/String.html)