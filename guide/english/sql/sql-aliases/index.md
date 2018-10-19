---
title: SQL Aliases
---

## SQL Aliases

## Using AS to assign meaningful or simpler names

You can use AS to assign a name to a column of data you are selecting or that has been calculated.

```sql

SELECT user_only_num1 AS AgeOfServer, (user_only_num1 - warranty_period) AS NonWarrantyPeriod FROM server_table

```

This results in output as below.

```text

+-------------+------------------------+
| AgeOfServer | NonWarrantyPeriod      | 
+-------------+------------------------+
|         36  |                     24 |
|         24  |                     12 | 
|         61  |                     49 |
|         12  |                      0 | 
|          6  |                     -6 |
|          0  |                    -12 | 
|         36  |                     24 |
|         36  |                     24 | 
|         24  |                     12 | 
+-------------+------------------------+

```
You can also use AS to assign a name to a table to make it easier to reference in joins.

```sql
SELECT ord.product, ord.ord_number, ord.price, cust.cust_name, cust.cust_number FROM customer_table AS cust

JOIN order_table AS ord ON cust.cust_number = ord.cust_number
```
This results in output as below.

```text

+-------------+------------+-----------+-----------------+--------------+
| product     | ord_number | price     | cust_name       | cust_number  |
+-------------+------------+-----------+-----------------+--------------+
|     RAM     |   12345    |       124 | John Smith      |  20          |
|     CPU     |   12346    |       212 | Mia X           |  22          |
|     USB     |   12347    |        49 | Elise Beth      |  21          |
|     Cable   |   12348    |         0 | Paul Fort       |  19          |
|     Mouse   |   12349    |        66 | Nats Back       |  15          |
|     Laptop  |   12350    |       612 | Mel S           |  36          |
|     Keyboard|   12351    |        24 | George Z        |  95          |
|     Keyboard|   12352    |        24 | Ally B          |  55          |
|     Air     |   12353    |        12 | Maria Trust     |  11          |
+-------------+------------+-----------+-----------------+--------------+

```

Benefits of aliases :- 
+-------------+-------------------------+-----------------+---------------------------------+-----------------+-------------+----------+
|  CustomerID	| CustomerName	          | ContactName	   |             Address              |    City	        |  PostalCode | Country  |
+-------------+-------------------------+-----------------+---------------------------------+-----------------+-------------+----------+
      1	        Ana Trujillo 	              Ana Trujillo	     Avda. de la Constitución 2222	    México D.F.	     05021	     Mexico
      2	        Antonio Moreno Taquería	    Antonio Moreno	   Mataderos 2312	                    México D.F.	     05023	     Mexico 
      3         Around the Horn	           Thomas Hardy	         120 Hanover Sq.	                London	         WA1 1DP	    UK
      
      
SQL statement creates an alias named "Address" that combine four columns (Address, PostalCode, City and Country):
SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address
FROM Customers;

It will Combine 4 column to make 1 complete address of any or all user's.

