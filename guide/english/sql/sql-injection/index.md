---
title: SQL Injection
---
## SQL Injection
SQL injection is a malicious technique that is meant to compromise or destroy databases. It is one of the most common web-hacking techniques.

SQL injection is performed by placing malicious code in SQL statements via an input. 

The following example is a code snippet that will retrieve a user from a database based on an `AccountId`.

```
passedInAccountId = getRequestString("AccountId");
sql = "select * from Accounts where AccountId = " + passedInAccountId;
```

SQL injection can be used to compromise this code by injecting a `1=1;` statement for `AccountId`.

`https://www.foo.com/get-user?AccountId="105 OR 1=1;"`

`1=1` will always evaluate to `TRUE`. This will cause the executed code to output all of the Accounts table.
