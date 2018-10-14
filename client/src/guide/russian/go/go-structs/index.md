---
title: Go Structs
localeTitle: Go Structs
---
## Go Structs

В Go структуры используются для хранения данных и связанных функций. Примером может быть структура, представляющая пользователя:

```go
type User struct { 
    FirstName string 
    LastName  string 
    Email     string 
    Age       int 
 } 
```

Здесь мы можем сохранить имя пользователя, фамилию, адрес электронной почты и возраст. За именем свойства следует тип данных, которые мы хотим сохранить. Например, свойство `FirstName` является `string` тогда как свойство `Age` является `int` .

### Создание объектов

Чтобы инициализировать новый объект, мы можем использовать синтаксис сокращения строк для создания и назначения переменных. Мы можем либо передать данные в этот момент, либо установить данные позднее:

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

### Методы объекта

Go позволяет назначать методы для структур. Это позволяет группировать соответствующие операции с данными, которые он затрагивает. В этом примере мы напишем метод в структуре `User` для генерации полного имени пользователя:

```go
func (u User) FullName() string { 
    return strings.Join([]string{u.FirstName, u.LastName}, " ") 
 } 
```

Этот метод будет соединяться с первым и последним именем пользователя с промежутком между ними. Вызов метода может выглядеть так:

```go
    println(user1.FullName()) 
```

### Теги структуры

Теги Struct используются для изменения способа обработки данных кодами. Например, задание имен ключей при кодировании JSON:

```go
type User struct { 
    FirstName string `json:"first_name"` 
    LastName  string `json:"last_name"` 
    Email     string `json:"email"` 
    Age       int    `json:"age"` 
 } 
```

### Экспортированные данные

Структуры могут содержать как экспортированные (общедоступные), так и неэкспортированные (частные) свойства. Это устанавливается либо с первой буквой в верхнем регистре для экспорта, либо с первой буквой в нижнем регистре для невыполненных. В этом примере мы сделаем свойство электронной почты приватным:

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

Выполнение этого приведет к тому, что следующий код выведет ошибку во время сборки, поскольку она пытается взаимодействовать с неконтролируемым свойством:

```go
    user1.email = "john@wick.com" 
```

Это также относится к методам:

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

### Изменение свойств с помощью методов

Чтобы изменить данные объекта из одного из его методов, объект должен быть указателем. Пример может выглядеть так:

\`\` \`Идти // SetEmail устанавливает адрес электронной почты пользователя func (u \* User) SetEmail (строка электронной почты) { u.email = электронная почта }

// Аксессуар электронной почты func (u \* User) Электронная почта () string { вернуть u.email }

func main () { // Создание указателя user1 user1 = & User { FirstName: «Джон», LastName: «Wick», }
```
// Set the user's email address 
 user1.SetEmail("john@wick.com") 
 
 // Access and print the user's email address 
 println(user1.Email()) 
```

}