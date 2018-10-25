---
title: Go Structs
localeTitle: Ir estruturas
---
## Ir estruturas

No Go, as estruturas são usadas para armazenar dados e funções relacionadas. Um exemplo pode ser uma estrutura para representar um usuário:

```go
type User struct { 
    FirstName string 
    LastName  string 
    Email     string 
    Age       int 
 } 
```

Aqui podemos armazenar o nome, o sobrenome, o endereço de e-mail e a idade de um usuário. O nome da propriedade é seguido pelo tipo de dados que queremos armazenar. Por exemplo, a propriedade `FirstName` é uma `string` enquanto a propriedade `Age` é um `int` .

### Criando Objetos

Para inicializar um novo objeto, podemos usar a sintaxe Go shorthand para criar e atribuir variáveis. Podemos passar os dados nesse momento ou definir os dados mais tarde:

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

### Métodos de objeto

Ir permite atribuir métodos a estruturas. Isso permite o agrupamento de operações relevantes para os dados afetados. Neste exemplo, vamos escrever um método na estrutura `User` para gerar o nome completo do usuário:

```go
func (u User) FullName() string { 
    return strings.Join([]string{u.FirstName, u.LastName}, " ") 
 } 
```

Este método unirá o primeiro e último nome do usuário com um espaço intermediário. Chamar o método pode ser assim:

```go
    println(user1.FullName()) 
```

### Tags de estrutura

Tags de estrutura são usadas para modificar como os codificadores lidam com os dados. Por exemplo, definindo os nomes das chaves ao codificar para JSON:

```go
type User struct { 
    FirstName string `json:"first_name"` 
    LastName  string `json:"last_name"` 
    Email     string `json:"email"` 
    Age       int    `json:"age"` 
 } 
```

### Dados exportados

As estruturas podem conter propriedades exportadas (públicas) e não exportadas (privadas). Isso é definido com uma primeira letra maiúscula para exportada ou uma primeira letra minúscula para não exportada. Neste exemplo, tornaremos a propriedade de email privada:

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

Isso fará com que o código a seguir lance um erro no momento da criação, pois está tentando interagir com uma propriedade não exportada:

```go
    user1.email = "john@wick.com" 
```

Isso também se aplica aos métodos:

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

### Modificando propriedades por meio de métodos

Para modificar os dados de um objeto de dentro de um de seus métodos, o objeto deve ser um ponteiro. Um exemplo pode ser assim:

\`\` \`ir // SetEmail define o endereço de email do usuário func (u \* User) SetEmail (string de email) { u.email = email }

// Acessor de email func (u \* Usuário) Email () string { retornar u.email }

func main () { // Criando o ponteiro user1 user1 = & User { Nome: "John", Sobrenome: "Wick", }
```
// Set the user's email address 
 user1.SetEmail("john@wick.com") 
 
 // Access and print the user's email address 
 println(user1.Email()) 
```

}