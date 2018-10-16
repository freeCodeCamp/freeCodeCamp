---
title: Documentation
---
## Documentation

One of the best advanced of Elixir in comparison to other programming languages is its documentation system. Elixir's documentation is created by your code comments and made into a pretty HTML Website for you to browse with ease and understand how the application works. Once you understand how to properly comment your code in Elixir, you'll be able to explain how your application works to other programmers with ease. In the examples below we show the usage of Elixir's documentation functions in a fictional webserver module.

### Inline Documentation
Inline documentation uses a `#` in front of text describing something about the code.
```elixir
def get(path) do
    # This is an inline comment for documentation purposes.
    "http get request response"
  end
```

### Module Documentation
Module document describes the purpose of a module. Moduledocs are similar to multiline comments you would find in other programming languages.
```elixir
defmodule WebServer do
  @moduledoc """
    Provides a set of functions to accept and respond to HTTP requests.
    This module provides the @get/1, @post/1, and @put/1 functions.
  """
end
```

### Function Documentation
Function documentation describes the purpose and usage of a single function. Functiondocs are similar to multiline comments you would find in other programming languages. It also shows examples of the function so another programmer knows what to expect.
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

#### More Information:
* [ElixirSchool - Documentation](https://elixirschool.com/en/lessons/basics/documentation/)
* [ExDoc](https://github.com/elixir-lang/ex_doc)