---
title: Go Methods
---
## Go Methods

Golang types can have methods. A method is a function with a special argument, the _receiver_.

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

Here, type `Rectangle` has got a method called `getArea` that returns the area of the rectangle.
The receiver here is `r`.

This code is equivalent to:
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
Now the getArea method receives `r` as an argument, instead of a receiver. The functionality is equivalent.

### Pointer receiver

You can pass a pointer as a receiver:
```go
type MyInt int64

func (m *MyInt) setToZero() {
  *m = MyInt(0)
}

m := MyInt(10)
m.setToZero() // m == 0
```

### Extension methods

If you want to create a method on a type defined in other package, e.g. `int` you can use a simple wrapper like this:

```go
type MyInt int64

func (m MyInt) add10() int64 {
  return m + 10
}

m := MyInt(10)
m.add10() // 20
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://tour.golang.org/methods/1
