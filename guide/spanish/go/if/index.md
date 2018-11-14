---
title: If in Go
localeTitle: Si en ir
---
# Si en ir

Ir `if` declaraciones son como su `for` bucles; La expresión no necesita estar entre paréntesis `(` `)` pero se requieren las llaves `{` `}` .

```go
func sqrt(x float64) string { 
    if x < 0 { 
        return sqrt(-x) + "i" 
    } 
    return fmt.Sprint(math.Sqrt(x)) 
 } 
```

Al igual que `for` , la instrucción `if` puede comenzar con una instrucción corta para ejecutar antes de la condición.

Las variables declaradas por la declaración solo están en el alcance hasta el final del `if` .

```go
func pow(x, n, lim float64) float64 { 
    if v := math.Pow(x, n); v < lim { 
        return v 
    } 
    return lim 
 } 
```

## Si y si no

Las variables declaradas dentro de una instrucción `if` también están disponibles dentro de cualquiera de los bloques `else` .

```go
package main 
 
 import ( 
    "fmt" 
    "math" 
 ) 
 
 func pow(x, n, lim float64) float64 { 
    if v := math.Pow(x, n); v < lim { 
        return v 
    } else { 
        fmt.Printf("%g >= %g\n", v, lim) 
    } 
    // can't use v here, though 
    return lim 
 } 
 
 func main() { 
    fmt.Println( 
        pow(3, 2, 10), 
        pow(3, 3, 20), 
    ) 
 } 
```

Ejecutar el programa anterior produce una salida similar a la siguiente salida: `$ go run if.go 27 >= 20 9 20`