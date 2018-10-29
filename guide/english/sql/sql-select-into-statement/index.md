---
title: SQL Select into Statement
---

## SQL Select into Statement
The `SELECT INTO` statement is a query that allows you to create a *new* table and populate it with the result set of a `SELECT statement`. To add data to an existing table, see the [INSERT INTO](guides/src/pages/sql/sql-insert-into-select-statement/index.md) statement instead.

`SELECT INTO` can be used when you are combining data from several tables or views into a new table.<sup>1</sup> The original table is not affected.

The general syntax is: 
```sql
SELECT column-names
  INTO new-table-name
  FROM table-name
 WHERE EXISTS 
      (SELECT column-name
         FROM table-name
        WHERE condition)
```

This example shows a set of a table that was "copied" from the "Supplier" table to a new one called SupplierUSA which holds the set related to the column country of value 'USA'. 

```sql
SELECT * INTO SupplierUSA
  FROM Supplier
 WHERE Country = 'USA';
 ```
 **Results**: 4 rows affected <sup>2</sup>
 
| ID | CompanyName                 | ContactName    | City        | Country  | Phone          |
|----|-----------------------------|:--------------:|-------------|:--------:|:--------------:|
|  2 | New Orleans Cajun Delights  | Shelley Burke  | New Orleans | USA      | (100) 555-4822 |
|  3 | Grandma Kelly's Homestead   | Regina Murphy  | Ann Arbor   | USA      | (313) 555-5735 |
| 16 | Bigfoot Breweries           | Cheryl Saylor  | Bend        | USA      | NULL           |
| 19 | New England Seafood Cannery | Robb Merchant  | Boston      | USA      | (617) 555-3267 | 


Please see the manual for your database manager and have fun trying different options yourself.

## Sources
1. (Microsoft - Inserting Rows by Using SELECT INTO)[https://technet.microsoft.com/en-us/library/ms190750(v=sql.105).aspx]
2. (dofactory - SQL SELECT INTO Statement)[http://www.dofactory.com/sql/select-into]
