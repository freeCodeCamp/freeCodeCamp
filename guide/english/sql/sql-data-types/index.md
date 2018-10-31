---
title: SQL Data Types
---

# SQL Data Types

Each column in a table must have a data type. It indicates the type of value that the column stores.

Each database can accept differents data types, but in general, the list of data types is:

### Strings Types
Data type | Description
------------ | -------------
`CHAR(n)`| Character string. Fixed-length n. Minimal length is 1. If you assign a value to a CHAR column containing fewer characters than the defined length, the remaining space is filled with blanks characters.
`VARCHAR(n)` | Character string. Variable length. Maximum length n. Minimal length is 1
`BINARY(n)` | Binary string. Fixed-length n
`VARBINARY(n)` or `BINARY VARYING(n)` | Binary string. Variable length. Maximum length n

### Numerics Types
Data type | Description
------------ | -------------
`INTEGER` | Integer numerical. From  -2,147,483,648 to 2,147,483,647.
`SMALLINT` | Integer numerical.  From -32,768 to 32,767
`BIGINT` | Integer numerical. From -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
`DECIMAL(p,s)` or `NUMERIC(p,s)` | Exact numerical, precision p, scale s. Precision is the maximum total number of decimal digits that will be stored, both to the left and to the right of the decimal point. Scale is the number of decimal digits that will be stored to the right of the decimal point. This number is subtracted from p to determine the maximum number of digits to the left of the decimal point. Example: decimal(5,2) is a number that has 3 digits before the decimal and 2 digits after the decimal.
`FLOAT(p)` | Approximate numerical, mantissa precision p. A floating number in base 10 exponential notation. The size argument for this type consists of a single number specifying the minimum precision
`REAL` | Approximate numerical, mantissa precision 7
`FLOAT` | Approximate numerical, mantissa precision 16
`DOUBLE PRECISION` | Approximate numerical, mantissa precision 16

### Date and Time Types
Data type | Description
------------ | -------------
`DATE` | Stores year, month, and day values
`TIME` | Stores hour, minute, and second values
`DATETIME` | Stores year, month, day, hour, minute, and second values
`TIMESTAMP` | Stores the number of seconds since the Unix epoch
`TIME WITH TIME ZONE` | Stores time of day with time zone
`TIMESTAMP WITH TIME ZONE` | Stores timestamp with time zone

### Other Data Types
Data type | Description
------------ | -------------
`BOOLEAN` | Stores `TRUE` or `FALSE` values
`ARRAY` | A set-length and ordered collection of elements
`MULTISET` | A variable-length and unordered collection of elements
`XML` | Stores XML data
