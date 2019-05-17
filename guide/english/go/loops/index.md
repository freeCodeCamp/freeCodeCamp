---
title: Loops
---

# For loop in Go
Go has only `for` loop. The basic `for` loop has three components separated by `;` -

  * the **init** statement: executed before the first iteration

  * the **condition** expression: evaluated before every iteration

  * the **post** statement: executed at the end of every iteration

The **init** statement is often a short variable declaration. The variables declared there are visible only in the scope of the `for` statement. The loop stops iterating once the boolean condition evaluates to false.

An example of the `for` loop is given below -

**for.go**

```go
package main

import "fmt"

func main() {
	sum := 0
	for i := 0; i <= 10; i++ {
		sum += i
	}
	fmt.Println("The sum of first 10 natural numbers is", sum)
}

```
Running the above program produces an output similar to the following output -
```    
$ go run for.go
The sum of first 10 natural numbers is 55
```

You can use `continue` and `break` to adjust the loops flow
```go
  // this code prints any odd numbers up to 5
  for n := 0; n <= 10; n++ {
    if n % 2 == 0 {
      // if the number is even jump to the next n
      continue
    }
    fmt.Println(n)
    // if the number is 5 exit the loop
    if n == 5 {
      break
    }
  }
```
If you want to create an infinite loop just use `for { }`
```go
  for {
    // Whill loop until a condition breaks the loop
    break // exit the loop
  }
```

## Replacement for while-loop
To simulate while-loop of other languages, you can simply exclude the **init** and **post** statement:

```go
func main() {
	num := 1
	for num <= 1000 {
		num *= 2
	}
	fmt.Println("The smallest power of 2 above 1000 is", num)
}
```

## Replacement for do-while-loop
The do-while-loop is useful as the statement is executed at least once before the condition is checked and continue until the condition is no longer true. To simulate the do-while-loop of other languages we can use an infinite for loop with a break condition at the end. The traditional do-while has the following syntax.

```
do {
        statement
} while (condition);
```
We can simulate this syntax in go as follows:
```
for {
        statement
        if (!condition) { break }
}

```
A Go example 
```go
x := 0
for {
        // These statements are ran at least once
        x++
        fmt.Println(x)
        
        // Check do the condition at the end. If it is no longer true end the loop
        if !(x < 10) {
                break
        }
}
```
