---
title: Using templates with your web server
---
When you have a web server, you might want to insert data into your responses. Let's see some code:
```go
package main

import (
  "net/http"
  "html/template"
)

type PAGE struct {
  NAME string
}

var page PAGE

func main() {
  page.NAME = "Mark"
  http.HandleFunc("/", servePage)
  http.ListenAndServe(":8080", nil)
}

func servePage(writer http.ResponseWriter, reqest *http.Request) {
  template := template.New("sayHello")
  template, _ = template.Parse("Hello {{.NAME}}!")
  template.Execute(writer, page)
}
```
Now fire up this program and navigate your browser to:
```
http://localhost:8080/
```
The response will be:
```
Hello Mark!
```
But how does this work and what does the code do? Well, first of all we import the `net/http` package so we can run a web server. Then we  import the `html/template` package. This enables a feature called templating; and that is where this article is about.

We also create a type called `PAGE`, which has one field called `NAME` as type `string`. We also create a global variable called `page` of type `PAGE`, the struct we just created. In the `main` function we give the `NAME` field of `page` a value of `Mark` - my name, but feel free to use your own name!

The `servePage` function is a bit difficult at first. Let's take it apart:
```go
func servePage(writer http.ResponseWriter, reqest *http.Request) {

  // 1. Creating a template
  template := template.New("sayHello")

  // 2. Filling the template
  template, _ = template.Parse("Hello {{.NAME}}!")

  // 3. Executing the template
  template.Execute(writer, page)
}
```
What do we do here? Let's see step by step:
1. We create a *template*. You need to enter a name, but it does not really matter what name you choose. Here I chose `sayHello`.
2. Then we fill the template with some text. Please take note of the `{{.NAME}}`.
3. Finally, we *execute* the template. This means that the template is filled out and sent to the client.

But how do we go from `{{.NAME}}` to `Mark`? Well, remember we used the `page` variable as a parameter to the `Execute` method? This method looks at the data in the template and sees `{{.NAME}}`. The `.NAME` indicates that it should look for a field called `NAME` inside the variable that was specified as a parameter when `Execute` was called. In this case it finds that field and it takes note of that the value is `Mark`. The `{{` and `}}` are telling `Execute` that it should replace `{{.NAME}}` with the value that it found. So the end result will become `Hello Mark!`.

You can have multiple fields and multiple `{{.XXX}}`'s. This is a really easy way you can insert data into responses, and you now know how to template in Go!
