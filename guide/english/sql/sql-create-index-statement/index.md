---
title: SQL CREATE INDEX Statement
---

## SQL CREATE INDEX Statement

This statement is used to create an "index" on a column in an existing table. 

Key points on indexes:

* They are used to improve the efficiency of searches for data, presenting the data in a specific order, when joining tables (see the "JOIN" Guides) and more.
* An index is a "system" object, meaning that it is used by the database manager. 
* Part of this usage is for the database manager to update the index when the data used by the index changes in the related table.  Keep this in mind because as the number of indexes increase in a database overall system performance can be impacted.
* If you find that your SQLs are running slow on a given table or tables, creating an index is the first thing to consider to correct the issue.

Here's an example of the syntax of the Create Index Statement. Note that the syntax allows for an index to be over more than one column.

```sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

Creating a new index on the student table's field, programOfStudy.
For reference, here is the current definition of the student table.

```text
+--------------------+----------------------+--------------+---------------+------------+
| column_name        | column_default       | is_nullable  | column_type   | key        |
+--------------------+----------------------+--------------+---------------+------------+
| studentID          | NULL                 | NO           | int(11)       | PRI        |
| FullName           | NULL                 | YES          | varchar(90)   |            |
| sat_score          | NULL                 | YEs          | int(4)        |            |
| recordUpdated      | CURRENT TIMESTAMP    | NO           | timestamp     |            |
| recordCreated      | 0000-00-00 00:00:00  | NO           | timestamp     |            |
| programOfStudy     | NULL                 | YES          | varchar(200)  |            |
+--------------------+----------------------+--------------+---------------+------------+
```

* Here's a statement to create the index, and below is the updated table definition:

  ```sql
  create index pStudyIndex
  on student (programOfStudy);
  ```

  ```text
  +--------------------+----------------------+--------------+---------------+------------+
  | column_name        | column_default       | is_nullable  | column_type   | key        |
  +--------------------+----------------------+--------------+---------------+------------+
  | studentID          | NULL                 | NO           | int(11)       | PRI        |
  | FullName           | NULL                 | YES          | varchar(90)   |            |
  | sat_score          | NULL                 | YEs          | int(4)        |            |
  | recordUpdated      | CURRENT TIMESTAMP    | NO           | timestamp     |            |
  | recordCreated      | 0000-00-00 00:00:00  | NO           | timestamp     |            |
  | programOfStudy     | NULL                 | YES          | varchar(200)  | MUL        |
  +--------------------+----------------------+--------------+---------------+------------+
  ```

In MySQL, you use the ALTER TABLE command to change and drop indexes. The MySQL Workbench also provides GUI tools to manage indexes.

As with all of these things there is much more to it so please see the manual for your database manager, and have fun trying different options yourself.
