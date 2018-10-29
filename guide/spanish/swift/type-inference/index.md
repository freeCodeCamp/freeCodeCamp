---
title: Type Inference
localeTitle: Inferencia de tipos
---
## Inferencia de tipos

Swift usa la inferencia de tipos. Entonces, si escribe algún código como el código en el siguiente ejemplo, es bastante obvio qué es cada tipo.

#### Ejemplo:

```swift
    let iPhone: String = “iPhone” 
    let yearIntroduced: Int = 2007 
    let isAwesome: Bool = true 
```

Así que podemos limpiar el código para que se vea como el ejemplo a continuación, y Swift puede inferir el tipo de uso.

#### Ejemplo:

```swift
    let iPhone = “iPhone”       // Inferred as String 
    let yearIntroduced = 2007   // Inferred as Int 
    let isAwesome = true        // Inferred as Bool 
```

#### Más información:

*   [El lenguaje de programación Swift](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID322)