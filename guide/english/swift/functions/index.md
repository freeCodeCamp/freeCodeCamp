---
title: Functions
---
## Functions

Functions in Swift consists of a parameter and a return type. Functions can be created by using this basic structure:
 ```Swift
  func sayHello(nameOfPerson: String) -> String {
      let hello = "Hello, " + nameOfPerson + "."
      print(hello)
  }

  sayHello(nameOfPerson: "Steve") 
 ```
In this example, the function sayHello takes in a string name and prints out the phrase `"Hello, Steve."`.

## Function Parameters

Functions do not require any input parameters or return types. However this require the parentheses after naming the functions.
 ```Swift
  func helloSteve() {
      print("Hello, Steve.")
  }

  helloSteve() // This prints out "Hello, Steve."
 ```
## Nested Functions

If a function exists inside the body of another function, it's called nested function. It should be noted that, inner functions can be only called and used inside the enclosing function (outer function).

Example 1: Nested function without return values

```Swift
func outputMessageByGreeting(_ message: String) {
    
    func addGreetingAndPrint() {
        print("Hello! \(message)")
    }
    addGreetingAndPrint()
}
outputMessageByGreeting("Jack")
```

When you run the program, the output will be:

```Swift
Hello! Jack
```

In the above program, the nested function addGreetingAndPrint() is being called from the enclosing function outputMessageByGreeting().

The statement outputMessageByGreeting("Jack") calls the outer function. And the statement addGreetingAndPrint() inside the outer function calls the method which outputs Hello! Jack in the console.

Example 2: Nested function with parameters and return values
Nested functions can contain functions with parameters and return values.

```Swift
func operate(with symbol:String) -> (Int, Int) -> Int {
    
    func add(num1:Int, num2:Int) -> Int {
        return num1 + num2
    }
    
    func subtract(num1:Int, num2:Int) -> Int {
        return num1 - num2
    }
    let operation = (symbol == "+") ?  add : subtract
    return operation
}

let operation = operate(with: "+")
let result = operation(2, 3)
print(result)
```
When you run the program, the output will be:
```Swift
5
```
In the above program,

- The outer function is operate(), with return value of type Function (Int,Int) -> Int.
and the inner (nested) functions are add() and subtract().
 - The nested function add() and subtract() in a way are being used outside of the enclosing function operate(). This is possible because the outer function returns one of these functions.

We've used the inner function outside the enclosing function operate() as operation(2, 3). The program internally calls add(2, 3) which outputs 5 in the console.

[Source](https://www.programiz.com/swift-programming/nested-functions) 

