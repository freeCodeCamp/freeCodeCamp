---
title: SQL Right Join
localeTitle: SQL Right Join
---
## SQL Right Join

### 使用示例

对于本指南，我们将讨论SQL RIGHT JOIN。

### 正确的加入

RIGHT JOIN关键字返回右表（table2）中的所有记录，以及左表（table1）中的匹配记录。当没有匹配时，结果从左侧为NULL。

```sql
SELECT * 
 FROM table1 
 RIGHT JOIN table2 
 ON table1.column_name = table2.column_name; 
```

### 完整的表格列表供参考

食物或左表数据

```text
+---------+--------------+-----------+------------+ 
 | ITEM_ID | ITEM_NAME    | ITEM_UNIT | COMPANY_ID | 
 +---------+--------------+-----------+------------+ 
 | 1       | Chex Mix     | Pcs       | 16         | 
 | 6       | Cheez-It     | Pcs       | 15         | 
 | 2       | BN Biscuit   | Pcs       | 15         | 
 | 3       | Mighty Munch | Pcs       | 17         | 
 | 4       | Pot Rice     | Pcs       | 15         | 
 | 5       | Jaffa Cakes  | Pcs       | 18         | 
 | 7       | Salt n Shake | Pcs       |            | 
 +---------+--------------+-----------+------------+ 
 
 
 
 company or RIGHT table data 
```

文本 + ------------ + -------- + -------------- + |公司_ID |公司_名称| COMPANY\_CITY | + ------------ + -------- + -------------- + | 18 |全部订购|波士顿| | 15 |杰克希尔有限公司|伦敦| | 16 | Akas Foods |德里| | 17 |美食家。 |伦敦| | 19 | SIP-正撕咬。 |纽约| + ------------ + -------- + -------------- +
```
To get company name from company table and company ID, item name columns from foods table, the following SQL statement can be used: 
```

SQL SELECT company.company _id，company.company_ name， company.company _city，foods.company_ id，foods.item _名称 来自公司 正确的食物 ON company.company_ id = foods.company\_id;
```
OUTPUT 
```

文本 公司_ID公司_名称公司_城市公司_ ID ITEM\_NAME

* * *

18订购所有波士顿18 Jaffa蛋糕 15杰克山有限公司伦敦15锅饭 15 Jack Hill Ltd伦敦15 BN饼干 15 Jack Hill Ltd伦敦15 Cheez-It 16 Akas Foods Delhi 16 Chex Mix 17美食家。伦敦17 Mighty Munch NULL NULL NULL NULL Salt n Shake

\`\`\`