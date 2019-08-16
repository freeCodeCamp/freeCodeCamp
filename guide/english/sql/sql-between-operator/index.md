---
title: SQL Between Operator
---
## SQL Between Operator

The BETWEEN Operator is useful because of the SQL Query Optimizer. Although BETWEEN is functionally the same as:
x <= element <= y, the SQL Query Optimizer will recognize this command faster, and has optimized code for running it.

This operator is used in a WHERE clause or in a GROUP BY HAVING clause.

Rows are selected that have a value greater than or equal to the minimum value and less than or equal to the maximum value.  

It's important to keep in mind that the values entered in the command are **included** in the result.

Here is the syntax for using the function in a WHERE Clause:

```sql
select field1, testField
from table1
where testField between min and max
```

* Here is an example using the student table and the WHERE clause:
 
  ```sql
  -- no WHERE clause
  select studentID, FullName, studentID
  from student;
  ```
  Result : 
  ```text
  +-----------+------------------+-----------+
  | studentID | FullName         | studentID |
  +-----------+------------------+-----------+
  |         1 | Monique Davis    | 1         |
  |         2 | Teri Gutierrez   | 2         |
  |         3 | Spencer Pautier  | 3         |     
  |         4 | Louis Ramsey     | 4         |      
  |         5 | Alvin Greene     | 5         |     
  |         6 | Sophie Freeman   | 6         |      
  |         7 | Maximo Smith     | 7         |  
  +-----------+------------------+-----------+
  ``` 
  ```sql  
  -- WHERE clause with between
  select studentID, FullName, studentID
  from student
  where studentID between 2 and 7;
  ```
  Result : 
  ```text
  +-----------+------------------+-----------+
  | studentID | FullName         | studentID |
  +-----------+------------------+-----------+
  |         2 | Teri Gutierrez   | 2         |
  |         3 | Spencer Pautier  | 3         |     
  |         4 | Louis Ramsey     | 4         |      
  |         5 | Alvin Greene     | 5         |     
  |         6 | Sophie Freeman   | 6         |      
  |         7 | Maximo Smith     | 7         |  
  +-----------+------------------+-----------+
  ``` 

* Here is an example using the campaign funds table and the having clause :
   This will return rows where the sum of the donations for a candidate are between $3 Million and $18 Million based on the HAVING clause in the GROUP BY part of the statement.  More on aggregation in that guide.


  ```sql
  select Candidate, Office_Sought, Election_Year, format(sum(Total_$),2)
  from combined_party_data
  where Election_Year = 2016
  group by Candidate, Office_Sought, Election_Year
  having sum(Total_$) between 3000000 and 18000000
  order by sum(Total_$) desc; 
  ```
  Result :
  ```text
  +---------------------------------+----------------------------+---------------+------------------------+
  | Candidate                       | office_Sought              | Election_Year | format(sum(Total_$),2) |
  +---------------------------------+----------------------------+---------------+------------------------+
  | FLORINA. CARLY                  | PRESIDENT / VICE PRESIDENT | 2016          | 11,937,638.11          |
  | PAUL. RANDAL (RAND)             | PRESIDENT / VICE PRESIDENT | 2016          | 11,833,950.07          |
  | CHRISTIE. CHRISTOPHER J (CHRIS) | PRESIDENT / VICE PRESIDENT | 2016          | 8,450,767.64           |
  | WALKER. SCOTT K                 | PRESIDENT / VICE PRESIDENT | 2016          | 8,067,461.71           |
  | GRAHAM. LINDSEY OLIN            | PRESIDENT / VICE PRESIDENT | 2016          | 7,292,173.80           |
  | OMALLEY. MARTIN JOSEPH          | PRESIDENT / VICE PRESIDENT | 2016          | 5,669,814.82           |
  | HUCKABEE. MIKE D                | PRESIDENT / VICE PRESIDENT | 2016          | 3,064,303.84           |
  +---------------------------------+----------------------------+---------------+------------------------+
  ```
