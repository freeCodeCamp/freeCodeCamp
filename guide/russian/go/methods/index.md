---
title: Go Methods
localeTitle: Методы Go
---## Методы Go

Типы Голанга могут иметь методы. Метод - это функция со специальным аргументом - _приемником_ .

```go
type Rectangle struct { 
  height, width int64 
 } 
 
 func (r Receiver) getArea() int64 { 
  return r.height * r.height 
 } 
 
 r := Rectangle{10, 20} 
 r.getArea() // 200 
```

Здесь тип `Rectangle` имеет метод `getArea` который возвращает область прямоугольника. Приемник здесь `r` .

Этот код эквивалентен:

```go
type Rectangle struct { 
  height, width int64 
 } 
 
 func getArea(r Receiver) int 64{ 
  return r.height * r.height 
 } 
 
 r := Rectangle{10, 20} 
 getArea(r) // 200 
```

Теперь метод getArea получает `r` в качестве аргумента вместо получателя. Функциональность эквивалентна.

### Приемник указателя

Вы можете передать указатель в качестве получателя:

```go
type MyInt int64 
 
 func (m *MyInt) setToZero() { 
  *m = MyInt(0) 
 } 
 
 m := MyInt(10) 
 m.setToZero() // m == 0 
```

### Методы расширения

Если вы хотите создать метод для типа, определенного в другом пакете, например `int` вы можете использовать простую оболочку, например:

```go
type MyInt int64 
 
 func (m MyInt) add10() int64 { 
  return m + 10 
 } 
 
 m := MyInt(10) 
 m.add10() // 20 
```

#### Дополнительная информация:

https://tour.golang.org/methods/1