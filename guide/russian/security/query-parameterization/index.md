---
title: Query Parameterization
localeTitle: Параметрирование запроса
---
## Параметрирование запроса

Обычная ошибка при подключении вашей программы к базе данных - это принять вход пользователя и применить его непосредственно к базе данных, не проверив его в первую очередь. Это опасная привычка, и вы можете услышать, что более опытные разработчики предупреждают других о том, что они «дезинфицируют ввод» или «параметризовать запросы».

Начнем с краткого примера, демонстрирующего проблему:

_(следующие фрагменты написаны на C # для MySQL, но концепция применима к любому языку и базе данных)_

### Проблема

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

На первый взгляд это может показаться довольно безобидным. Если пользователь вводит «JDOE» в вашу программу и передается этой функции, вы в конечном итоге выполняете такой запрос:

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; 
```

Проблема становится более очевидной, если вы считаете, что происходит, если пользователь _не_ вводит то, что вы ожидаете. Что делать, если они набирают что-то вроде `JDOE'; DROP TABLE EMPLOYEES; --` ? Теперь ваша строка запроса будет выглядеть так, что выберет информацию о сотруднике, а затем удалит всю таблицу РАБОТНИКОВ!

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; DROP TABLE EMPLOYEES; --' 
```

### Решение

Чтобы предотвратить такие проблемы, мы можем параметризовать наши запросы. Давайте посмотрим на другой пример:

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

Теперь, что произойдет, если пользователь вводит в `JDOE'; DROP TABLE EMPLOYEES; --` ? Наша программа заканчивает выполнение запроса, подобного этому, и, не найдя сотрудника, чье имя пользователя действительно соответствует этому вводу, просто не возвращает записей.

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE\'; DROP TABLE EMPLOYEES; --' 
```

Независимо от того, какой язык или база данных вы используете, если вы рассматриваете запрос базы данных с использованием пользовательского ввода, проверьте документацию для правильного способа параметризации запросов.