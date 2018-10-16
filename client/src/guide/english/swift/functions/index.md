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
