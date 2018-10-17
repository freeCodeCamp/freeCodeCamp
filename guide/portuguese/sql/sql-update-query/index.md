---
title: SQL Update Query
localeTitle: Consulta de atualização SQL
---
## Consulta de atualização SQL

### O que uma consulta de atualização pode fazer

Uma consulta de atualização fornece ao programador DBA ou SQL a capacidade de atualizar muitos registros com um comando.

Dica importante de segurança! Tenha sempre uma cópia de segurança do que você está prestes a mudar ANTES de mudar isso!

Este guia irá:

*   adicionar um novo campo à tabela do aluno
*   testar a lógica para atualizar esse campo com um endereço de e-mail atribuído à escola
*   atualizar o novo campo.

Aqui está a mesa do aluno quando começamos este processo

```sql
SELECT * FROM student; 
```

```text
+-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 | studentID | FullName               | sat_score | programOfStudy   | rcd_Created         | rcd_Updated         | 
 +-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 |         1 | Monique Davis          |       400 | Literature       | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez         |       800 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         3 | Spencer Pautier        |      1000 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman         |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 |         8 | Donald D. Chamberlin   |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce       |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 +-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 9 rows in set (0.00 sec) 
```

### Altere a tabela e adicione um novo campo

```sql
    ALTER TABLE `fcc_sql_guides_database`.`student` 
    ADD COLUMN `schoolEmailAdr` VARCHAR(125) NULL AFTER `programOfStudy`; 
```

A tabela do aluno após a alteração é executada.

```text
mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student; 
 +------------------------+-----------+------------------+----------------+ 
 | FullName               | sat_score | programOfStudy   | schoolEmailAdr | 
 +------------------------+-----------+------------------+----------------+ 
 | Monique Davis          |       400 | Literature       | NULL           | 
 | Teri Gutierrez         |       800 | Programming      | NULL           | 
 | Spencer Pautier        |      1000 | Programming      | NULL           | 
 | Louis Ramsey           |      1200 | Programming      | NULL           | 
 | Alvin Greene           |      1200 | Programming      | NULL           | 
 | Sophie Freeman         |      1200 | Programming      | NULL           | 
 | Edgar Frank "Ted" Codd |      2400 | Computer Science | NULL           | 
 | Donald D. Chamberlin   |      2400 | Computer Science | NULL           | 
 | Raymond F. Boyce       |      2400 | Computer Science | NULL           | 
 +------------------------+-----------+------------------+----------------+ 
 9 rows in set (0.00 sec) 
```

### TESTANDO a lógica (passo MUITO importante!)

```sql
SELECT FullName, instr(FullName," ") AS firstSpacePosition, 
 concat(substring(FullName,1,instr(FullName," ")-1),"@someSchool.edu") AS schoolEmail 
 FROM student; 
```

```text
+------------------------+--------------------+------------------------+ 
 | FullName               | firstSpacePosition | schoolEmail            | 
 +------------------------+--------------------+------------------------+ 
 | Monique Davis          |                  8 | Monique@someSchool.edu | 
 | Teri Gutierrez         |                  5 | Teri@someSchool.edu    | 
 | Spencer Pautier        |                  8 | Spencer@someSchool.edu | 
 | Louis Ramsey           |                  6 | Louis@someSchool.edu   | 
 | Alvin Greene           |                  6 | Alvin@someSchool.edu   | 
 | Sophie Freeman         |                  7 | Sophie@someSchool.edu  | 
 | Edgar Frank "Ted" Codd |                  6 | Edgar@someSchool.edu   | 
 | Donald D. Chamberlin   |                  7 | Donald@someSchool.edu  | 
 | Raymond F. Boyce       |                  8 | Raymond@someSchool.edu | 
 +------------------------+--------------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

_Uma nota sobre o concat (): no MySQL, este comando é usado para seqüências de caracteres combinadas, não em outras versões do SQL (consulte o manual). Neste uso, funciona assim: A subseqüência do campo FullName até, mas não incluindo o primeiro espaço, é combinada com "@ someSchool.edu". No mundo real isso teria que ser muito mais complexo e você precisaria garantir que o endereço de e-mail é único._

### Fazendo a atualização

Vamos fingir que isso é o que queremos e atualizar a tabela com esta informação:

```sql
UPDATE student SET schoolEmailAdr = concat(substring(FullName,1,instr(FullName," ")-1),"@someSchool.edu") 
 WHERE schoolEmailAdr is NULL; 
```

Sucesso!

```text
mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student; 
 +------------------------+-----------+------------------+------------------------+ 
 | FullName               | sat_score | programOfStudy   | schoolEmailAdr         | 
 +------------------------+-----------+------------------+------------------------+ 
 | Monique Davis          |       400 | Literature       | Monique@someSchool.edu | 
 | Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    | 
 | Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu | 
 | Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   | 
 | Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   | 
 | Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  | 
 | Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   | 
 | Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  | 
 | Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu | 
 +------------------------+-----------+------------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.