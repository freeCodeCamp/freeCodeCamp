---
title: SQL Select into Statement
localeTitle: SQL Select en Statement
---
## SQL Select en Statement

La `SELECT INTO` es una consulta que le permite crear una _nueva_ tabla y rellenarla con el conjunto de resultados de una `SELECT statement` . Para agregar datos a una tabla existente, vea la declaración [INSERT INTO en su](guides/src/pages/sql/sql-insert-into-select-statement/index.md) lugar.

`SELECT INTO` se puede usar cuando combina datos de varias tablas o vistas en una nueva tabla. 1 La tabla original no se ve afectada.

La sintaxis general es:

```sql
SELECT column-names 
  INTO new-table-name 
  FROM table-name 
 WHERE EXISTS 
      (SELECT column-name 
         FROM table-name 
        WHERE condition) 
```

Este ejemplo muestra un conjunto de una tabla que se "copió" de la tabla "Proveedor" a uno nuevo llamado SupplierUSA que contiene el conjunto relacionado con la columna país de valor 'EE. UU.

`sql SELECT * INTO SupplierUSA FROM Supplier WHERE Country = 'USA';` **Resultados** : 4 filas afectadas 2

| ID | CompanyName | Nombre de contacto | Ciudad | País | Telefono | ---- | ----------------------------- |: ------------- -: | ------------- |: --------: |: --------------: | | 2 | Nueva Orleans Cajun Delights | Shelley Burke | Nueva Orleans | Estados Unidos | (100) 555-4822 | | 3 | La granja de la abuela Kelly | Regina Murphy | Ann Arbor | Estados Unidos | (313) 555-5735 | | 16 | Cervecerías Bigfoot | Cheryl Saylor | Doblar Estados Unidos | NULL | | 19 | Conservación de mariscos de Nueva Inglaterra | Robb Merchant | Boston | Estados Unidos | (617) 555-3267 |

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.

## Fuentes

1.  (Microsoft: inserción de filas mediante SELECT INTO) \[https://technet.microsoft.com/en-us/library/ms190750 (v = sql.105) .aspx\]
2.  (dofactory - SQL SELECT INTO Statement) \[http://www.dofactory.com/sql/select-into\]