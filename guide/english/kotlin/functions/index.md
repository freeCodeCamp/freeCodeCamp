---
title: Functions
---

# Functions

### Basic Usage

#### Declaration

`fun` keyword is used to define the function  
`a` and `b` are input parameters of type `Int`  
`Int` (after brackets) is matching the return type  
```kotlin
fun sum(a: Int, b: Int): Int {
   return a + b
}
```


Same expression can be shortened (omit function brackets), meaning that return type is infered.  
Return keyword can be also omited in such expression body
```kotlin
fun sum(a: Int, b: Int) = a + b
```


Return type can also be omitted (you don't have to use `void` return type) if function does not return anything
```kotlin
fun printSum(a: Int, b: Int) {
    println("sum of $a and $b is ${a + b}")
}
```


#### Usage


Simple method call:
```kotlin
val result = sum(2, 3)
```

Named arguments in method call:
```kotlin
val result = sum(a = 1, b = 5)
```

Support of default arguments (if parameter is not provided in method call):
```kotlin
fun write(content: String, destination: String = "/tmp/") { ... }
```

#### Resources
* [Basic Syntax Reference](https://kotlinlang.org/docs/reference/basic-syntax.html)
* [Kotlin Functions Reference](https://kotlinlang.org/docs/reference/functions.html)
