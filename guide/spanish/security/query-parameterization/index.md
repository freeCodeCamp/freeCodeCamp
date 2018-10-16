---
title: Query Parameterization
localeTitle: Parametrización de consultas
---
## Parametrización de consultas

Un error común cuando se conecta su programa a una base de datos es aceptar la entrada de un usuario y aplicarla directamente a la base de datos sin verificarla primero. Este es un hábito peligroso, y es posible que escuche a desarrolladores más experimentados que advierten a otros que "desinfecten las entradas" o "parametricen consultas".

Comencemos con un breve ejemplo que demuestra el problema:

_(los siguientes fragmentos están escritos en C # para MySQL, pero el concepto se aplica a cualquier idioma y base de datos)_

### El problema

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

A primera vista, eso puede parecer bastante inofensivo. Si el usuario escribe "JDOE" en su programa y pasa a esta función, terminará ejecutando una consulta como esta:

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; 
```

El problema se vuelve más evidente cuando considera lo que sucede si el usuario _no_ escribe lo que espera. ¿Qué pasa si `JDOE'; DROP TABLE EMPLOYEES; --` algo como `JDOE'; DROP TABLE EMPLOYEES; --` ? Su cadena de "consulta" ahora tiene este aspecto, que seleccionará la información del empleado, luego eliminará toda la tabla de EMPLEADOS.

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; DROP TABLE EMPLOYEES; --' 
```

### La solución

Para evitar problemas como este, podemos parametrizar nuestras consultas. Veamos otro ejemplo:

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

Ahora que pasa si el usuario escribe `JDOE'; DROP TABLE EMPLOYEES; --` ? Nuestro programa termina ejecutando una consulta como esta y, al no encontrar ningún empleado cuyo nombre de usuario realmente coincida con esa entrada, simplemente no devuelve ningún registro.

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE\'; DROP TABLE EMPLOYEES; --' 
```

Independientemente del idioma o la base de datos que esté utilizando, si considera consultar la base de datos utilizando los comentarios del usuario, consulte la documentación para conocer la forma correcta de parametrizar las consultas.