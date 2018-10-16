---
title: Type Inference
localeTitle: Вывод типа
---
## Вывод типа

Swift использует вывод типа. Поэтому, если вы напишете какой-то код, например, код в приведенном ниже примере, довольно очевидно, что каждый тип.

#### Пример:

```swift
    let iPhone: String = “iPhone” 
    let yearIntroduced: Int = 2007 
    let isAwesome: Bool = true 
```

Таким образом, мы можем очистить код, чтобы он выглядел как пример ниже, и Swift может вывести тип для использования.

#### Пример:

```swift
    let iPhone = “iPhone”       // Inferred as String 
    let yearIntroduced = 2007   // Inferred as Int 
    let isAwesome = true        // Inferred as Bool 
```

#### Дополнительная информация:

*   [Быстрый язык программирования](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID322)