---
title: SQL COUNT Aggregate Function
---

## SQL COUNT Aggregate Function

The COUNT operator is usually used in combination with a GROUP BY clause. It is one of the SQL "aggregate" functions, which include AVG (average) and SUM.

This function will count the number of rows and return that count as a column in the result set. 

Here are examples of what you would use COUNT for:
* Counting all rows in a table (no group by required)
* Counting the totals of subsets of data (requires a Group By section of the statement)

For reference, here is the current data for all the rows in our example student database.

```sql
select studentID, FullName, programOfStudy, sat_score from student; -- all records with fields of interest
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

* This SQL statement provides a count of all rows.  Note that you can give the resulting COUNT column a name using "AS".

  ```sql
  select count(*) AS studentCount from student; -- count of all records
  ```
  Result :
  ```text
  +--------------+
  | studentCount |
  +--------------+
  | 8            |
  +--------------+

  ```

* Here we get a count of students in each field of study.

  ```sql
  select programOfStudy, count(*) AS studentCount from the student table with a group by programOfStudy;
  ```
  Result :
  ```text
  +----------------+--------------+
  | programOfStudy | studentCount |
  +----------------+--------------+
  | Literature     | 2            |
  | photography    | 3            |
  | programming    | 3            |
  +----------------+--------------+

  ```

* Here we get a count of students with the same SAT scores.
  ```sql
  select sat_score, count(*) AS studentCount from the student table with a group by sat_score;
  ```
  Result :
  ```text
  +-----------+--------------+
  | sat_score | studentCount |
  +-----------+--------------+
  | 400       | 1            |
  | 800       | 2            |
  | 1000      | 1            |
  | 1200      | 1            |
  | 1400      | 1            |
  | 1600      | 1            |
  | 1800      | 1            |
  +-----------+--------------+

  ```

* Here is an example using the campaign funds table. This is a sum total of the dollars in each transaction and the number of contributions for each political party during the 2016 US Presidential Campaign.
 
  ```sql
  select Specific_Party, Election_Year, format(sum(Total_$),2) AS contribution$Total, count(*) AS numberOfContributions 
  from combined_party_data
  group by Specific_Party,Election_Year
  having Election_Year = 2016;
  ```
  Result :
  ```text
  +----------------+---------------+--------------------+-----------------------+
  | Specific_Party | Election_Year | contribution$Total | numberOfContributions |
  +----------------+---------------+--------------------+-----------------------+
  | DEMOCRATIC     | 2016          | 833,592,846.09     | 361                   |
  | REPUBLICAN     | 2016          | 676,149,662.07     | 1247                  |
  +----------------+---------------+--------------------+-----------------------+

  ```


As with all of these things there is much more to it, so please see the manual for your database manager and have fun trying different tests yourself.
