---
title: SQL Create Table Statement
localeTitle: Comando SQL - CREATE TABLE
---
## Comando SQL - CREATE TABLE

Una tabla es un grupo de datos almacenados en una base de datos.

Para crear una tabla en una base de datos se utiliza el comando `CREATE TABLE`. Deberá asigna un nombre a la tabla y una lista de columnas con sus tipos de datos.
```
CREATE TABLE TABLENAME(Attribute1 Datatype, Attribute2 Datatype,........); 
```

Aquí hay un ejemplo creando una tabla llamada "Person":

```sql
CREATE TABLE Person( 
  Id int not null, 
  Name varchar not null, 
  DateOfBirth date not null, 
  Gender bit not null, 
  PRIMARY KEY( Id ) 
 ); 
```

En el ejemplo anterior, cada persona tiene un nombre, una fecha de nacimiento y un género. La columna Id es la clave que identifica a una persona en la tabla. Utilice la palabra clave `PRIMARY KEY` para configurar una o más columnas como clave principal.

Una columna puede ser `NOT NULL` o `NULL` lo que indica si es obligatorio o no.
