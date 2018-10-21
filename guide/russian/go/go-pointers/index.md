---
title: Go Pointers
localeTitle: Go Указатели
---
## Go Указатели

Это заглушка. [Помогите нашему сообществу расширить его](https://github.com/freecodecamp/guides/tree/master/src/pages/go/go-pointers/index.md) .

[Это руководство по быстрому стилю поможет вам принять ваш запрос на тягу](https://github.com/freecodecamp/guides/blob/master/README.md) .

указатели

У Go есть указатели. Указатель содержит адрес памяти значения.

Тип \* T является указателем на значение T. Его нулевое значение равно нулю.

var p \* int

Оператор & генерирует указатель на его операнд.

i: = 42 p = & i

Оператор \* обозначает базовое значение указателя.

fmt.Println (\* p) // читаем i через указатель p \* p = 21 // установить i через указатель p

Это называется «разыменованием» или «косвенным».

В отличие от C, Go не имеет арифметики указателей.

#### Дополнительная информация:

*   [Экскурсия по Го](https://tour.golang.org/moretypes/1)
*   [По примеру](https://gobyexample.com/pointers)
*   [Голанская книга](https://www.golang-book.com/books/intro/8)
*   [Спецификация языка программирования Go](https://golang.org/ref/spec#Address_operators)