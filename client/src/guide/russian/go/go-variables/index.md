---
title: Go Variables
localeTitle: Переменные переменные
---
# Переменные объявления в Go

## Способ 1. Регулярные объявления переменных

Объявление регулярной переменной создает одну или несколько переменных, связывая идентификаторы с типом и начальным значением. Если переменная объявлена ​​без типа, то этой переменной присваивается тип соответствующего значения инициализации в присваивании. Если переменная определена без начального значения, переменная инициализируется [нулевым значением](https://golang.org/ref/spec#The_zero_value) .

Следующие примеры - все допустимые объявления переменных в go: \`\` \`идти var x int = 1 var y int var z = 0 var a, b float32 = -1, -2
```
## Method 2: Short Variable Declarations 
 
 Shorthand variable declarations create variables with only an identifier and an initial value. The `var` keyword and types are not needed to declare a variable using shorthand syntax: 
```

идти x: = 1 текст, err: = ioutil.ReadAll (читатель) \`\` \`

Короткие объявления переменных могут отображаться только внутри функций. В некоторых контекстах, таких как инициализаторы для операторов `if` , `for` или `switch` , они могут использоваться для объявления локальных временных переменных.

#### Дополнительная информация:

*   [Экскурсия по Го](https://tour.golang.org/basics/8)
*   [По примеру](https://gobyexample.com/variables)
*   [Голанская книга](https://www.golang-book.com/books/intro/4)
*   [Спецификация языка программирования Go](https://golang.org/ref/spec#Variable_declarations)