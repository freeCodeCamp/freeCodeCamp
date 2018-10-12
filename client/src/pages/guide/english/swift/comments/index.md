---
title: Comments
---
## Comments

Comments allow you to document your code. Comments are ignored by the Swift compiler, and are only useful for people reading your code base.

Single-line comments begin with two forward-slashes `//`.

#### Example:
```swift
    // Hello, single-line comment!
```

Multiline comments begin with a forward-slash followed by an asterisk `/*` and ends with an asterisk followed by a forward-slash `*/`

#### Example:
```swift
   /* Hello,
   multiline-line comment! */
```
Syntax (// TODO: and // FIXME:), you can get some extra information to show up in the quick jump bar.

#### Example: 
```swift
    // FIXME: The notifier lifecycle here is dumb (when all callbacks are removed
    // from a notifier a zombie is left sitting around uselessly) and should be
    // cleaned up.
```



#### More Information:
- <a href='https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID315' target='_blank' rel='nofollow'>The Swift Programming Language</a>
