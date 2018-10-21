---
title: Strings
localeTitle: Instrumentos de cuerda
---
## Instrumentos de cuerda

Las cadenas en Elixir están envueltas con comillas dobles, mientras que las listas de caracteres son comillas simples. Son binarios codificados en UTF-8.

```elixir
iex> "Hello world!" 
 "Hello world!" 
```

La interpolación de cuerdas es posible en el elixir con un octotorp seguido de llaves.

```elixir
iex> variable = "world!" 
 "world!" 
 iex> "Hello #{variable}" 
 "Hello world!" 
```

El módulo String contiene muchas funciones útiles integradas basadas en el estándar Unicode.

```elixir
iex> example = "string" 
 "string" 
 iex> String.capitalize(example) 
 "String" 
 iex> String.duplicate(example, 2) 
 "stringstring" 
```

#### Más información:

*   [elixir-lang.org | recursion](https://elixir-lang.org/getting-started/basic-types.html#strings)
*   [hexdocs | Enumerar](https://hexdocs.pm/elixir/String.html)