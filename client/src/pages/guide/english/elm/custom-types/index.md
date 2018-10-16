---
title: Custom Types
---
## Custom Types

Custom Types are one of the main features of the Elm language, and are similar to [Rust's enums](https://doc.rust-lang.org/book/second-edition/ch06-01-defining-an-enum.html).

### Syntax and Definition

Custom Types are types with a well-defined set of possible values, and are defined with the `type` keyword:

```elm
type Direction = Left | Right | Up | Down
```

In the above example, any value of the `Direction` type will only accept the `Left`, `Right`, `Up` and `Down` values, and any other value will raise a compilation error. Each of the said values are called **constructors** for the `Direction` type. One can also associate values to constructors. Let's use as an example an `User` of a chat application. An `User` can be a regular person (whose age we are interested to know) or a chatbot:

```elm
type User = Person Int | Bot
```

In order to use a value of the `User` type, we must also pass an integer to it, like `Person 20` for a twenty-year old user. We can take the type association one step further, and associate a type to the Custom Type itself. Let's say we want to declare a generic `Box` type that is able to hold a value of any type, but might also be empty:

```elm
type Box a = Empty | FilledWith a
```

Notice the lowercased `a` in the `Box` type definition. It means `Box` is a generic type, and `a` can be any type. The only restriction is that once its parameterized type is defined, the `FilledWith` constructor must hold a value of the same type (i.e. a value with `Box Int` type may only hold `Int` values in it). In fact, the `Box` type is nearly identical to the `Maybe` type from the Elm language core types.
