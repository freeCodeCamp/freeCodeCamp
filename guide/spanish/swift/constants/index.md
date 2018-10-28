---
title: Constants
localeTitle: Constantes
---

## Constantes

Una constante asocia un nombre con un valor de un tipo particular.

#### Ejemplo:

```swift
 let nombre = "Chris Lattner" 
```

Se declara una constantes con la palabra reservada `let`, luego se le da el nombre de `nombre`, y se utiliza el operador de asignación `=` para darle el valor de `"Chris Lattner"`.

Una vez que haya declarado una constante, no es necesario utilizar la palabra reservada `let`,  solo haga referencia a ella por su nombre.

El valor de una constante no se puede cambiar una vez que se establece. Dicho lo anterior, es importante notar que el compilador de Swift es lo suficientemente inteligente para entender la diferencia entre declarar una constante y asignarle un valor. Considere el siguiente fragmento de codigo:

```Swift
 let seCongelaElAgua: Bool // (1)
 if temperatura < 0 {
    seCongelaElAgua = true // (2)
 else {
    seCongelaElAgua = false // (3)
 }
```

El fragmento de arriba es valido y compila sin problemas (dado que se ha declarado y asignado un valor `Int` a `temperatura` antes). Dese cuenta que se declaro la constante en (1), y luego se asiga un valor en (2) ó (3).

#### Más información:

*   [El lenguaje de programación Swift](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID310)