---
title: A simple web server in Go
---
The Go programming language is well-known for having a built-in web server. In this article you will learn how you can easily make your own web server with Go. You won't need any other packages beside the ones that are already built in!

It is recommended that you first do the excellent Tour of Go found here: https://tour.golang.org/ in order to gain some initial understanding in the Go programming language(Golang), however it is not required.

First, hop in to your text editor of choice. Then create a file, the name doesn't matter but let's call it `webserver.go` and enter the following code:
```go
package main

import (
  "net/http"
  "io"
)

func main() {
  http.HandleFunc("/", servePage)
	http.ListenAndServe(":8080", nil)
}

func servePage(writer http.ResponseWriter, request *http.Request) {
  io.WriteString(writer, "Hello world!")
}
```
Let's break down the block of code above. We import the `net/http` package: this package contains the web server itself, if you continue with Go as a web development language, be prepared to use this package often. Then we also import the `io` package, we will make use of this later to actually serve something to the client.

In the `main` function(denoted by `package main`) we do two things. First we instruct our server to let the function called `servePage` handle all incoming traffic to `/` - in this case it means that it handles requests to *any* `URL` path. The second thing we do is actually activating the server. We do this using a function named `ListenAndServe`. This function requires two parameters: the `port` (as a `string` data type), in this case it's `8080`, and the `handler` (as `Handler`) - however the last one isn't important yet. We will just make it `nil` and everything will work just fine. If you'd like to read more about http handlers in go I recommend referring to the official documentation of the `net/http` package found here: https://golang.org/pkg/net/http/.

In the `servePage` we do just one simple thing, for now. Using the `io` package and the `WriteString` function that it contains we can respond to the clients' request with the text `Hello world!` (or any string you choose, of course). You also might have noticed that the `servePage` function has two arguments: the `writer` and the `request`. With the writer you can actually respond to a `HTTP` request and with the `request` you may get more information about the request itself.

Congratulations! You just created your first web server! If you want to test it: just run `go run webserver.go` in your terminal, fire up a browser and navigate to `http://localhost:8080`!
