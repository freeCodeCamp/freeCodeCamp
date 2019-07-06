---
title: Extension Functions
---

# Extension Functions

Kotlin supports extension functions & extension variables, which allow you to add new functionality to a class without modifying the class itself.

### Basic Usage

#### Extension Function

```kotlin
fun String.containsSpaces(): Boolean {
  return contains(" ")
}

val myString = "Hello World"

print(myString.containsSpaces())
```

Output:
```shell
true
```

#### Extension Variable

```kotlin
val <T> List<T>.lastIndex: Int
    get() = size - 1

val myList = listOf(1,2,3,4,5)

print(myList.lastIndex)
```

Output:
```shell
4
```

#### Resources

* [Kotlin Extensions](https://kotlinlang.org/docs/reference/extensions.html)
