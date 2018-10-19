---
title: Go Structs
---
## Go Structs

Go supports user-defined or custom types called structs. Structs are more convenient to use because of their excellent support for embedding. Structs in Go and the data they contain, even when a struct contains other structs, form a continuous block in memory.

The general format of the definition of a struct is as follows:
```go
type identifier struct {
field1 type1
field2 type2
…
}
```
### Example
```go
type City struct {
	Name	string
	State	string
	Country	string
	ZipCode	int
}

```
OR
```go
type City struct {
	Name, State, Country string	
	ZipCode	int
}

```
The different data that constitute the struct type are called fields. 
- Each field has a type and a name.
- Field names must be unique. 
- We can access fields using the ```.``` operator.
- These fields can be of any type:
  * functions
  * interfaces
  * or even structs themselves.

### Initialization
```go 
var city1 City
```
OR
```go
city1 := new(City)
```
Creates a variable named ```city1``` of type ```City```.
```new``` function allocates memory for all the fields, sets each of them to their zero value and returns a pointer(*City).
In both cases city1 can be called an instance of the type City.
### Initializing and allocating field values
```go
city1 := City{	Name: "San Francisco", 
				State: "California", 
				Country: "United States of America", 
				ZipCode: 94101}
```
OR  if we know the order of the field names in the struct definition:
```go
city1 := City{"San Francisco", "California", "United States of America", 94101}
```
### Accessing field values using ``` . ``` operator
```go
fmt.Printf("Welcome to %s! We hope you have a great stay at %s.", city1.State, city1.Name)
```
Output:
```bash
Welcome to California! We hope you have a great stay at San Francisco.
```
More information on the book _The Way to Go:  A Thorough Introduction to the Go Programming  by Ivo Balbaert_

