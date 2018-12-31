---
title: Switch in Go
localeTitle: Mudar em Go
---# Mudar em Go

A instrução switch do Go é uma alternativa para `if` . Ele usa a seguinte sintaxe:

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

A saída deste programa seria `Red and round.` .

Primeiro, declaramos a variável `fruit` como `apple` . Em seguida, usamos a variável `fruit` como expressão de condição. Go compara o valor da `fruit` com os `cases` fornecidos assim:

*   fruta == "banana" (falso)
*   fruta == "maçã" (verdadeiro)

Observe que o `lemon` não foi testado. Depois que uma avaliação retorna true, nenhum outro caso é tentado.

Como com `if` , você pode declarar variáveis ​​temporárias na expressão de condição do switch:

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

A variável `fruit` não estará acessível fora da instrução switch.

## Default e outros casos

### Padrão

A palavra-chave `default` é o caso fallback quando nenhum outro caso retorna true:

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

A saída deste programa seria `New fruit: grape!` .

### Mesma ação para valores diferentes

Uma lista de valores separados por vírgula para comparar o valor da expressão de condição com a mesma ação.

```go
switch fruit := "lemon"; fruit { 
    case "banana", "lemon": 
        fmt.Printf("Yellow fruit.") 
    default: 
        fmt.Printf("This fruit is a color different than yellow.") 
 } 
```

Saída: `Yellow fruit.` .

### Nenhuma expressão

Um switch sem expressão significa `switch true` . Esta é uma versão alternativa para uma cadeia else-if.

```go
fruit := "banana" 
 switch { 
    case fruit == "banana": 
        fmt.Printf("Yellow and long.") 
    default: 
        fmt.Printf("This is not a banana.") 
 } 
```

Isso avalia `true == (fruit == "banana")` , simpliefied para `true == true` , que retorna true.

### Pausa

Você pode quebrar o código em uma instrução switch para pular qualquer outro código.

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

Saída: `This apple is green!` .

### Cair em

Pule para o próximo caso, independentemente de sua condição ser avaliada como verdadeira.

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

Saída: `Yellow and long.` E `Red and round.` .