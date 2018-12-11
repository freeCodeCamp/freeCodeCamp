---
title: Hello World in Kotlin
localeTitle: Hola Mundo en Kotlin
---
Un programa Hello World es un programa muy simple que genera la cadena "Hello World!". A menudo se utiliza para mostrar la sintaxis básica de un lenguaje de programación.

En este tutorial vamos a analizar la sintaxis de un programa Hello World escrito en Kotlin.

Si aún no ha instalado Kotlin, debe consultar este tutorial: https://guide.freecodecamp.org/kotlin

## Programa Hello World

```kotlin
// This is a simple Hello World program written in Kotlin 
 
 fun main(args : Array<String>) { 
    println("Hello, World!") 
 } 
```

Como es de esperar, cuando ejecute este programa, la salida debería ser "¡Hola, mundo!".

## Sintaxis

### Comentarios
```
// This is a simple Hello World program written in Kotlin 
```

Los comentarios son textos escritos por un desarrollador que se agregan con el propósito de hacer que el código sea más fácil de entender para otros desarrolladores. En Kotlin, los comentarios pueden ser comentarios de una sola línea (con //) o comentarios de varias líneas (con / \*\* /).
```
// Single line comment 
 
 /* This is a 
 Multi-line comment 
 */ 
```

### Función principal

```kotlin
fun main(args : Array<String>) {...} 
```

La función principal es una función obligatoria que le indica al compilador dónde debe comenzar a ejecutar nuestro código. Toma una matriz de cadenas como parámetro y devuelve el tipo de unidad que corresponde al tipo `void` en lenguajes como Java. Como podemos ver, las funciones se declaran con el uso de la palabra clave `fun` y su cuerpo debe escribirse entre llaves.

Las funciones sin un tipo de retorno declarado explícitamente devolverán el tipo `Unit` , por lo tanto, el código anterior es equivalente a

```kotlin
fun main(args : Array<String>): Unit {...} 
```

### Imprimir Declaración

La función println toma una cadena como argumento y la imprime en la pantalla. En este caso estamos imprimiendo la cadena "Hello, World!". Tenga en cuenta que los literales de cadena se declaran utilizando comillas dobles `"String"` .

Si desea saber más sobre la sintaxis de Kotlin y comenzar a escribir programas geniales, debe consultar la impresionante documentación oficial de Kotlin: https://kotlinlang.org/docs/reference/

Espero que te haya gustado este tutorial, Aclamaciones