---
title: Receive data with your web server
---
Once you've set up your web server and made sure it can serve some useful content, you might want to make it more interactive by letting it accept data. Let's get started by writing some code:
```go
package main

import (
  "net/http"
  "html/template"
)

type Page struct {
  Name string
}

var page Page

func main() {
  http.HandleFunc("/", servePage)
  http.ListenAndServe(":8080", nil)
}

func servePage(writer http.ResponseWriter, reqest *http.Request) {
  page.Name = request.FormValue("name")
  template := template.New("sayHello")
  template, _ = template.Parse("Hello {{.Name}}!")
  template.Execute(writer, page)
}
```
Let's break this code down. First off all, we start by importing `net/http` for the web server and `html/template` for the templating. This article assumes you already know how to template in Go. If you don't know this yet, you should read the article on templating first.

Then we create a type called `PAGE`, with one slot in it called `NAME` (this is a `string`). We also create a global variable called `page` which is of type `PAGE`: the struct we just made.

In the `servePage` function there is one thing that is really important for this article: the `FormValue` method we run on the `request`.

Before we continue you first need to know how a `URL` is built. Let's take the following `URL` as an example:
```
https://google.com/search?q=free+code+camp
```
If you enter the `URL` above in your browser, it will perform a Google search for `free code camp`. The `URL` is built like this:
1. `https://` - this is the protocol
2. `google.com` - this is the domain name and port (in this case there is no port mentioned - so the browser uses the default port for the protocol)
3. `/search` - this is the path
4. `q=free+code+camp` - this is the `query`

The query is the part we talk about in this article. The Google server sees this `URL` and because of the attribute `q` in the query and the value of `q` - in this case `free+code+camp` - it knows where it should search for.

We can also apply this to our server. Let's fire up the program and navigate the browser to:
```
http://localhost:8080/?name=world
```
The response will be:
```
Hello world!
```
How does this work? Well, we gave the `FormValue` a parameter of `name`. This way `FormValue` knows we want the value of the `name` attribute in the query. In this case that is `world`, so the method returns `world`. That string is then put in the `page` variable and the template does the rest.

This is of course a really simple implementation of this function, but you could do a lot of things with it. For example: you could accept email addresses and let the program store those in a file.
