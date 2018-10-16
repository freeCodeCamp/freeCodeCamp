---
title: SQL Replace VIEW Statement
localeTitle: Substituição de SQL VIEW Statement
---
## Substituição de SQL VIEW Statement

## Introdução

Uma Visualização é um objeto de banco de dados que apresenta dados de uma ou mais tabelas. A mesma instrução SQL usada para criar uma exibição também pode ser usada para substituir uma exibição existente.

Este guia atualizará (substituirá) a visão existente "programming-students-v" por uma que seja ligeiramente diferente e tenha um nome diferente.

Dica de segurança: sempre faça backup do esquema antes de fazer alterações nele.

### Sintaxe Geral

```sql
CREATE OR REPLACE VIEW view_name AS 
 SELECT column1, column2, ... 
 FROM table_name 
 WHERE condition; 
```

### SQL Usado para criar a visualização e os dados atuais

```sql
create view `programming-students-v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 
```

```sql
select * from `programming-students-v`; 
```

Dados atuais:

```text
+-----------------+----------------+ 
 | FullName        | programOfStudy | 
 +-----------------+----------------+ 
 | Teri Gutierrez  | Programming    | 
 | Spencer Pautier | Programming    | 
 | Louis Ramsey    | Programming    | 
 | Alvin Greene    | Programming    | 
 | Sophie Freeman  | Programming    | 
 +-----------------+----------------+ 
 5 rows in set (0.00 sec) 
```

Uma lista das visualizações existentes:

```sql
SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW'; 
```

```text
+-----------------------------------+------------+ 
 | Tables_in_fcc_sql_guides_database | Table_type | 
 +-----------------------------------+------------+ 
 | programming-students-v            | VIEW       | 
 | students-contact-info_v           | VIEW       | 
 | students_dropme_v                 | VIEW       | 
 +-----------------------------------+------------+ 
 3 rows in set (0.00 sec) 
```

### Substituindo a vista

```sql
create or replace view `programming-students-v` as 
 select FullName, programOfStudy, sat_score 
 from student 
 where programOfStudy = 'Programming'; 
```

```sql
select * from `programming-students-v`; 
```

Nota: a visão agora mostra o sat\_score.

```text
+-----------------+----------------+-----------+ 
 | FullName        | programOfStudy | sat_score | 
 +-----------------+----------------+-----------+ 
 | Teri Gutierrez  | Programming    |       800 | 
 | Spencer Pautier | Programming    |      1000 | 
 | Louis Ramsey    | Programming    |      1200 | 
 | Alvin Greene    | Programming    |      1200 | 
 | Sophie Freeman  | Programming    |      1200 | 
 +-----------------+----------------+-----------+ 
```

Nota: a lista de visualizações não mudou, nossa visão é substituída.

```text
mysql>  SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW'; 
 +-----------------------------------+------------+ 
 | Tables_in_fcc_sql_guides_database | Table_type | 
 +-----------------------------------+------------+ 
 | programming-students-v            | VIEW       | 
 | students-contact-info_v           | VIEW       | 
 | students_dropme_v                 | VIEW       | 
 +-----------------------------------+------------+ 
 3 rows in set (0.00 sec) 
```

\* Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório. Espero que pelo menos isso lhe dê o suficiente para começar. Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.