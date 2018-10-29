---
title: SQL Primary Key Constraint
localeTitle: SQL主键约束
---
## 主键约束

### 介绍

主键是唯一标识表中每一行的列或一组列。

它被称为“约束”，因为它会导致系统限制这些列中允许的数据。在这种情况下…。

*   包含数据（NOT NULL）
*   从表中的所有其他行中取出UNIQUE。
*   每个表只能有一个主键

主键主要用于维护每行的数据完整性。

它还允许系统和应用程序确保正确读取，更新和连接数据。

### create table的示例

这是一个create table命令，它还将使用两个字段创建主键。

```sql
CREATE TABLE priKeyExample( 
 rcdKey_id_a INT NOT NULL, 
 rcdKeySeq_id INT NOT NULL, 
 someData varchar(256) NOT NULL, 
 PRIMARY KEY(rcdKey_id_a,rcdKeySeq_id)); 
```

### alter table的示例

必须先删除现有的一个

```sql
DROP INDEX `primary` ON priKeyExample; 
```

现在我们将添加新的。

```sql
ALTER TABLE priKeyExample 
 ADD CONSTRAINT myPriKey PRIMARY KEY(rcdKey_id_a,rcdKeySeq_id); 
```

与所有这些SQL事物一样，它们比本入门指南中的内容更多。

我希望这至少足以让你开始。

请参阅您的数据库管理员手册，并自己尝试不同的选项。