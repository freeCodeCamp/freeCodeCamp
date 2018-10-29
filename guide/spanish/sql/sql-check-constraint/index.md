---
title: SQL CHECK Constraint
localeTitle: Restricción de SQL CHECK
---
La restricción CHECK se usa para limitar el rango de valores que se puede colocar en una columna.

Si define una restricción CHECK en una sola columna, solo se permiten ciertos valores para esta columna.

Si define una restricción CHECK en una tabla, puede limitar los valores en ciertas columnas basándose en valores en otras columnas en la fila.

### SQL CHECK en CREATE TABLE

El siguiente SQL crea una restricción CHECK en la columna "Edad" cuando se crea la tabla "Personas". La restricción CHECK asegura que no se puede tener a ninguna persona menor de 18 años:

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

Para permitir la denominación de una restricción CHECK y para definir una restricción CHECK en varias columnas, use la siguiente sintaxis SQL:

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

### SQL CHECK en ALTER TABLE

Para crear una restricción CHECK en la columna "Edad" cuando la tabla ya está creada, use el siguiente SQL:

**MySQL / SQL Server / Oracle / MS Access:**

```sql
ALTER TABLE Persons 
 ADD CHECK (Age>=18); 
```

Para permitir la denominación de una restricción CHECK y para definir una restricción CHECK en varias columnas, use la siguiente sintaxis SQL:

**MySQL / SQL Server / Oracle / MS Access:**

```sql
ALTER TABLE Persons 
 ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes'); 
```

### DROP una restricción CHECK

Para eliminar una restricción CHECK, use el siguiente SQL:

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