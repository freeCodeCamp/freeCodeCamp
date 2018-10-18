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

![convert a decimal number to integer number](https://user-images.githubusercontent.com/12566249/31314884-6c94db4a-ac57-11e7-842f-710fad511131.png)

Note: The result is truncated. 

### Example: Convert a String to a Date
`SELECT CONVERT(DATE, '20161030') as Date`

![convert a string to a date type](https://user-images.githubusercontent.com/12566249/31314912-c25bbb52-ac57-11e7-880d-6d81041b1728.png) 


### Example: Convert a Decimal to a String 
`SELECT CONVERT(nvarchar, 20.123) as StringData`

![convert a decimal to a string](https://user-images.githubusercontent.com/12566249/31314923-fb04e410-ac57-11e7-9646-94061e1f0ec2.png)

### Example: Convert an Integer Number to a Decimal Number
`SELECT  CONVERT(DECIMAL (15,3), 13) as DecimalNumber`

![convert an integer to a decimal number](https://user-images.githubusercontent.com/12566249/31314932-1c8668ca-ac58-11e7-8cee-4d57fc523704.png)

### Example: Convert a String to Date Format in USA Date Style
`SELECT  CONVERT(DATE, '20171030' , 110) To_USA_DateFormat`

![convert a string to date format in usa date style](https://user-images.githubusercontent.com/12566249/31314937-35155d06-ac58-11e7-9d5d-823b66c41d0d.png)

### More Information:
- Information on Convert function: <a href='https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql' target='_blank' rel='nofollow'>Microsoft</a>


