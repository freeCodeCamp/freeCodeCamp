---
title: SQL AND Operator
---

## SQL AND operator
AND is used in a WHERE clause or a GROUP BY HAVING clause to limit the rows returned from the executed statement. Use AND when it's required to have more than one condition met.

We'll use the student table to present examples.

* Here's the student table without a WHERE clause:
  ```sql
  select * from student;
  ```
  Result :
  ```text
  +-----------+------------------+----------------+-----------+
  | studentID | FullName         | programOfStudy | sat_score |
  +-----------+------------------+----------------+-----------+
  |         1 | Monique Davis    | Literature     | 400       |
  |         2 | Teri Gutierrez   | Programming    | 800       |
  |         3 | Spencer Pautier  | Programming    | 1000      |    
  |         4 | Louis Ramsey     | Programming    | 1200      |     
  |         5 | Alvin Greene     | Photography    | 1400      |
  |         6 | Sophie Freeman   | Photography    | 1600      |
  |         7 | Maximo Smith     | Photography    | 1800      |
  |         8 | Michael Roach    | Literature     | 800       |
  +-----------+------------------+----------------+-----------+
  ```

* Now the WHERE clause is added to display only programming students:

  ```sql
  select * from student 
  where programOfStudy = 'Programming';
  ```
  Result :
  ```text
  +-----------+------------------+----------------+-----------+
  | studentID | FullName         | programOfStudy | sat_score |
  +-----------+------------------+----------------+-----------+
  |         2 | Teri Gutierrez   | Programming    | 800       |
  |         3 | Spencer Pautier  | Programming    | 1000      |    
  |         4 | Louis Ramsey     | Programming    | 1200      |     
  +-----------+------------------+----------------+-----------+
  ```

* Now the WHERE clause is updated with AND to show results for programming students that also have a SAT score greater than 800:

  ```sql
  select * from student 
  where programOfStudy = 'Programming' 
  and sat_score > 800;
  ```
  Result :
  ```text
  +-----------+------------------+----------------+-----------+
  | studentID | FullName         | programOfStudy | sat_score |
  +-----------+------------------+----------------+-----------+
  |         3 | Spencer Pautier  | Programming    | 1000      |    
  |         4 | Louis Ramsey     | Programming    | 1200      |     
  +-----------+------------------+----------------+-----------+
  ```

* This is a more complex example from the campaign contributions table. This example has a GROUP BY clause with a HAVING clause using an AND to restrict the returned records to candidates from 2016 with contributions between $3 Million and $18 Million in total.
  ```sql
  select Candidate, Office_Sought, Election_Year, FORMAT(sum(Total_$),2) from combined_party_data
  where Office_Sought = 'PRESIDENT / VICE PRESIDENT'
  group by Candidate, Office_Sought, Election_Year
   having Election_Year = 2016 and sum(Total_$) between 3000000 and 18000000
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

