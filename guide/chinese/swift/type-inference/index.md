---
title: Type Inference
localeTitle: 类型推断
---
## 类型推断

Swift使用类型推断。因此，如果您编写一些代码，例如下面示例中的代码，那么每种类型的代码都非常明显。

#### 例：

```swift
    let iPhone: String = “iPhone” 
    let yearIntroduced: Int = 2007 
    let isAwesome: Bool = true 
```

所以我们可以清理代码看起来像下面的例子，Swift可以推断出使用的类型。

#### 例：

```swift
    let iPhone = “iPhone”       // Inferred as String 
    let yearIntroduced = 2007   // Inferred as Int 
    let isAwesome = true        // Inferred as Bool 
```

#### 更多信息：

*   [Swift编程语言](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID322)