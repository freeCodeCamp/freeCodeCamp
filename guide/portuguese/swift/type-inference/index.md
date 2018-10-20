---
title: Type Inference
localeTitle: Inferência de tipo
---
## Inferência de tipo

O Swift usa inferência de tipos. Então, se você escrever algum código como o código no exemplo abaixo, é bastante óbvio o que cada tipo é.

#### Exemplo:

```swift
    let iPhone: String = “iPhone” 
    let yearIntroduced: Int = 2007 
    let isAwesome: Bool = true 
```

Assim, podemos limpar o código para ficar parecido com o exemplo abaixo, e o Swift pode inferir o tipo de uso.

#### Exemplo:

```swift
    let iPhone = “iPhone”       // Inferred as String 
    let yearIntroduced = 2007   // Inferred as Int 
    let isAwesome = true        // Inferred as Bool 
```

#### Mais Informações:

*   [A linguagem de programação rápida](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID322)