---
title: Type Inference
localeTitle: Вывод типов
---
## Вывод типов

Swift использует механизм вывода типов. Например, вы напишете код приведенный ниже. Довольно очевидно, где какой тип использован.

#### Пример:

```swift
    let iPhone: String = “iPhone” 
    let yearIntroduced: Int = 2007 
    let isAwesome: Bool = true 
```

Мы можем улучшить код и убрать явное указание типа, чтобы он выглядел как пример ниже. Swift может вывести тип, который будет использован, если задано присваемое значение.

#### Пример:

```swift
    let iPhone = “iPhone”       // Выведен как String 
    let yearIntroduced = 2007   // Выведен как Int 
    let isAwesome = true        // Выведен как Bool 
```

#### Дополнительная информация:

*   [Язык программирования Swift](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID322)
