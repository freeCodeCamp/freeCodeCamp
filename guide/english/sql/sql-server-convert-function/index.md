---
title: SQL Server Convert Function
---
## SQL Server Convert Function
Converts from one data type to another data type.

### Covered in this guide :
* Convert a decimal number  to an integer
* Convert a string to date
* Convert a decimal number into string
* Convert an integer number to decimal
* convert a string to date in usa format style

### Convert command Syntax

```sql
CONVERT (_New Data Type, Expression, Style_)

```

**New Data Type:** New data type to be converted too. For example: nvarchar, integer, decimal, date\
**Expression:** Data to be converted.\
**Style:** Format. For example: The style 110 is USA Date format  mm-dd-yyyy\

* ### Convert a Decimal Number to An Integer :

  ```sql
  SELECT  CONVERT(INT, 23.456) as IntegerNumber

  ```
  Result : 
  ```text
  +---+---------------+
  |   | IntegerNumber |
  +---+---------------+
  | 1 | 23            |
  +---+---------------+
  
  ```

  Note: The result is truncated. 

* ### Convert a String to a Date :

  ```sql
  SELECT CONVERT(DATE, '20161030') as Date
  
  ```
  Result :
  ```text
  +---+---------------+
  |   | Date          |
  +---+---------------+
  | 1 | 2016-10-30    |
  +---+---------------+
  
  ```


* ### Convert a Decimal to a String :
  ```sql
  SELECT CONVERT(nvarchar, 20.123) as StringData

  ```
  Result :
    ```text
  +---+---------------+
  |   | StringData    |
  +---+---------------+
  | 1 | 20.123        |
  +---+---------------+
  
  ```



* ### Convert an Integer Number to a Decimal Number :
  ```sql
  SELECT  CONVERT(DECIMAL (15,3), 13) as DecimalNumber

  ```
  Result :
    ```text
  +---+---------------+
  |   | DecimalNumber |
  +---+---------------+
  | 1 | 13.000        |
  +---+---------------+
  
  ```

* ### Convert a String to Date Format in USA Date Style :
  ```sql
  SELECT  CONVERT(DATE, '20171030' , 110) To_USA_DateFormat

  ```
  Result :
    ```text
  +---+-------------------+
  |   | To_USA_DateFormat |
  +---+-------------------+
  | 1 | 2017-10-30        |
  +---+-------------------+
  
  ```  

### More Information:
- Information on Convert function: <a href='https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql' target='_blank' rel='nofollow'>Microsoft</a>


