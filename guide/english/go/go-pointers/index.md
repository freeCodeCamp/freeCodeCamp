---
title: Go Pointers
---
## Go Pointers

This is a stub. [Help our community expand it](https://github.com/freecodecamp/guides/tree/master/src/pages/go/go-pointers/index.md).

[This quick style guide will help ensure your pull request gets accepted](https://github.com/freecodecamp/guides/blob/master/README.md).

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Pointers

Go has pointers. A pointer holds the memory address of a value.

The type *T is a pointer to a T value. Its zero value is nil.
```go
var p *int
```
The & operator generates a pointer to its operand.
```go
i := 42
p = &i
```
The * operator denotes the pointer's underlying value.
```go
fmt.Println(*p) // read i through the pointer p
*p = 21         // set i through the pointer p
```
This is known as "dereferencing" or "indirecting".

Unlike C, Go has no pointer arithmetic.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [A Tour of Go](https://tour.golang.org/moretypes/1)
* [Go By Example](https://gobyexample.com/pointers)
* [Golang Book](https://www.golang-book.com/books/intro/8)
* [The Go Programming Language Specification](https://golang.org/ref/spec#Address_operators)
