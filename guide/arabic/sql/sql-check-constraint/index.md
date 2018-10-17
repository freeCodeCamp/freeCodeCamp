---
title: SQL CHECK Constraint
localeTitle: SQL CHECK القيد
---
يتم استخدام القيد CHECK لتحديد نطاق القيمة التي يمكن وضعها في عمود.

إذا حددت قيد CHECK في عمود واحد ، فإنها تسمح فقط بقيم معينة لهذا العمود.

إذا قمت بتحديد قيد CHECK على جدول ، فيمكنه تقييد القيم في أعمدة معينة استنادًا إلى القيم الموجودة في أعمدة أخرى في الصف.

### SQL الاختيار على CREATE TABLE

ينشئ SQL التالية قيد CHECK على العمود "العمر" عند إنشاء جدول "الأشخاص". يضمن القيد CHECK أنه لا يمكن أن يكون لديك أي شخص أقل من 18 عامًا:

**الخلية:**

 `CREATE TABLE Persons ( 
    ID int NOT NULL, 
    LastName varchar(255) NOT NULL, 
    FirstName varchar(255), 
    Age int, 
    CHECK (Age>=18) 
 ); 
` 

**SQL Server / Oracle / MS Access:**

 `CREATE TABLE Persons ( 
    ID int NOT NULL, 
    LastName varchar(255) NOT NULL, 
    FirstName varchar(255), 
    Age int CHECK (Age>=18) 
 ); 
` 

للسماح بتسمية قيد CHECK ، ولتحديد قيد CHECK على أعمدة متعددة ، استخدم بناء جملة SQL التالي:

**MySQL / SQL Server / Oracle / MS Access:**

 `CREATE TABLE Persons ( 
    ID int NOT NULL, 
    LastName varchar(255) NOT NULL, 
    FirstName varchar(255), 
    Age int, 
    City varchar(255), 
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes') 
 ); 
` 

### SQL الاختيار على ALTER TABLE

لإنشاء قيد CHECK على العمود "العمر" عند إنشاء الجدول بالفعل ، استخدم SQL التالي:

**MySQL / SQL Server / Oracle / MS Access:**

 `ALTER TABLE Persons 
 ADD CHECK (Age>=18); 
` 

للسماح بتسمية قيد CHECK ، ولتحديد قيد CHECK على أعمدة متعددة ، استخدم بناء جملة SQL التالي:

**MySQL / SQL Server / Oracle / MS Access:**

 `ALTER TABLE Persons 
 ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes'); 
` 

### انخفاض القيد الاختيار

لإسقاط قيد CHECK ، استخدم SQL التالي:

**SQL Server / Oracle / MS Access:**

 `ALTER TABLE Persons 
 DROP CONSTRAINT CHK_PersonAge; 
` 

**الخلية:**

 `ALTER TABLE Persons 
 DROP CHECK CHK_PersonAge; 
`