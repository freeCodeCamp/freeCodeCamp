---
title: SQL Aliases
localeTitle: SQL别名
---
## SQL别名

## 使用AS分配有意义或更简单的名称

您可以使用AS为您选择的数据列或已计算的数据分配名称。

```sql
SELECT user_only_num1 AS AgeOfServer, (user_only_num1 - warranty_period) AS NonWarrantyPeriod FROM server_table 
```

这导致输出如下。

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

您还可以使用AS为表分配名称，以便在连接中更容易引用。

```sql
SELECT ord.product, ord.ord_number, ord.price, cust.cust_name, cust.cust_number FROM customer_table AS cust 
 
 JOIN order_table AS ord ON cust.cust_number = ord.cust_number 
```

这导致输出如下。

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