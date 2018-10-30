---
title: Type Safety, Inference, and Optionals
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

## Type Safety and Optionals

Swift is a "type-safe" language. This means that by design the language helps programmers be more clear about the types they are using and helps mitigate and/or prevent common type errors - like trying to pass a string where it requires an integer. One core mechanism of this type-safe design are Optional Types.

### Optional Types

When a variable's type is an optional type it denotes that its value can have a value **_or_** no value at all (nil). 

You declare an optional by appending a question mark at the end of the type declaration. 
 
#### Example:
```swift
    var optionalFloat: Float?  	    // This is an Optional Float
    var optionalString: String?     // and an Optional String
    
    let normalFloat: Float = 0.5    // This is an ordinary Float
    var normalString = "a string"   // and a String 
``` 

#### More Information:
- <a href='https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID322' target='_blank' rel='nofollow'>Type-Safety and Type Inference</a>

- <a href='https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID330' target='_blank' rel='nofollow'>Swift Optionals</a>
