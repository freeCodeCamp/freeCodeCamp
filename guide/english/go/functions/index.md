---
title: Go Functions
---
## Go Functions

A function takes zero or more parameters of any type, does some logic with them and may return one or more values.
Golang's function syntax is:
```go
func sum(parameter1 int64, parameter2 int64) int64 {
  return parameter1+parameter2
}
```
Here, the name of the function is `sum`. It takes to parameters, `parameter1` and `parameter2` of type `int64`
and returns another int64, the sum of the two parameters. 

### Return

After a `return` is reached, the function exits without executing more code.
```go
func sum(parameter1 int64, parameter2 int64) int64 {
  return parameter1+parameter2
  // Unreachable code
  fmt.Printf("Don't print me")
}
```

### Calling a function
The above function would be called like this:
```go
sum(4, 5)
```
The value of this expression is 9.

### Omit parameter type
If two or more consecutive parameters are the same type, it may be stated only once.
```go
function foo(x, y, z int64, name string) { 
  fmt.Printf("%d %d %d %s", x, y, z, name)
}
```
Here `x`, `y`, and `z` are type `int64`, and `name` is a string.

### Returning multiple values
A function can return zero or more values.
To return nothing, omit the return type:
```go
function helloWorld() { 
  fmt.Printf("Hello world!")
}
```

To return one value specify its type:
```go
function getHelloWorld() string { 
  return "Hello world!"
}
```

To return more than one value specify their types, wrapped in `()` and separated by commas:
```go
function getHelloWorldAndBestLanguage() (string, string) { 
  return "Hello world!", "Golang"
}
```

To receive these values, simply declare variables separated by commas like this:
```go
helloWorld, bestLanguage := getHelloWorldAndBestLanguage()
// helloWorld == "Hello world!"
// bestLanguage == "Golang"
```

### Naked returns
You can name the return types so that you don't need to pass variable to the return statement:
```go
func duplicate(s string) (first, second string) {
  first = s
  last = s
	return
}

func main() {
	fmt.Println(split("Hello world!")) // ("Hello world!", "Hello world!")
}
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://tour.golang.org/basics/4
