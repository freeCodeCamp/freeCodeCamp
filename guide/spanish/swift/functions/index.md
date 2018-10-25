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
 
 ## Funciones Anidadas
 
 Si una función existe dentro del cuerpo de otra función, se llama función anidada. Debe tenerse en que, las funciones internas solo pueden ser llamadas y usadas dentro del cierre de la función (función externa).
 
 Ejemplo 1: Función anidada con retorno de valores
 
 ```Swift
func outputMessageByGreeting(_ message: String) {
    
    func addGreetingAndPrint() {
        print("Hola! \(message)")
    }
    addGreetingAndPrint()
}
outputMessageByGreeting("Jack")
```
Cuando ejecute el programa, la salida será:

```Swift
Hola! Jack
```

En el programa de arriba, la función anidada addGreetingAndPrint() es llamada desde el cierre de la función outputMessageByGreeting().

La declaración outputMessageByGreeting("Jack") llama a la función externa. Y la declaración addGreetingAndPrint() dentro de la función externa, llama al método que da salida Hola! Jack en la consola.

Ejemplo 2: Función anidada con parámetros y retorno de valores
Las funciones anidadas pueden contener funciones con parámetros y retorno de valores.

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

En el programa de arriba:

- La función externa es operate(), con valor de retorno del tipo Función (Int, Int) -> Int, y las funciones internas (anidadas) son add() y substract().
- Las funciones anidadas add() y substract() en cierta manera, están siendo usadas fuera del cierre de la función operate(). Esto es posible ya que la función externa retorna una de esas funciones.

Hemos usado la función interna fuera del cierre de la función operate() como operation(2, 3). El programa llama internamente add(2, 3), la cual da salida 5 por la consola.

[Source](https://www.programiz.com/swift-programming/nested-functions) 
