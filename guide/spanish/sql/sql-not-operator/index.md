---
title: SQL not Operator
localeTitle: SQL no Operador
---
## SQL no Operador

Puede usar el operador `NOT` en la cláusula `WHERE` de la instrucción `SELECT` . Lo usas cuando quieres seleccionar una condición que no es verdadera.

Aquí hay un ejemplo que selecciona a todas las personas que no son hombres:

```sql
SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE NOT Gender = "M" 

```