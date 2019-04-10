---
title: SQL CHECK Constraint
localeTitle: Ограничение SQL CHECK
---
Ограничение CHECK используется для ограничения диапазона значений, который может быть помещен в столбец.

Если вы определяете ограничение CHECK для одного столбца, оно допускает только определенные значения для этого столбца.

Если вы определяете ограничение CHECK для таблицы, оно может ограничить значения в определенных столбцах на основе значений в других столбцах в строке.

### SQL CHECK на CREATE TABLE

Следующий SQL создает ограничение CHECK в столбце «Возраст», когда создается таблица «Лица». Ограничение CHECK гарантирует, что у вас не может быть человек старше 18 лет:

**MySQL:**

```sql
CREATE TABLE Persons ( 
    ID int NOT NULL, 
    LastName varchar(255) NOT NULL, 
    FirstName varchar(255), 
    Age int, 
    CHECK (Age>=18) 
 ); 
```

**SQL Server / Oracle / MS Access:**

```sql
CREATE TABLE Persons ( 
    ID int NOT NULL, 
    LastName varchar(255) NOT NULL, 
    FirstName varchar(255), 
    Age int CHECK (Age>=18) 
 ); 
```

Чтобы разрешить именовать ограничение CHECK и определить ограничение CHECK для нескольких столбцов, используйте следующий синтаксис SQL:

**MySQL / SQL Server / Oracle / MS Access:**

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

### SQL CHECK на ALTER TABLE

Чтобы создать ограничение CHECK в столбце «Возраст», когда таблица уже создана, используйте следующий SQL:

**MySQL / SQL Server / Oracle / MS Access:**

```sql
ALTER TABLE Persons 
 ADD CHECK (Age>=18); 
```

Чтобы разрешить именовать ограничение CHECK и определить ограничение CHECK для нескольких столбцов, используйте следующий синтаксис SQL:

**MySQL / SQL Server / Oracle / MS Access:**

```sql
ALTER TABLE Persons 
 ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes'); 
```

### УБЕДИТЕСЬ ПРОВЕРИТЬ КОНКУРС

Чтобы удалить ограничение CHECK, используйте следующий SQL:

**SQL Server / Oracle / MS Access:**

```sql
ALTER TABLE Persons 
 DROP CONSTRAINT CHK_PersonAge; 
```

**MySQL:**

```sql
ALTER TABLE Persons 
 DROP CHECK CHK_PersonAge; 

```