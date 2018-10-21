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

Here's an example using the student table:
 
```sql
select studentID, FullName, avg(sat_score) 
from student 
group by studentID, FullName;
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/avg_function01.JPG?raw=true)

