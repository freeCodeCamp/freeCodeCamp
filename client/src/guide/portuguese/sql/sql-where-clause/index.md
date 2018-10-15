---
title: SQL Where Clause
localeTitle: SQL onde cláusula
---
## SQL onde cláusula

### `WHERE` cláusula (e / ou, `IN` , `BETWEEN` , e `LIKE` )

A cláusula `WHERE` é usada para limitar o número de linhas retornadas.

Neste caso, todos os cinco destes serão usados ​​é uma cláusula `WHERE` ridícula.

Aqui está a lista atual de alunos completa para comparar com o conjunto de resultados da cláusula `WHERE` :

```sql
select studentID, FullName, sat_score, rcd_updated from student; 
```

```text
+-----------+------------------------+-----------+---------------------+ 
 | studentID | FullName               | sat_score | rcd_updated         | 
 +-----------+------------------------+-----------+---------------------+ 
 |         1 | Monique Davis          |       400 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez         |       800 | 2017-08-16 15:34:50 | 
 |         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey           |      1200 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene           |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman         |      1200 | 2017-08-16 15:34:50 | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | 2017-08-16 15:35:33 | 
 |         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 | 
 +-----------+------------------------+-----------+---------------------+ 
 9 rows in set (0.00 sec) 
```

Linhas serão apresentadas que….

*   `WHERE` IDs dos alunos estão entre 1 e 5 (inclusive)
*   `OR` studentID = 8

Aqui está uma consulta atualizada, onde qualquer registro que tenha uma pontuação SAT que esteja nesta lista (1000, 1400) não será apresentado:

```sql
select  studentID, FullName, sat_score, recordUpdated 
 from    student 
 where   (studentID between 1 and 5 or studentID = 8) 
        and 
        sat_score NOT in (1000, 1400); 
```

```text
+-----------+----------------------+-----------+---------------------+ 
 | studentID | FullName             | sat_score | rcd_updated         | 
 +-----------+----------------------+-----------+---------------------+ 
 |         1 | Monique Davis        |       400 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez       |       800 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey         |      1200 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene         |      1200 | 2017-08-16 15:34:50 | 
 |         8 | Donald D. Chamberlin |      2400 | 2017-08-16 15:35:33 | 
 +-----------+----------------------+-----------+---------------------+ 
 5 rows in set (0.00 sec) 
```

\* Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.