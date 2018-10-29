---
title: Query Parameterization
localeTitle: 查询参数化
---
## 查询参数化

将程序连接到数据库时常见的错误是接受用户的输入并将其直接应用于数据库而不先检查它。这是一个危险的习惯，您可能会听到更多有经验的开发人员警告其他人“清理输入”或“参数化查询”。

让我们从一个展示问题的简短示例开始：

_（以下代码片段是用C＃编写的，但是这个概念适用于任何语言和数据库）_

### 问题

```csharp
public void RetrieveEmployeeInfo(string username) 
 { 
    using (var connection = new MySqlConnection("valid_connection_string")) 
    { 
        var query = "SELECT * FROM EMPLOYEES WHERE USERNAME = '" + username + "'"; 
 
        using (var command = new MySqlCommand(query, connection)) 
        { 
            var reader = command.ExecuteReader(); 
            while (reader.Read()) 
            { 
                // do something with the results of your query, like display the employee 
            } 
        } 
    } 
 } 
```

乍一看，这似乎相当无害。如果用户在您的程序中键入“JDOE”，并将其传递给此函数，您最终将执行如下查询：

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; 
```

当您考虑如果用户_未_键入您期望的内容时会发生什么，问题就会变得更加明显。如果他们输入类似`JDOE'; DROP TABLE EMPLOYEES; --`怎样`JDOE'; DROP TABLE EMPLOYEES; --` ？您的“查询”字符串现在看起来像这样，它将选择员工信息，然后删除整个EMPLOYEES表！

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; DROP TABLE EMPLOYEES; --' 
```

### 解决方案

为了防止这样的问题，我们可以参数化我们的查询。让我们看另一个例子：

```csharp
public void RetrieveEmployeeInfo(string username) 
 { 
    using (var connection = new MySqlConnection("valid_connection_string")) 
    { 
        var query = "SELECT * FROM EMPLOYEES WHERE USERNAME = @username"; 
 
        using (var command = new MySqlCommand(query, connection)) 
        { 
            command.Parameters.AddWithValue("username", username); 
 
            var reader = command.ExecuteReader(); 
            while (reader.Read()) 
            { 
                // do something with the results of your query, like display the employee 
            } 
        } 
    } 
 } 
```

现在如果用户键入`JDOE'; DROP TABLE EMPLOYEES; --`会发生什么`JDOE'; DROP TABLE EMPLOYEES; --` ？我们的程序最终执行这样的查询，并且找不到其用户名实际上与该输入匹配的员工，只返回没有记录。

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE\'; DROP TABLE EMPLOYEES; --' 
```

无论您使用哪种语言或数据库，如果考虑使用用户输入查询数据库，请查看文档以了解参数化查询的正确方法。