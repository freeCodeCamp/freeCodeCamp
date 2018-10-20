---
title: Query Parameterization
localeTitle: Parâmetro de Consulta
---
## Parâmetro de Consulta

Um erro comum ao conectar seu programa a um banco de dados é aceitar a entrada de um usuário e aplicá-lo diretamente ao banco de dados sem antes verificá-lo. Esse é um hábito perigoso de se entrar, e você pode ouvir desenvolvedores mais experientes alertando outras pessoas para "limpar a entrada" ou "parametrizar as consultas".

Vamos começar com um pequeno exemplo demonstrando o problema:

_(os seguintes trechos são escritos em C # para o MySQL, mas o conceito se aplica a qualquer idioma e banco de dados)_

### O problema

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

À primeira vista, isso pode parecer bastante inofensivo. Se o usuário digitar "JDOE" em seu programa e for passado para essa função, você acabará executando uma consulta como esta:

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; 
```

O problema se torna mais aparente quando você considera o que acontece se o usuário _não_ digitar o que você espera. E se eles `JDOE'; DROP TABLE EMPLOYEES; --` algo como `JDOE'; DROP TABLE EMPLOYEES; --` Sua string de "consulta" agora se parece com isso, que seleciona as informações dos funcionários e, em seguida, exclui toda a tabela EMPLOYEES!

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE'; DROP TABLE EMPLOYEES; --' 
```

### A solução

Para evitar problemas como esse, podemos parametrizar nossas consultas. Vamos ver outro exemplo:

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

Agora o que acontece se o usuário digitar `JDOE'; DROP TABLE EMPLOYEES; --` Nosso programa acaba executando uma consulta como esta e, não encontrando nenhum funcionário cujo nome de usuário realmente corresponda a essa entrada, simplesmente não retorna nenhum registro.

```sql
SELECT * FROM EMPLOYEES WHERE USERNAME = 'JDOE\'; DROP TABLE EMPLOYEES; --' 
```

Não importa qual idioma ou banco de dados você esteja usando, se você considerar a consulta do banco de dados usando a entrada do usuário, verifique a documentação para a maneira correta de parametrizar as consultas.