---
title: Documentation
localeTitle: Documentação
---
## Documentação

Um dos melhores avançados do Elixir, em comparação com outras linguagens de programação, é o seu sistema de documentação. A documentação do Elixir é criada pelos comentários do seu código e transformada em um bonito site HTML para você navegar com facilidade e entender como o aplicativo funciona. Depois de entender como comentar corretamente seu código no Elixir, você poderá explicar como o seu aplicativo funciona para outros programadores com facilidade. Nos exemplos abaixo mostramos o uso das funções de documentação do Elixir em um módulo de servidor web fictício.

### Documentação Inline

A documentação inline usa um `#` na frente do texto que descreve algo sobre o código.

```elixir
def get(path) do 
    # This is an inline comment for documentation purposes. 
    "http get request response" 
  end 
```

### Documentação do Módulo

Documento de módulo descreve o propósito de um módulo. Moduledocs são semelhantes aos comentários multilinhas que você encontraria em outras linguagens de programação.

```elixir
defmodule WebServer do 
  @moduledoc """ 
    Provides a set of functions to accept and respond to HTTP requests. 
    This module provides the @get/1, @post/1, and @put/1 functions. 
  """ 
 end 
```

### Função Documentação

Documentação de função descreve o propósito e uso de uma única função. Functiondocs são semelhantes aos comentários multilinha que você encontraria em outras linguagens de programação. Também mostra exemplos da função para que outro programador saiba o que esperar.

```elixir
  @doc """ 
    Responds to a get request 
 
    ## Parameters 
     - path: A path to the desired resource 
 
    ## Examples 
     - iex> WebServer.get(/documentation.pdf) 
       "Returning documentation.pdf 
     - iex> WebServer.get(/downloads.html) 
       "Returning downloads.html" 
  """ 
  def get(path) do 
    "http get request response" 
  end 
```

#### Mais Informações:

*   [ElixirSchool - Documentação](https://elixirschool.com/en/lessons/basics/documentation/)
*   [ExDoc](https://github.com/elixir-lang/ex_doc)