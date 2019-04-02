---
title: Hello World in Go
---

To install Go in your computer, download its installer from <a href='https://golang.org/dl/' target='_blank' rel='nofollow'>here</a> and install it by following these <a href='https://golang.org/doc/install' target='_blank' rel='nofollow'>installation instructions</a>.


## First Go program

Create a file named `main.go` and add the following code in it :-

```go
package main // Package declaration

import "fmt" // Importing packages

// Function declaration
func main() {
	fmt.Println("Hello, World!")
}

```
Now, run the above program from Terminal/Command Line. To do this, open Terminal/Command Line and move to the directory in which `main.go` is present. First compile the program and run `go build main.go`. Then run the command `go run main.go` to run program.
You should see the ouptut similar to the following output :-

    $ go build main.go
    $ go run main.go
    Hello, World!

## Analysis

### Package declaration

```go
package main
```

In go, every program is associated with a “package”, or a collection of associated programs. A notable exception is the special package “main”, which indicates to the go complier that it should run the following program.

### Imports

```
import “fmt”
```

If you want to use functions from other packages, you need to import them. There are certain packages developed by the go maintainers (called the “standard library”) and can be found at https://golang.org/pkg/. In this case, we need the “fmt” package for our print statement (below).

### Function declaration

```go
func main() {
}
```

Functions are the heart of any program in go. They can have arguments and return values, but the `main` function does neither of these. It acts as the “entry point,” or where go looks first to run your program. We want our Hello World program to print, so we want to put our code here.

### Print statement 

```go
fmt.Println("Hello, world!")
```

Go doesn’t require semicolons at the end of lines, as the complier adds them automatically. The package `fmt` (which we imported above!) has function `Println`, which we invoke using the `.` syntax. We pass arguments to the function between the parens. In this case, the argument is the string we want to print (`"Hello, world!"`). Note that the string itself is enclosed in quotation marks.

Now that you have the tools necessary, go out and make your own Go programs! The best way to learn is to experiment. If you ever need help, try the excellent go documentation: https://golang.org/doc/
