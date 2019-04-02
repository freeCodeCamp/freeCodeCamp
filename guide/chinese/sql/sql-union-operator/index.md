---
title: SQL Union Operator
localeTitle: SQL联盟运营商
---
## SQL联盟运营商

### 描述

对于本指南，我们将讨论SQL语句的UNION运算符部分。

UNION运算符用于将多个select语句的结果组合到一个结果集中。

SQL语句的Select语句中的列数必须相同。

### 基本例子

SQL语句

```sql
SELECT 'aaaaa' 
 UNION 
 SELECT 'bbbbbbbbb'; 
```

产量

```text
+-----------+ 
 | aaaaa     | 
 +-----------+ 
 | aaaaa     | 
 | bbbbbbbbb | 
 +-----------+ 
 2 rows in set (0.00 sec) 
```

### 使用学生表的示例

SQL语句

```sql
SELECT StudentID, FullName FROM student WHERE studentID BETWEEN 1 AND 5 
 UNION 
 SELECT studentID, studentEmailAddr FROM `student-contact-info` WHERE studentID BETWEEN 7 AND 8; 
```

产量

\`\`\`文字 + ----------- + -------------------------------- + | StudentID | FullName | + ----------- + -------------------------------- + | 1 |莫妮克戴维斯| | 2 | Teri Gutierrez | | 3 | Spencer Pautier | | 4 |路易斯拉姆齐| | 5 | Alvin Greene | | 7 | Maximo.Smith@freeCodeCamp.org | | 8 | Michael.Roach@freeCodeCamp.ort | + ----------- + -------------------------------- + 7行（0.00秒）
```
## SQL UNION ALL Operator 
 
 The UNION ALL operator is an extension to UNION operator where it should result you a A+B of rows in the ouptput assuming A and B is your input, in simple terms UNION ALL doesn't deduplicate. 
 
 
 ### Basic Syntax 
 
 SQL Statement 
```

SQL SELECT expression1，expression2，... expression _n FROM表 \[条件\] UNION ALL SELECT expression1，expression2，... expression_ n FROM表 \[条件\]; \`\`\`

与所有这些SQL事物一样，它们比本入门指南中的内容更多。

我希望这至少足以让你开始。

请参阅您的数据库管理员手册，并自己尝试不同的选项。