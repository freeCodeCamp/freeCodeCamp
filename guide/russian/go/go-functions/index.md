---
title: Go Functions
localeTitle: Функции Go
---
## Функции Go

Функция представляет собой блок кода, который выполняет задачу при ее вызове, так что имя функции идентифицирует ее и используется при вызове функции.

Объявление функции начинается с ключевого слова `func` за которым следует имя функции, а затем аргументы функции и, наконец, возвращаемые типы значений. Объявление связывает имя функции с функцией. Имейте в виду, что тип появляется после имени переменной как в аргументах, так и в возвращаемых значениях. Примером объявления функции является следующий

```go
func add(a int, b int) int 
```

Функция может иметь 0 или много аргументов в зависимости от желаемой функциональности

```go
func zero() int { /* Function Definition */ } 
 func increment(x int) int { /* Function Definition */ } 
 func add(x, y int) int { /* Function Definition */ } 
```

Go поддерживает возврат нескольких значений. Функция ниже возвращает 2 значения: сумму двух аргументов и разницу между первым и вторым аргументами

```go
func addAndSubtract(x, y int) (int, int) { 
  return x + y, x - y 
 } 
 
 addAndSubtract(7, 4) // Returns 11, 3 
```

Go также поддерживает присвоение имен возвращаемым значениям

```go
func mulitplyByThreeAndDivideByFive(x int) (product int, quotient int) { 
    product = x * 3 
    quotient = x / 5 
    return 
 } 
 
 mulitplyByThreeAndDivideByFive(20) // Returns 60, 4 
```

#### Дополнительная информация:

*   [Экскурсия по Го](https://tour.golang.org/basics/4)
*   [По примеру](https://gobyexample.com/functions)
*   [Голанская книга](https://www.golang-book.com/books/intro/7)
*   [Спецификация языка программирования Go](https://golang.org/ref/spec#Function_declarations)