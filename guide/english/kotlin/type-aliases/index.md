---
title: Type Aliases
---

# Type Aliases

A type alias is a way to provide an alternative name to an existing type. This can be helpful when an existing type has a long name. It's important to note, Type aliases do not introduce new types. They still equate to their original, underlying types.

### Basic Usage

```kotlin
typealias LocalUsers = List<User.LocalUser>
```

You can also create type aliases for function types.

```kotlin
typealias ValidUsername = (String) -> Boolean
```

And for inner & nested classes.
```kotlin
class Foo {
    inner class Bar
}
class Baz {
    inner class Bar
}

typealias FBar = Foo.Bar
typealias BBar = Baz.Bar
```
