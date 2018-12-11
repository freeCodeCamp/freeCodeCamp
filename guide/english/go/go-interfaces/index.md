---
title: Go Interfaces
---
# Go Interfaces

An interface in Go is a collection of methods. If a type can satisfy all methods in an interface then it is part of that interface.

Let's create a shape interface:

```go
type shape interface {
  area() float64
  perimeter() float64
}
```

This interface has two methods area() and perimeter(). Now lets create a rectangle that satisfies this interface:

```go
type rectangle struct {
  width, height float64
}

func (r rectangle) area() float64 {
  return r.width * r.height
}

func (r rectangle) perimeter() float64 {
  return 2*r.width + 2*r.height
}
```

This rectangle contains all the methods needed to be a shape. Lets add another circle:

```go
type circle struct {
  radius float64
}

func (c circle) area() float64 {
  return math.Pi * c.radius * c.radius  // math.Pi is the Pi constant in the go math package
}

func (c circle) perimeter() float64 {
  return 2 * math.Pi * c.radius
}
```

Now we can create a function that prints out the information of any shape:

```go
func shapeInfo(s shape) {
	fmt.Println(reflect.TypeOf(s)) // reflect.TypeOf(s) will return the type of shape
	fmt.Println(s.area())
	fmt.Println(s.perimeter())
}
```
Because both rectangle and circle satisfy the interface shape they can be used in the shapeInfo function:

```go
func main() {
r := rectangle{width:5, height:10}
c := circle{radius: 12}

shapeInfo(r)
shapeInfo(c)
}
```
Here we called shapeInfor for both a type rectangle and a type cricle.

If we removed the perimeter method from the circle type we would get an error such as:

```
cannot use c (type circle) as type shape in argument to shapeInfo:
        circle does not implement shape (missing perimeter method)
```

# The empty interface

The empty interface is a common tool used by Go programmers. An empty interface contains no methods and has the form:

```go 
interface{}
```

An empty interface can hold values of any type as every type implements atleast zero methods. This can be useful for designing functions where the input type is unknown.

```go
func describe(i interface{}) {
  fmt.Printf("(%v, %T)\n", i, i) // Print the value and type of i
}
```
