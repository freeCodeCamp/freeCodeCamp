---
title: SQL Insert into Select Statement
localeTitle: Inserir SQL na instrução Select
---
## Inserir SQL na instrução Select

Você pode inserir registros em uma tabela usando dados que já estão armazenados no banco de dados. Esta é apenas uma cópia dos dados e não afeta a tabela de origem.

A `INSERT INTO SELECT` combina instruções `INSERT INTO` e `SELECT` e você pode usar qualquer condição desejada. A sintaxe é:

```sql
INSERT INTO table2 (column1, column2, column3, ...) 
 SELECT column1, column2, column3, ... 
 FROM table1 
 WHERE condition; 
```

Aqui está um exemplo que insere na tabela Pessoa todos os alunos do sexo masculino da tabela Alunos.

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 SELECT Id, Name, DateOfBirth, Gender 
 FROM Students 
 WHERE Gender = 'M' 

```