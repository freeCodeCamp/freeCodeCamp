---
title: Go Structs
---
## Go Structs

Go's struct helps in grouping similar data together. It helps in creating custom types apart from the primitive data types. When we create a struct, we can use it the same way as we can use a primitive data type. Just like we have classes in Java and other object oriented programming languages, we have structs in golang. Using structs we can model real world entities.

In the below code, a struct named person is defined with name, age, gender and profession fields. Keyword type introduces a new type.

```go
type Person struct {
  name string
  age int
  gender string
  profession string
}
```

### Initialization

`lobster := new(Person)`  
This statement will allocate memory for all the fields of the struct and and return a pointer to that memory location. All the values are initialised to zero values or default values.
Sometimes, we want to initialize the struct with pre-defined values. We can do this by:  
`john := Person{"John", 23, "Male", "Developer"}`  
Keep note of the fact that the fields should be in the same order as we have defined above.

If you don't want to keep a track of the order, you can use the following syntax:  
`mary := Person{name: "Mary", age: 26, profession: "Teacher", gender: "Female"}`

### Accessing Field values

We can use the `.` operator to access the fields in a struct.  
`john := Person{"John", 23, "Male", "Developer"}`  
`fmt.Println(john.name)`  
This statement will print John.

To modify a field:  
`john.age = 25`

#### More Information:
* [Refer here for a quick introduction](https://gobyexample.com/structs)
* [JSON encoding using Go structs](https://gobyexample.com/json)