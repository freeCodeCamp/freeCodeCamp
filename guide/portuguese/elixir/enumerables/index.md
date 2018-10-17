---
title: Enumerables
localeTitle: Enumerável
---
## Enumeráveis ​​(Enum)

Em linguagens de programação orientada a objetos, você usará um "loop" para executar a mesma ação repetidamente em um dado, no Elixir já que variáveis ​​são imutáveis, não é possível criar um laço tradicional, em vez disso Elixir e outras linguagens de programação funcionais dependem de recursão. Com a recursão, você executará a mesma ação sobre cada item de uma lista sem precisar alterar uma variável. A biblioteca Enum construída em Elixir torna isso fácil.

## Exemplo

Usando `Enum.map` você pode executar uma função anônima (função que não está dentro de um módulo) passando sobre cada item de uma lista. Isso realiza a mesma tarefa que um loop tradicional sem precisar alterar uma variável acumuladora.

```elixir
iex> Enum.map([1, 2, 3], fn(x) -> x * 2 end) 
 [2, 4, 6] 
```

## Métodos no Módulo Enum

O módulo Enum tem mais de 70 funções diferentes para usar em Enumerables, listando todas elas aqui ocupariam algumas páginas. Em vez disso, vamos ver as funções mais usadas no módulo Enum.

### Enum.map

`Enum.map` executa uma função anônima ou capturada em uma lista.

```elixir
iex> Enum.map([5, 10, 15, 20], fn(x) -> x * 2 end) 
 [10, 20, 30, 40] 
```

#### Mais Informações:

*   [elixir-lang.org | recursão](https://elixir-lang.org/getting-started/enumerables-and-streams.html)
*   [hexdocs | Enum](https://hexdocs.pm/elixir/Enum.html)