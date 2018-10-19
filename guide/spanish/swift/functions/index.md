---
title: Functions
localeTitle: Funciones
---
## Funciones

Las funciones en Swift consisten en un parámetro y un tipo de retorno. Las funciones se pueden crear utilizando esta estructura básica:
 ```Swift
  func sayHello(nameOfPerson: String) -> String {
      let hello = "Hola," + nameOfPerson + "."
      print(hello)
  }

  sayHello(nameOfPerson: "Steve")
 ```
En este ejemplo, la función sayHello coge una cadena de palabras e imprime la frase `"Hola, Steve."`.

## Parámetros de función

Las funciones no requieren ningún parámetro de entrada o tipo de retorno. Sin embargo, esto requiere los paréntesis después de nombrar las funciones.
 ```Swift
  func helloSteve() {
      print("Hola, Steve.")
  }
 
  helloSteve() // Esto imprime "Hola, Steve."
 ```
