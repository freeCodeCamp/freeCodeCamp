---
title: SQL Delete Statement
localeTitle: Declaração de exclusão de SQL
---
## Declaração de exclusão de SQL

Para excluir um registro em uma tabela, use a instrução `DELETE` .

Seja cuidadoso. Você pode excluir todos os registros da tabela ou apenas alguns. Use a condição `WHERE` para especificar quais registros você deseja excluir. A sintaxe é:

```sql
DELETE FROM table_name 
 WHERE condition; 
```

Aqui está um exemplo de exclusão da tabela Pessoa do registro com Id 3:

```sql
DELETE FROM Person 
 WHERE Id = 3; 
```

Usando DELETE para remover todos os registros de uma determinada tabela

```sql
DELETE * FROM Person 
 ; 
```

Ou, dependendo do seu RDBMS, você pode usar a instrução TRUNCATE TABLE, que exclui todos os registros de uma tabela e, dependendo do seu RDBMS, pode ou não permitir a reversão. DELETE é DML e TRUNCATE é DDL.

```sql
TRUNCATE TABLE Person; 

```