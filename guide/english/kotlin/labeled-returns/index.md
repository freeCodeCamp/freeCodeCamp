---
title: Labeled Returns
---

# Labeled Returns

Like many other languages, Kotlin has `return` statements. However, Kotlin also utilizes labeled returns. A labeled return allows us to return from an outer function.

### Basic Usage

```kotlin
val myNum = 5

fun foo() {
    listOf(1, 2, 3, 4, 5).forEach {
        if (it == myNum) {
          print("Found $myNum")
          return@forEach // returns from the forEach loop
        }
        print("Searching...")
    }
}
```

Without the `@forEach` label on the return statement, the return would have returned to the caller of the function `foo()`
