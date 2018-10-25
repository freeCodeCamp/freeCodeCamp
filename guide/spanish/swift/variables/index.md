---
title: Variables
localeTitle: Variables
---
## Variables

Una variable asocia un nombre con un tipo de valor en particular. En Swift hay dos formas principales de crear variables. `let` y `var`. Para declarar constantes usa la palabra clave `let` . Para declarar variables mutables use la palabra clave `var` .

El beneficio de tener dos formas de almacenar variables en Swift es evitar errores de cambio de variables que deberían ser constantes.

 ```Swift
  let daysInAWeek = 7
  var amountOfMoney = 100

  amountOfMoney = 150
  // amountOfMoney ahora es 150

  daysInAWeek = 10
  // Esto nos da un error!

 ```

En este caso la variable `daysInAWeek` debe ser una constante porque sólo hay siete días en una semana, mientras que la variable `amountOfMoney` debe ser una var ya que la cantidad de dinero en la cuenta de uno cambia.

Los nombres de constantes y variables pueden contener casi cualquier carácter, incluyendo los caracteres Unicode:

```Swift
  let π = 3.14159 
  let 你好 = "你好世界" 
  let 🐶🐮 = "perrovaca" 
```

Para probar si tus variables tienen el valor correcto, usa `print()` .

```Swift
  let money = 50 
 
  print(money) 
  // Esto imprime 50 
```

#### Más información:

*   [El lenguaje de programación Swift](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID310)
