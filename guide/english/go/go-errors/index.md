---
title: Go Errors
---
# Go Errors

Go has a built-in error interface that looks like:

```go
type error interface {
  Error() string
}
```
Therefore anything that implements the `Error() string` can be used as an error.

# Checking errors

A typical practice is to have functions return an error value. For example the `Print()` function from the fmt package is:

```go
func Print(a ...interface{}) (n int, err error)
```

It returns the number of bytes written as well as an error. If there was no error in printing then error will be nil. To check errors we'd use something like this:

```go
num, err := fmt.Print("Hello\n")
if err != nil {
  log.Fatal(err)
}
fmt.Println(num)
```
We check if an error occured then handle it using `log.Fatal()` . This prints the error and exits. If no error was found we'd continue on to print the number of bytes written by `Print()`

# Creating Errors

You can create errors of your own to use as needed:

```go
// common convention to use all lowercase in error messages
err := errors.New("oh no something terrible went wrong") 
if err != nil {
  log.Fatal(err)
}
```
This error could also be returned from a function if something went wrong in that function:

```go
// largeNumberAddThree adds three to a value only is it's larger than 100
func largeNumberAddThree(arg int) (int, error) {
  if arg < 100 {
    return -1, errors.New("oh no that isn't large enough") // return an error when arg is too small
  }
  return arg + 3, nil // return a nil error
}

func main() {
  x := 99 // 99 will return an error
  y, err := largeNumberAddThree(x)
  if err != nil {
    log.Fatal(err)
  }
  fmt.Println(y)
}
```
# Panic

Go also includes a `panic()` method. When a function reaches a panic it's operation stops to crash the program. Any message inside the `panic("message")` will be printed.
There is also a `recover()` method that can be used to recover from a `panic()` if the `recover()` was defered earlier in execution.

Using panic shouldn't be used for in place of error handling. panic should only be used for an unrecoverable error where the program cannot simply continue its execution.
