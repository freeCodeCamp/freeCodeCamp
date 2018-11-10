---
title: SQL Right Join
---

## SQL Right Join

### Example of use
For this guide we'll discuss the SQL RIGHT JOIN.

### Right Join
The RIGHT JOIN keyword returns all records from the right table (table2), and the matched records from the left table(table1) . The result is NULL from the left side, when there is no match.

```sql
SELECT *
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
```


### Complete table listings for reference

food or LEFT table data
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


company or RIGHT table data
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

To get company name from company table and company ID, item name columns from foods table, the following SQL statement can be used:


```sql
SELECT company.company_id,company.company_name,
company.company_city,foods.company_id,foods.item_name
FROM   company
RIGHT JOIN foods
ON company.company_id = foods.company_id;
```

OUTPUT

``` text
COMPANY_ID COMPANY_NAME              COMPANY_CITY              COMPANY_ID ITEM_NAME
---------- ------------------------- ------------------------- ---------- --------------
18         Order All                 Boston                    18         Jaffa Cakes
15         Jack Hill Ltd             London                    15         Pot Rice
15         Jack Hill Ltd             London                    15         BN Biscuit
15         Jack Hill Ltd             London                    15         Cheez-It
16         Akas Foods                Delhi                     16         Chex Mix
17         Foodies.                  London                    17         Mighty Munch
NULL       NULL                      NULL                      NULL       Salt n Shake

```
