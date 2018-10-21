---
title: SQL Update Statement
localeTitle: Instrução SQL Update
---
## Instrução SQL Update

Para atualizar um registro em uma tabela, use a `UPDATE` .

Seja cuidadoso. Você pode atualizar todos os registros da tabela ou apenas alguns. Use a condição `WHERE` para especificar quais registros você deseja atualizar. É possível atualizar uma ou mais colunas por vez. A sintaxe é:

```sql
UPDATE table_name 
 SET column1 = value1, 
    column2 = value2, ... 
 WHERE condition; 
```

Aqui está um exemplo atualizando o nome do registro com o ID 4:

```sql
UPDATE Person 
 SET Name = “Elton John” 
 WHERE Id = 4; 
```

Você também pode atualizar colunas em uma tabela usando valores de outras tabelas. Use a cláusula `JOIN` para obter dados de várias tabelas. A sintaxe é:

```sql
UPDATE table_name1 
 SET table_name1.column1 = table_name2.columnA 
    table_name1.column2 = table_name2.columnB 
 FROM table_name1 
 JOIN table_name2 ON table_name1.ForeignKey = table_name2.Key 
```

Aqui está um exemplo de atualização do Gerenciador de todos os registros:

```sql
UPDATE Person 
 SET Person.Manager = Department.Manager 
 FROM Person 
 JOIN Department ON Person.DepartmentID = Department.ID 

```