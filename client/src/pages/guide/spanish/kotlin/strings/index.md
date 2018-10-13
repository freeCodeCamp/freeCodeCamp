---
title: Strings
localeTitle: Instrumentos de cuerda
---
# Instrumentos de cuerda

Una cadena es un tipo de datos básico en un lenguaje de programación. Las cadenas están representadas por el tipo `String` . Las cuerdas son inmutables. Kotlin tiene una API rica para trabajar con cadenas.

### Uso básico

#### Declaración

```kotlin
// Explicit type declaration 
 var firstName : String = "Elon" 
 
 // or Implicit type declaration and will still compile 
 val lastName = "Musk" 
```

Además, note el uso del tipo de variable `val` , aquí es cómo se comporta

```kotlin
firstName = "Mark" // can be changed 
 lastName = "Zuckerberg" // cannot be changed 
 lastName = 12 // Error: type mismatch 
```

#### Concatenacion de cuerdas

Se muestra en el fragmento de código, al igual que Java, anexando `Int` a `String` resultará a una salida de `String`

```kotlin
var str = "abc" + 1 
 println(str + "def") 
```

Salida:

```shell
abc1def 
```

Incluso sin convertir primero explícitamente el valor `Int` 1 al objeto `String` , la salida resultante sigue siendo un `String` .

#### Cadena con líneas múltiples

Los programadores pueden declarar variables de `String` con varias líneas utilizando comillas triples en lugar de comillas dobles

```kotlin
var str = """ 
        This is line 1 
        This is line 2 
        This is line 3 
        """ 
 println(str) 
```

Salida:

```shell
        This is line 1 
        This is line 2 
        This is line 3 
```

o con `.trimIndent()`

El uso de `trimIndent()` también ayudará a proporcionar un formato de salida limpio al eliminar las sangrías excesivas e innecesarias en cada línea. Examine el fragmento de código a continuación:

```kotlin
var str = """ 
        This is line 1 
        This is line 2 
        This is line 3 
        """.trimIndent() 
 println(str) 
```

Salida:

```shell
This is line 1 
 This is line 2 
 This is line 3 
```

### Accediendo a los personajes de una cadena

#### Acceso al índice

Los programadores pueden acceder a los elementos (caracteres) de una cadena mediante el operador de acceso de índice:

```kotlin
var str = "Example" 
 println(str[2]) 
```

Salida:

```shell
a 
```

Es como acceder a un elemento desde una matriz, obtienes:

```kotlin
var str = "Example" 
 println(str[9]) // Error: index out of bounds 
```

#### Iterar a través de una cadena

Los elementos de una cadena son caracteres a los que se puede acceder mediante la operación de indexación: `s[i]` .

```kotlin
var str = "Example" 
 for (c in str) { 
    println(c) 
 } 
```

Salida:

```shell
E 
 x 
 a 
 m 
 p 
 l 
 e 
```

### Inmutabilidad de una cuerda

Al igual que Java, no puede cambiar elementos individuales de una `String`

```kotlin
var str = "Example" 
 str[2] = "b" // Error 
```

#### Reasignando valores de cadena

```kotlin
var str = "Example" 
 println(str) 
 str = "Example was changed" 
 println(str) 
```

Salida:

```shell
Example 
 Example was changed 
```

### Propiedades de la cadena

#### Determinar la longitud de una cadena

```kotlin
var str = "Example" 
 println(str.length) 
```

Salida:

```shell
7 
```

### Funciones de cadena

Estas son algunas de las funciones comunes de `String` disponibles en la versión actual de Kotlin.

### comparar con

Compara este objeto con el objeto especificado por orden. Devuelve cero si este objeto es igual al otro objeto especificado, un número negativo si es menor que otro, o un número positivo si es mayor que otro.

```kotlin
var str = "Example" 
 var str2 = "Example123" 
 var str3 = "Example12345" 
 println(str.compareTo(str2)) 
 println(str.compareTo(str3)) 
 println(str3.compareTo(str)) 
 println(str.compareTo("Example")) 
```

Salida:

```shell
-3 
 -5 
 5 
 0 # Equal 
```

### es igual a

Indica si un objeto `String` es exactamente igual a otro objeto `String`

```kotlin
var str = "Example" 
 var str2 = "Example2" 
 println(str.equals("Example")) 
 println(str2.equals("Example")) 
```

Salida:

```shell
true 
 false 
```

### obtener

Devuelve el carácter en el índice especificado en esta secuencia de caracteres.

\`\` \`kotlin var str = "Ejemplo" println (str.get (3))
```
Output: 
```

cáscara metro
```
### toString 
 
 Returns a string representation of the object. 
```

Kotlin println (9.toString () + 10) println (9 + 10)
```
Output: 
```

cáscara "910" 19 \`\` \`

#### Recursos

*   [Tipos básicos de Kotlin](https://kotlinlang.org/docs/reference/basic-types.html)
*   [Referencia de la cadena Kotlin](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)