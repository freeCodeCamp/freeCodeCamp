---
title: SQL or Operator
localeTitle: SQL ou Operador
---
## SQL ou Operador

Você pode usar o operador `OR` na cláusula `WHERE` da `SELECT` . Você o usa quando deseja selecionar um registro que satisfaça pelo menos uma das condições em sua instrução `OR` .

Aqui está um exemplo que seleciona todos os registros da tabela Pessoa que são homens ou que têm o nome "Maria":

```sql
SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE Gender = “M” OR Name = “Mary” 
```

Você pode combinar outros operadores na cláusula `WHERE` (use parênteses para indicar a ordem das operações), como neste exemplo:

```sql
SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE Gender = “M” AND (Name = “Peter” OR Name = “John”) 
```

Este exemplo seleciona todos os registros em que "Sexo" é "M" e o nome é "Pedro", bem como onde "Sexo" é "M" e o nome é "João".