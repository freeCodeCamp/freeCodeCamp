---
title: SQL CHECK Constraint
localeTitle: Restrição SQL CHECK
---
A restrição CHECK é usada para limitar o intervalo de valores que pode ser colocado em uma coluna.

Se você definir uma restrição CHECK em uma única coluna, ela permitirá apenas determinados valores para essa coluna.

Se você definir uma restrição CHECK em uma tabela, ela poderá limitar os valores em determinadas colunas com base nos valores de outras colunas na linha.

### SQL CHECK em CREATE TABLE

O SQL a seguir cria uma restrição CHECK na coluna "Age" quando a tabela "Persons" é criada. A restrição CHECK garante que você não pode ter nenhuma pessoa abaixo de 18 anos:

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

Para permitir a nomeação de uma restrição CHECK e para definir uma restrição CHECK em várias colunas, use a seguinte sintaxe SQL:

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

### SQL CHECK em ALTER TABLE

Para criar uma restrição CHECK na coluna "Idade" quando a tabela já estiver criada, use o seguinte SQL:

**MySQL / SQL Server / Oracle / MS Access:**

```sql
ALTER TABLE Persons 
 ADD CHECK (Age>=18); 
```

Para permitir a nomeação de uma restrição CHECK e para definir uma restrição CHECK em várias colunas, use a seguinte sintaxe SQL:

**MySQL / SQL Server / Oracle / MS Access:**

```sql
ALTER TABLE Persons 
 ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes'); 
```

### DROP uma restrição CHECK

Para descartar uma restrição CHECK, use o seguinte SQL:

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