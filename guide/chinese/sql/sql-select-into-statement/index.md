---
title: SQL Select into Statement
localeTitle: SQL Select into Statement
---
## SQL Select into Statement

`SELECT INTO`语句是一个查询，允许您创建一个_新_表并使用`SELECT statement`的结果集填充它。要将数据添加到现有表，请参阅[INSERT INTO](guides/src/pages/sql/sql-insert-into-select-statement/index.md)语句。

将多个表或视图中的数据组合到新表中时，可以使用`SELECT INTO` 。 1原始表不受影响。

一般语法是：

```sql
SELECT column-names 
  INTO new-table-name 
  FROM table-name 
 WHERE EXISTS 
      (SELECT column-name 
         FROM table-name 
        WHERE condition) 
```

此示例显示了一组从“Supplier”表“复制”到新的名为SupplierUSA的表，该表保存与值为“USA”的列国家/地区相关的集合。

`sql SELECT * INTO SupplierUSA FROM Supplier WHERE Country = 'USA';` **结果** ：4行影响2

| ID |公司名称| ContactName |城市|国家|电话| | ---- | ----------------------------- |：------------- - ：| ------------- |：--------：|：--------------：| | 2 |新奥尔良Cajun Delights | Shelley Burke |新奥尔良|美国| （100）555-4822 | | 3 |奶奶凯莉的家园| Regina Murphy |安娜堡|美国| （313）555-5735 | | 16 |大脚啤酒厂| Cheryl Saylor |弯曲|美国| NULL | | 19 |新英格兰海鲜罐头厂Robb Merchant |波士顿|美国| （617）555-3267 |

请参阅您的数据库管理员手册，并自己尝试不同的选项。

## 来源

1.  （Microsoft - 使用SELECT INTO插入行）\[https://technet.microsoft.com/en-us/library/ms190750（v = sql.105）.aspx\]
2.  （dofactory - SQL SELECT INTO语句）\[http://www.dofactory.com/sql/select-into\]