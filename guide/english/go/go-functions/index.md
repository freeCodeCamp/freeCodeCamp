---
title: Go Functions
---
## Go Functions

A function is a block of code that performs a task when it's called, such that the function's name identifies it and is used in calling the function.

A function's declaration starts with the keyword `func` followed by the function's name then the arguments of the function and finally the returned values types. The declaration binds the function name to the function. Keep in mind that the type comes after the variable name in both the arguments and the returned values. An example of a function's declaration is the following
```go
func add(a int, b int) int
```

A function can have 0 or many arguments depending on its desired functionality
```go
func zero() int { /* Function Definition */ }
func increment(x int) int { /* Function Definition */ }
func add(x, y int) int { /* Function Definition */ }
```

Go supports returning multiple values. The function below returns 2 values: the sum of the 2 arguments, and the difference between the first and the second argument
```go
func addAndSubtract(x, y int) (int, int) {
  return x + y, x - y
}

addAndSubtract(7, 4) // Returns 11, 3
```

Go also supports naming the returned values
```go
func mulitplyByThreeAndDivideByFive(x int) (product int, quotient int) {
	product = x * 3
	quotient = x / 5
	return
}

mulitplyByThreeAndDivideByFive(20) // Returns 60, 4
```

#### More Information:
* [A Tour of Go](https://tour.golang.org/basics/4)
* [Go By Example](https://gobyexample.com/functions)
* [Golang Book](https://www.golang-book.com/books/intro/7)
* [The Go Programming Language Specification](https://golang.org/ref/spec#Function_declarations)
