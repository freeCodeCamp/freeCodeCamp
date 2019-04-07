---
title: Structures and Classes
---
# Structures and Classes

Structures and classes are general-purpose, flexible constructs that become the building blocks of your program’s code.

## The Difference

Both:

- Define properties to store values
- Define methods to provide functionality
- Define subscripts to provide access to their values using subscript syntax
- Define initializers to set up their initial state
- Be extended to expand their functionality beyond a default implementation
- Conform to protocols to provide standard functionality of a certain kind

Only Classes:

- Has Inheritance which enables one class to inherit the characteristics of another.
- Type casting enables you to check and interpret the type of a class instance at runtime.
- Deinitializers enable an instance of a class to free up any resources it has assigned.
- Reference counting allows more than one reference to a class instance.

## Defining

Classes and Structures have similar definition syntaxes syntaxes, as seen below.

```Swift
struct SomeStructure {
    // structure definition goes here
}

class SomeClass {
    // class definition goes here
}
```

Here is an example of both with values

```Swift
struct Position {
    var x = 0
    var y = 0
}

class UserControlledPlayer {
    var position = Position()
    var name: String?
    var tools = [String]()
}
```

Notice how the names of both classes and structures are formatted differently than the standard `camelCase` used for variables and constants. That's because whenever you define a class or structure you are defining a new Swift type, so you should match the `UpperCamelCase` used in standard Swift types (ex. `String`, `Int`, and `Bool`).

## Instances

The definitions of Classes and Structures only define what it will look like. They themselves are not able to describe case. To do that, you need to use an instance.

The syntax for creating instances is very similar for both structures and classes:

```Swift
let somePosition = Position()
let playerTwo = UserControlledPlayer()
```

Structures and classes both use initializer syntax for new instances. The simplest form of initializer syntax uses the type name of the class or structure followed by empty parentheses. This creates a new instance of the class or structure, with any properties initialized to their default values.

They can also be initialized with custom values such as in
```Swift
let newPosition = Position(x: 5, y: 10)
```
This is automatically usable with structures, but with classes it requires a manually defined initializer.

## Accessing Properties

You can access the properties of an instance using *dot syntax*. In dot syntax, you write the property name immediately after the instance name, separated by a period (.), without any spaces. Here's an example:

```Swift
let position = Position()
print(position.x) // Prints "0"
```

You can also use dot syntax to assign a new value:

```Swift
position.x = 25
print(position.x) // Prints "25"
```

## Interfacing

Swift doesn’t require you to create separate interface and implementation files for custom structures and classes. Unlike other programming languages, you define a structure or class in a single file, and the external interface to that class or structure is automatically made available for other code to use.

## More Information

- [The Swift Programming Language: Language Guide](https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html)