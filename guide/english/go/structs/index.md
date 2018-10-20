---
title: Go Structs
---
## Go Structs

A struct is a collection of fields. 

```go

type Vertex struct {
	X int
	Y int
}

func main() {
	fmt.Println(Vertex{1, 2})
}

// Displays {1, 2}
```

Struct fields are accessible using a dot. 

```go

type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	v.X = 4
	fmt.Println(v.X)
}

// Displays 4
```


#### More Information:
* [A Tour of Go](https://tour.golang.org/moretypes/2)
