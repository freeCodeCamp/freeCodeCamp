---
title: Documentation
localeTitle: Документация
---
## Документация

Одним из лучших в Elixir по сравнению с другими языками программирования является его система документации. Документация Elixir создается вашими комментариями кодов и превращается в довольно HTML-сайт, чтобы вы могли легко просматривать и понимать, как работает приложение. Как только вы поймете, как правильно комментировать код в Elixir, вы сможете объяснить, как ваше приложение работает с другими программистами с легкостью. В приведенных ниже примерах мы показываем использование функций документации Elixir в вымышленном модуле веб-сервера.

### Встроенная документация

Документация Inline использует `#` перед текстом, описывающим что-то о коде.

```elixir
def get(path) do 
    # This is an inline comment for documentation purposes. 
    "http get request response" 
  end 
```

### Документация модуля

В документе модуля описывается назначение модуля. Moduledocs похожи на многострочные комментарии, которые вы найдете на других языках программирования.

```elixir
defmodule WebServer do 
  @moduledoc """ 
    Provides a set of functions to accept and respond to HTTP requests. 
    This module provides the @get/1, @post/1, and @put/1 functions. 
  """ 
 end 
```

### Функциональная документация

Документация по функциям описывает назначение и использование одной функции. Functiondocs аналогичны многострочным комментариям, которые вы найдете на других языках программирования. Он также показывает примеры функции, поэтому другой программист знает, чего ожидать.

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

#### Дополнительная информация:

*   [ElixirSchool - Документация](https://elixirschool.com/en/lessons/basics/documentation/)
*   [ExDoc](https://github.com/elixir-lang/ex_doc)