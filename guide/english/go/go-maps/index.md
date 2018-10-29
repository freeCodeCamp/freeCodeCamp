---
title: Go Maps
---
## Go Maps

A map, called a _dictionary_ in other languages, "maps" keys to values.
A map is declared like this:
```go
var m map[Key]Value
```
This map has no keys and no keys can be added to it.
To create a map, use the `make` function:
```go
m = make(map[Key]Value)
```
Anything can be used as a key or as a value.

### Modifying maps
Here are some common action with maps.

#### Inserting/Changing elements
Create or change element `foo` in map `m`:
```go
m["foo"] = bar
```
#### Getting elements
Get element with key `foo` in map `m`:
```go
element = m["foo"]
```

#### Deleting elements
Delete element with key `foo` in map `m`:
```go
delete(m, "foo")
```

#### Check if a key has been used
Check if key `foo` has been used in map `m`:
```go
element, ok = m["foo"]
```
If `ok` is `true`, the key has been used and `element` holds the value at `m["foo"]`.
If `ok` is `false`, the key has not been used and `element` holds its zero-values.

### Map literals
You can directly create map literals:
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

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [A Tour of Go](https://tour.golang.org/moretypes/19)
* [Go By Example](https://gobyexample.com/maps)
* [Golang Book](https://www.golang-book.com/books/intro/6#section3)
* [The Go Programming Language Specification](https://golang.org/ref/spec#Making_slices_maps_and_channels)
