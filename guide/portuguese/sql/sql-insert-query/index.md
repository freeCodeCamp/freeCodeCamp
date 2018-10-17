---
title: SQL Insert Query
localeTitle: Consulta de Inserção SQL
---
## Consulta de Inserção SQL

Inserir consultas são uma maneira de inserir dados em uma tabela. Vamos supor que criamos uma tabela usando

`CREATE TABLE example_table ( name varchar(255), age int)`

**example\_table**

| Nome | Idade | | --- | --- |

Agora, para adicionar alguns dados a esta tabela, usaremos o **INSERT** da seguinte maneira:

`INSERT INTO example_table (column1,column2) VALUES ("Andrew",23)`

**example\_table**

| Nome | Idade | | --- | --- | | Andrew | 23 |

Mesmo o seguinte funcionará, mas é sempre uma boa prática especificar quais dados estão indo para qual coluna.

`INSERT INTO table_name VALUES ("John", 28)`

**example\_table**

| Nome | Idade | | --- | --- | | Andrew | 23 | | John | 28 |