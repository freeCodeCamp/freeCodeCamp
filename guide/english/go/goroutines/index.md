---
title: Goroutines
---
## Goroutines

Goroutines are functions or methods that run concurrently with other functions or methods. Goroutines can be thought of as light weight threads. The cost of creating a Goroutine is tiny when compared to a thread.

Prefix the function or method call with the keyword `go` and you will have a new Goroutine running concurrently.

Let's look at an example:

    func say(s string) {
        fmt.Println(s)
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }

    func main() {
        go say("hello")
        say("world")
    }
    
Output:

    world
    hello
    hello
    world
    
You can observe that since we called `say("hello")` in a goroutine, it'll run concurrently and will print the output in no particular order in regards to the regualar function call `say("world")`.

#### More Information:
* [A Tour of Go](https://tour.golang.org/concurrency/1)
* [Go By Example](https://gobyexample.com/goroutines)
* [Golang Book](https://www.golang-book.com/books/intro/10)
* [The Go Programming Language Specification](https://golang.org/ref/spec#Go_statements)
