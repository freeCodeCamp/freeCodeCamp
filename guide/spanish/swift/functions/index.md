---
title: Functions
localeTitle: Funciones
---
## Funciones

Las funciones en Swift consisten en un parámetro y un tipo de retorno. Las funciones se pueden crear utilizando esta estructura básica: 
```Swift 
func sayHello (nameOfPerson: String) -> String { 
    let hola = "Hola," + nameOfPerson + "." 
    print(hola)
}

sayHello(nameOfPerson: "Mario") 
``` 
En este ejemplo, la funcion `SayHello` toma un nombre y escribe la frase: ` "Hola, Mario"`.

## Parámetros de función

Las funciones no requieren ningún parámetro de entrada o tipo de retorno. Sin embargo, esto requiere los paréntesis después de nombrar las funciones. 
```Swift 
func HelloMario() { 
    imprimir ("Hola, mariovzc")
}
HelloMario() // Esto imprime "Hola, mariovzc". 
```
