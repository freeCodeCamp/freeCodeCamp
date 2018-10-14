---
title: Go Structs
localeTitle: 去结构
---
## 去结构

在Go中，结构用于存储数据和相关功能。一个示例可能是表示用户的结构：

```go
type User struct { 
    FirstName string 
    LastName  string 
    Email     string 
    Age       int 
 } 
```

在这里，我们可以存储用户的名字，姓氏，电子邮件地址和年龄。该属性的名称后跟我们要存储的数据类型。例如， `FirstName`属性是一个`string`而`Age`属性是一个`int` 。

### 创建对象

要初始化一个新对象，我们可以使用Go简写语法来创建和分配变量。我们可以在此时传递数据，也可以在以后设置数据：

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

### 对象方法

Go允许将方法分配给结构。这样可以将相关操作分组到它所影响的数据中。在这个例子中，我们将在`User`结构上编写一个方法来生成`User`的全名：

```go
func (u User) FullName() string { 
    return strings.Join([]string{u.FirstName, u.LastName}, " ") 
 } 
```

此方法将连接用户的名字和姓氏，其间有空格。调用方法可能如下所示：

```go
    println(user1.FullName()) 
```

### 结构标签

Struct标记用于修改编码器处理数据的方式。例如，在编码为JSON时设置键名：

```go
type User struct { 
    FirstName string `json:"first_name"` 
    LastName  string `json:"last_name"` 
    Email     string `json:"email"` 
    Age       int    `json:"age"` 
 } 
```

### 导出数据

结构可以包含导出（公共）和未导出（私有）属性。这是通过导出的大写首字母或未导出的小写首字母来设置的。在此示例中，我们将使电子邮件属性为私有：

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

执行此操作将使以下代码在构建时抛出错误，因为它尝试与未导出的属性进行交互：

```go
    user1.email = "john@wick.com" 
```

这也适用于方法：

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

### 通过方法修改属性

要从其中一个方法中修改对象的数据，该对象必须是指针。示例可能如下所示：

\`\`\`去 // SetEmail设置用户的电子邮件地址 func（u \* User）SetEmail（电子邮件字符串）{ u.email =电子邮件 }

//电子邮件访问者 func（u \* User）Email（）string { 返回u.email }

func main（）{ //创建user1指针 user1 =＆User { 名字：“约翰”， 姓氏：“威克”， }
```
// Set the user's email address 
 user1.SetEmail("john@wick.com") 
 
 // Access and print the user's email address 
 println(user1.Email()) 
```

}