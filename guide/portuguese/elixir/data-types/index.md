---
title: Data Types
localeTitle: Tipos de dados
---
## Tipos de dados

No Elixir existem cinco tipos básicos de dados: inteiros, flutuantes, booleanos, átomos e cadeias. Esses tipos de dados são usados ​​para armazenar valores para uso posterior em seu programa.

### Inteiros

Um inteiro é um número não decimal. O Elixir criou suporte para números binários, octais e hexadecimais como números inteiros.

```elixir
iex> 1337 
 1337 
```

### Flutuadores

Um float requer um decimal e pelo menos um dígito após o decimal. Flutuadores suportam precisão dupla de 64 bits `e` para exponets.

```elixir
iex> 27e-100 
 27e-100 
```

### Booleanos

Um booleano é um valor verdadeiro ou falso. Em Elixir, tudo é verdade, exceto `false` e `nil` . É importante notar que os booleanos são um subtipo de átomos de Elxir (você pode inspecionar os valores no IEX para ver por si mesmo).

```elixir
iex> true 
 true 
 iex> false 
 false 
 iex> nil 
 nil 
```

### Átomos

Um átomo é uma constante cujo valor é o mesmo que o nome. Os átomos são comumente usados ​​para mensagens de status / erros dentro de uma tupla com mais informações incluídas em uma string.

```elixir
iex> {:ok, "Message sent successfully"} 
 {:ok, "Message sent successfully"} 
 iex> {:error, "Message failed to send"} 
 {:error, "Message failed to send"} 
```

### Cordas

Uma string é codificada em UTF-8 e envolvida em aspas duplas.

```elixir
iex> "freeCodeCamp" 
 "freeCodeCamp" 
```

Uma string também é um binário, você pode ver a representação binária de uma string no Elixir anexando `<> <<0>>` ao final da string. Uma string pode representar um binário, um binário também pode representar uma string.

```elixir
iex> "freeCodeCamp" <> <<0>> 
 <<102, 114, 101, 101, 67, 111, 100, 101, 67, 97, 109, 112, 0>> 
```

#### Mais Informações

*   [Hexdocs Atom](https://hexdocs.pm/elixir/Atom.html)
*   [String Hexdocs](https://hexdocs.pm/elixir/String.html)
*   [Hexdocs Integer](https://hexdocs.pm/elixir/Integer.html)
*   [Hexdocs Float](https://hexdocs.pm/elixir/Float.html)