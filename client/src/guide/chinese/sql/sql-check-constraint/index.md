---
title: SQL CHECK Constraint
localeTitle: SQL CHECK约束
---
CHECK约束用于限制可以放在列中的值范围。

如果在单个列上定义CHECK约束，则它仅允许此列的某些值。

如果在表上定义CHECK约束，它可以根据行中其他列中的值限制某些列中的值。

### SQL CHECK CREATE TABLE

创建“Persons”表时，以下SQL在“Age”列上创建CHECK约束。 CHECK约束确保您不能拥有18岁以下的任何人：

**MySQL的：**

```sql
CREATE TABLE Persons ( 
    ID int NOT NULL, 
    LastName varchar(255) NOT NULL, 
    FirstName varchar(255), 
    Age int, 
    CHECK (Age>=18) 
 ); 
```

**SQL Server / Oracle / MS Access：**

```sql
CREATE TABLE Persons ( 
    ID int NOT NULL, 
    LastName varchar(255) NOT NULL, 
    FirstName varchar(255), 
    Age int CHECK (Age>=18) 
 ); 
```

要允许命名CHECK约束，并在多列上定义CHECK约束，请使用以下SQL语法：

**MySQL / SQL Server / Oracle / MS Access：**

```sql
CREATE TABLE Persons ( 
    ID int NOT NULL, 
    LastName varchar(255) NOT NULL, 
    FirstName varchar(255), 
    Age int, 
    City varchar(255), 
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes') 
 ); 
```

### SQL CHECK ALTER TABLE

要在已创建表时在“Age”列上创建CHECK约束，请使用以下SQL：

**MySQL / SQL Server / Oracle / MS Access：**

```sql
ALTER TABLE Persons 
 ADD CHECK (Age>=18); 
```

要允许命名CHECK约束，并在多列上定义CHECK约束，请使用以下SQL语法：

**MySQL / SQL Server / Oracle / MS Access：**

```sql
ALTER TABLE Persons 
 ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes'); 
```

### DROP一个CHECK约束

要删除CHECK约束，请使用以下SQL：

**SQL Server / Oracle / MS Access：**

```sql
ALTER TABLE Persons 
 DROP CONSTRAINT CHK_PersonAge; 
```

**MySQL的：**

```sql
ALTER TABLE Persons 
 DROP CHECK CHK_PersonAge; 

```