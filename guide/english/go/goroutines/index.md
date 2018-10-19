---
title: Goroutines
---
## Goroutines

This is a stub. [Help our community expand it](https://github.com/freecodecamp/guides/tree/master/src/pages/go/goroutines/index.md).

[This quick style guide will help ensure your pull request gets accepted](https://github.com/freecodecamp/guides/blob/master/README.md).

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Goroutines are functions or methods that run concurrently with other functions or methods. Goroutines can be thought of as light weight threads. The cost of creating a Goroutine is tiny when compared to a thread.

Prefix the function or method call with the keyword `go` and you will have a new Goroutine running concurrently.
Let us try to understand this using as example.

```
func goroutine_test(n int) {
  for i:= 0; i < n; i++ {
    fmt.Println(i)
  }
}
```
We just need one single statement `go goroutine_test(10)` to have our goroutine up and running. Usually, when we call a function, our program will execute all the statements in the function and then return to the next statement after the calling statement. But with goroutines, this is not the case. The function executes in a concurrent fashion and our program does not wait for the control to return to the next statement, instead it immediately returns the control to the next statement and executes the function in a separate lightweight thread called goroutines. We can run thousands of goroutines simultaneously. Because of this reason, go is a server friendly language as we can run many tasks at the same time and that too using less memory.

We can also use anonymous function for declaring goroutines.
```
func() {
  for i:= 0; i < n; i++ {
    fmt.Println(i)
  }
} ()
```

#### More Information:
* [https://gobyexample.com/goroutines](https://tour.golang.org/concurrency/1)
* [https://www.golang-book.com/books/intro/10](https://www.golang-book.com/books/intro/10)
* [https://tour.golang.org/concurrency/1](https://tour.golang.org/concurrency/1)
