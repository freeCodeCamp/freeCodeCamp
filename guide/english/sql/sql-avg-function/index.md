---
title: SQL Avg Function
---
## SQL Average (AVG) Function

"Average" is an Aggregate (Group By) Function. It's used to calculate the average of a numeric column from the set of rows returned by a SQL statement.

Here is the syntax for using the function:

```sql
select groupingField, avg(num_field)
from table1
group by groupingField
```

* Here's an example using the student table:
 
  ```sql
  select studentID, FullName, avg(sat_score) 
  from student 
  group by studentID, FullName;
  ```
  Result :
  ```text
  +-----------+------------------+----------------+
  | studentID | FullName         | avg(sat_score) |
  +-----------+------------------+----------------+
  |         1 | Monique Davis    | 400.0000       |
  |         2 | Teri Gutierrez   | 800.0000       |
  |         3 | Spencer Pautier  | 1000.0000      |     
  |         4 | Louis Ramsey     | 1200.0000      |      
  |         5 | Alvin Greene     | 1400.0000      |     
  |         6 | Sophie Freeman   | 1600.0000      |      
  |         7 | Maximo Smith     | 1800.0000      |  
  +-----------+------------------+----------------+

  ```

