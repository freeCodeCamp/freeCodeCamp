---
title: SQL not Operator
localeTitle: SQL Operador NÃO (NOT)
---
## SQL Operador NÃO (NOT)

Você pode usar o operador `NOT` na cláusula `WHERE` da `SELECT` . Você o usa quando deseja selecionar uma condição que não é verdadeira.

Aqui está um exemplo que seleciona todas as pessoas que não são masculinas:

```sql
SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE NOT Gender = "M" 

```
