---
title: Classes
---

# Classes

### Basic Usage

#### Declaration

`class` keyword is used to define the class  
It is consisted of: class name, class header (type parameters, constructor) and class body (curly braces)  
```kotlin
class Person { ... }
```

#### Constructor

There are multiple ways to define class constructor.  
Primary constructor is part of the class header (name field with data type):
```kotlin
class Person(name: String) { ... }
```

Secondary constructor: using `constructor` keyword inside class body  
```kotlin
class Person {
  constructor(parent: Person) {
    parent.children.add(this)
  }
}
```

#### Usage

Class instance can be created as regular function   
There is no need for `new` keyword
```kotlin
val john = Person("John Wayne")
```

#### Resources
* [Basic Syntax Reference](https://kotlinlang.org/docs/reference/basic-syntax.html)
* [Kotlin Classes Reference](https://kotlinlang.org/docs/reference/classes.html)
