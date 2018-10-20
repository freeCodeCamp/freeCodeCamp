---
title: Go Variables
---
# Variable declarations in Go

## Method 1: Regular Variable Declarations

A regular variable declaration creates one or more variables by binding identifiers with a type and an initial value. If a variable is declared without a type, then that variable is given the type of the corresponding initialization value in the assignment. If a variable is defined with no initial value, then the variable is initialized to its [zero value](https://golang.org/ref/spec#The_zero_value).

The following examples are all valid variable declarations in go:
``` go
var x int = 1
var y int
var z = 0
var a, b float32 = -1, -2
```

## Method 2: Short Variable Declarations

Shorthand variable declarations create variables with only an identifier and an initial value. The `var` keyword and types are not needed to declare a variable using shorthand syntax:
``` go
x := 1
text, err := ioutil.ReadAll(reader)
```

Short variable declarations may appear only inside functions. In some contexts such as the initializers for `if`, `for`, or `switch` statements, they can be used to declare local temporary variables.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [A Tour of Go](https://tour.golang.org/basics/8)
* [Go By Example](https://gobyexample.com/variables)
* [Golang Book](https://www.golang-book.com/books/intro/4)
* [The Go Programming Language Specification](https://golang.org/ref/spec#Variable_declarations)
