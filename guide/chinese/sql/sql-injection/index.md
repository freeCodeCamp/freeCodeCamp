---
title: SQL Injection
localeTitle: SQL注入
---
## SQL注入

SQL注入是一种旨在危害或破坏数据库的恶意技术。它是最常见的网络黑客技术之一。

通过输入将恶意代码放入SQL语句中来执行SQL注入。

以下示例是一个代码段，它将基于`AccountId`从数据库中检索用户。
```
passedInAccountId = getRequestString("AccountId"); 
 sql = "select * from Accounts where AccountId = " + passedInAccountId; 
```

通过注入`1=1;`可以使用SQL注入来破坏此代码`1=1;` `AccountId`声明。

`https://www.foo.com/get-user?AccountId="105 OR 1=1;"`

`1=1`将始终评估为`TRUE` 。这将导致执行的代码输出所有Accounts表。