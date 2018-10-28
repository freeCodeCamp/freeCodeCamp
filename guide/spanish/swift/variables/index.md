---
title: Variables
localeTitle: Variables
---

## Variables

Una variable asocia un nombre con un valor de un tipo particular. En Swift hay dos formas principales de crear variables `let` y `var`. Para declarar constantes usa la palabra reservada `let`. Para declarar variables mutables use la palabra reservada `var`.

El beneficio de tener dos formas de almacenar variables en Swift es evitar errores de cambio de variables que deberían ser constantes.

```swift
 let diasDeLaSemana = 7
 var cantidadDeDinero = 100

 cantidadDeDinero = 150 // cantidadDeDinero ahora es 150

 diasDeLaSemana = 10 // ¡Esto nos da un error!
```

En este caso la variable `diasDeLaSemana` debe ser una constante, porque sólo hay siete días en una semana, mientras que la variable `cantidadDeDinero` debe ser `var` porque la cantidad de dinero en una cuenta cambia.

Los nombres de variables y constantes pueden contener casi cualquier carácter, incluidos los caracteres Unicode:

```swift
  let π = 3.14159 
  let 你好 = "你好世界" 
  let 🐶🐮 = "perrovaca" 
```

Para probar si sus variables tienen el valor correcto, use `print()` .

```Swift
  let dinero = 50 
 
  print(dinero) 
  // Esto imprime 50 
```

#### Más información:

*   [El lenguaje de programación Swift](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID310)