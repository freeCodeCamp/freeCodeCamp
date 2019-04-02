---
title: If in Go
localeTitle: Если в Go
---
# Если в Go

Гоу , `if` заявления , как его `for` петель; выражение не должно быть окружено круглыми скобками `(` `)` но требуются скобки `{` `}` .

```go
func sqrt(x float64) string { 
    if x < 0 { 
        return sqrt(-x) + "i" 
    } 
    return fmt.Sprint(math.Sqrt(x)) 
 } 
```

Как и `for` , оператор `if` может начинаться с краткой инструкции для выполнения перед условием.

Переменные, объявленные оператором, находятся только в области действия до конца `if` .

```go
func pow(x, n, lim float64) float64 { 
    if v := math.Pow(x, n); v < lim { 
        return v 
    } 
    return lim 
 } 
```

## Если и еще

Переменные, объявленные внутри короткого оператора `if` , также доступны внутри любого из блоков `else` .

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

Выполнение вышеуказанной программы дает результат, похожий на следующий вывод - `$ go run if.go 27 >= 20 9 20`