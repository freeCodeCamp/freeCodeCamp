---
title: Strings
---

# Strings

A string is a basic data type in a programming language. Strings are represented by the type `String`. Strings are immutable. Kotlin has a rich API for working with strings.

### Basic Usage

#### Declaration

```kotlin
// Explicit type declaration
var firstName : String = "Elon"

// or Implicit type declaration and will still compile
val lastName = "Musk"
```

In addition, notice the usage of `val` variable type, here is how it behaves

```kotlin
firstName = "Mark" // can be changed
lastName = "Zuckerberg" // cannot be changed
lastName = 12 // Error: type mismatch
```

#### String Concatenation

Shown in the code snippet, just like Java, appending `Int` to
`String` will result to a `String` output

```kotlin
var str = "abc" + 1
println(str + "def")
```

Output:

```shell
abc1def
```

Even without explicitly converting `Int` value 1 to `String` object first, the resulting output is still a `String`.

Kotlin also supports String templates (expression that starts with dollar sign $) which are preferred to string concatenation.

```kotlin
var a = 1
// simple name in template:
val s1 = "a is $a"
```

```kotlin
a = 2
// arbitrary expression in template:
val s2 = "${s1.replace("is", "was")}, but now is $a"
```

#### String with Multiple Lines

Programmers can declare `String` variables with multiple lines by using triple quotes instead of double quotes

```kotlin
var str = """
        This is line 1
        This is line 2
        This is line 3
        """
println(str)
```

Output:

```shell
        This is line 1
        This is line 2
        This is line 3
```

or with `.trimIndent()`

The use of `trimIndent()` will additionally help to provide a clean output format by removing excess and unnecessary indentions on each line. Examine the code snippet below:

```kotlin
var str = """
        This is line 1
        This is line 2
        This is line 3
        """.trimIndent()
println(str)
```

Output:

```shell
This is line 1
This is line 2
This is line 3
```

### Accessing Characters of a String

#### Index Access
Programmers can access elements (characters) of a string using index access operator:

```kotlin
var str = "Example"
println(str[2])
```

Output:

```shell
a
```

It's just like accessing an element from an array, you get:

```kotlin
var str = "Example"
println(str[9]) // Error: index out of bounds
```

#### Iterate through a String

Elements of a string are characters that can be accessed by the indexing operation: `s[i]`. 

```kotlin
var str = "Example"
for (c in str) {
    println(c)
}
```

Output:

```shell
E
x
a
m
p
l
e
```

### Immutability of a String

Just like Java, you cannot change individual elements of a `String`

```kotlin
var str = "Example"
str[2] = "b" // Error
```

#### Re-assigning String values

```kotlin
var str = "Example"
println(str)
str = "Example was changed"
println(str)
```

Output:

```shell
Example
Example was changed
```

### String Properties

#### Determining length of a String

```kotlin
var str = "Example"
println(str.length)
```

Output:

```shell
7
```

### String Functions

These are some of the common `String` functions available from the current Kotlin version

### compareTo

Compares this object with the specified object for order. Returns zero if this object is equal to the specified other object, a negative number if it's less than other, or a positive number if it's greater than other.

```kotlin
var str = "Example"
var str2 = "Example123"
var str3 = "Example12345"
println(str.compareTo(str2))
println(str.compareTo(str3))
println(str3.compareTo(str))
println(str.compareTo("Example"))
```

Output:

```shell
-3
-5
5
0 # Equal
```

### equals

Indicates whether a `String` object is exactly equal to another `String` object

```kotlin
var str = "Example"
var str2 = "Example2"
println(str.equals("Example"))
println(str2.equals("Example"))
```

Output:

```shell
true
false
```

### get

Returns the character at the specified index in this character sequence.

``` kotlin
var str = "Example"
println(str.get(3))
```

Output:

```shell
m
```

### toString

Returns a string representation of the object.

```kotlin
println(9.toString() + 10)
println(9 + 10)
```

Output:

```shell
"910"
19
```

#### Resources

* [Kotlin Basic Types](https://kotlinlang.org/docs/reference/basic-types.html)
* [Kotlin String Reference](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)
