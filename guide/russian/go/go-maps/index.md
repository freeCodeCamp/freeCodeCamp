---
title: Go Maps
localeTitle: Go Maps
---
## Go Maps

Карта, называемая _словарем_ на других языках, «сопоставляет» ключи с значениями. Карта объявляется следующим образом:

```go
var m map[Key]Value 
```

Эта карта не имеет ключей, и никакие клавиши не могут быть добавлены к ней. Чтобы создать карту, используйте функцию `make` :

```go
m = make(map[Key]Value) 
```

Все может использоваться как ключ или как значение.

### Изменение карт

Вот некоторые общие действия с картами.

#### Вставка / изменение элементов

Создайте или измените элемент `foo` в map `m` :

```go
m["foo"] = bar 
```

#### Получение элементов

Получить элемент с ключом `foo` в map `m` :

```go
element = m["foo"] 
```

#### Удаление элементов

Удалить элемент с ключом `foo` в map `m` :

```go
delete(m, "foo") 
```

#### Проверьте, был ли ключ использован

Проверьте, используется ли ключ `foo` в map `m` :

```go
element, ok = m["foo"] 
```

Если `ok` `true` , ключ был использован, и `element` хранит значение в `m["foo"]` . Если `ok` является `false` , ключ не использовался, а `element` имеет свои нулевые значения.

### Литералы карт

Вы можете напрямую создавать карты:

```go
var m = map[string]bool{ 
    "Go": true, 
    "JavaScript":false, 
 } 
 
 m["Go"] // true 
 m["JavaScript"] = true // Set Javascript to true 
 delete(m, "JavaScript") // Delete "JavaScript" key and value 
 language, ok = m["C++"] // ok is false, language is bool's zero-value (false) 
```

#### Дополнительная информация:

*   [Экскурсия по Го](https://tour.golang.org/moretypes/19)
*   [По примеру](https://gobyexample.com/maps)
*   [Голанская книга](https://www.golang-book.com/books/intro/6#section3)
*   [Спецификация языка программирования Go](https://golang.org/ref/spec#Making_slices_maps_and_channels)