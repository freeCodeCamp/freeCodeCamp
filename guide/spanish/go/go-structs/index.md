---
title: Go Structs
localeTitle: Ir Estructuras
---
## Ir Estructuras

En Go, las estructuras se utilizan para almacenar datos y funciones relacionadas. Un ejemplo podría ser una estructura para representar a un usuario:

```go
type User struct { 
    FirstName string 
    LastName  string 
    Email     string 
    Age       int 
 } 
```

Aquí podemos almacenar el nombre, el apellido, la dirección de correo electrónico y la edad de un usuario. El nombre de la propiedad va seguido del tipo de datos que queremos almacenar. Por ejemplo, la propiedad `FirstName` es una `string` mientras que la propiedad `Age` es un `int` .

### Creando objetos

Para inicializar un nuevo objeto, podemos usar la sintaxis abreviada de Go para crear y asignar variables. Podemos pasar los datos en este punto o establecer los datos en un momento posterior:

```go
func main() { 
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

### Metodos de objeto

Go permite asignar métodos a estructuras. Esto permite agrupar las operaciones relevantes a los datos que afecta. En este ejemplo, escribiremos un método en la estructura de `User` para generar el nombre completo del usuario:

```go
func (u User) FullName() string { 
    return strings.Join([]string{u.FirstName, u.LastName}, " ") 
 } 
```

Este método unirá el nombre y apellido del usuario con un espacio en el medio. Llamar al método podría verse así:

```go
    println(user1.FullName()) 
```

### Etiquetas de Struct

Las etiquetas Struct se utilizan para modificar cómo los codificadores manejan los datos. Por ejemplo, establecer los nombres de las claves al codificar a JSON:

```go
type User struct { 
    FirstName string `json:"first_name"` 
    LastName  string `json:"last_name"` 
    Email     string `json:"email"` 
    Age       int    `json:"age"` 
 } 
```

### Datos exportados

Las estructuras pueden contener propiedades exportadas (públicas) y no exportadas (privadas). Esto se establece por tener una primera letra mayúscula para exportar o una primera letra minúscula para no exportar. En este ejemplo, haremos que la propiedad del correo electrónico sea privada:

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

Al hacer esto, el siguiente código arrojará un error en el momento de la compilación, ya que está intentando interactuar con una propiedad no exportada:

```go
    user1.email = "john@wick.com" 
```

Esto también se aplica a los métodos:

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

### Modificar propiedades a través de métodos.

Para modificar los datos de un objeto desde uno de sus métodos, el objeto debe ser un puntero. Un ejemplo podría verse así:

\`\` \`ir // SetEmail establece la dirección de correo electrónico del usuario func (u \* User) SetEmail (cadena de correo electrónico) { u.email = email }

// correo electrónico de acceso func (u \* Usuario) Correo electrónico () cadena { volver u.email }

func main () { // Creando el puntero user1 user1 = & User { Nombre: "Juan", Apellido: "Mecha", }
```
// Set the user's email address 
 user1.SetEmail("john@wick.com") 
 
 // Access and print the user's email address 
 println(user1.Email()) 
```

}