---
title: Variadic Functions
localeTitle: Funciones variables
---
## Funciones variables

Las funciones Variadic son funciones que se pueden llamar con cualquier número de argumentos finales.

Esta es una característica útil cuando estamos trabajando en aplicaciones web.

A veces no sabemos cuántos elementos tendremos que pasar al motor de plantillas HTML.

Aquí están los conceptos básicos sobre cómo funcionan las funciones varidic:

```go
package main 
 import "fmt" 
 
 func printFruits(fruits ...string) { 
    for _, fruit := range fruits{ 
        fmt.Println(fruit) 
    } 
 } 
 
 func main() { 
   printFruits("apple", "bannana") 
   printFruits("papaya", "coconut", "pear", "pineapple") 
   berries := []string{"blueberry", "strawberry", "raspberry"} 
   printFruits(berries...) 
 } 
```

Primero, en printFruits definimos el número de argumentos con \[… cadena\].

Esto le dice a Go que esta función acepta cualquier número de argumentos de cadena.

Las primeras dos llamadas a printFruits muestran que la función imprimirá cada cadena, incluso si estamos pasando un número diferente de argumentos.

```text
apple 
 bannana 
 ... 
 papaya 
 coconut 
 pear 
 ... 
```

Esto también funcionará para las rebanadas.

Para usar una función vardiac con una porción, agregamos los puntos de entrenamiento a la llamada.

```go
printFruits(berries...) 
```

```text
blueberry 
 strawberry 
 raspberry 

```