---
title: SQL or Operator
localeTitle: SQL u operador
---
## SQL u operador

Puede usar el operador `OR` en la cláusula `WHERE` de la instrucción `SELECT` . Lo usa cuando desea seleccionar un registro que satisfaga al menos una de las condiciones en su declaración `OR` .

Aquí hay un ejemplo que selecciona todos los registros de la tabla de Personas que son hombres o que tienen el nombre "María":

```sql
SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE Gender = “M” OR Name = “Mary” 
```

Puede combinar otros operadores en la cláusula `WHERE` (use paréntesis para indicar el orden de las operaciones) como en este ejemplo:

```sql
SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE Gender = “M” AND (Name = “Peter” OR Name = “John”) 
```

Este ejemplo selecciona todos los registros donde Género es "M" y Nombre es "Peter", así como donde Género es "M" y Nombre es "Juan".