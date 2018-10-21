---
title: Type Inference
---
## Type Inference

Swift uses type inference. So if you write some code like the code in the example below it’s pretty obvious what each type is.

#### Example:
```swift
    let iPhone: String = “iPhone”
    let yearIntroduced: Int = 2007
    let isAwesome: Bool = true
```

So we can clean up the code to look like the example below, and Swift can infer the type for use.

#### Example:
```swift
    let iPhone = “iPhone”       // Inferred as String
    let yearIntroduced = 2007   // Inferred as Int
    let isAwesome = true        // Inferred as Bool
```

#### More Information:
- <a href='https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID322' target='_blank' rel='nofollow'>The Swift Programming Language</a>
