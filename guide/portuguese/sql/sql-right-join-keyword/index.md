---
title: SQL Right Join
localeTitle: Junção direta do SQL
---
## Junção direta do SQL

### Exemplo de uso

Para este guia, discutiremos o SQL RIGHT JOIN.

### Junte-se direito

A palavra-chave RIGHT JOIN retorna todos os registros da tabela à direita (tabela 2) e os registros correspondentes da tabela à esquerda (tabela 1). O resultado é NULL do lado esquerdo, quando não há correspondência.

```sql
SELECT * 
FROM table1 
RIGHT JOIN table2 
ON table1.column_name = table2.column_name; 
```

### Lista completa de tabelas para referência

"foods" ou dados da tabela LEFT

```text
+---------+--------------+-----------+------------+ 
 | ITEM_ID | ITEM_NAME    | ITEM_UNIT | COMPANY_ID | 
 +---------+--------------+-----------+------------+ 
 | 1       | Chex Mix     | Pcs       | 16         | 
 | 6       | Cheez-It     | Pcs       | 15         | 
 | 2       | BN Biscuit   | Pcs       | 15         | 
 | 3       | Mighty Munch | Pcs       | 17         | 
 | 4       | Pot Rice     | Pcs       | 15         | 
 | 5       | Jaffa Cakes  | Pcs       | 18         | 
 | 7       | Salt n Shake | Pcs       |            | 
 +---------+--------------+-----------+------------+ 
 ```
 
 
 "company" ou dados da tabela RIGHT
``` text
+------------+---------------+--------------+
| COMPANY_ID | COMPANY_NAME  | COMPANY_CITY |
+------------+---------------+--------------+
| 18         | Order All     | Boston       |
| 15         | Jack Hill Ltd | London       |
| 16         | Akas Foods    | Delhi        |
| 17         | Foodies.      | London       |
| 19         | sip-n-Bite.   | New York     |
+------------+---------------+--------------+
```


Para retornar nome da companhia da tabela "company" e os colunos ID da companhia, nome do item da tabela "foods", a SQL seguinte pode ser usado: 

```sql
SELECT company.company_id,company.company_name,
company.company_city,foods.company_id,foods.item_name
FROM   company
RIGHT JOIN foods
ON company.company_id = foods.company_id;
```
RESULTADOS 

```text
+------------+---------------+--------------+------------+--------------+
| COMPANY_ID | COMPANY_NAME  | COMPANY_CITY | COMPANY_ID | ITEM_NAME    |
+------------+---------------+--------------+------------+--------------+
| 18         | Order All     | Boston       | 18         | Jaffa Cakes  |
| 15         | Jack Hill Ltd | London       | 15         | Pot Rice     |
| 15         | Jack Hill Ltd | London       | 15         | BN Biscuit   |
| 15         | Jack Hill Ltd | London       | 15         | Cheez-It     |
| 16         | Akas Foods    | Delhi        | 16         | Chex Mix     |
| 17         | Foodies.      | London       | 17         | Mighty Munch |
| NULL       | NULL          | NULL         | NULL       | Salt n Shake |
+------------+---------------+--------------+------------+--------------+
```
