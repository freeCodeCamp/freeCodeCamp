---
title: SQL Order By Keyword
localeTitle: Ordem SQL por palavra-chave
---
## Ordem SQL por palavra-chave

### Ordenar por (ASC, DESC)

ORDER BY nos dá uma maneira de classificar o resultado definido por um ou mais itens na seção SELECT. Aqui está um SQL classificando os alunos por FullName em ordem decrescente. A ordem de classificação padrão é ascendente (ASC), mas para classificar na ordem oposta (descendente) você usa DESC.

```sql
SELECT studentID, FullName, sat_score 
 FROM student 
 ORDER BY FullName DESC; 
```

```text
+-----------+------------------------+-----------+ 
 | studentID | FullName               | sat_score | 
 +-----------+------------------------+-----------+ 
 |         2 | Teri Gutierrez         |       800 | 
 |         3 | Spencer Pautier        |      1000 | 
 |         6 | Sophie Freeman         |      1200 | 
 |         9 | Raymond F. Boyce       |      2400 | 
 |         1 | Monique Davis          |       400 | 
 |         4 | Louis Ramsey           |      1200 | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | 
 |         8 | Donald D. Chamberlin   |      2400 | 
 |         5 | Alvin Greene           |      1200 | 
 +-----------+------------------------+-----------+ 
 9 rows in set (0.00 sec) 
```

_Aqui está a lista completa de alunos, UN-ORDERED, atual para comparar com o acima._

```sql
SELECT studentID, FullName, sat_score, rcd_updated FROM student; 
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

Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.