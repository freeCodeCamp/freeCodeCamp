---
title: Go Functions
localeTitle: Функции Go
---
## Функции Go

Функция принимает ноль или более параметров любого типа, выполняет некоторую логику с ними и может возвращать одно или несколько значений. Синтаксис функции Голанга:

```go
func sum(parameter1 int64, parameter2 int64) int64 { 
  return parameter1+parameter2 
 } 
```

Здесь имя функции `add` . Он принимает параметры, `parameter1` и `parameter2` типа `int64` и возвращает еще одну int64, сумму двух параметров.

### Вернуть

По достижении `return` функция выходит без выполнения большего количества кода.

```go
func sum(parameter1 int64, parameter2 int64) int64 { 
  return parameter1+parameter2 
  // Unreachable code 
  fmt.Printf("Don't print me") 
 } 
```

### Вызов функции

Вышеупомянутая функция будет вызвана так:

```go
sum(4, 5) 
```

Значение этого выражения равно 9.

### Тип параметра Omit

Если два или более последовательных параметров одного типа, это может быть указано только один раз.

```go
function foo(x, y, z int64, name string) { 
  fmt.Printf("%d %d %d %s", x, y, z, name) 
 } 
```

Здесь `x` , `y` и `z` имеют тип `int64` , а `name` - это строка.

### Возврат нескольких значений

Функция может возвращать ноль или более значений. Чтобы ничего не возвращать, опустите возвращаемый тип:

```go
function helloWorld() { 
  fmt.Printf("Hello world!") 
 } 
```

Чтобы вернуть одно значение, укажите его тип:

```go
function getHelloWorld() string { 
  return "Hello world!" 
 } 
```

Чтобы вернуть более одного значения, укажите их типы, завернутые в `()` и разделенные запятыми:

```go
function getHelloWorldAndBestLanguage() (string, string) { 
  return "Hello world!", "Golang" 
 } 
```

Чтобы получить эти значения, просто объявите переменные, разделенные запятыми, следующим образом:

```go
helloWorld, bestLanguage := getHelloWorldAndBestLanguage() 
 // helloWorld == "Hello world!" 
 // bestLanguage == "Golang" 
```

### Голые возвращения

Вы можете указать типы возврата, чтобы вам не нужно передавать переменную в оператор return:

```go
func duplicate(s string) (first, second string) { 
  first = s 
  last = s 
    return 
 } 
 
 func main() { 
    fmt.Println(split("Hello world!")) // ("Hello world!", "Hello world!") 
 } 
```

#### Дополнительная информация:

https://tour.golang.org/basics/4