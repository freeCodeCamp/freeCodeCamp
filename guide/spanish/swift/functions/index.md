---
title: Functions
localeTitle: Funciones
---
## Funciones

Las funciones en Swift son una forma de procesar una información (un parámetro) aplicandole una serie de calculos y las cuales devuelven un resultado. 
La flecha detras del parentesis indica el tipo de dato que se devolverá, en este caso un String
Las funciones se pueden crear utilizando esta estructura básica: \`\` \`Swift func sayHello (nameOfPerson: String) -> String { let hola = "Hola," + nameOfPerson + "." print (hola) }

sayHello (nameOfPerson: "Steve") ` ``En este ejemplo, la función sayHello recoge un string y imprime la siguiente frase` "Hola, Steve".

## Parámetros de función

Las funciones no requieren ningún parámetro de entrada o tipo de retorno. Sin embargo, esto requiere los paréntesis después de nombrar las funciones. \`\` \`Swift func helloSteve () { print ("Hola, Steve") }

helloSteve () // Esto imprime "Hola, Steve". \`\` \`
