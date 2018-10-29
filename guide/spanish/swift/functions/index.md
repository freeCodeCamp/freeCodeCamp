---
title: Functions
localeTitle: Funciones
---

## Funciones

Las funciones en Swift consisten en un parámetro y un tipo de retorno. Las funciones se pueden crear utilizando esta estructura básica: 

```Swift 
 func saludar(nombreDeLaPersona: String) -> String { 
 let hola = "Hola, " + nombreDeLaPersona + "."
    print(hola) 
 } 
 
 saludar(nombreDeLaPersona: "Steve")
```

En este ejemplo la funcion `saludar` recibe un nombre como String e imprime la frase `Hola, Steve.`

## Parámetros de una función

Las funciones no requieren ningún parámetro de entrada o tipo de retorno. Sin embargo, sí  requieren de paréntesis después del nombre de la función.

```Swift
 func saludoASteve() { 
    print("Hola, Steve") 
 } 
 
 saludoASteve() // Esto imprime "Hola, Steve". 
```

## Funciones Anidadas

Si una función existe dentro del cuerpo de otra función, esta es llamada función anidada o interna. Debe notar que una función interna solo puede ser llamada y usada dentro de la función que la contiene (funcion externa).

Ejemplo 1: Función anidada sin retorno de valores

```Swift
 func mensajeParaSaludar(_ mensaje: String) {
    func agregarSaludoEImprimir() {
       print("Hola! \(mensaje)")
    }
    agregarSaludoEImprimir()
 }

 mensajeParaSaludar("Jack")
```

Cuando el programa se ejecute la salida será:

```Swift
 Hola! Jack
```

En el programa anterior la función anidada  `agregarSaludoEImprimir()` es llamada dentro de la función que la contiene `mensajeParaSaludar()`.

La sentencia `mensajeParaSaludar("Jack")` llama a la función externa. Y la sentencia `agregarSaludoEImprimir()` dentro de la función externa llama al método que imprime `Hola! Jack` en la consola.

Ejemplo 2: Función anidada con parametros y valores de retorno:

```Swift
 func operar(con simbolo: String) -> (Int, Int) -> Int { 
 
    func suma(num1: Int, num2: Int) -> Int { 
       return num1 + num2 
    } 
 
    func resta(num1: Int, num2: Int) -> Int { 
       return num1 - num2 
    } 
    let operacion = (simbolo == "+") ?  suma : resta 
    return operacion 
 } 
 
 let operacion = operar(con: "+") 
 let resultado = operacion(2, 3) 
 print(resultado) 
```

Al correr el programa, la salida sera:

```Sift
 5
```

En el programa anterior, 

*  La función externa `operar()`, tiene un retorno del tipo `Funcion(Int, Int) -> Int` y  contiene las funciones internas (anidadas)  `suma()` y `resta()`.
*  Las funciones anidadas `suma()` y `resta()` de cierto modo son usadas fuera de la función `operar()` que las contiene. Esto es posible porque esta función exterior regresa alguna de estas funciones.

Al llamar a `operacion(2,3)` se esta usado la función interna fuera de la función `operar()` que la contiene. El programa llama internamente a `suma(2,3)` que imprime `5` en la consola.

# Fuente

*  [SWIFT TUTORIAL: Swift Nested Functions, https://www.programiz.com](https://www.programiz.com/swift-programming/nested-functions)