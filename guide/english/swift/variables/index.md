---
title: Variables
---
## Variables

A variable associates a name with a value of a particular type. There are two main ways to create variables in Swift. `let` and `var`. To declare constants use the `let` keyword. To declare mutable variables use the `var` keyword.

The benefit of having two ways to store variables in Swift is to prevent errors of changing variables that should be constant.

 ```Swift
  let daysInAWeek = 7
  var amountOfMoney = 100

  amountOfMoney = 150
  // amountOfMoney is now 150

  daysInAWeek = 10
  // This gives us an error!

 ```

In this case the variable `daysInAWeek` should be a constant because there are only seven days in a week, while the variable `amountOfMoney` should be a var because the amount of money in one's account changes.

Constant and variable names can contain almost any character, including Unicode characters:

```Swift
  let π = 3.14159
  let 你好 = "你好世界"
  let 🐶🐮 = "dogcow"
```

To test if your variables have the correct value, use `print()`.

```Swift
  let money = 50

  print(money)
  // This prints 50
```

#### More Information:

* [The Swift Programming Language](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID310)
