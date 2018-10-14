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

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/create-index-statement01.JPG?raw=true)

Here's a statement to create the index, and a screen shot of the updated table definition:

```sql
create index pStudyIndex
on student (programOfStudy);
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/create-index-statement02.JPG?raw=true)

In MySQL, you use the ALTER TABLE command to change and drop indexes. The MySQL Workbench also provides GUI tools to manage indexes.

As with all of these things there is much more to it so please see the manual for your database manager, and have fun trying different options yourself.
