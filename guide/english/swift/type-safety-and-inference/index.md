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

## Type Safety

Swift is a "type-safe" language. This means that by design the language helps programmers be more clear about the types they are using and helps mitigate and/or prevent common type errors - like trying to pass a string where it requires an integer. One core mechanism of this type-safe design are Optional Types.

## Optional Types

When a variable's type is an optional type it denotes that its value can have a value **_or_** no value at all (nil). 

You declare an optional by appending a question mark at the end of the type declaration.
 
```swift
    var optionalFloat: Float?          // This is an Optional Float
    var optionalString: String?  = "an optional string"   // and an Optional String
 
    let normalFloat: Float = 0.5    // This is an ordinary Float
    var normalString = "a string"   // and a String
``` 
**Note:** since optionalFloat is not assigned a value it is given a default value of nil

### Unwrapping Optionals

Optionals are considered a different type then its non-optional variant. For example in the above code "optionalFloat" and "normalFloat" are _not_ the same type. When you try to access an optional variable like you would a normal variable the value would be of Optional(_SomeValue_).

```swift
    var optionalInt: Int? = 5
    let normalInt = 10
    print(optionalInt) // Optional(5)
```
If you try to utilize the optional variable like normal you will get an error.
```swift
    let sumError = normalInt + optionalInt //error!
```
Instead you must first "unwrap" the optional before you can utilize the data. There are a couple of ways doing so: forced unwrapping it and optional binding.

#### Forced Unwrapping

If you are **certain** that an optional does contain a value, you can force-unwrap it by appending an exlamation mark at the end of it.

```swift
    if(optionalInt != nil) { // make sure the optionalInt has a value, otherwise will get a runtime error
        let sum = normalInt + optionalInt! // <-- forced unwrapped
    }
```

#### Optional Binding

Optional Binding is a special kind of condition statement (either with an if or a while) at which it automatically unwraps an optional if it has a value, and then stores that value in the designated variable. That variable can then be utilized within the if/while statements body normally.

```swift
    if let unwrappedInt = optionalInt {
        let sum = normalInt + unwrappedInt; // 15
    }
 ```

If the optional does not have a value (nil), then the condition would be considered false and its code would not execute and the program will continue on normally.


#### More Information:
- <a href='https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID322' target='_blank' rel='nofollow'>Type-Safety and Type Inference</a>

- <a href='https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID330' target='_blank' rel='nofollow'>Swift Optionals</a>
