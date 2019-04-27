---
title: Go Slices
---
## Go Slices

Slices are a key data type in Go, giving a more powerful interface to sequences than arrays.

Unlike arrays, slices are typed only by the elements they contain (not the number of elements). To create an empty slice with non-zero length, use the builtin make. Here we make a slice of strings of length 3 (initially zero-valued).

```s := make([]string, 3)```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [A Tour of Go](https://tour.golang.org/moretypes/7)
* [Go By Example](https://gobyexample.com/slices)
* [Golang Book](https://www.golang-book.com/books/intro/6#section2)
* [The Go Programming Language Specification](https://golang.org/ref/spec#Making_slices_maps_and_channels)
