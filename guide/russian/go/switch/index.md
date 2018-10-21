---
title: Switch in Go
localeTitle: Включить Go
---# Включить Go

Оператор переключения Go является альтернативой `if` . Он использует следующий синтаксис:

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

Выход этой программы будет `Red and round.` ,

Сначала мы объявляем переменную `fruit` как `apple` . Затем мы используем переменную `fruit` как выражение условия. Go сравнивает ценность `fruit` с такими `cases` как:

*   плод == "банан" (ложный)
*   фрукты == "яблоко" (правда)

Уведомление о `lemon` не было проверено. После того, как оценка вернётся, больше не рассматриваются случаи.

Как и в `if` , вы можете объявлять временные переменные в выражении условия switch:

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

Переменные `fruit` не будут доступны за пределами оператора switch.

## Стандартные и другие случаи

### По умолчанию

Ключевое слово по `default` - это случай падения, когда другие случаи не возвращают true:

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

Результатом этой программы будет `New fruit: grape!` ,

### То же действие для разных значений

Список значений, разделенных запятыми, для сравнения значения выражения условия с тем же действием.

```go
switch fruit := "lemon"; fruit { 
    case "banana", "lemon": 
        fmt.Printf("Yellow fruit.") 
    default: 
        fmt.Printf("This fruit is a color different than yellow.") 
 } 
```

Выход: `Yellow fruit.` ,

### Без выражения

Переключатель без выражения означает, что значение `switch true` . Это альтернативная версия в цепочке else-if.

```go
fruit := "banana" 
 switch { 
    case fruit == "banana": 
        fmt.Printf("Yellow and long.") 
    default: 
        fmt.Printf("This is not a banana.") 
 } 
```

Это оценивает значение `true == (fruit == "banana")` , упрощенное к `true == true` , которое возвращает true.

### Перерыв

Вы можете сломать код в инструкции switch, чтобы пропустить код.

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

Выход: `This apple is green!` ,

### Провалиться

Переходите к следующему случаю, оценивает ли его условие значение true.

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

Выход: `Yellow and long.` И `Red and round.` ,