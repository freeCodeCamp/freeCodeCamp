---
title: Hello World in Kotlin
---

A Hello World program is a very simple program that outputs the string "Hello World!". It is often used to show the basic syntax of a programming language.

In this tutorial we are going to analyse the syntax of a Hello World program written in Kotlin.

If you still haven't installed Kotlin you should check this tutorial: https://guide.freecodecamp.org/kotlin

## Hello World Program

```kotlin
// This is a simple Hello World program written in Kotlin

fun main(args : Array<String>) {
    println("Hello, World!")
}
```

As you should expect, when you run this program the output should be "Hello, World!".

## Syntax

### Comments

```
// This is a simple Hello World program written in Kotlin
```

Comments are text written by a developer that are added with the purpose of making the code easier to understand by other developers.
In Kotlin comments can be single-line comments (using //) or multi-line comments (using /**/).

```
// Single line comment

/* This is a
Multi-line comment
*/
```

### Main function

```kotlin
fun main(args : Array<String>) {...}
```

The main function is a mandatory function that tells the compiler where it should start executing our code. It takes an array of strings as parameter and returns the type Unit which corresponds to the type ```void``` in languages like Java.
As we can see, functions are declared with the use of the keyword ```fun``` and its body should be written inside curly braces. 

Functions without a explicitly declared return type will return the type ```Unit```, therefore, the above code is equivalent to

```kotlin
fun main(args : Array<String>): Unit {...}
```


### Print Statement

The println function takes a string as an argument and prints it to the screen. In this case we are printing the string "Hello, World!". Note that string literals are declared using double quotes ```"String"```.


If you'd like to know more about Kotlin Syntax and start writing awesome programs you should check the awesome Kotlin Official Documentation: https://kotlinlang.org/docs/reference/

Hope you liked this tutorial,
Cheers
