---
title: Switch in Go
localeTitle: Cambiar en go
---# Cambiar en go

La declaración de cambio de Go es una alternativa a `if` . Utiliza la siguiente sintaxis:

```go
fruit := "apple" 
 switch fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
```

La salida de este programa sería `Red and round.` .

Primero, declaramos la `fruit` variable como `apple` . Luego usamos la variable `fruit` como la expresión de condición. Go compara el valor de la `fruit` con los `cases` proporcionados así:

*   fruta == "plátano" (falso)
*   fruta == "manzana" (verdadero)

Note que el `lemon` no fue probado. Después de que una evaluación devuelve verdadero, no se intentan más casos.

Como con `if` , puede declarar variables temporales en la expresión de condición del switch:

```go
switch fruit := "apple"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
```

La `fruit` variable no será accesible fuera de la instrucción switch.

## Predeterminado y otros casos

### Defecto

La palabra clave `default` es el caso alternativo cuando ningún otro caso devuelve verdadero:

```go
switch fruit := "grape"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
    default: 
        fmt.Printf("New fruit: %s!", fruit) 
 } 
```

La salida de este programa sería `New fruit: grape!` .

### Misma acción para diferentes valores.

Una lista de valores separados por comas para comparar el valor de expresión de condición con la misma acción.

```go
switch fruit := "lemon"; fruit { 
    case "banana", "lemon": 
        fmt.Printf("Yellow fruit.") 
    default: 
        fmt.Printf("This fruit is a color different than yellow.") 
 } 
```

Salida: `Yellow fruit.` .

### Sin expresión

Un interruptor sin expresión significa `switch true` . Esta es una versión alternativa a una cadena else-if.

```go
fruit := "banana" 
 switch { 
    case fruit == "banana": 
        fmt.Printf("Yellow and long.") 
    default: 
        fmt.Printf("This is not a banana.") 
 } 
```

Esto evalúa `true == (fruit == "banana")` , simpliado a `true == true` , que devuelve true.

### Descanso

Puede romper el código en una instrucción de cambio para omitir cualquier otro código.

```go
appleColor := "green" 
 switch fruit := "apple"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        if appleColor == "green" { 
            fmt.Printf("This apple is green!") 
            break 
        } 
        fmt.Printf("This apple is tasty!") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
```

Salida: ¡ `This apple is green!` .

### Caer a través

Pase al siguiente caso, si su condición se evalúa como verdadera.

```go
switch fruit := "banana"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
        fallthrough 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
```

Salida: `Yellow and long.` Y `Red and round.` .