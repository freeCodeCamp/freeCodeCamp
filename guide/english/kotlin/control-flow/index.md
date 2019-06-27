---
title: Control Flow
---

# Control Flow

### Basic Usage

#### If Expression

`if` can be used in same way as in other programming languages
```kotlin
var min: Int
if (a < b) {
  min = a
} else {
  min = b
}
```

`else` can also be omitted if not needed
```kotlin
if (a < b) {
  print("a is smaller")
}
```

#### When Expression

`when` keyword is replacing usual `switch-case` expression  
The else branch is evaluated if none of the other branch conditions are satisfied  
It has powerfull matching branches which support complex evaluations of input argument  
```kotlin
when (obj) {
  1          -> "One"
  1, 2       -> "One or Two"
  "Hello"    -> "Greeting"
  is Long    -> "Long"
  !is String -> "Not a string"
  else       -> "Unknown"
}
```

Range evaluation
```kotlin
when (x) {
  in 1..100 -> print("x is in the range")
  in validNumbers -> print("x is valid")
  !in 10..200 -> print("x is outside the range")
  else -> print("none of the above")
}
```

#### For Loops

`for` loop can iterate through anything that provides and interator, using `in` operator
```kotlin
val fruits = listOf("apple", "banana", "kiwi")
for (fruit in fruits) {
  println(fruit)
}
```

Iterating through range of numbers
```kotlin
for (i in 1..5) {
  println(i)
}
```

#### While Loops

`while` and `do..while` are used like in most programming languages
```kotlin
while (a > 0) {
  a--
}

do {
  val b = provideData()
} while (b != null)
```

#### Break and continue keywords
Used like in most other programming languages

#### Resources
* [Basic Syntax Reference](https://kotlinlang.org/docs/reference/basic-syntax.html)
* [Kotlin Control Flow Reference](https://kotlinlang.org/docs/reference/control-flow.html)
