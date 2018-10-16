---
title: SQL Aliases
localeTitle: الأسماء المستعارة SQL
---
## الأسماء المستعارة SQL

## باستخدام AS لتعيين أسماء ذات معنى أو أبسط

يمكنك استخدام AS لتعيين اسم لعمود البيانات الذي تقوم بتحديده أو الذي تم حسابه.

 `SELECT user_only_num1 AS AgeOfServer, (user_only_num1 - warranty_period) AS NonWarrantyPeriod FROM server_table 
` 

هذه النتائج في الإخراج على النحو التالي.

 `+-------------+------------------------+ 
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
` 

يمكنك أيضًا استخدام AS لتعيين اسم لجدول لتسهيل الرجوع إليه في الصلات.

 `SELECT ord.product, ord.ord_number, ord.price, cust.cust_name, cust.cust_number FROM customer_table AS cust 
 
 JOIN order_table AS ord ON cust.cust_number = ord.cust_number 
` 

هذه النتائج في الإخراج على النحو التالي.

 `+-------------+------------+-----------+-----------------+--------------+ 
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
`