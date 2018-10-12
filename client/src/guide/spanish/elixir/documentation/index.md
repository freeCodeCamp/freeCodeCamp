---
title: Documentation
localeTitle: Documentación
---
## Documentación

Uno de los mejores avanzados de Elixir en comparación con otros lenguajes de programación es su sistema de documentación. La documentación de Elixir se crea con los comentarios de su código y se convierte en un sitio web HTML muy bonito para que pueda navegar con facilidad y comprender cómo funciona la aplicación. Una vez que entienda cómo comentar correctamente su código en Elixir, podrá explicar cómo funciona su aplicación a otros programadores con facilidad. En los ejemplos a continuación, mostramos el uso de las funciones de documentación de Elixir en un módulo de servidor web ficticio.

### Documentación en línea

La documentación en línea utiliza un `#` delante del texto que describe algo sobre el código.

```elixir
def get(path) do 
    # This is an inline comment for documentation purposes. 
    "http get request response" 
  end 
```

### Documentación del módulo

El documento del módulo describe el propósito de un módulo. Los Moduledocs son similares a los comentarios multilínea que encontrarías en otros lenguajes de programación.

```elixir
defmodule WebServer do 
  @moduledoc """ 
    Provides a set of functions to accept and respond to HTTP requests. 
    This module provides the @get/1, @post/1, and @put/1 functions. 
  """ 
 end 
```

### Documentación de funciones

La documentación de la función describe el propósito y el uso de una sola función. Los Functiondocs son similares a los comentarios multilínea que encontrarías en otros lenguajes de programación. También muestra ejemplos de la función para que otro programador sepa qué esperar.

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

#### Más información:

*   [ElixirSchool - Documentación](https://elixirschool.com/en/lessons/basics/documentation/)
*   [Exdoc](https://github.com/elixir-lang/ex_doc)