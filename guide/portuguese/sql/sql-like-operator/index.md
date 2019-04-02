---
title: SQL LIKE Operator
localeTitle: Operador SQL LIKE
---
## Operador SQL LIKE

### LIKE Operador definido

O operador `LIKE` é usado em um `WHERE` ou `HAVING` (como parte do `GROUP BY` ) para limitar as linhas selecionadas aos itens quando uma coluna tiver um determinado padrão de caracteres contidos nela.

### Este guia demonstrará:

*   Determinando se uma string inicia ou termina com um determinado padrão de string
*   Determinando se um padrão existe no meio da string
*   Determinando se uma string não está contida na string

### Uma coluna começa ou termina com um determinado padrão de string

Esse SQL selecionará os alunos que têm o `FullName` começando com "Monique" ou terminando com "Greene".

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE 
 FullName LIKE 'Monique%' OR -- note the % at the end but not the beginning 
 FullName LIKE '%Greene'; -- note the % at the beginning but not the end 
```

```text
+-----------+---------------+-----------+---------------------+ 
 | studentID | FullName      | sat_score | rcd_updated         | 
 +-----------+---------------+-----------+---------------------+ 
 |         1 | Monique Davis |       400 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene  |      1200 | 2017-08-16 15:34:50 | 
 +-----------+---------------+-----------+---------------------+ 
 2 rows in set (0.00 sec) 
```

### Um padrão de string está no meio da coluna

Esse SQL selecionará os alunos que possuem "ree" em qualquer parte do nome.

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE FullName LIKE '%ree%'; -- note the % at the beginning AND at the end 
```

```text
+-----------+----------------+-----------+---------------------+ 
 | studentID | FullName       | sat_score | rcd_updated         | 
 +-----------+----------------+-----------+---------------------+ 
 |         5 | Alvin Greene   |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman |      1200 | 2017-08-16 15:34:50 | 
 +-----------+----------------+-----------+---------------------+ 
 2 rows in set (0.00 sec) 
```

### Uma string NÃO está na coluna

Você pode colocar "NOT" antes de LIKE para excluir as linhas com o padrão de string em vez de selecioná-las. Esse SQL exclui registros que contêm "cer Pau" e "Ted" na coluna FullName.

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE FullName NOT LIKE '%cer Pau%' AND FullName NOT LIKE '%"Ted"%'; 
```

```text
+-----------+----------------------+-----------+---------------------+ 
 | studentID | FullName             | sat_score | rcd_updated         | 
 +-----------+----------------------+-----------+---------------------+ 
 |         1 | Monique Davis        |       400 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez       |       800 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey         |      1200 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene         |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman       |      1200 | 2017-08-16 15:34:50 | 
 |         8 | Donald D. Chamberlin |      2400 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce     |      2400 | 2017-08-16 15:35:33 | 
 +-----------+----------------------+-----------+---------------------+ 
 7 rows in set (0.00 sec) 
```

_Aqui está a lista atual de alunos para comparar com os conjuntos de resultados da cláusula where acima._

```sql
SELECT studentID, FullName, sat_score, rcd_updated FROM student; 
```

\`\` \`text + ----------- + ------------------------ + ----------- + --------------------- + | studentID | FullName | _pontuação_ sentada _| rcd_ atualizado | + ----------- + ------------------------ + ----------- + --------------------- + | 1 | Monique Davis | 400 | 2017-08-16 15:34:50 | | 2 | Teri Gutierrez | 800 | 2017-08-16 15:34:50 | | 3 | Spencer Pautier | 1000 | 2017-08-16 15:34:50 | | 4 | Louis Ramsey | 1200 | 2017-08-16 15:34:50 | | 5 | Alvin Greene | 1200 | 2017-08-16 15:34:50 | | 6 | Sophie Freeman | 1200 | 2017-08-16 15:34:50 | | 7 | Edgar Frank "Ted" Codd | 2400 | 2017-08-16 15:35:33 | | 8 | Donald D. Chamberlin | 2400 | 2017-08-16 15:35:33 | | 9 | Raymond F. Boyce | 2400 | 2017-08-16 15:35:33 | + ----------- + ------------------------ + ----------- + --------------------- + 9 linhas no set (0,00 seg)