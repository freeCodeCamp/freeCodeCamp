---
title: If in Go
localeTitle: Se em Go
---
# Se em Go

As declarações `if` de go são como seus loops `for` ; a expressão não precisa ser cercada por parênteses `(` `)` mas as chaves `{` `}` são necessárias.

```go
func sqrt(x float64) string { 
    if x < 0 { 
        return sqrt(-x) + "i" 
    } 
    return fmt.Sprint(math.Sqrt(x)) 
 } 
```

Como `for` , a instrução `if` pode começar com uma instrução curta para executar antes da condição.

As variáveis ​​declaradas pela instrução estão apenas no escopo até o final do `if` .

```go
func pow(x, n, lim float64) float64 { 
    if v := math.Pow(x, n); v < lim { 
        return v 
    } 
    return lim 
 } 
```

## Se e mais

Variáveis ​​declaradas dentro de uma instrução `if` short também estão disponíveis dentro de qualquer um dos blocos `else` .

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

Executar o programa acima produz uma saída semelhante à seguinte saída - `$ go run if.go 27 >= 20 9 20`