---
title: Go Slices
---
## Go Slices

Introduction

Go's slice type provides a convenient and efficient means of working with sequences of typed data. Slices are analogous to arrays in other languages, but have some unusual properties. This article will look at what slices are and how they are used.
Arrays

The slice type is an abstraction built on top of Go's array type, and so to understand slices we must first understand arrays.

An array type definition specifies a length and an element type. For example, the type [4]int represents an array of four integers. An array's size is fixed; its length is part of its type ([4]int and [5]int are distinct, incompatible types). Arrays can be indexed in the usual way, so the expression s[n] accesses the nth element, starting from zero. 

```go
var a [4]int
a[0] = 1
i := a[0]
// i == 1
```

Arrays do not need to be initialized explicitly; the zero value of an array is a ready-to-use array whose elements are themselves zeroed: 
```go
// a[2] == 0, the zero value of the int type
```

This is a stub. [Help our community expand it](https://github.com/freecodecamp/guides/tree/master/src/pages/go/go-slices/index.md).

[This quick style guide will help ensure your pull request gets accepted](https://github.com/freecodecamp/guides/blob/master/README.md).

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [A Tour of Go](https://tour.golang.org/moretypes/7)
* [Go By Example](https://gobyexample.com/slices)
* [Golang Book](https://www.golang-book.com/books/intro/6#section2)
* [The Go Programming Language Specification](https://golang.org/ref/spec#Making_slices_maps_and_channels)
* [The Go Blog](https://blog.golang.org/go-slices-usage-and-internals)
