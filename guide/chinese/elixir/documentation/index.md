---
title: Documentation
localeTitle: 文档
---
## 文档

与其他编程语言相比，Elixir最先进的技术之一是其文档系统。 Elixir的文档由您的代码注释创建，并制作成一个漂亮的HTML网站，供您轻松浏览并了解应用程序的工作原理。一旦您了解了如何在Elixir中正确评论您的代码，您就能够轻松地向其他程序员解释您的应用程序如何工作。在下面的示例中，我们将在虚构的Web服务器模块中显示Elixir文档功能的用法。

### 内联文档

内联文档在文本前面使用`#`来描述代码。

```elixir
def get(path) do 
    # This is an inline comment for documentation purposes. 
    "http get request response" 
  end 
```

### 模块文档

模块文档描述了模块的用途。 Moduledocs类似于其他编程语言中的多行注释。

```elixir
defmodule WebServer do 
  @moduledoc """ 
    Provides a set of functions to accept and respond to HTTP requests. 
    This module provides the @get/1, @post/1, and @put/1 functions. 
  """ 
 end 
```

### 功能文档

功能文档描述了单个功能的用途和用法。 Functiondocs与其他编程语言中的多行注释类似。它还显示了该函数的示例，以便另一个程序员知道会发生什么。

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

#### 更多信息：

*   [ElixirSchool - 文档](https://elixirschool.com/en/lessons/basics/documentation/)
*   [ExDoc](https://github.com/elixir-lang/ex_doc)