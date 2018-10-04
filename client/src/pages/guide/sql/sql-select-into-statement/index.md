---
title: SQL Select into Statement
---
## SQL Select into Statement

The SELECT INTO statement copies data from one table into a new table.

  * The number of columns and data type of column must be same.

  * WHERE condition is optional.

```sql
SELECT column(s)
INTO new_table
FROM old_table
WHERE condition;
```
  * If you want to copy the table into another database use IN clause:

```sql
SELECT column(s)
INTO new_table IN externaldb
FROM old_table;
```



