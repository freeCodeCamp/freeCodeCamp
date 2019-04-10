---
title: SQL Interview Questions
localeTitle: SQL面试问题
---
## SQL面试问题

### 什么是SQL中的内连接？

如果未指定连接，则这是默认的连接类型。它返回两个表中至少有一个匹配的所有行。

```sql
SELECT * FROM A x JOIN B y ON y.aId = x.Id 
```

### 什么是SQL中的左连接？

左连接返回左表中的所有行，以及右表中匹配的行。即使右表中没有匹配项，也会返回左表中的行。右表中左表中没有匹配的行对于右表值将为`null` 。

```sql
SELECT * FROM A x LEFT JOIN B y ON y.aId = x.Id 
```

### 什么是SQL的正确连接？

右连接返回右表中的所有行，以及左表中匹配的行。与左连接相反，这将返回右表中的所有行，即使左表中没有匹配也是如此。右表中在左表中没有匹配的行将具有左表列的`null`值。

```sql
SELECT * FROM A x RIGHT JOIN B y ON y.aId = x.Id 
```

### 什么是SQL的完整连接？

完整连接将返回其中任一表中存在匹配项的所有行。因此，如果左表中的行没有右表中的匹配项，那么将包含这些行。如果右表中的行没有左表中的匹配，那么将包含这些行。

```sql
SELECT Customers.CustomerName, Orders.OrderID 
 FROM Customers 
 FULL OUTER JOIN Orders 
 ON Customers.CustomerID=Orders.CustomerID 
 ORDER BY Customers.CustomerName 
```

### 以下命令的结果是什么？

\`\`\` DROP VIEW view\_name
```
Here it'll be an error because we can't perform a DML operation on a view. 
 
 ### Can we perform a rollback after using ALTER command? 
 No, because ALTER is a DDL command and Oracle server performs an automatic COMMIT when the DDL statements are executed. 
 
 
 ### Which is the only constraint that enforces rules at column level? 
 NOT NULL is the only constraint that works at the column level. 
 
 
 ### What are the pseudocolumns in SQL? Give some examples? 
 A pseudocolumn is a function which returns a system generated value. The reason it is known as so because a pseudocolumn is an Oracle assigned value used in the same context as an Oracle database column but not stored on disk. 
```

它的一些例子是： ROWNUM，ROWID，USER，CURRVAL，NEXTVAL等 \`\`\`

### 使用密码kmd26pt创建用户my723acct。使用_PO8提供_的用户_数据和临时数据表空间，为用户提供10M的用户_数据存储空间和5M的临时数据存储空间。

`sql CREATE USER my723acct IDENTIFIED BY kmd26pt DEFAULT TABLESPACE user_data TEMPORARY TABLESPACE temporary_data QUOTA 10M on user_data QUOTA 5M on temporary_data`

### 创建角色角色_表_ and\_views。

`sql CREATE ROLE role_tables_and_views`

### 向上一个问题的角色授予连接数据库的权限以及创建表和视图的权限。

连接数据库的权限是CREATE SESSION 创建表的权限是CREATE TABLE 创建视图的权限是CREATE VIEW `sql GRANT Create session, create table, create view TO role_tables_and_views`

### 将问题中的先前角色授予用户anny和rita

`sql GRANT role_tables_and_views TO anny, rita`

### 使用密码kmd26pt创建用户my723acct。使用_PO8提供_的用户_数据和临时数据表空间，为用户提供10M的用户_数据存储空间和5M的临时数据存储空间。

`sql CREATE USER my723acct IDENTIFIED BY kmd26pt DEFAULT TABLESPACE user_data TEMPORARY TABLESPACE temporary_data QUOTA 10M on user_data QUOTA 5M on temporary_data`

### 创建角色角色_表_ and\_views。

`sql CREATE ROLE role_tables_and_views`

### 向上一个问题的角色授予连接数据库的权限以及创建表和视图的权限。

连接数据库的权限是CREATE SESSION 创建表的权限是CREATE TABLE 创建视图的权限是CREATE VIEW `sql GRANT Create session, create table, create view TO role_tables_and_views`

### 将问题中的先前角色授予用户anny和rita

`sql GRANT role_tables_and_views TO anny, rita`

### 编写命令将用户rita的密码从abcd更改为dfgh

`sql ALTER USER rita IDENTIFIED BY dfgh`

### 用户rita和anny对SCOTT创建的表INVENTORY没有SELECT权限。编写一个命令以允许SCOTT在这些表上授予用户SELECT权限。

`sql GRANT select ON inventory TO rita, anny`

### 用户rita已被转移，不再需要通过角色_表和_ and\_views授予她的权限。写一个命令将她从以前的特权中移除，除了她仍然可以连接到数据库。

`sql REVOKE select ON scott.inventory FROM rita REVOKE create table, create view FROM rita`

### 被转让的用户rita现在正转移到另一家公司。由于她创建的对象不再使用，因此请编写一个命令来删除此用户及其所有对象。

这里需要CASCADE选项来删除数据库中用户的所有对象。 \`\`sql  
DROP USER rita CASCADE

### 用户rita已被转移，不再需要通过角色_表和_ and\_views授予她的权限。写一个命令将她从以前的特权中移除，除了她仍然可以连接到数据库。

`sql REVOKE select ON scott.inventory FROM rita REVOKE create table, create view FROM rita`

### 被转让的用户rita现在正转移到另一家公司。由于她创建的对象不再使用，因此请编写一个命令来删除此用户及其所有对象。

这里需要CASCADE选项来删除数据库中用户的所有对象。 \`\`sql  
DROP USER rita CASCADE
```
### Write SQL query to find the nth highest salary from table. 
```

SQL  
选择TOP 1薪水 来自（ 选择DISTINCT TOP N薪水 来自员工 按薪酬排序DESC ） 按薪酬排序ASC \`\`\`