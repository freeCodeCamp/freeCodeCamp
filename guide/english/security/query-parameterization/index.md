---
title: Query Parameterization
---
## Query Parameterization

A common mistake when connecting your program to a database is to accept a user's input and apply it directly to the database without checking it first. This is a dangerous habit to get into, and you may hear more experienced developers warning others to "sanitize input" or "parameterize queries".

Let's start with a short example demonstrating the problem:

_(the following snippets are written in C# for MySQL, but the concept applies to any language and database)_

### The Problem

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

At first glance, that might seem fairly harmless. If the user types "JDOE" into your program, and it's passed to this function, you'll end up executing a query like this:

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE';
```

The problem becomes more apparent when you consider what happens if the user _doesn't_ type what you expect. What if they type something like `JDOE'; DROP TABLE EMPLOYEES; --`? Your "query" string now looks like this, which will select the employee info, then delete the entire EMPLOYEES table!

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; DROP TABLE EMPLOYEES; --'
```

### The Solution

To prevent issues like this, we can parameterize our queries. Let's look at another example:

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

Now what happens if the user types in `JDOE'; DROP TABLE EMPLOYEES; --`? Our program ends up executing a query like this one and, finding no employee whose username actually matches that input, simply returns no records.

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE\'; DROP TABLE EMPLOYEES; --'
```

No matter which language or database you're using, if you consider querying the database using user input, check the documentation for the proper way to parameterize queries.
