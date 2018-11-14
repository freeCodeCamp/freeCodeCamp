---
title: Go Structs
---
## Go Structs

In Go, structs are used to store data and related functions. An example might be a struct to represent a User:

```go
type User struct {
    FirstName string
    LastName  string
    Email     string
    Age       int
}
```

Here we can store a user's first name, last name, email address, and age. The name of the property is followed by the type of data we want to store. For example, the `FirstName` property is a `string` whereas the `Age` property is an `int`.

### Creating objects

To initialise a new object, we can use the Go shorthand syntax for creating and assigning variables. We can either pass the data in at this point or set the data at a later time:

```go
func main() {
    type MyInt int64
    
    // Create a user and set both the first and last name properties
    user1 := User{
        FirstName: "John",
        LastName: "Wick",
    }

    // Now we have our user object, we can set the data like this
    user1.Email = "john@wick.com"
    user1.Age = 30
}
```

### Object methods

Go enables declaring methods to struct types and non struct types. This enables grouping of relevant operations to the data it affects. In this example we will write a method on the `User` struct to generate the full name of the user and String method on `MyInt` type to return a String:

```go
func (myint MyInt) String() string {
    return fmt.Sprintf("%d", myint)
}

func (u User) FullName() string {
    return strings.Join([]string{u.FirstName, u.LastName}, " ")
}
```

This method will join the first and last name of the user with a space in between. Calling the method might look like this:

```go
    fmt.println(user1.FullName())
```

### Struct Tags

Struct tags are used to modify how encoders handle the data. For example, setting the key names when encoding to JSON:

```go
type User struct {
    FirstName string `json:"first_name"`
    LastName  string `json:"last_name"`
    Email     string `json:"email"`
    Age       int    `json:"age"`
}
```

### Exported Data

Structs can contain both exported (public) and unexported (private) properties. This is set by either having an uppercase first letter for exported or a lowercase first letter for unexported. In this example, we will make the email property private:

```go
type User struct {
    // Exported Data
    FirstName string
    LastName  string
    Age       int

    // Unexported Data
    email     string
}
```

Doing this will make the following code throw a compilation error as it is trying to assign value to an unexported property:

```go
    user1.email = "john@wick.com"
```

Same principle applies when attempting to read data from an unexported property.

This also applies to methods:

```go
// Exported method. This can be called from anywhere
func (u User) Email() {
    return u.email
}

// Unexported method. This can only be called by other methods on this struct
func (u User) updateLoginCount {
    // code to update login count...
}
```

### Modifying properties via methods

To modify the data of an object from within one of its methods, the object must be a pointer. An example might look like this:

```go
// SetEmail sets the user's email address
func (u *User) SetEmail(email string) {
    u.email = email
}

// Email accessor
func (u *User) Email() string {
    return u.email
}

func main() {
    // Creating the user1 pointer
    user1 = &User{
        FirstName: "John",
        LastName: "Wick",
    }

    // Set the user's email address
    user1.SetEmail("john@wick.com")

    // Access and print the user's email address
    fmt.println(user1.Email())
}
