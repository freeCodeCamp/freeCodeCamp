---
title: SQL Server Convert Function
---
## SQL Server Convert Function
Converts from one data type to another data type.

### Syntax 
`CONVERT (_New Data Type, Expression, Style_)`

- **New Data Type:** New data type to be converted too. For example: nvarchar, integer, decimal, date
- **Expression:** Data to be converted.
- **Style:** Format. For example: The style 110 is USA Date format  mm-dd-yyyy

### Example: Convert a Decimal Number to An Integer 

`SELECT  CONVERT(INT, 23.456) as IntegerNumber`



Note: The result is truncated. 

### Example: Convert a String to a Date
`SELECT CONVERT(DATE, '20161030') as Date`




### Example: Convert a Decimal to a String 
`SELECT CONVERT(nvarchar, 20.123) as StringData`



### Example: Convert an Integer Number to a Decimal Number
`SELECT  CONVERT(DECIMAL (15,3), 13) as DecimalNumber`


### Example: Convert a String to Date Format in USA Date Style
`SELECT  CONVERT(DATE, '20171030' , 110) To_USA_DateFormat`


### More Information:
- Information on Convert function: <a href='https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql' target='_blank' rel='nofollow'>Microsoft</a>


