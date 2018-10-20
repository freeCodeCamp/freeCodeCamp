---
title: Constants
---
# Constants

A constant associates a name with a value of a particular type.

**Example:**

```Swift
let name = "Chris Lattner"
```

You declare constants with the `let` keyword then give it a name `name` then you use an assignment operator `=` to assign the value `"Chris Lattner"` to the constant `name`.

Once you have declared a constant you don't need to use the `let` keyword anymore you just call it by its name.

The value of a constant can’t be changed once it’s _set_. With that being said, it is important to note that the Swift compiler is smart enough to understand the difference between _declaring_ a constant, and _assigning_ a value to it. Consider the following code snippet:

```Swift
let shouldWaterFreeze: Bool // (1)
if temperature < 0 {
  shouldWaterFreeze = true // (2)
else {
  shouldWaterFreeze = false // (3)
}
```

The snippet above is valid and compiles with no problems (given that we have declared and assigned an `Int` value to `temparature` somewhere earlier). Notice that we _declare_ the constant in (1), and then _assign_ a value to it (2) or (3).

## More Information

- [The Swift Programming Language: Language Guide](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID310)
