---
title: Functions
localeTitle: Funciones
---
## Funciones

Las funciones en Swift se componen de parámetros de entrada y tipos de datos de salida. Pueden ser creadas usando esta estructura básica:
 ```Swift
  func sayHello(nameOfPerson: String) -> String {
      let hello = "Hello, " + nameOfPerson + "."
      print(hello)
  }

  sayHello(nameOfPerson: "Steve") 
 ```
En este ejemplo, la función sayHello toma como entrada una cadena de caracteres (nombre) e imprime la frase `"Hello, Steve."`.

## Parámetros de función

Las funciones no requieren necesariamente parámetros de entrada o tipos de salida. Sin embargo es obligatorio incluir los paréntesis tras el nombre de la función.
 ```Swift
  func helloSteve() {
      print("Hello, Steve.")
  }

  helloSteve() // Esto imprime "Hello, Steve."
 ```
## Funciones anidadas

Si una función existe dentro del cuerpo de otra función se le llama función anidada. Se debe tener en cuenta que las funciones anidadas sólo se pueden llamar y ser usadas dentro de la función que las contiene.

Ejemplo 1: Función anidada sin parámetros de salida

```Swift
func outputMessageByGreeting(_ message: String) {
    
    func addGreetingAndPrint() {
        print("Hello! \(message)")
    }
    addGreetingAndPrint()
}
outputMessageByGreeting("Jack")
```

Cuando ejecute el programa, la salida será:

```Swift
Hello! Jack
```

En el programa anterior, la función anidada `addGreetingAndPrint()` está siendo llamada desde la función contenedora `outputMessageByGreeting()`.

La sentencia `outputMessageByGreeting("Jack")` llama a la función contenedora. Y la sentencia `addGreetingAndPrint()` dentro de la función contenedora llama al método que imprime "Hello! Jack" en la consola.

Ejemplo 2: Función anidada con parámetros de entrada y salida

```Swift
func operate(with symbol:String) -> (Int, Int) -> Int {
    
    func add(num1:Int, num2:Int) -> Int {
        return num1 + num2
    }
    
    func subtract(num1:Int, num2:Int) -> Int {
        return num1 - num2
    }
    let operation = (symbol == "+") ?  add : subtract
    return operation
}

let operation = operate(with: "+")
let result = operation(2, 3)
print(result)
```
Cuando ejecute el programa, la salida será:
```Swift
5
```
En el programa anterior,

- La función contenedora es `operate()`, que devuelveun valor de tipo `Function (Int,Int) -> Int` y las funciones interiores (anidadas) son `add()` y `subtract()`.
 - La funciones anidadas `add()` y `substract()` de alguna forma están siendo utilizadas fuera de la función contenedora `operate()`. Esto es posible porque la función contenedora devuelve como resultado una de estas funciones.

Hemos usado la función anidada desde fuera de la función contenedora `operate()` con `operation(2,3)`. El programa internamente llama a `add(2,3)` que imprime '5' en la consola.

[Fuente](https://www.programiz.com/swift-programming/nested-functions) 
